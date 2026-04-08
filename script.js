// Product Data
const products = [
    {
        id: 1,
        title: "Artisan Chocolate Truffles",
        description: "Handcrafted chocolate truffles with premium cocoa",
        price: "$24.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-1.jpeg",
        category: "premium",
        badge: "Best Seller"
    },
    {
        id: 2,
        title: "Gourmet Cheese Selection",
        description: "Artisanal aged cheeses from Europe",
        price: "$34.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-2.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 3,
        title: "Seasonal Spring Delights",
        description: "Fresh seasonal treats exclusive this season",
        price: "$18.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-3.jpeg",
        category: "seasonal",
        badge: "Seasonal"
    },
    {
        id: 4,
        title: "Honey Lavender Shortbread",
        description: "Delicate shortbread with local honey and lavender",
        price: "$15.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-4.jpeg",
        category: "bestseller",
        badge: "Best Seller"
    },
    {
        id: 5,
        title: "Exotic Fruit Preserve",
        description: "Small batch fruit preserves from tropical regions",
        price: "$22.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-6.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 6,
        title: "Roasted Nut Medley",
        description: "Perfectly roasted assorted nuts with herbs",
        price: "$19.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-7.jpeg",
        category: "bestseller",
        badge: "Best Seller"
    },
    {
        id: 7,
        title: "Macarons Assorted Box",
        description: "French macarons in a variety of flavors",
        price: "$32.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-8.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 8,
        title: "Caramelized Almonds",
        description: "Sweet caramelized almonds with sea salt",
        price: "$17.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-10.jpeg",
        category: "bestseller",
        badge: "Popular"
    },
    {
        id: 9,
        title: "Truffle Olive Oil",
        description: "Premium truffle-infused extra virgin olive oil",
        price: "$45.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-11.jpeg",
        category: "premium",
        badge: "Gourmet"
    },
    {
        id: 10,
        title: "Dark Chocolate Bark",
        description: "Dark chocolate with nuts and dried fruits",
        price: "$21.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-12.jpeg",
        category: "bestseller",
        badge: "Best Seller"
    },
    {
        id: 11,
        title: "Spiced Sugar Cookies",
        description: "Traditional spiced cookies perfect for any occasion",
        price: "$16.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-13.jpeg",
        category: "seasonal",
        badge: "Seasonal"
    },
    {
        id: 12,
        title: "Pistachio Pudding Cups",
        description: "Creamy pistachio pudding in individual servings",
        price: "$23.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-14.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 13,
        title: "Berry Jam Collection",
        description: "Assorted berry jams in small jars",
        price: "$28.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-15.jpeg",
        category: "seasonal",
        badge: "Seasonal"
    },
    {
        id: 14,
        title: "Walnut Biscotti",
        description: "Twice-baked Italian walnut biscotti",
        price: "$19.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-16.jpeg",
        category: "bestseller",
        badge: "Popular"
    },
    {
        id: 15,
        title: "White Chocolate Mousse",
        description: "Silky white chocolate mousse with vanilla",
        price: "$26.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-17.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 16,
        title: "Citrus Marmalade",
        description: "Homemade citrus marmalade with ginger",
        price: "$20.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-18.jpeg",
        category: "seasonal",
        badge: "Seasonal"
    },
    {
        id: 17,
        title: "Vanilla Bean Fudge",
        description: "Rich fudge made with real Madagascar vanilla",
        price: "$25.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-19.jpeg",
        category: "premium",
        badge: "Premium"
    },
    {
        id: 18,
        title: "Sesame Brittle",
        description: "Crispy sesame brittle with honey caramel",
        price: "$18.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-20.jpeg",
        category: "bestseller",
        badge: "Popular"
    },
    {
        id: 19,
        title: "Lavender Honey Drops",
        description: "Soothing lavender and honey throat drops",
        price: "$14.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-21.jpeg",
        category: "seasonal",
        badge: "New"
    },
    {
        id: 20,
        title: "Cardamom Coffee Beans",
        description: "Premium coffee beans with cardamom essence",
        price: "$31.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1-22.jpeg",
        category: "premium",
        badge: "Gourmet"
    },
    {
        id: 21,
        title: "Raspberry Delights",
        description: "Fresh raspberry treats with dark chocolate",
        price: "$29.99",
        image: "Brand_assets/iCloud Photos from Nkosana Mkandla/iCloud Photos from Nkosana Mkandla/123_1.jpeg",
        category: "bestseller",
        badge: "Best Seller"
    }
];

