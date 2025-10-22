// vẽ dot
//lấy số lượng ảnh
const carouselContainer = document.getElementById("heroCarousel"); //lấy id heroCarousel
const carouselItems = carouselContainer.querySelectorAll(".carousel-item"); //lấy thg con
const totalItems = carouselItems.length; //lấy độ dài để lặp qua tính dot

const dotContainer = document.getElementById("carouselDots");
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) {
        dot.classList.add("active");
    }

    //lắng nghe sk dot click
    dot.addEventListener("click", () => {
        goToSlide(i);
    });

    dotContainer.appendChild(dot);
}

const goToSlide = (index) => {
    //reset active class
    carouselItems.forEach((item) => item.classList.remove("active"));
    const dots = dotContainer.querySelectorAll(".dot");
    dots.forEach((dot) => dot.classList.remove("active"));
    // set active class cho item
    carouselItems[index].classList.add("active");
    dots[index].classList.add("active");
};

setInterval(() => {
    autoPlay();
}, 7000);

// auto play
const autoPlay = () => {
    //find current active index
    const currentIndex = Array.from(carouselItems).findIndex((item) =>
        item.classList.contains("active")
    );
    let targetIndex = currentIndex + 1;
    // set next index to active
    if (targetIndex >= totalItems) {
        targetIndex = 0;
    }
    goToSlide(targetIndex);
};