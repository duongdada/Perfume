const brand = ["Afnan", "AI Ambra", "Alaia Paris", "Alexander MacQueen",
    "Alexandria Fragrances", "Amouage", "Angela Ciampagna", "Anna Sui", "Argos",
    "Armaf", "Astrophil & Stella", "Atelier des Ors", "Atelier Materi", "Attar Collection",
    "Azzaro", "BDK", "Billie Eilish", "BornToStandOut", "Bottega Veneta", "Burberry", "Bnlgari", "By Kilian", "Byredo",
    "Carner Barcelona", "Carnolina Herrera", "Chanel", "Chasing Scents", "Chloé", "City Rhythm", "Clive Christian", "Creed",
    "D.S & Sugar", "D'annam", "D'Osary", "Dame Perfumely", "Dior", "Diptyque", "Dolce & Gabbana",
    "EDIT(h)", "El Ganso", "ELISIRE", "Elizabeth Arden", "Ella K", "Ermenegildo Zegna", "Escentric Molecule", "Ex nihilo",
    "Fascent", "Franck Boclet", "Frederic Malle", "French Avenue",
    "Giardini Di Toscana", "Giorgio Armani", "Givenchy", "Goti", "Gritti", "Gucci", "Guerlain", "Guy Laroche",
    "Hermes",
    "Imaginary Authors", "Initio Parfums Prives",
    "Jean Paul Gaultier", "Jimmy Choo", "Jo Malone", "Juicy Couture", "Juliette Has A Gun", "Jusbox Perfumes",
    "Kayali", "Kira Parfum",
    "L'Orchestre", "Label Perfumes", "Laboratorio Olfattivo", "Lacoste", "Lalique", "Lancome", "Lattafa", "Le Labo", "Les Liquides Imaginaires", "Les Soeurs de Noe", "Liis Fragrances", "Loewe", "Louis Vuitton",
    "Mad et Len", "Maison Alhambra", "Maison De Amalric", "Maison Francis Kurkdjian", "Maison Margiela", "Maison Matine", "Maison Rebatchi", "Mancera", "Manos Gerakinis", "Marc Jacobs", "Marie Jeanne", "Matiere Premiere", "MCM", "MDCI", "Mémoire des Sens", "Missoni", "Mizensir", "Monotheme", "Montale", "MontBlanc", "Moschino", "Mugler",
    "NARCISO RODRIGUEZ", "Nasomatto", "NISHANE",
    "Obvious", "Oddity", "ONCE", "Ormonde Jayne", "Orto Parisi",
    "Paco Rabanne", "Parfums De Marly", "Penhaligon's", "Photogenics + Co", "Polo", "Prada", "Profumum Roma",
    "Rasasi", "Roja Dove",
    "Salvatore Ferragamo", "Sospiro", "State Of Mind", "Strangers Parfumerie",
    "Tamburins", "Thameen", "The Different Company", "The Merchant of Venice", "Theodoros Kalotinis", "Thomas Kosmala", "Tom Ford", "Trudon", "Trussardi",
    "Ultra Male", "Unique E Luxury",
    "Valentino", "Van Cleef & Arpels", "Versace", "Viktor & Rolf",
    "Xerjoff",
    "Yves Saint Laurent",
    "Zoologist",
]
const brandEl = document.querySelector(".brand-list");
for (let i = 0; i < brand.length; i++) {
    const listbrand = brand[i]

    const item = `<div class="radio-filter">
                                    <label class="custom-check">
                                        <input type="checkbox" name="checkbox" class="icus-checkbox">
                                        <span>${listbrand}</span>
                                    </label>
                                </div>`;

    brandEl.innerHTML += item;
}

// Phần thiết kế thanh giá 
const minSlider = document.querySelector(".price-slider-min");
const maxSlider = document.querySelector(".price-slider-max");
const minPrice = document.querySelector(".price-min");
const maxPrice = document.querySelector(".price-max");

function updatePriceDisplay() {
    const minValue = parseInt(minSlider.value);
    const maxValue = parseInt(maxSlider.value);

    minPrice.textContent = minValue.toLocaleString("vi-VN") + " đ";
    maxPrice.textContent = maxValue.toLocaleString("vi-VN") + " đ";
}

minSlider.addEventListener("input", function () {
    const minValue = parseInt(this.value);
    const maxValue = parseInt(maxSlider.value);

    if (minValue >= maxValue) {
        this.value = maxValue - 1000000;
    }
    updatePriceDisplay();
});

maxSlider.addEventListener("input", function () {
    const minValue = parseInt(minSlider.value);
    const maxValue = parseInt(this.value);

    if (maxValue <= minValue) {
        this.value = minValue + 1000000;
    }
    updatePriceDisplay();
})

updatePriceDisplay();

//Thiết kế phần đóng mở toggle (chervon-down)
$(function () {
    $(".fd-filter-header i").click(function () {
        const flEl = $(this).closest(".fd-filter-box");  //Sử dụng closest sẽ tối ưu hơn querySelectorAll 
        // (closest sẽ chỉ tìm đến cái hộp cần dùng chứ không như querySelectorAll là lấy tất cả cái hộp)
        flEl.find(".fd-filter-content").slideToggle(300); //Dòng này là tìm tới tất cả thằng class có tên fd-filter-content
        // rồi cho nó thu vào/hiện ra bằng cách ấn với độ trễ là 0.3s
        $(this).toggleClass("rotate");
    });
});
