const daftarKatalog = [
    { nama: "Ichitan", kategori: "fnb", label: "Minuman Dingin", harga: "Rp 9.000 (9k)" }, 
    { nama: "Ultramilk", kategori: "fnb", label: "Minuman Susu", harga: "Rp 9.000 (9k)" }, 
    { nama: "Good Day", kategori: "fnb", label: "Minuman Kopi", harga: "Rp 7.000 (7k)" }, 
    { nama: "Pocari Sweat", kategori: "fnb", label: "Minuman Isotonik", harga: "Rp 7.000 (7k)" }, 
    { nama: "Floridina", kategori: "fnb", label: "Minuman Jeruk", harga: "Rp 5.000 (5k)" }, 
    { nama: "Teh Pucuk", kategori: "fnb", label: "Minuman Teh", harga: "Rp 5.000 (5k)" },
    { nama: "Prof", kategori: "fnb", label: "Air Mineral", harga: "Rp 4.000 (4k)" }, 
    { nama: "Kopi ABC", kategori: "fnb", label: "Minuman Kopi", harga: "Rp 4.000 (4k)" }, 
    { nama: "Golda Coffee", kategori: "fnb", label: "Minuman Kopi", harga: "Rp 4.000 (4k)" },
    { nama: "Milku", kategori: "fnb", label: "Minuman Susu", harga: "Rp 4.000 (4k)" }, 
    { nama: "Nextar", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 3.000 (3k)" }, 
    { nama: "Choco Pie", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 3.000 (3k)" }, 
    { nama: "Kalpa", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 3.000 (3k)" }, 
    { nama: "Beng-Beng", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 3.000 (3k)" }, 
    { nama: "Siip", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 1.000 (1k)" }, 
    { nama: "Triks", kategori: "fnb", label: "Makanan / Snack", harga: "Rp 1.000 (1k)" }, 
    { nama: "Print / FC Hitam Putih", kategori: "percetakan", label: "Percetakan Dokumen", harga: "Rp 500 / lbr" }, 
    { nama: "Print / FC Warna", kategori: "percetakan", label: "Percetakan Dokumen", harga: "Rp 1.000 (1k)" }, 
    { nama: "Print / FC Amplop", kategori: "percetakan", label: "Percetakan Dokumen", harga: "Rp 1.000 (1k)" }, 
    { nama: "Jilid Dokumen / Laporan", kategori: "percetakan", label: "Penjilidan", harga: "Rp 2.000 (2k)" }, 
    { nama: "Print Stiker", kategori: "percetakan", label: "Percetakan Khusus", harga: "Rp 3.000 (3k)" },
    { nama: "Print / FC Sertifikat", kategori: "percetakan", label: "Percetakan Khusus", harga: "Rp 3.000 (3k)" }, 
    { nama: "Jasa Pengetikan", kategori: "percetakan", label: "Dokumen & Makalah", harga: "Mulai Rp 3.000" }, 
    { nama: "Tip-X Biru", kategori: "konsinyasi", label: "ATK Mahasiswa", harga: "Rp 7.000 (7k)" }, 
    { nama: "Tip-X Merah", kategori: "konsinyasi", label: "ATK Mahasiswa", harga: "Rp 5.000 (5k)" }, 
    { nama: "Tissu Besar", kategori: "konsinyasi", label: "Kebutuhan Harian", harga: "Rp 4.000 (4k)" }, 
    { nama: "Pulpen", kategori: "konsinyasi", label: "ATK Mahasiswa", harga: "Rp 3.000 (3k)" }, 
    { nama: "Tissu Kecil", kategori: "konsinyasi", label: "Kebutuhan Harian", harga: "Rp 2.000 (2k)" }, 
    { nama: "Peniti", kategori: "konsinyasi", label: "Perlengkapan", harga: "Rp 2.000 (2k)" }, 
    { nama: "Titip Jual Produk (Konsinyasi)", kategori: "konsinyasi", label: "Mitra Mahasiswa", harga: "Hubungi Admin" },
    { nama: "Desain Grafis", kategori: "kreatif", label: "Jasa Kreatif", harga: "Sesuai Request" }, 
    { nama: "Photo & Video Editing", kategori: "kreatif", label: "Jasa Kreatif", harga: "Sesuai Request" }, 
    { nama: "Pembuatan Web Sederhana", kategori: "kreatif", label: "Layanan Web IT", harga: "Mulai Rp 50k" }, 
    { nama: "Instalasi OS, App, dll", kategori: "kreatif", label: "Teknisi IT", harga: "Mulai Rp 25k" }, 
    { nama: "Konsultasi Laptop / PC", kategori: "kreatif", label: "Teknisi IT", harga: "Gratis / Terjangkau" } 
];

const detailUnitUsaha = {
    fnb: {
        judul: "Unit F&B (Food & Drink) ITS",
        deskripsi: "Unit usaha penyedia jajanan, makanan ringan, dan minuman segar di sekretariat IT-Solution HMP-TI. Cocok untuk menemani waktu istirahat kuliah atau mengerjakan tugas",
        layanan: "Minuman dingin/kemasan (Ichitan, Good Day, Ultramilk, Pocari, Kopi ABC, dll) & Snack (Nextar, Choco Pie, Beng-Beng, Kalpa, Siip, Triks).",
        jam: "Senin - Sabtu | 08.00 - 17.00 WITA (Buka langsung di Stand ITS)"
    },
    percetakan: {
        judul: "Unit Percetakan & Dokumen ITS",
        deskripsi: "Solusi cepat dan hemat untuk cetak tugas kuliah, laporan praktikum, makalah, hingga pencetakan stiker dan sertifikat kepanitiaan.",
        layanan: "Print/FC Hitam Putih (500), Print Warna (1k), Print Amplop (1k), Jilid (2k), Print Stiker (3k), Print Sertifikat (3k), & Jasa Pengetikan.",
        jam: "Senin - Sabtu | 08.00 - 17.00 WITA (Bisa kirim file via WA/DM sebelum dicetak)"
    },
    konsinyasi: {
        judul: "Unit Konsinyasi & ATK Mahasiswa",
        deskripsi: "Menyediakan kebutuhan Alat Tulis Kantor (ATK) darurat saat kuliah sekaligus membuka wadah bagi mahasiswa yang ingin menitipkan produk jualannya di stand ITS.",
        layanan: "Penjualan Pulpen, Tip-X Merah/Biru, Tissu, Peniti, serta pendaftaran mitra Konsinyasi Mahasiswa.",
        jam: "Senin - Sabtu | 08.00 - 17.00 WITA"
    },
    kreatif: {
        judul: "Unit Jasa Kreatif & Solusi IT",
        deskripsi: "Dikelola langsung oleh anggota HMP-TI yang berpengalaman di bidang desain, multimedia, pemrograman web, dan perawatan perangkat keras komputer.",
        layanan: "Desain Grafis, Photo & Video Editing, Pembuatan Web Sederhana, Instalasi OS/Aplikasi, serta Konsultasi Laptop/PC.",
        jam: "Senin - Minggu | Pemesanan fleksibel melalui DM Instagram @its_hmpti"
    }
};

function tampilkanHarga(kategoriFilter = "semua") {
    const container = document.getElementById("pricing-container");
    if (!container) return;

    container.innerHTML = "";

    const dataTersaring = kategoriFilter === "semua"
        ? daftarKatalog
        : daftarKatalog.filter(item => item.kategori === kategoriFilter);

    dataTersaring.forEach((item, index) => {
        const elemen = document.createElement("div");
        elemen.className = "price-item";
        elemen.style.animationDelay = `${index * 0.04}s`;
        elemen.innerHTML = `
            <div>
                <span class="price-item-name">${item.nama}</span>
                <span class="price-item-sub">${item.label}</span>
            </div>
            <span class="price-badge">${item.harga}</span>
        `;
        container.appendChild(elemen);
    });
}

function filterMenu(kategori, tombolElemen = null) {
    tampilkanHarga(kategori);

    if (tombolElemen) {
        const semuaTombol = document.querySelectorAll(".filter-btn");
        semuaTombol.forEach(btn => btn.classList.remove("active"));
        tombolElemen.classList.add("active");
    }
}

function bukaModal(kodeUnit) {
    const data = detailUnitUsaha[kodeUnit];
    const modal = document.getElementById("infoModal");
    if (!data || !modal) return;

    document.getElementById("modalTitle").textContent = data.judul;
    document.getElementById("modalDesc").textContent = data.deskripsi;
    document.getElementById("modalLayanan").textContent = data.layanan;
    document.getElementById("modalJam").textContent = data.jam;

    modal.classList.add("show");
}

function tutupModal() {
    const modal = document.getElementById("infoModal");
    if (modal) {
        modal.classList.remove("show");
    }
}

window.addEventListener("click", function(event) {
    const modal = document.getElementById("infoModal");
    if (modal && event.target === modal) {
        tutupModal();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const kategoriUrl = params.get("kategori") || "semua";

    tampilkanHarga(kategoriUrl);

    if (kategoriUrl !== "semua") {
        const semuaTombol = document.querySelectorAll(".filter-btn");
        semuaTombol.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-kategori") === kategoriUrl) {
                btn.classList.add("active");
            }
        });
    }
});