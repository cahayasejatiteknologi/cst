// ==================== DATA ====================
const categoryData = [
    { id: 'Freight', icon: '✈️', title: 'Freight', desc: 'Air and sea freight transportation services', tag: 'Transport' },
    { id: 'Customs', icon: '🛃', title: 'Customs', desc: 'Customs clearance and regulatory compliance', tag: 'Legal' },
    { id: 'Handling', icon: '🏗️', title: 'Handling', desc: 'Port and warehouse handling operations', tag: 'Operations' },
    { id: 'Storage', icon: '🏪', title: 'Storage', desc: 'Port yard and warehouse storage solutions', tag: 'Storage' },
    { id: 'Trucking', icon: '🚛', title: 'Trucking', desc: 'Inland container and cargo trucking', tag: 'Land Transport' },
    { id: 'Document', icon: '📄', title: 'Document', desc: 'Documentation and certification services', tag: 'Administration' },
    { id: 'Additional', icon: '📦', title: 'Additional', desc: 'Special handling and value-added services', tag: 'Value Added' }
];

const serviceItems = {
    Freight: [
        { id: 'air-freight', name: 'Air Freight', icon: '✈️', subtitle: 'Freight Service' },
        { id: 'sea-lcl', name: 'Sea Freight LCL', icon: '🚢', subtitle: 'Freight Service' },
        { id: 'fcl-20', name: 'FCL 20ft', icon: '📦', subtitle: 'Freight Service' },
        { id: 'fcl-40', name: 'FCL 40ft', icon: '📦', subtitle: 'Freight Service' },
        { id: 'd2d', name: 'Door to Door', icon: '🚚', subtitle: 'Freight Service' },
        { id: 'p2p', name: 'Port to Port', icon: '⚓', subtitle: 'Freight Service' }
    ],
    Customs: [
        { id: 'cc-import', name: 'Customs Clearance Import', icon: '🛃', subtitle: 'Customs Service' },
        { id: 'cc-export', name: 'Customs Clearance Export', icon: '🛃', subtitle: 'Customs Service' },
        { id: 'pib', name: 'PIB', icon: '📝', subtitle: 'Customs Service' },
        { id: 'peb', name: 'PEB', icon: '📝', subtitle: 'Customs Service' },
        { id: 'hs-code', name: 'HS Code Checking', icon: '🔍', subtitle: 'Customs Service' },
        { id: 'duty-tax', name: 'Duty & Tax Estimation', icon: '💰', subtitle: 'Customs Service' },
        { id: 'quarantine', name: 'Quarantine', icon: '🔬', subtitle: 'Customs Service' },
        { id: 'lartas', name: 'Lartas Checking', icon: '⚠️', subtitle: 'Customs Service' }
    ],
    Handling: [
        { id: 'handling-fee', name: 'Handling Fee', icon: '💲', subtitle: 'Handling Service' },
        { id: 'lolo', name: 'LOLO', icon: '🏗️', subtitle: 'Handling Service' },
        { id: 'thc', name: 'THC', icon: '⚓', subtitle: 'Handling Service' },
        { id: 'stuffing', name: 'Stuffing', icon: '📦', subtitle: 'Handling Service' },
        { id: 'stripping', name: 'Stripping', icon: '📦', subtitle: 'Handling Service' },
        { id: 'forklift', name: 'Forklift', icon: '🚜', subtitle: 'Handling Service' },
        { id: 'crane', name: 'Crane', icon: '🏗️', subtitle: 'Handling Service' },
        { id: 'seal-fee', name: 'Seal Fee', icon: '🔒', subtitle: 'Handling Service' }
    ],
    Storage: [
        { id: 'storage-port', name: 'Storage Port', icon: '⚓', subtitle: 'Storage Service' },
        { id: 'storage-wh', name: 'Storage Warehouse', icon: '🏪', subtitle: 'Storage Service' },
        { id: 'demurrage', name: 'Demurrage', icon: '⏱️', subtitle: 'Storage Service' },
        { id: 'detention', name: 'Detention', icon: '⏱️', subtitle: 'Storage Service' },
        { id: 'cold-storage', name: 'Cold Storage', icon: '❄️', subtitle: 'Storage Service' },
        { id: 'reefer-plug', name: 'Reefer Plug', icon: '🔌', subtitle: 'Storage Service' }
    ],
    Trucking: [
        { id: 'pickup', name: 'Pickup Cargo', icon: '🛻', subtitle: 'Trucking Service' },
        { id: 'delivery', name: 'Delivery Cargo', icon: '🚚', subtitle: 'Trucking Service' },
        { id: 'p2w', name: 'Port to Warehouse', icon: '🏪', subtitle: 'Trucking Service' },
        { id: 'w2p', name: 'Warehouse to Port', icon: '⚓', subtitle: 'Trucking Service' },
        { id: 'ctruck-20', name: 'Container Trucking 20ft', icon: '🚛', subtitle: 'Trucking Service' },
        { id: 'ctruck-40', name: 'Container Trucking 40ft', icon: '🚛', subtitle: 'Trucking Service' },
        { id: 'cdd', name: 'CDD', icon: '🚐', subtitle: 'Trucking Service' },
        { id: 'cde', name: 'CDE', icon: '🚐', subtitle: 'Trucking Service' },
        { id: 'fuso', name: 'Fuso', icon: '🚛', subtitle: 'Trucking Service' },
        { id: 'wingbox', name: 'Wingbox', icon: '📦', subtitle: 'Trucking Service' },
        { id: 'trailer', name: 'Trailer', icon: '🚛', subtitle: 'Trucking Service' }
    ],
    Document: [
        { id: 'bl', name: 'Bill of Lading', icon: '📜', subtitle: 'Document Service' },
        { id: 'awb', name: 'Air Waybill', icon: '📜', subtitle: 'Document Service' },
        { id: 'packing-list', name: 'Packing List', icon: '📋', subtitle: 'Document Service' },
        { id: 'comm-invoice', name: 'Commercial Invoice', icon: '🧾', subtitle: 'Document Service' },
        { id: 'coo', name: 'Certificate of Origin', icon: '📜', subtitle: 'Document Service' },
        { id: 'msds', name: 'MSDS', icon: '⚗️', subtitle: 'Document Service' },
        { id: 'insurance-cert', name: 'Insurance Certificate', icon: '🛡️', subtitle: 'Document Service' },
        { id: 'doc-courier', name: 'Document Courier', icon: '📨', subtitle: 'Document Service' }
    ],
    Additional: [
        { id: 'cargo-insurance', name: 'Cargo Insurance', icon: '🛡️', subtitle: 'Additional Service' },
        { id: 'packing', name: 'Packing', icon: '📦', subtitle: 'Additional Service' },
        { id: 'repacking', name: 'Repacking', icon: '🔄', subtitle: 'Additional Service' },
        { id: 'wooden-packing', name: 'Wooden Packing', icon: '🪵', subtitle: 'Additional Service' },
        { id: 'palletizing', name: 'Palletizing', icon: '🏗️', subtitle: 'Additional Service' },
        { id: 'labeling', name: 'Labeling', icon: '🏷️', subtitle: 'Additional Service' },
        { id: 'fumigation', name: 'Fumigation', icon: '💨', subtitle: 'Additional Service' },
        { id: 'inspection', name: 'Inspection', icon: '🔍', subtitle: 'Additional Service' },
        { id: 'surveyor', name: 'Surveyor', icon: '📐', subtitle: 'Additional Service' },
        { id: 'dg-handling', name: 'Dangerous Goods Handling', icon: '⚠️', subtitle: 'Additional Service' }
    ]
};

