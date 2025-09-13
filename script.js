let basket = [];
let cart = [];

function init() {
    getDishIndex();
    basketContent();
}

function getDishIndex() {
    let dishContentRef = document.getElementById('content_div')
    dishContentRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++) {
        dishContentRef.innerHTML += getNotesHTML(index);
    }

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