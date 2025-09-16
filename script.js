let basket = [];
let cart = [];

function init() {
    getDishIndex();
}

function getDishIndex() {
    let dishContentRef = document.getElementById('content_div')
    dishContentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        dishContentRef.innerHTML += getNotesHTML(indexDishes);
    }

}

function renderBasket(renderBasketId) {
    let basketRef = document.getElementById(renderBasketId);
    basketRef.innerHTML = "";


    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        basketRef.innerHTML += getBasketTemplate(indexBasket);
    }

    if (renderBasketId === 'basket_food_content') {
        calcSubTotalPrice('sub_total_price');
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
    renderBasket('basket_food_content');
    renderBasket('respBasket');
    calcSubTotalPrice('sub_total_price');
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

    renderBasket('basket_food_content');
    renderBasket('respBasket');
}

function addOneOrder(indexBasket) {
    basket[indexBasket].amount++;

    renderBasket('basket_food_content');
    renderBasket('respBasket');
}

function deleteOneOrder(indexBasket) {
    if (basket[indexBasket].amount === 1) {
        basket.splice(indexBasket, 1);
    } else {
        basket[indexBasket].amount--;
    }

    renderBasket('basket_food_content');
    renderBasket('respBasket');
}

function deleteWholeOrder(indexBasket) {
    basket.splice(indexBasket, 1);

    renderBasket('basket_food_content');
    renderBasket('respBasket');
}

function calcDishesPrice(indexBasket) {
    let calcDishesPriceRef = document.getElementById(`order_price_${indexBasket}`);

    calcDishesPriceRef.innerHTML = "";

    let dishPrice = basket[indexBasket].amount * basket[indexBasket].price;

    calcDishesPriceRef.innerHTML = dishPrice.toFixed(2) + "€";

    calcSubTotalPrice('sub_total_price');
}

function calcSubTotalPrice(SubId) {
    let subTotalPriceRef = document.getElementById(SubId);
    let currentOrderPrice = 0;

    for (let indexCosts = 0; indexCosts < basket.length; indexCosts++) {
        currentOrderPrice += basket[indexCosts].price * basket[indexCosts].amount;
    }
        let subTotalPrice = currentOrderPrice.toFixed(2) + "€";
        subTotalPriceRef.innerHTML = `${subTotalPrice}`;

        calcTotalPrice(currentOrderPrice, 'total_price');
}


function calcTotalPrice(currentOrderPrice, id) {
    let totalPriceRef = document.getElementById(id);
    let totalPriceNum = currentOrderPrice + 5;
    let totalPrice = totalPriceNum.toFixed(2) + "€";
    totalPriceRef.innerHTML = "";
    totalPriceRef.innerHTML = `${totalPrice}`;
}