const calcFields = {
    Freight: [
        { key: 'origin', label: 'Origin', type: 'text', required: true },
        { key: 'destination', label: 'Destination', type: 'text', required: true },
        { key: 'weight', label: 'Actual Weight (kg)', type: 'number', required: true },
        { key: 'length', label: 'Length (cm)', type: 'number', required: false },
        { key: 'width', label: 'Width (cm)', type: 'number', required: false },
        { key: 'height', label: 'Height (cm)', type: 'number', required: false },
        { key: 'quantity', label: 'Quantity', type: 'number', required: true },
        { key: 'containerType', label: 'Container Type', type: 'select', required: false, options: ['-', '20ft', '40ft', '40HC', 'LCL'] }
    ],
    Customs: [
        { key: 'origin', label: 'Origin', type: 'text', required: true },
        { key: 'destination', label: 'Destination', type: 'text', required: true },
        { key: 'goodsValue', label: 'Goods Value (USD)', type: 'number', required: true },
        { key: 'docType', label: 'Document Type', type: 'select', required: true, options: ['PIB', 'PEB', 'C1', 'C2', 'Other'] },
        { key: 'notes', label: 'Notes', type: 'textarea', required: false }
    ],
    Handling: [
        { key: 'quantity', label: 'Quantity', type: 'number', required: true },
        { key: 'containerType', label: 'Container Type', type: 'select', required: false, options: ['-', '20ft', '40ft', 'LCL'] },
        { key: 'weight', label: 'Weight (kg)', type: 'number', required: true },
        { key: 'notes', label: 'Notes', type: 'textarea', required: false }
    ],
    Storage: [
        { key: 'days', label: 'Number of Days', type: 'number', required: true },
        { key: 'storageType', label: 'Storage Type', type: 'select', required: true, options: ['Port', 'Warehouse', 'Cold Storage'] },
        { key: 'volume', label: 'Volume (CBM)', type: 'number', required: false },
        { key: 'notes', label: 'Notes', type: 'textarea', required: false }
    ],
    Trucking: [
        { key: 'origin', label: 'Origin', type: 'text', required: true },
        { key: 'destination', label: 'Destination', type: 'text', required: true },
        { key: 'vehicleType', label: 'Vehicle Type', type: 'select', required: true, options: ['Pickup', 'CDD', 'CDE', 'Fuso', 'Wingbox', 'Trailer', 'Container 20ft', 'Container 40ft'] },
        { key: 'quantity', label: 'Quantity', type: 'number', required: true }
    ],
    Document: [
        { key: 'docType', label: 'Document Type', type: 'select', required: true, options: ['Bill of Lading', 'Air Waybill', 'Packing List', 'Commercial Invoice', 'COO', 'MSDS', 'Insurance Cert', 'Other'] },
        { key: 'quantity', label: 'Quantity', type: 'number', required: true }
    ],
    Additional: [
        { key: 'goodsValue', label: 'Goods Value (USD)', type: 'number', required: false },
        { key: 'quantity', label: 'Quantity', type: 'number', required: true },
        { key: 'notes', label: 'Notes', type: 'textarea', required: false }
    ]
};