// Cart Management
let cart = [];
let currentFilter = 'all';
let currentProductForModal = null;

// Render Products
function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) {
        console.error('productsGrid element not found');
        return;
    }
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.className = 'product-image';
        img.loading = 'lazy';
        img.onerror = function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22280%22 height=%22250%22%3E%3Crect fill=%22%23ddd%22 width=%22280%22 height=%22250%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage%20Not%20Found%3C/text%3E%3C/svg%3E';
        };
        productCard.appendChild(img);
        const info = document.createElement('div');
        info.className = 'product-info';
        info.innerHTML = `
            <div class="product-badge">${product.badge}</div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <button class="view-btn" onclick="openModal(${product.id})">View Details</button>
        `;
        productCard.appendChild(info);
        productsGrid.appendChild(productCard);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            
            if (currentFilter === 'all') {
                renderProducts(products);
            } else {
                const filtered = products.filter(p => p.category === currentFilter);
                renderProducts(filtered);
            }
        });
    });

    // Modal controls
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Quantity controls
    document.getElementById('decreaseQty').addEventListener('click', () => {
        const input = document.getElementById('quantityInput');
        if (input.value > 1) input.value--;
    });

    document.getElementById('increaseQty').addEventListener('click', () => {
        const input = document.getElementById('quantityInput');
        input.value++;
    });

    // Add to cart button
    document.getElementById('addToCartBtn').addEventListener('click', addToCart);

    // Cart button
    document.getElementById('cartBtn').addEventListener('click', showCart);
}

// Open Modal
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentProductForModal = product;
    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = product.price;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').onerror = function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22400%22%3E%3Crect fill=%22%23ddd%22 width=%22300%22 height=%22400%22/%3E%3C/svg%3E';
    };
    document.getElementById('quantityInput').value = 1;

    document.getElementById('productModal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('productModal').style.display = 'none';
    currentProductForModal = null;
}

// Add to Cart
function addToCart() {
    if (!currentProductForModal) return;

    const quantity = parseInt(document.getElementById('quantityInput').value);
    const existingItem = cart.find(item => item.id === currentProductForModal.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...currentProductForModal,
            quantity: quantity
        });
    }

    saveCart();
    updateCartCount();
    closeModal();
    showNotification('Added to cart!');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #8B4513;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Cart Management Functions
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function saveCart() {
    localStorage.setItem('delicaciesCart', JSON.stringify(cart));
}

function loadCart() {
    const saved = localStorage.getItem('delicaciesCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartCount();
    }
}

function showCart() {
    if (cart.length === 0) {
        alert('Your cart is empty');
        return;
    }

    let cartSummary = 'SHOPPING CART\n\n';
    let total = 0;

    cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        const itemTotal = price * item.quantity;
        total += itemTotal;
        cartSummary += `${item.title}\nQuantity: ${item.quantity}\nPrice: $${itemTotal.toFixed(2)}\n\n`;
    });

    cartSummary += `---\nTOTAL: $${total.toFixed(2)}\n\nProceeding to checkout...`;
    alert(cartSummary);
}

// ==================== TAB NAVIGATION ====================

