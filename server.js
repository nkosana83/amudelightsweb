const express = require('express');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const DB_FILE = path.join(__dirname, 'testimonials_db.json');
const PORT = process.env.PORT || 3000;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET || null;
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || 'change-this-token';
const AUTO_APPROVE = (process.env.AUTO_APPROVE === 'true');

if (!fs.existsSync(DB_FILE)) fs.writeFileSync(DB_FILE, JSON.stringify({ testimonials: [] }, null, 2));

function readDB() {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { testimonials: [] };
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

async function verifyRecaptcha(token, remoteip) {
  if (!RECAPTCHA_SECRET) return true; // skip verification if not configured
  const url = `https://www.google.com/recaptcha/api/siteverify`;
  const params = new URLSearchParams();
  params.append('secret', RECAPTCHA_SECRET);
  params.append('response', token);
  if (remoteip) params.append('remoteip', remoteip);

  try {
    const res = await fetch(url, { method: 'POST', body: params });
    const json = await res.json();
    return json.success === true;
  } catch (err) {
    console.error('reCAPTCHA verification failed:', err);
    return false;
  }
}

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Public: get approved testimonials
app.get('/api/testimonials', (req, res) => {
  const db = readDB();
  const approved = db.testimonials.filter(t => t.approved === true);
  res.json({ ok: true, testimonials: approved });
});

// Public: submit testimonial (goes into moderation unless AUTO_APPROVE)
app.post('/api/testimonials', async (req, res) => {
  const { name, text, rating, date, clientId, captchaToken } = req.body || {};

  if (!text || !text.trim()) return res.status(400).json({ ok: false, error: 'Empty message' });

  // Verify captcha if token provided or server configured
  if (RECAPTCHA_SECRET) {
    const verified = await verifyRecaptcha(captchaToken || '', req.ip);
    if (!verified) return res.status(400).json({ ok: false, error: 'reCAPTCHA failed' });
  }

  const db = readDB();
  const id = Date.now().toString();
  const testimonial = {
    id,
    clientId: clientId || null,
    name: name || 'Anonymous',
    text: text.trim(),
    rating: Math.max(1, Math.min(5, parseInt(rating) || 5)),
    date: date || new Date().toISOString(),
    approved: AUTO_APPROVE === true
  };

  db.testimonials.push(testimonial);
  writeDB(db);

  res.json({ ok: true, status: testimonial.approved ? 'approved' : 'queued', id });
});

// Admin: list pending testimonials
app.get('/api/moderation', (req, res) => {
  const token = req.header('x-admin-token');
  if (token !== ADMIN_TOKEN) return res.status(401).json({ ok: false, error: 'Unauthorized' });
  const db = readDB();
  const pending = db.testimonials.filter(t => !t.approved);
  res.json({ ok: true, pending });
});

// Admin: moderate (approve/reject)
app.post('/api/moderate', (req, res) => {
  const token = req.header('x-admin-token');
  if (token !== ADMIN_TOKEN) return res.status(401).json({ ok: false, error: 'Unauthorized' });
  const { id, action } = req.body || {};
  if (!id || !action) return res.status(400).json({ ok: false, error: 'Missing parameters' });

  const db = readDB();
  const idx = db.testimonials.findIndex(t => t.id === id);
  if (idx === -1) return res.status(404).json({ ok: false, error: 'Not found' });

  if (action === 'approve') {
    db.testimonials[idx].approved = true;
  } else if (action === 'reject') {
    db.testimonials.splice(idx, 1);
  } else {
    return res.status(400).json({ ok: false, error: 'Unknown action' });
  }

  writeDB(db);
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Testimonial API server running on port ${PORT}`));