// State Management
const CART_STORAGE_KEY = 'logi_cart';
const USERS_STORAGE_KEY = 'logi_users';
const SETTINGS_STORAGE_KEY = 'logi_settings';

const defaultSettings = {
    companyName: 'PT. Cahaya Sejati Teknologi',
    email: 'info@cstlogistic.co.id',
    phone: '+62 21 1234 5678',
    address: 'Jl. Gatot Subroto No. 123, Jakarta Selatan',
    whatsapp: '+62 818-6573-29',
    taxRate: '11',
    currency: 'IDR',
    language: 'id',
    notifications: true,
    autoSave: true
};

const loadCartFromStorage = () => {
    try {
        const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]');
        return Array.isArray(savedCart) ? savedCart : [];
    } catch (error) {
        return [];
    }
};

const defaultUsers = [
    { name: 'Almano Setiawan', email: 'admin@cstlogistic.co.id', role: 'Admin', status: 'Aktif' },
    { name: 'Rina Wijaya', email: 'sales@cstlogistic.co.id', role: 'Sales / Agen', status: 'Aktif' }
];

const loadUsersFromStorage = () => {
    try {
        const savedUsers = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || 'null');
        if (!Array.isArray(savedUsers) || savedUsers.length === 0) return [...defaultUsers];
        return savedUsers;
    } catch (error) {
        return [...defaultUsers];
    }
};

const loadSettingsFromStorage = () => {
    try {
        const saved = JSON.parse(localStorage.getItem(SETTINGS_STORAGE_KEY) || 'null');
        if (!saved) return { ...defaultSettings };
        return { ...defaultSettings, ...saved };
    } catch (error) {
        return { ...defaultSettings };
    }
};

const saveCartToStorage = () => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
};

const saveUsersToStorage = () => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users));
};

const saveSettingsToStorage = (settings) => {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
};

const state = {
    currentPage: 'services',
    currentCategory: null,
    currentItem: null,
    cart: loadCartFromStorage(),
    users: loadUsersFromStorage(),
    settings: loadSettingsFromStorage(),
    userEditIndex: null,
    orders: JSON.parse(localStorage.getItem('logi_orders') || '[]')
};