function switchTab(tabName) {
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
    if (activeTab) activeTab.classList.add('active');

    // Update panels
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const activePanel = document.getElementById(`tab-${tabName}`);
    if (activePanel) activePanel.classList.add('active');

    // Close mobile menu if open
    document.getElementById('navTabs').classList.remove('open');

    // Scroll to top of main content
    document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Legacy alias — keeps any old onclick="scrollToProducts()" working
function scrollToProducts() {
    switchTab('treats');
}

// ==================== CHATBOT FUNCTIONALITY ====================

// FAQ Database
const faqDatabase = {
    shipping: {
        question: "📦 How long does shipping take?",
        answer: "We offer standard shipping (5-7 business days) and express shipping (2-3 business days). Orders are processed within 24 hours and tracked automatically."
    },
    return: {
        question: "↩️ What's your return policy?",
        answer: "We offer 30-day returns on all items in original condition. If you're not satisfied, simply contact us and we'll arrange a free return and full refund."
    },
    products: {
        question: "🍽️ Are your products organic?",
        answer: "Many of our products are organic and ethically sourced. Each product listing specifies if it's organic. We partner only with suppliers who maintain high quality standards."
    },
    payment: {
        question: "💳 What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, and Google Pay. All payments are secured with SSL encryption (256-bit)."
    },
    storage: {
        question: "🧊 How should I store the delicacies?",
        answer: "Most items should be stored in a cool, dry place. Check individual product instructions for specific storage recommendations. Refrigerated items come with cooling packs."
    },
    gift: {
        question: "🎁 Do you offer gift wrapping?",
        answer: "Yes! We offer beautiful gift wrapping at checkout. We can also include a personalized message card with your order."
    },
    ingredients: {
        question: "🥜 Are there allergen warnings?",
        answer: "Yes, all products clearly list ingredients and potential allergens. If you have specific concerns, please contact our customer service team."
    },
    order: {
        question: "📋 How do I track my order?",
        answer: "Once your order ships, you'll receive a tracking number via email. You can use this to monitor your delivery status in real-time."
    }
};

// Initialize Chatbot
function initChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const window = document.getElementById('chatbotWindow');
    const closeBtn = document.getElementById('chatbotClose');
    const sendBtn = document.getElementById('chatSendBtn');
    const chatInput = document.getElementById('chatInput');

    // Toggle chat window
    toggle.addEventListener('click', () => {
        window.classList.toggle('open');
        if (window.classList.contains('open')) {
            chatInput.focus();
        }
    });

    // Close chat window
    closeBtn.addEventListener('click', () => {
        window.classList.remove('open');
    });

    // Send message
    sendBtn.addEventListener('click', sendChatMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
}

// Send Chat Message
function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addChatMessage(message, 'user');
    input.value = '';

    // Simulate bot response delay
    setTimeout(() => {
        const response = generateChatResponse(message);
        addChatMessage(response, 'bot');
    }, 500);
}

