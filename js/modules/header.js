document.addEventListener("DOMContentLoaded", function () {
    const menuEl = document.querySelector('.header-menu');
    const toggleBtn = document.getElementById('toggleButton');

    // Khi bấm nút bar
    toggleBtn.addEventListener('click', function () {
        menuEl.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        // Nếu quay lại màn hình lớn hơn 576px
        if (window.innerWidth > 576) {
            // Tự động đóng menu nếu đang mở
            menuEl.classList.remove('active');
        }
    });
});
