$(document).ready(function () {
    // Xử lý khi chọn dung tích
    $(".volume-btn").click(function () {
        $(".volume-btn").removeClass("active btn-dark").addClass("btn-outline-dark");
        $(this).removeClass("btn-outline-dark").addClass("btn-dark active");

        const stock = $(this).data("stock");
        $("#stockDisplay").text(stock + " sản phẩm");
    });

    // Hiển thị sẵn số lượng của nút được chọn mặc định (10ml)
    const defaultStock = $(".volume-btn.active").data("stock");
    $("#stockDisplay").text(defaultStock + " sản phẩm");
});