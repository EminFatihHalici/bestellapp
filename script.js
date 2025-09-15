let basket = [];
let cart = [];

function init() {
    getDishIndex();
    // basketContent();
}

function getDishIndex() {
    let dishContentRef = document.getElementById('content_div')
    dishContentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        dishContentRef.innerHTML += getNotesHTML(indexDishes);
    }

}

function renderBasket() {
    let basketRef = document.getElementById('basket_food_content');
    basketRef.innerHTML = "";

    
    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
     basketRef.innerHTML += getBasketTemplate(indexBasket);
    }
}


function addOrderToBasket(indexDishes) {
    let dishName = dishes[indexDishes].name;

    switch (
        basket.findIndex((dish) => {
            return dish.name === dishName;
        })

    ) {
        case -1:
            pushToBasket(indexDishes);
            break;
    
        default:
            increaseAmount(dishName);
            break;
    }
    renderBasket();
}


function pushToBasket(indexDishes) {
    let oneDish = {
        name: dishes[indexDishes].name,
        price: dishes[indexDishes].price,
        amount: 1,
    };

    basket.push(oneDish);
}


function increaseAmount(dishName) {
    let dishInBasketIndex = basket.findIndex((dish) => {
        return dish.name === dishName;
    });

    basket[dishInBasketIndex].amount++

    renderBasket()
}

function addOneOrder(indexBasket) {
    basket[indexBasket].amount++;

    renderBasket();
}

function deleteOneOrder(indexBasket) {
    if (basket[indexBasket].amount === 1) {
        basket.splice(indexBasket, 1);
    } else {
        basket[indexBasket].amount--;
    }

    renderBasket();
}

function deleteWholeOrder(indexBasket) {
    basket.splice(indexBasket, 1);

    renderBasket();
}
