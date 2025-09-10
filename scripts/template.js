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