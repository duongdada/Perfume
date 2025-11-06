$(document).ready(function () {
    // ẩn/hiện sidebar
    $('#toggleButton').click(function () {
        // thêm/xóa class collapsed để ẩn/hiện sidebar
        $('#sidebar').parent().toggleClass('collapsed');
    })

    debugger
    // load file ds sản phẩm, build lên html
    $.getJSON('../data/product.json', function (products) {
        console.log(products);

        let rowsHtml = '';
        // lặp qua mảng sp, và gán html cho từng dòng dữ liệu
        products.forEach(function (product) {
            rowsHtml += `
            <tr>
                <td>
                    <div class="table-cell d-flex align-items-center gap-2 ">
                        <div class="img-parent"><img
                                src="${product.img}"
                                alt=""></div>
                        <div class="product-name">${product.name}</div>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>${product.stock}</td>
                <td>${product.price}</td>
                <td> <span class="badge rounded-pill text-bg-primary">${product.isActive === true ? 'Active' : 'Inactive'}</span>
                </td>
                <td>
                    <div class="table-cell action-cell d-flex align-items-center gap-3">
                        <div class="action-button"><i class="fa-solid fa-eye"></i></div>
                        <div class="action-button"><i class="fa-solid fa-pen"></i></div>
                        <div class="action-button"><i class="fa-solid fa-trash"></i></div>
                    </div>
                </td>
            </tr>
            `;
        });

        $('#productTable tbody').html(rowsHtml);

        // submenu: collapse bootstrap
        // account menu: nav & tab bootstrap
        // pagination
        // overflow: anh gửi code sau.
    });
});