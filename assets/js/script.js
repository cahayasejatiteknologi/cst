// ==================== DATA LAYANAN ====================
const categoryData = [
    { id: 'Freight', icon: '✈️', title: 'Freight', desc: 'Air and sea freight transportation', tag: 'Transport' },
    { id: 'Customs', icon: '🛃', title: 'Customs', desc: 'Customs clearance and compliance', tag: 'Legal' },
    { id: 'Handling', icon: '🏗️', title: 'Handling', desc: 'Port and warehouse operations', tag: 'Operations' },
    { id: 'Storage', icon: '🏪', title: 'Storage', desc: 'Port yard and warehouse solutions', tag: 'Storage' },
    { id: 'Trucking', icon: '🚛', title: 'Trucking', desc: 'Inland container and cargo trucking', tag: 'Land Transport' },
    { id: 'Document', icon: '📄', title: 'Document', desc: 'Documentation and certification', tag: 'Administration' },
    { id: 'Additional', icon: '📦', title: 'Additional', desc: 'Special handling services', tag: 'Value Added' }
];

// ... (Data serviceItems dan calcFields milikmu tetap aman di sini)

// ==================== LOGIKA NAVIGASI ====================

// 1. Fungsi Pindah Halaman
function showPage(pageId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Tampilkan section yang dituju
    // Menyesuaikan ID dari HTML kamu (page-home, page-dashboard, dll)
    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.add('active');
    } else {
        // Backup jika ID tidak pakai prefix 'page-'
        const backupTarget = document.getElementById(pageId);
        if (backupTarget) backupTarget.classList.add('active');
    }
    
    // Scroll ke atas otomatis
    window.scrollTo(0, 0);
}

// 2. Fungsi Buka Admin (ke Dashboard)
function openAdmin() {
    showPage('dashboard');
}

// 3. Fungsi Update Nama Portal (CSTPortal)
function updatePortalName() {
    const input = document.getElementById('portalNameInput');
    const display = document.getElementById('portal-title');
    
    if (input && input.value.trim() !== "") {
        const newName = input.value;
        if (display) display.innerText = newName + " Dashboard";
        alert('Nama portal berhasil diubah menjadi: ' + newName);
    } else {
        alert('Silakan masukkan nama portal terlebih dahulu.');
    }
}

// 4. Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("CSTPortal Script Loaded Successfully");
    // Set halaman default jika perlu
    // showPage('home');
});

// End of Script
