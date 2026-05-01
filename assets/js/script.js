// ==================== STORAGE KEYS ====================
const CART_STORAGE_KEY = 'logi_cart';
const USERS_STORAGE_KEY = 'logi_users';
const SETTINGS_STORAGE_KEY = 'logi_settings';
const COMPANY_STORAGE_KEY = 'logi_companies';

// ==================== DEFAULT ====================
const defaultSettings = {
    companyId: 'default',
    companyName: 'PT. Cahaya Sejati Teknologi',
    email: 'info@cstlogistic.co.id',
    phone: '+62 21 1234 5678',
    address: 'Jl. Gatot Subroto No. 123, Jakarta Selatan',
    whatsapp: '62818657329',
    taxRate: '11',
    currency: 'IDR',
    language: 'id',
    notifications: true,
    autoSave: true
};

const defaultCompanies = [
    { id: 'default', name: 'PT. Cahaya Sejati Teknologi' }
];

// ==================== LOADERS ====================
const safeJSON = (key, fallback) => {
    try {
        const data = JSON.parse(localStorage.getItem(key));
        return data ?? fallback;
    } catch {
        return fallback;
    }
};

const loadCart = () => safeJSON(CART_STORAGE_KEY, []);
const loadUsers = () => safeJSON(USERS_STORAGE_KEY, []);
const loadSettings = () => ({ ...defaultSettings, ...safeJSON(SETTINGS_STORAGE_KEY, {}) });
const loadCompanies = () => safeJSON(COMPANY_STORAGE_KEY, defaultCompanies);

// ==================== STATE ====================
const state = {
    cart: loadCart(),
    users: loadUsers(),
    settings: loadSettings(),
    companies: loadCompanies()
};

// ==================== SAVE ====================
const saveCart = () => localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
const saveUsers = () => localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(state.users));
const saveSettings = () => localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(state.settings));
const saveCompanies = () => localStorage.setItem(COMPANY_STORAGE_KEY, JSON.stringify(state.companies));

// ==================== UTIL ====================
const formatNumber = n => (n || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const showToast = (msg) => {
    const c = document.getElementById('toastContainer');
    if (!c) return;
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span>${msg}</span>`;
    c.appendChild(t);
    setTimeout(() => t.remove(), 3000);
};

// ==================== COMPANY INFO UPDATE ====================
const updateCompanyInfo = () => {
    const s = state.settings;

    const map = {
        companyNameDisplay: s.companyName,
        companyEmailDisplay: s.email,
        companyPhoneDisplay: s.phone,
        companyAddressDisplay: s.address
    };

    Object.entries(map).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    });
};

// ==================== SETTINGS ====================
const loadSettingsForm = () => {
    const s = state.settings;

    const set = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val || '';
    };

    set('settingCompanyName', s.companyName);
    set('settingEmail', s.email);
    set('settingPhone', s.phone);
    set('settingAddress', s.address);
    set('settingWhatsapp', s.whatsapp);
    set('settingTaxRate', s.taxRate);
    set('settingCurrency', s.currency);
    set('settingLanguage', s.language);

    const notif = document.getElementById('settingNotifications');
    const auto = document.getElementById('settingAutoSave');

    if (notif) notif.checked = s.notifications;
    if (auto) auto.checked = s.autoSave;
};

const saveSettingsForm = () => {
    const get = (id, def = '') => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : def;
    };

    state.settings = {
        ...state.settings,
        companyName: get('settingCompanyName', defaultSettings.companyName),
        email: get('settingEmail', defaultSettings.email),
        phone: get('settingPhone', defaultSettings.phone),
        address: get('settingAddress', defaultSettings.address),
        whatsapp: get('settingWhatsapp', defaultSettings.whatsapp),
        taxRate: get('settingTaxRate', defaultSettings.taxRate),
        currency: get('settingCurrency', defaultSettings.currency),
        language: get('settingLanguage', defaultSettings.language),
        notifications: document.getElementById('settingNotifications')?.checked ?? true,
        autoSave: document.getElementById('settingAutoSave')?.checked ?? true
    };

    saveSettings();
    updateCompanyInfo();

    showToast('Pengaturan disimpan');
};

const resetSettings = () => {
    if (!confirm('Reset pengaturan?')) return;

    state.settings = { ...defaultSettings };
    saveSettings();

    loadSettingsForm();
    updateCompanyInfo();

    showToast('Reset berhasil');
};

// ==================== MULTI COMPANY ====================
const addCompany = (name) => {
    const id = 'cmp_' + Date.now();
    state.companies.push({ id, name });
    saveCompanies();
};

const switchCompany = (id) => {
    state.settings.companyId = id;
    saveSettings();
    showToast('Perusahaan diganti');
};

// ==================== CART ====================
const renderCart = () => {
    const el = document.getElementById('cartSummaryList');
    if (!el) return;

    if (!state.cart.length) {
        el.innerHTML = 'Keranjang kosong';
        return;
    }

    el.innerHTML = state.cart.map(i => `
        <div>
            ${i.item} - Rp ${formatNumber(i.price)}
        </div>
    `).join('');
};

const addToCart = (item) => {
    state.cart.push(item);
    saveCart();
    renderCart();
};

// ==================== WHATSAPP ====================
const sendToWA = () => {
    if (!state.cart.length) {
        showToast('Keranjang kosong');
        return;
    }

    const total = state.cart.reduce((s, i) => s + i.price, 0);

    const msg = [
        'Permintaan Penawaran',
        '',
        ...state.cart.map(i => `• ${i.item} - Rp ${formatNumber(i.price)}`),
        '',
        `Total: Rp ${formatNumber(total)}`
    ].join('\n');

    const wa = state.settings.whatsapp.replace(/\D/g, '');

    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(msg)}`);
};

// ==================== USER ROLE ====================
const addUser = (user) => {
    state.users.push(user);
    saveUsers();
};

const updateUserRole = (i, role) => {
    if (!state.users[i]) return;
    state.users[i].role = role;
    saveUsers();
};

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    updateCompanyInfo();
    renderCart();
});
