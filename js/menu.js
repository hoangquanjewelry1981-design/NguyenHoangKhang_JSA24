const drinkList = document.getElementById("drink-list")
const drinkDetail = document.getElementById("drink-detail")

// render card
drinks.forEach(drink => {
    drinkList.innerHTML += `    
    <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm">
            <img src="${drink.image}" class="card-img-top" style=" height:250px; object-fit:contain; background:#f8f9fa; padding:10px;">
            <div class="card-body d-flex flex-column">
                <h5>${drink.name}</h5>
                <p class="flex-grow-1"> ${drink.description}</p>
                <h6 class="text-danger mb-3">${drink.price} VNĐ </h6>
                <button class="btn btn-primary w-100" onclick="showDetail(${drink.id})"> Xem chi tiết </button>
            </div>
        </div>
    </div>
    `
})


// function hiện chi tiết
function showDetail(id) {
    // tìm sản phẩm
    const drink = drinks.find(item => item.id == id)
    // render chi tiết
    drinkDetail.innerHTML = `
        <div class="card shadow-lg p-4">
            <div class="row align-items-center">
                <div class="col-md-4 text-center">
                    <img src="${drink.image}" style=" width:250px; height:250px; object-fit:contain;">
                </div>
                <div class="col-md-8">
                    <h2>${drink.name}</h2>
                    <h4 class="text-danger"> ${drink.price} VNĐ </h4>
                    <p class="mt-3"> ${drink.description} </p>
                    <h5>Loại:</h5>
                    <p>${drink.type}</p>
                    <a href="combo.html" class="btn btn-success">
                        Xem combo
                    </a>
                    <a href="booking.html" class="btn btn-danger">
                        Mua ngay
                    </a>
                </div>
            </div>
        </div>
    `
    // tự cuộn xuống
    drinkDetail.scrollIntoView({
        behavior: "smooth"
    })
}