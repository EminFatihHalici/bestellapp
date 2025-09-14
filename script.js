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
        basketRef.innerHTML += getBasketTemplate(indexBasket);

    }
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