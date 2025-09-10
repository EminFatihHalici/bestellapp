function getNotesHTML(dish) {
    return `
        <div class="dish">
                <div class="dish_info_text">

                    <h3 class="dish-name">${dish.name}</h3>
                    <p class="dish-description">${dish.description}</p>
                    <p class="dish-price"><strong>${dish.price.toFixed(2)} €</strong></p>

                </div>

             <div class="button">
                <button class="hinzufügen">+</button>
             </div>   

        </div>

    `;
}

function getBasket() {
    return `
    
        <h3>Fülle deinen Warenkorb</h3>
        Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.
    
    `
}

function getRespBasket() {
    return `
    
        <div class="basket_stickyrail">

                <div class="basket">
                    <h2 class="basket_head">Warenkorb</h2>
                </div>

                <div class="basket_food_content" id="basket_food_content"></div>

                <table class="basket_order">
                    <tr>
                        <td class="basket_minus_icon"></td>
                        <td>StückX</td>
                        <td class="basket_plus_icon"></td>
                        <td class="p_right p_left">Preis€</td>
                        <td><img class="delete_bin" src="./assets/pictures/trash-can-10412.svg" alt="Löschen"></td>
                    </tr>

                </table>



                <div class="total">
                    <div class="p_top">Zwischensumme</div>
                    <div class="p_top">Preis€</div>
                </div>

                <div class="total">
                    <div class="p_top">Lieferkosten</div>
                    <div class="p_top">Preis€</div>
                </div>

                <div class="total">
                    <div class="p_top total_sum">Gesamt</div>
                    <div class="p_top total_sum">Preis€</div>
                </div>

            </div>
    
    `
}