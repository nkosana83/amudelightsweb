# GitHub Deployment Guide

This guide helps you deploy the AuMai Delights website to GitHub Pages with automatic CI/CD.

## Setup Instructions

### 1. Install Git
- Download: https://git-scm.com/download/win
- Run installer with default settings

### 2. Configure Git
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Create GitHub Repository
- Go to https://github.com/new
- Repository name: `Nessa_test_website`
- Description: "Premium e-commerce website for AuMai Delights"
- Choose **Public** (for GitHub Pages free hosting)
- Do NOT initialize with README
- Click **Create repository**

### 4. Push to GitHub (from project directory)

```powershell
cd "c:\Users\nkosi\OneDrive\Desktop\nessa_test_website"

# Initialize repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Premium AuMai Delights e-commerce website"

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/Nessa_test_website.git

# Set main branch and push
git branch -M main
git push -u origin main
```

## Enable GitHub Pages

1. Go to Repository Settings
2. Navigate to **Pages** (left sidebar)
3. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait ~2 minutes for deployment

**Your site will be live at:** `https://YOUR_USERNAME.github.io/Nessa_test_website`

## Automatic Workflows

Two GitHub Actions workflows are included:

### 1. **Deploy Workflow** (`.github/workflows/deploy.yml`)
- Triggers on push to `main` branch
- Validates HTML, CSS, JavaScript
- Deploys to GitHub Pages automatically
- Sets up SSL/TLS automatically

### 2. **Quality Check Workflow** (`.github/workflows/quality-check.yml`)
- Triggers on pull requests
- Verifies code quality
- Checks security headers
- Reports on asset structure

## Making Updates

After setup, updating is simple:

```powershell
# Make your changes, then:
git add .
git commit -m "Your update message"
git push origin main
```

The site updates automatically within seconds!

## File Structure for Deployment

```
.gitignore              # Version control exclusions
.github/
  workflows/
    deploy.yml          # Auto-deploy workflow
    quality-check.yml   # PR validation workflow
Brand_assets/           # Images (committed to repo)
index.html              # Main page
styles.css              # Styling
script.js               # Interactivity
sw.js                   # Service Worker (PWA)
manifest.json           # PWA configuration
... other files
```

## Custom Domain (Optional)

To use a custom domain:
1. Buy domain from Godaddy, Namecheap, etc.
2. Update domain DNS settings to point to GitHub Pages
3. Add CNAME file in repo root with your domain
4. Update Pages settings to your custom domain

## Troubleshooting

**Site not showing after deployment?**
- Wait 5 minutes for GitHub Pages to build
- Check Actions tab for deployment status
- Verify GitHub Pages is enabled and `gh-pages` branch exists

**Build failed?**
- Check the Actions tab for error logs
- Ensure all HTML/CSS is valid
- Verify no secret files are uncommitted

**Custom domain not working?**
- Verify DNS records are configured
- Check CNAME file exists in repo root
- Wait 24-48 hours for DNS propagation

## Security Notes

✅ HTTPS enabled automatically by GitHub Pages
✅ CSP headers configured in HTML
✅ Service Worker enables offline functionality
✅ Credentials never committed (see .gitignore)

## Performance

- GitHub Pages serves with global CDN
- Free SSL/TLS certificates
- Automatic HTTP/2 support
- Compressed assets delivery

## Support

For GitHub Pages help: https://docs.github.com/en/pages
For Git commands: https://git-scm.com/docs

---

**Your AuMai Delights website is now ready for the world!** 🌐✨