// Utility Functions
const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const showToast = (msg) => {
    const c = document.getElementById('toastContainer');
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<i class="fas fa-check-circle" style="color: var(--success); font-size: 20px;"></i><span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3000);
};

const renderCartSummary = () => {
    const listEl = document.getElementById('cartSummaryList');
    const countEl = document.getElementById('cartSummaryCount');
    const totalEl = document.getElementById('cartSummaryTotal');
    const badgeEl = document.getElementById('cartBadge');
    if (!listEl || !countEl || !totalEl || !badgeEl) return;

    badgeEl.textContent = state.cart.length;
    countEl.textContent = `${state.cart.length} item`;
    const total = state.cart.reduce((sum, item) => sum + (item.price || 0), 0);
    totalEl.textContent = `Rp ${formatNumber(total)}`;

    if (state.cart.length === 0) {
        listEl.innerHTML = `<div class="cart-empty">Belum ada item pesanan. Pilih layanan lalu klik "Hitung & Tambahkan ke Pesanan".</div>`;
        return;
    }

    listEl.innerHTML = state.cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-category">${item.category}</span>
                <div class="cart-item-name">${item.icon} ${item.item}</div>
                <div class="cart-item-price">Estimasi: Rp ${formatNumber(item.price)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="cart-item-total">Rp ${formatNumber(item.price)}</div>
                <button class="btn-remove-item" onclick="removeCartItem(${index})"><i class="fas fa-trash"></i> Hapus</button>
            </div>
        </div>
    `).join('');
};

const removeCartItem = (index) => {
    if (index < 0 || index >= state.cart.length) return;
    const removed = state.cart.splice(index, 1)[0];
    saveCartToStorage();
    renderCartSummary();
    if (removed) showToast(`${removed.item} dihapus dari pesanan`);
};

const proceedOrder = () => {
    if (state.cart.length === 0) {
        showToast('Keranjang masih kosong');
        return;
    }
    const total = state.cart.reduce((sum, item) => sum + (item.price || 0), 0);
    showToast(`Pesanan siap diproses (${state.cart.length} item - Rp ${formatNumber(total)})`);
};

const sendCartToWhatsApp = () => {
    if (state.cart.length === 0) {
        showToast('Keranjang masih kosong');
        return;
    }
    const total = state.cart.reduce((sum, item) => sum + (item.price || 0), 0);
    const lines = state.cart.map(item => `• ${item.item}\n  Kategori: ${item.category}\n  Estimasi: Rp ${formatNumber(item.price)}`);
    const message = [
        'Permintaan Penawaran Jasa Logistik',
        '----------------------------------',
        '',
        'Halo CST, saya ingin melanjutkan pesanan berikut:',
        '',
        ...lines,
        '',
        '----------------------------------',
        `Total Estimasi: Rp ${formatNumber(total)}`,
        '',
        'Mohon informasi lebih lanjut terkait proses dan biaya final.',
        '',
        'Terima kasih,'
    ].join('\n');
    window.open(`https://wa.me/62818657329?text=${encodeURIComponent(message)}`, '_blank');
};

// Page Navigation
const showPage = (pageName) => {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    const target = document.getElementById(`page-${pageName}`);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    state.currentPage = pageName;
    document.querySelectorAll('.nav-link').forEach(link => {
        const text = link.textContent.trim().toLowerCase();
        if ((pageName === 'home' && text === 'beranda') ||
            (pageName === 'services' && text === 'layanan') ||
            (pageName === 'products' && text === 'produk') ||
            (pageName === 'about' && text === 'tentang kami') ||
            (pageName === 'contact' && text === 'kontak')) {
            link.classList.add('active');
        }
    });
    const navMenu = document.querySelector('.nav-menu');
    const toggleBtn = document.getElementById('mobileMenuToggle');
    if (navMenu && toggleBtn && window.innerWidth <= 768) {
        navMenu.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }
};

// Render Categories
const renderCategories = () => {
    const grid = document.getElementById('categoriesGrid');
    grid.innerHTML = categoryData.map(cat => `
        <div class="cat-card" onclick="selectCategory('${cat.id}')">
            <div class="cat-card-icon">${cat.icon}</div>
            <div class="cat-card-title">${cat.title}</div>
            <div class="cat-card-desc">${cat.desc}</div>
            <span class="cat-card-tag">${cat.tag}</span>
        </div>
    `).join('');
};

const selectCategory = (catId) => {
    state.currentCategory = catId;
    document.getElementById('categoriesGrid').style.display = 'none';
    document.getElementById('itemsView').classList.add('active');
    document.getElementById('itemsTitle').textContent = `${catId} Services`;

    const items = serviceItems[catId] || [];
    document.getElementById('itemsContainer').innerHTML = items.map(item => `
        <div class="item-row" onclick="selectItem('${catId}', '${item.id}')">
            <div class="item-icon">${item.icon}</div>
            <div class="item-info">
                <div class="item-title">${item.name}</div>
                <div class="item-subtitle">${item.subtitle}</div>
            </div>
            <div class="item-arrow"><i class="fas fa-chevron-right"></i></div>
        </div>
    `).join('');
};

const showCategories = () => {
    document.getElementById('categoriesGrid').style.display = 'grid';
    document.getElementById('itemsView').classList.remove('active');
    document.getElementById('calcView').classList.remove('active');
};

const selectItem = (catId, itemId) => {
    state.currentCategory = catId;
    state.currentItem = serviceItems[catId].find(i => i.id === itemId);

    document.getElementById('itemsView').classList.remove('active');
    document.getElementById('calcView').classList.add('active');

    document.getElementById('calcIcon').textContent = state.currentItem.icon;
    document.getElementById('calcTitle').textContent = state.currentItem.name;
    document.getElementById('calcSubtitle').textContent = state.currentItem.subtitle;

    const fields = calcFields[catId] || [];
    let fieldsHTML = fields.map(f => {
        let input = '';
        if (f.type === 'select') {
            input = `<select id="cf_${f.key}" class="field-input">${f.options.map(o => `<option>${o}</option>`).join('')}</select>`;
        } else if (f.type === 'textarea') {
            input = `<textarea id="cf_${f.key}" class="field-input" rows="3" placeholder="${f.label}"></textarea>`;
        } else {
            input = `<input type="${f.type}" id="cf_${f.key}" class="field-input" placeholder="${f.label}">`;
        }
        return `<div class="field-group"><label class="field-label">${f.label} ${f.required ? '*' : ''}</label>${input}</div>`;
    }).join('');
    document.getElementById('calcFormGrid').innerHTML = fieldsHTML;
};

const showItems = () => {
    document.getElementById('calcView').classList.remove('active');
    document.getElementById('itemsView').classList.add('active');
};

const submitCalculation = () => {
    const fields = calcFields[state.currentCategory] || [];
    let formData = {}, valid = true;
    fields.forEach(f => {
        const el = document.getElementById(`cf_${f.key}`);
        formData[f.key] = el ? el.value : '';
        if (f.required && !formData[f.key]) {
            el.classList.add('error');
            valid = false;
        } else if (el) {
            el.classList.remove('error');
        }
    });
    if (!valid) {
        showToast('Please fill in all required fields');
        return;
    }

    let base = Math.floor(Math.random() * 5000000) + 500000;
    const qty = parseInt(formData.quantity) || 1;
    const weight = parseInt(formData.weight) || 0;
    const days = parseInt(formData.days) || 1;
    const val = parseFloat(formData.goodsValue) || 0;

    if (state.currentCategory === 'Freight') base += weight * (state.currentItem.name.includes('Air') ? 25000 : 5000);
    else if (state.currentCategory === 'Customs') base += (val * 0.21 * 16000);
    else if (state.currentCategory === 'Storage') base *= days;
    else if (state.currentCategory === 'Additional' && state.currentItem.id === 'cargo-insurance' && val > 0) base = val * 16000 * 0.003;
    else base *= qty;

    const finalPrice = Math.round(base);
    state.cart.push({
        category: state.currentCategory,
        item: state.currentItem.name,
        icon: state.currentItem.icon,
        price: finalPrice
    });
    saveCartToStorage();
    renderCartSummary();
    showToast(`${state.currentItem.name} added to cart!`);
    showCategories();
};

// Admin Functions
const openAdmin = () => {
    document.getElementById('adminOverlay').classList.add('active');
    showAdminPage('dashboard');
};

const closeAdmin = () => {
    document.getElementById('adminOverlay').classList.remove('active');
};

const showAdminPage = (pageName) => {
    document.querySelectorAll('.admin-page-content').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.admin-menu-item').forEach(i => i.classList.remove('active'));
    const sel = document.getElementById(`admin-page-${pageName}`);
    if (sel) sel.style.display = 'block';
    const activeMenu = document.querySelector(`.admin-menu-item[data-admin-page="${pageName}"]`);
    if (activeMenu) activeMenu.classList.add('active');
    if (pageName === 'dashboard') loadDashboard();
    if (pageName === 'pengguna') renderUsersTable();
    if (pageName === 'pengaturan') loadSettings();
};

// ==================== FITUR PENGATURAN ====================
const loadSettings = () => {
    const settings = state.settings;

    // Isi form dengan data yang tersimpan
    const fields = {
        'settingCompanyName': settings.companyName,
        'settingEmail': settings.email,
        'settingPhone': settings.phone,
        'settingAddress': settings.address,
        'settingWhatsapp': settings.whatsapp,
        'settingTaxRate': settings.taxRate,
        'settingCurrency': settings.currency,
        'settingLanguage': settings.language
    };

    Object.keys(fields).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = fields[id] || '';
    });

    // Checkbox
    const notifCheck = document.getElementById('settingNotifications');
    const autoSaveCheck = document.getElementById('settingAutoSave');
    if (notifCheck) notifCheck.checked = settings.notifications !== false;
    if (autoSaveCheck) autoSaveCheck.checked = settings.autoSave !== false;
};

