let basket = [];
let cart = [];

function init() {
    getDishIndex();
    calcSubTotalPrice("sub_total_price");
    calcTotalPrice(0, "total_price");
}

function getDishIndex() {
    let dishContentRef = document.getElementById('content_div')
    dishContentRef.innerHTML = "";

    for (let indexDishes = 0; indexDishes < dishes.length; indexDishes++) {
        dishContentRef.innerHTML += getNotesHTML(indexDishes);
    }

}

function renderBasket() {
    let normalBasket = document.getElementById("basket_food_content");
    let respBasket = document.getElementById("basket_food_content_resp");
    normalBasket.innerHTML = "";
    respBasket.innerHTML = "";

    for (let i = 0; i < basket.length; i++) {
        let itemHTML = getBasketTemplate(i);
        normalBasket.innerHTML += itemHTML;
        respBasket.innerHTML += itemHTML;
    }

    calcSubTotalPrice('sub_total_price');
    calcSubTotalPrice('sub_total_price_resp');
}   
// function renderBasket(renderBasketId) {
//     let basketRef = document.getElementById(renderBasketId);
//     basketRef.innerHTML = "";


//     for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
//         basketRef.innerHTML += getBasketTemplate(indexBasket);
//     }

//     if (renderBasketId === 'basket_food_content') {
//         calcSubTotalPrice('sub_total_price');
//     }

// }


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

    renderBasket();
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
    let deliveryCosts = 5;
    let totalPriceNum = 0;

    if (basket.length > 0) {
        totalPriceNum = currentOrderPrice + deliveryCosts;
    } else {
        totalPriceNum = 0;
    }

    let totalPrice = totalPriceNum.toFixed(2) + "€";
    totalPriceRef.innerHTML = `${totalPrice}`;
}

function clearBasket() {
    let subTotalPriceRef = document.getElementById("sub_total_price");
    let totalPriceRef = document.getElementById("total_price");

    basket = [];
    subTotalPriceRef.innerHTML = `0,00€`;
    totalPriceRef.innerHTML = `0,00€`;
    renderBasket();;
}

function toggleRespBasket() {
    let respBasketDiv = document.getElementById("respBasket");
    respBasketDiv.classList.toggle("basket_responsive_open");
    respBasketDiv.classList.toggle("basket_responsive_closed");
}

// function checkBasket() {
//     let checkBasketTotalRef = document.getElementById("total_price");
//     let checkRespBasketTotalRef = document.getElementById("total_price_resp");

//     let checkBasketSubRef = document.getElementById("sub_total_price");
//     let checkRespBasketSubRef = document.getElementById("sub_total_price_resp");

//     let currentOrderPrice = 0;

//     for (let index = 0; index < basket.length; index++) {
//         currentOrderPrice += basket[index].price * basket[index].amount;
//     }

//     let subTotal = currentOrderPrice.toFixed(2) + "€";

//     let deliveryCosts = 5;
//     let totalPriceNum = basket.length > 0 ? currentOrderPrice + deliveryCosts : 0;
//     let total_price =totalPriceNum.toFixed(2) + "€";

//     checkBasketSubRef.innerHTML = `${subTotal}`;
//   checkRespBasketSubRef.innerHTML = `${subTotal}`;

//   checkBasketTotalRef.innerHTML = `${totalPrice}`;
//   checkRespBasketTotalRef.innerHTML = `${totalPrice}`;
// }