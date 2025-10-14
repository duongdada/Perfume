const products = [
    {
        name: "Creed Aventus",
        price: "8.200.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/aventus-for-him.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/creed-logo-1.png"
    },
    {
        name: "Dior Sauvage EDP",
        price: "3.950.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2025/06/sauvage-edp.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/dior-logo-1.png"
    },
    {
        name: "Tom Ford Oud Wood",
        price: "6.400.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/oud-wood.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/Tom-Ford-1.png"
    },
    {
        name: "YSL La Nuit De L'homme",
        price: "3.850.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/ysl-la-nuit-de-l-homme.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/Yves-Saint-Laurent-logo-1.png"
    },
    {
        name: "Parfums De Marley",
        price: "4.500.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/greenley.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/Parfums-De-Marly-logo-1.png"
    },
    {
        name: "Versace Eros",
        price: "2.950.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/eros-edt.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/Versace-logo-1.png"
    },
    {
        name: "Maison Francis Kurkdjian Baccarat Rouge 540",
        price: "8.900.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/08/spct-MFK-Baccarat-Rouge-540-EDP-1.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/08/maison-francis-kurkdjian-logo-1.png"
    },
    {
        name: "Le Labo Santal 33",
        price: "6.000.000 đ",
        img: "https://lanperfume.com/wp-content/uploads/2024/07/gaiac-10-1.jpg",
        brand: "https://lanperfume.com/wp-content/uploads/2024/07/le-labo-logo-1.png"
    }
];

const productEl = document.querySelector(".product-list");

for (let i = 0; i < products.length; i++) {
    const listproduct = products[i];

    const item = `
        <li class="product-item">
            <div class="product-card">
                <div class="product-card__image">
                    <img src="${listproduct.img}" alt="${listproduct.name}">
                </div>

                <div class="product-card__brand">
                    <img src="${listproduct.brand}" alt="Thương hiệu">
                </div>

                <div class="product-card__overlay">
                    <a href="#" class="product-card__link"></a>
                    <a href="#" class="product-card__button">Xem chi tiết</a>
                </div>
            </div>

            <div class="product-content">
                <a href="#" class="product-name">
                    <h3>${listproduct.name}</h3>
                </a>
                <span class="product-price">
                    <span>${listproduct.price}</span>
                </span>
            </div>
        </li>`;

    productEl.innerHTML += item;
}
