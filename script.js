let basket = [];

function init() {
    renderContent();
    basketContent();
}

function renderContent() {
    let contentDish = document.getElementById('content_div');
    contentDish.innerHTML = "";

    let categories = [...new Set(dishes.map(d => d.category))];
    let html = "";

    categories.forEach(category => {
        let categoryId = `category-${category.toLowerCase()}`;

        html += `<h2 id="${categoryId}" class="category_title">${category.toUpperCase()}</h2>`;

        let filteredDishes = dishes.filter(d => d.category === category);
        filteredDishes.forEach(dish => {
            html += getNotesHTML(dish);
        });
    });

    contentDish.innerHTML = html;
}


function basketContent() {
    let basketRef = document.getElementById("basket_food_content");
    basketRef.innerHTML = getBasket();
}

function respBasketContent() {
    let respBasketRef = document.getElementById("respBasket");
    respBasketRef.innerHTML = getRespBasket();
}

function toggleOff() {
    let overlayRef = document.getElementById("resp_toggle_off")

    overlayRef.classList.toggle("d_none")
}

function pushToBasket() {
    let oneDish = {
        name: dishes[dish].name,
        price: dishes[dish].price,
        amount: 1, 
    }

    basket.push(oneDish);
}