// Add Message to Chat
function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Generate Chat Response
function generateChatResponse(userInput) {
    const input = userInput.toLowerCase();

    // Check against FAQ topics
    if (input.includes('ship') || input.includes('delivery') || input.includes('track')) {
        return faqDatabase.shipping.answer;
    }
    if (input.includes('return') || input.includes('refund') || input.includes('exchange')) {
        return faqDatabase.return.answer;
    }
    if (input.includes('organic') || input.includes('ingredient') || input.includes('product')) {
        return faqDatabase.products.answer;
    }
    if (input.includes('payment') || input.includes('card') || input.includes('pay')) {
        return faqDatabase.payment.answer;
    }
    if (input.includes('storage') || input.includes('store') || input.includes('keep') || input.includes('refriger')) {
        return faqDatabase.storage.answer;
    }
    if (input.includes('gift') || input.includes('wrap') || input.includes('present')) {
        return faqDatabase.gift.answer;
    }
    if (input.includes('allerg') || input.includes('allergen') || input.includes('nut')) {
        return faqDatabase.ingredients.answer;
    }
    if (input.includes('track') || input.includes('order status')) {
        return faqDatabase.order.answer;
    }

    // Default responses
    const defaultResponses = [
        "That's a great question! 🤔 Feel free to explore our suggestions above or contact our support team at support@delicacies.com",
        "I'm here to help! 😊 Try asking about shipping, returns, payment, storage, or products.",
        "Great question! 👍 If you can't find the answer in our FAQ, please contact us directly and we'll be happy to assist.",
        "I appreciate your inquiry! 💬 You can also email us at support@delicacies.com for more detailed assistance."
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Handle Quick Suggestion Clicks
window.handleChatQuestion = function(topic) {
    if (faqDatabase[topic]) {
        const message = faqDatabase[topic].answer;
        const messagesContainer = document.getElementById('chatbotMessages');
        const suggestions = document.getElementById('chatbotSuggestions');
        
        // Hide suggestions after first interaction
        if (suggestions) {
            suggestions.style.display = 'none';
        }
        
        // Add bot response
        addChatMessage(message, 'bot');
    }
};

// ==================== Testimonials & Ratings ====================

// Sample customer testimonials data
let testimonials = [
    {
        name: 'Aisha M.',
        text: 'Beautiful arrangement and the fruit was so fresh — will order again! Exceptional customer service.',
        rating: 5,
        date: 'Jan 12, 2026'
    },
    {
        name: 'David L.',
        text: 'Quick delivery and gorgeous presentation. The recipient loved it. Highly recommend AuMai Delights.',
        rating: 5,
        date: 'Feb 02, 2026'
    },
    {
        name: 'Priya S.',
        text: 'Tasty treats and thoughtful packaging. A little pricey but worth it for special occasions.',
        rating: 4,
        date: 'Dec 20, 2025'
    }
];

function renderTestimonials() {
    const container = document.getElementById('testimonialsList');
    if (!container) return;
    container.innerHTML = '';
    testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="meta">
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-date">• ${t.date}</div>
            </div>
            <div class="rating-stars">${renderStarsHTML(t.rating)}</div>
            <p class="testimonial-text">${t.text}</p>
        `;
        // status label for user-submitted / pending items
        const status = (t.approved === true) ? '' : (t.isUserSubmitted ? '<div style="margin-top:8px;font-weight:700;color:var(--primary-color)">Pending review</div>' : '<div style="margin-top:8px;font-weight:700;color:rgba(0,0,0,0.4)">Unpublished</div>');
        if (status) card.insertAdjacentHTML('beforeend', status);
        container.appendChild(card);
    });
}

// Submit testimonial to server (attempt)
async function submitTestimonialToServer(clientId) {
    const t = testimonials.find(x => x.clientId === clientId);
    if (!t) return;
    try {
        const payload = {
            name: t.name,
            text: t.text,
            rating: t.rating,
            date: t.date,
            clientId: t.clientId,
            captchaToken: document.getElementById('testimonialCaptchaToken') ? document.getElementById('testimonialCaptchaToken').value : ''
        };

        const res = await fetch('/api/testimonials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!res.ok) {
            t.serverStatus = 'failed';
            saveTestimonialsToStorage();
            renderTestimonials();
            showNotification('Could not submit review to server — saved locally.');
            return;
        }

        const json = await res.json();
        t.serverStatus = json.status || 'queued';
        t.serverId = json.id || null;
        // keep t.approved as returned (server may approve immediately)
        if (json.status === 'approved') t.approved = true;
        saveTestimonialsToStorage();
        renderTestimonials();
    } catch (err) {
        t.serverStatus = 'failed';
        saveTestimonialsToStorage();
        renderTestimonials();
        console.warn('Submit testimonial failed:', err);
    }
}

function renderStarsHTML(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        html += `<span class="star ${i <= rating ? 'filled' : ''}">&#9733;</span>`;
    }
    return html;
}

function renderRatingsSummary() {
    const avg = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length) || 0;
    const avgRounded = Math.round((avg + Number.EPSILON) * 10) / 10;
    const avgEl = document.getElementById('averageRating');
    const starsEl = document.getElementById('ratingStars');
    const countEl = document.getElementById('ratingCount');
    const breakdownEl = document.getElementById('ratingBreakdown');

    if (avgEl) avgEl.textContent = avgRounded.toFixed(1);
    if (starsEl) starsEl.innerHTML = renderStarsHTML(Math.round(avg));
    if (countEl) countEl.textContent = `(Based on ${testimonials.length} reviews)`;

    if (breakdownEl) {
        breakdownEl.innerHTML = '';
        for (let r = 5; r >= 1; r--) {
            const count = testimonials.filter(t => t.rating === r).length;
            const pct = testimonials.length ? Math.round((count / testimonials.length) * 100) : 0;
            const row = document.createElement('div');
            row.className = 'rating-bar';
            row.innerHTML = `<div class="label">${r}★</div><div class="bar"><i style="width:${pct}%;"></i></div><div class="pct">${pct}%</div>`;
            breakdownEl.appendChild(row);
        }
    }
}

function switchTestimonialTab(tab) {
    const tabBtnTestimonials = document.getElementById('tabTestimonials');
    const tabBtnRatings = document.getElementById('tabRatings');
    const panelTestimonials = document.getElementById('panelTestimonials');
    const panelRatings = document.getElementById('panelRatings');

    if (tab === 'testimonials') {
        tabBtnTestimonials.classList.add('active');
        tabBtnRatings.classList.remove('active');
        panelTestimonials.style.display = '';
        panelRatings.style.display = 'none';
    } else {
        tabBtnTestimonials.classList.remove('active');
        tabBtnRatings.classList.add('active');
        panelTestimonials.style.display = 'none';
        panelRatings.style.display = '';
    }
}