const saveSettings = () => {
    const settings = {
        companyName: document.getElementById('settingCompanyName').value,
        email: document.getElementById('settingEmail').value,
        phone: document.getElementById('settingPhone').value,
        address: document.getElementById('settingAddress').value,
        whatsapp: document.getElementById('settingWhatsapp').value,
        taxRate: document.getElementById('settingTaxRate').value,
        currency: document.getElementById('settingCurrency').value,
        language: document.getElementById('settingLanguage').value,
        notifications: document.getElementById('settingNotifications').checked,
        autoSave: document.getElementById('settingAutoSave').checked
    };

    state.settings = settings;
    saveSettingsToStorage(settings);
    showToast('Pengaturan berhasil disimpan!');

    // Update informasi di website
    updateCompanyInfo();
};

const updateCompanyInfo = () => {
    const settings = state.settings;
    // Update footer atau bagian lain jika diperlukan
    console.log('Company info updated:', settings);
};

const resetSettings = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan pengaturan ke default?')) {
        state.settings = { ...defaultSettings };
        saveSettingsToStorage(defaultSettings);
        loadSettings();
        showToast('Pengaturan berhasil direset ke default');
    }
};
// ==================== AKHIR FITUR PENGATURAN ====================

const renderUsersTable = () => {
    const tbody = document.getElementById('usersTableBody');
    if (!tbody) return;
    if (state.users.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 30px; color: var(--gray-500);">Belum ada pengguna</td></tr>`;
        return;
    }
    tbody.innerHTML = state.users.map((user, idx) => `
        <tr>
            <td style="color: var(--white); font-weight: 600;">${user.name}</td>
            <td>${user.email}</td>
            <td>
                <select onchange="updateUserRole(${idx}, this.value)" style="background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.08); color: var(--gray-200); border-radius: 6px; padding: 6px 8px;">
                    ${['Sales / Agen', 'Staff', 'Manager', 'Admin', 'Super Admin'].map(role => `<option value="${role}" ${user.role === role ? 'selected' : ''}>${role}</option>`).join('')}
                </select>
            </td>
            <td><span class="admin-role-badge">${user.status || 'Aktif'}</span></td>
            <td>
                <button onclick="editUser(${idx})" style="margin-right:6px; background: rgba(14,165,233,0.15); color: #7DD3FC; border: none; border-radius: 6px; padding: 6px 10px; cursor: pointer;">Edit</button>
                <button onclick="deleteUser(${idx})" style="background: rgba(239,68,68,0.2); color: #FCA5A5; border: none; border-radius: 6px; padding: 6px 10px; cursor: pointer;">Hapus</button>
            </td>
        </tr>
    `).join('');
};

