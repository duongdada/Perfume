// ==========================================
// LOAD DATA FROM JSON
// ==========================================
let brands = [];
let products = [];

async function loadData() {
    try {
        // Load brands
        const brandResponse = await fetch('../data/brand.json');
        brands = await brandResponse.json();

        // Load products
        const productResponse = await fetch('../data/product.json');
        products = await productResponse.json();

        renderBrands();
        renderProducts();
    } catch (error) {
        console.error('Error loading JSON data:', error);
    }
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================
function renderBrands() {
    const brandList = document.getElementById('brandList');
    brandList.innerHTML = '';

    brands.forEach(brand => {
        brandList.innerHTML += `
            <div class="radio-filter">
                <label class="custom-check">
                    <input type="checkbox" class="icus-checkbox" value="${brand}">
                    <span>${brand}</span>
                </label>
            </div>
        `;
    });
}

function renderProducts() {
    const isMobile = window.innerWidth < 992;
    const maxProducts = isMobile ? 6 : 9;
    const productList = document.getElementById('productList');

    productList.innerHTML = '';
    products.slice(0, maxProducts).forEach(product => {
        productList.innerHTML += `
            <li class="product-item">
                <div class="product-card">
                    <div class="product-card__image">
                        <img src="${product.img}" alt="${product.name}">
                    </div>
                    <div class="product-card__brand">
                        <img src="${product.brand}" alt="Brand">
                    </div>
                    <div class="product-card__overlay">
                        <a href="../pages/detail.html" class="product-card__button">Xem chi tiết</a>
                    </div>
                </div>
                <div class="product-content">
                    <a href="#" class="product-name">
                        <h3>${product.name}</h3>
                    </a>
                    <span class="product-price">${product.price}</span>
                </div>
            </li>
        `;
    });

    document.getElementById('productCount').textContent = maxProducts;
}

// ==========================================
// TOGGLE FILTER SECTIONS
// ==========================================
function toggleFilter(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('i');

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.classList.remove('rotate');
    } else {
        content.classList.add('show');
        icon.classList.add('rotate');
    }
}

// ==========================================
// TOGGLE MOBILE SIDEBAR
// ==========================================
function toggleSidebar() {
    const sidebar = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('show');
}

// ==========================================
// SEARCH BRANDS
// ==========================================
function searchBrands() {
    const input = document.getElementById('searchBrand').value.toLowerCase();
    const items = document.querySelectorAll('#brandList .radio-filter');

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? 'block' : 'none';
    });
}

// ==========================================
// PRICE RANGE
// ==========================================
const minSlider = document.querySelector('.price-slider-min');
const maxSlider = document.querySelector('.price-slider-max');
const minPrice = document.querySelector('.price-min');
const maxPrice = document.querySelector('.price-max');

function updatePriceDisplay() {
    const minValue = parseInt(minSlider.value);
    const maxValue = parseInt(maxSlider.value);

    minPrice.textContent = minValue.toLocaleString('vi-VN') + ' đ';
    maxPrice.textContent = maxValue.toLocaleString('vi-VN') + ' đ';
}

minSlider.addEventListener('input', function () {
    const minValue = parseInt(this.value);
    const maxValue = parseInt(maxSlider.value);

    if (minValue >= maxValue) {
        this.value = maxValue - 1000000;
    }
    updatePriceDisplay();
});

maxSlider.addEventListener('input', function () {
    const minValue = parseInt(minSlider.value);
    const maxValue = parseInt(this.value);

    if (maxValue <= minValue) {
        this.value = minValue + 1000000;
    }
    updatePriceDisplay();
});

updatePriceDisplay();

// ==========================================
// RESET FILTERS
// ==========================================
function resetFilters(event) {
    event.preventDefault();

    document.querySelectorAll('.icus-checkbox').forEach(checkbox => checkbox.checked = false);
    minSlider.value = 0;
    maxSlider.value = 17000000;
    updatePriceDisplay();
    document.getElementById('searchBrand').value = '';
    searchBrands();
}

// ==========================================
// CLOSE SIDEBAR ON MOBILE OUTSIDE CLICK
// ==========================================
document.getElementById('sidebarOverlay').addEventListener('click', function (e) {
    if (e.target === this && window.innerWidth < 992) {
        toggleSidebar();
    }
});

// ==========================================
// RE-RENDER ON RESIZE
// ==========================================
window.addEventListener('resize', renderProducts);

// ==========================================
// INITIAL LOAD
// ==========================================
loadData();
