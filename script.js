const produk = [
    { id: 1, nama: "Christ Verra Casual Men's Watches CV C 64158G-36 BLK/RED", harga: "Rp910.000", gambar: "https://i.imgur.com/NPL7mjR.jpeg" },
    { id: 2, nama: "Berlian Moissanite De Luxe Earring", harga: "Rp1.256.000", gambar: "https://i.imgur.com/GutjET6.jpeg" },
    { id: 3, nama: "HUAWEI MATEPAD SE 4/64GB GRAPHITE BLACK", harga: "Rp2.799.000", gambar: "https://i.imgur.com/o2M8vhX.jpeg" }, 
    { id: 4, nama: "Marley True Wireless Earphone Redemption ANC - Signature Black", harga: "Rp3.700.000", gambar: "https://i.imgur.com/Kjzh33m.jpeg" },
    { id: 5, nama: "Theo Marelie Cot Bed - Tempat Tidur Anak (Putih)", harga: "Rp6.540.000", gambar: "https://i.imgur.com/bI6I0y7.jpeg" },
    { id: 6, nama: "Chrome Industries Buran III Messenger Bag Black XRF", harga: "Rp8.110.000", gambar: "https://i.imgur.com/TjjazpH.jpeg" },
    { id: 7, nama: "APPLE IPHONE 16 PRO MAX 512GB WHITE TITANIUM", harga: "Rp29.799.000", gambar: "https://i.imgur.com/U4kjPfm.jpeg" },
    { id: 8, nama: "HUAWEI MateBook 14 2021 i5 8GB/512GB SSD Space Gray", harga: "Rp83.999.000", gambar: "https://i.imgur.com/DoBgMnR.jpeg" },
    { id: 9, nama: "Stokke Complete Connect Stroller YOYO² 6+ White/Black", harga: "Rp8.399.000", gambar: "https://i.imgur.com/Vi8hR85.jpeg" },
    { id: 10, nama: "Mothercare Ziba Baby Car Seat Black Grey", harga: "Rp1.734.200", gambar: "https://i.imgur.com/ZO079ru.jpeg" }
];

const produkContainer = document.querySelector('.produk-container');

// Looping untuk menambahkan produk ke dalam halaman
produk.forEach(item => {
    const produkDiv = document.createElement('div');
    produkDiv.classList.add('produk');
    
    produkDiv.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}" onerror="this.src='https://via.placeholder.com/250?text=No+Image'" />
        <h3>${item.nama}</h3>
        <p>${item.harga}</p>
        <button onclick="beliProduk(${item.id})">Beli</button>
    `;
    produkContainer.appendChild(produkDiv);
});

let keranjang = [];

// Fungsi untuk membeli produk
function beliProduk(id) {
    const produkTerpilih = produk.find(item => item.id === id);
    if (produkTerpilih) {
        keranjang.push(produkTerpilih);
        alert(`Produk "${produkTerpilih.nama}" telah ditambahkan ke keranjang.`);
        console.log("Keranjang Anda:", keranjang);
    } else {
        alert("Produk tidak ditemukan.");
    }
}
