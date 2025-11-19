// breadcrumb.js
function setBreadcrumb() {
    const breadcrumbList = document.getElementById('breadcrumb-list');
    if (!breadcrumbList) return;

    const currentPath = window.location.pathname.split("/").pop();

    const pageNames = {
        "collection.html": "Bộ sưu tập nước hoa",
        "detail.html": "Chi tiết sản phẩm",
        "login.html": "Đăng nhập",
        "register.html": "Đăng ký",
        "admin.html": "Trang quản trị",
        "cart.html": "Giỏ hàng"
    };

    breadcrumbList.innerHTML = `
        <li class="breadcrumb-item">
            <a href="../index.html">Trang chủ</a>
        </li>
        <li class="breadcrumb-separator">
            <i class="fa-solid fa-chevron-right"> </i>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
            ${pageNames[currentPath]}
        </li>
    `;
}