const openUserForm = () => {
    const card = document.getElementById('userFormCard');
    const title = document.getElementById('userFormTitle');
    if (!card || !title) return;
    state.userEditIndex = null;
    title.textContent = 'Tambah Pengguna';
    document.getElementById('userNameInput').value = '';
    document.getElementById('userEmailInput').value = '';
    document.getElementById('userPasswordInput').value = '';
    document.getElementById('userRoleInput').value = 'Sales / Agen';
    card.style.display = 'block';
};

const cancelUserForm = () => {
    const card = document.getElementById('userFormCard');
    if (card) card.style.display = 'none';
    state.userEditIndex = null;
};

const saveUser = () => {
    const name = (document.getElementById('userNameInput')?.value || '').trim();
    const email = (document.getElementById('userEmailInput')?.value || '').trim();
    const role = (document.getElementById('userRoleInput')?.value || 'Staff').trim();
    if (!name) {
        showToast('Nama wajib diisi');
        return;
    }
    if (!email) {
        showToast('Email tidak boleh kosong');
        return;
    }
    const payload = { name, email, role, status: 'Aktif' };
    if (state.userEditIndex !== null && state.users[state.userEditIndex]) {
        state.users[state.userEditIndex] = { ...state.users[state.userEditIndex], ...payload };
        showToast('Pengguna berhasil diperbarui');
    } else {
        state.users.push(payload);
        showToast('Pengguna berhasil ditambahkan');
    }
    saveUsersToStorage();
    renderUsersTable();
    cancelUserForm();
};

