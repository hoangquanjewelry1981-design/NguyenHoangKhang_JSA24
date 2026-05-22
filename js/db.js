
const drinks = [
    {
        id: 1,
        name: "Coca Cola",
        type: "Chai",
        price: 15000,
        image: "./Image/coca.png",
        description: "Nước ngọt có ga mát lạnh"
    },

    {
        id: 2,
        name: "Pepsi",
        type: "Chai",
        price: 15000,
        image: "./Image/pepsi.png",
        description: "Hương vị đậm đà sảng khoái"
    },

    {
        id: 3,
        name: "Aquafina",
        type: "Chai",
        price: 10000,
        image: "./Image/aqua.jpg",
        description: "Nước suối tinh khiết"
    },

    {
        id: 4,
        name: "Trà đào",
        type: "Ly",
        price: 25000,
        image: "./Image/tradao.webp",
        description: "Trà đào thơm mát"
    },

    {
        id: 5,
        name: "Trà sữa",
        type: "Ly",
        price: 30000,
        image: "./Image/trasua.png",
        description: "Trà sữa béo thơm"
    },

    {
        id: 6,
        name: "Sprite",
        type: "Chai",
        price: 15000,
        image: "./Image/sprite.jpg",
        description: "Nước chanh có ga"
    },
    
    {
        id: 7,
        name: "Trà trái cây",
        type: "Ly",
        price: 15000,
        image: "./Image/traicay.jpg",
        description: "Thơm ngon thanh mát"
    },
    
    {
        id: 6,
        name: "Milo dằm",
        type: "Ly",
        price: 15000,
        image: "./Image/milo.jpg",
        description: "Tràn đầy năng lượng"
    }
]

// API lấy toàn bộ sản phẩm
function getAllDrinks() {
    return drinks
}

// API lấy theo id
function getDrinkById(id) {
    return drinks.find(drink => drink.id == id)
}

// API tìm theo tên
function searchDrink(keyword) {
    return drinks.filter(drink =>
        drink.name.toLowerCase()
        .includes(keyword.toLowerCase())
    )
}