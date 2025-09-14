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

function renderBasket(renderBasketId) {
    let basketRef = document.getElementById(renderBasketId);
    basketRef.innerHTML = "";

    for (let indexBasket = 0; indexBasket < basket.length; indexBasket++) {
        let DishPrice = basket[indexBasket].price 
                .toFixed(2)
                .concat("€");
        basketRef.innerHTML += getBasketTemplate(indexBasket, DishPrice);
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

    renderBasket('basket_food_content')
}







// //function basketContent() {
//     let basketRef = document.getElementById("basket_food_content");
//     basketRef.innerHTML = getBasket();
// //}

// //function respBasketContent() {
//     let respBasketRef = document.getElementById("respBasket");
//     respBasketRef.innerHTML = getRespBasket();
// //}

// function toggleOff() {
//     let overlayRef = document.getElementById("resp_toggle_off")

//     overlayRef.classList.toggle("d_none")
// }