const editUser = (index) => {
    const user = state.users[index];
    if (!user) return;
    state.userEditIndex = index;
    const card = document.getElementById('userFormCard');
    const title = document.getElementById('userFormTitle');
    if (!card || !title) return;
    title.textContent = 'Edit Pengguna';
    document.getElementById('userNameInput').value = user.name || '';
    document.getElementById('userEmailInput').value = user.email || '';
    document.getElementById('userPasswordInput').value = '';
    document.getElementById('userRoleInput').value = user.role || 'Staff';
    card.style.display = 'block';
};

const deleteUser = (index) => {
    const user = state.users[index];
    if (!user) return;
    state.users.splice(index, 1);
    saveUsersToStorage();
    renderUsersTable();
    showToast(`${user.name} dihapus`);
};

const updateUserRole = (index, newRole) => {
    if (!state.users[index]) return;
    state.users[index].role = newRole;
    saveUsersToStorage();
    showToast(`Role ${state.users[index].name} diperbarui`);
    renderUsersTable();
};

const loadDashboard = () => {
    const orders = state.orders;
    document.getElementById('dashTotalOrders').textContent = orders.length;
    document.getElementById('dashTotalRevenue').textContent = 'Rp ' + formatNumber(orders.reduce((s, o) => s + (o.totalEstimate || 0), 0));
    document.getElementById('dashNewOrders').textContent = orders.filter(o => o.status === 'New').length;
    document.getElementById('dashActiveOrders').textContent = orders.filter(o => ['Review', 'Quotation', 'Confirmed', 'Processing'].includes(o.status)).length;
    const tbody = document.getElementById('dashTableBody');
    const recent = orders.slice(-5).reverse();
    tbody.innerHTML = recent.length === 0 ? `<tr><td colspan="6" style="text-align: center; padding: 40px; color: var(--gray-500);">Belum ada pesanan</td></tr>` : recent.map(o => `<tr><td style="color: var(--white); font-weight: 600;">${o.orderId}</td><td>${o.companyName}</td><td>-</td><td>Rp ${formatNumber(o.totalEstimate)}</td><td><span class="admin-role-badge">${o.status}</span></td><td>${new Date(o.createdAt).toLocaleDateString('id-ID')}</td></tr>`).join('');
};

const handleContactSubmit = (e) => {
    e.preventDefault();
    showToast('Pesan berhasil dikirim! Tim kami akan menghubungi Anda segera.');
    e.target.reset();
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderCartSummary();
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            mobileMenuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open') ? 'true' : 'false');
        });
    }
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu && mobileMenuToggle) {
            navMenu.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('input', (e) => {
    if (e.target.id === 'serviceSearch') {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.cat-card').forEach(card => {
            const title = card.querySelector('.cat-card-title').textContent.toLowerCase();
            card.style.display = title.includes(term) ? 'block' : 'none';
        });
    }
});

// Event Delegation untuk Menu Admin
document.addEventListener('click', (e) => {
    const menuItem = e.target.closest('.admin-menu-item');
    if (menuItem) {
        const pageName = menuItem.getAttribute('data-admin-page');
        if (pageName) showAdminPage(pageName);
    }
});