// Load/save testimonials to localStorage
function loadTestimonialsFromStorage() {
    try {
        const raw = localStorage.getItem('aumai_testimonials');
        if (raw) {
            const saved = JSON.parse(raw);
            if (Array.isArray(saved) && saved.length) {
                // Prepend saved testimonials to existing ones (so newest appear first)
                testimonials = saved.concat(testimonials);
            }
        }
    } catch (err) {
        console.warn('Failed to load testimonials:', err);
    }
}

function saveTestimonialsToStorage() {
    try {
        localStorage.setItem('aumai_testimonials', JSON.stringify(testimonials.filter(t => t.isUserSubmitted)));
    } catch (err) {
        console.warn('Failed to save testimonials:', err);
    }
}

function getCurrentDateFormatted() {
    const d = new Date();
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function handleTestimonialFormSubmit(e) {
    e.preventDefault();
    const name = (document.getElementById('testimonialName') || {}).value || 'Anonymous';
    const rating = parseInt((document.getElementById('testimonialRating') || {}).value) || 5;
    const message = (document.getElementById('testimonialMessage') || {}).value || '';

    if (!message.trim()) {
        showNotification('Please enter a message for your review.');
        return;
    }

    const newTestimonial = {
        clientId: Date.now().toString(),
        name: name.trim(),
        text: message.trim(),
        rating: Math.max(1, Math.min(5, rating)),
        date: getCurrentDateFormatted(),
        isUserSubmitted: true,
        serverStatus: 'pending'
    };

    // Add to the beginning so newest reviews show first
    testimonials.unshift(newTestimonial);
    saveTestimonialsToStorage();
    renderTestimonials();
    renderRatingsSummary();
    // Switch to testimonials tab and clear form
    switchTestimonialTab('testimonials');
    const form = document.getElementById('testimonialForm');
    if (form) form.reset();
    showNotification('Thanks! Your review has been submitted.');

    // attempt server submission (background)
    submitTestimonialToServer(newTestimonial.clientId);
}


// ==================== SSL & SECURITY OPTIMIZATION ====================

// Force HTTPS (skip for local development)
const _isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);
if (window.location.protocol !== 'https:' && window.location.protocol !== 'file:' && !_isLocal) {
    window.location.replace('https:' + window.location.href.slice(window.location.protocol.length));
}

// Add Security Headers (for development - production should use server-side headers)
function addSecurityHeaders() {
    // Validate all external resources use HTTPS
    const links = document.querySelectorAll('link, script, img');
    links.forEach(link => {
        const src = link.src || link.href;
        if (src && src.startsWith('http://')) {
            console.warn('Insecure resource detected:', src);
        }
    });
}

// Disable right-click paste in sensitive fields (optional security measure)
document.addEventListener('paste', (e) => {
    if (e.target.id === 'chatInput') {
        // Allow paste in chat input
        return;
    }
});

// Device Optimization & Responsive Handlers
function optimizeForDevice() {
    // Detect device type
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isTablet = /iPad|Android/.test(navigator.userAgent) && !/Mobile/.test(navigator.userAgent);
    
    // Optimize images for all devices (lazy loading)
    document.addEventListener('load', () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.dataset.optimized) {
                img.loading = 'lazy';
                img.dataset.optimized = 'true';
            }
        });
    }, true);

    // Handle orientation changes
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });

    // Improve touch targets for mobile
    if (isMobile || isTablet) {
        document.documentElement.style.touchAction = 'manipulation';
    }
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization
    renderProducts(products);
    setupEventListeners();
    loadCart();

    // Testimonials initialization
    loadTestimonialsFromStorage();
    renderTestimonials();
    renderRatingsSummary();
    const testimonialForm = document.getElementById('testimonialForm');
    if (testimonialForm) testimonialForm.addEventListener('submit', handleTestimonialFormSubmit);

    // Tab navigation wiring
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(tab.dataset.tab);
        });
    });

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navTabs = document.getElementById('navTabs');
    if (hamburger && navTabs) {
        hamburger.addEventListener('click', () => navTabs.classList.toggle('open'));
    }

    // New initialization
    initChatbot();
    addSecurityHeaders();
    optimizeForDevice();

    // Add touch event optimization
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (Math.abs(touchStartX - touchEndX) > 100) {
            // Prevent accidental swipes from triggering navigation
            e.preventDefault();
        }
    }, false);

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, false);

    // Lazy load images immediately for all devices
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.dataset.optimized) {
            img.loading = 'lazy';
            img.dataset.optimized = 'true';
        }
    });
});

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        console.log('AuMai Delights website loaded and optimized');
    });
}
