function getNotesHTML(dish) {
    return `
        <div class="dish">
            <h3 class="dish-name">${dish.name}</h3>
            <p class="dish-description">${dish.description}</p>
            <p class="dish-price"><strong>${dish.price.toFixed(2)} €</strong></p>
             <button class="hinzufügen">+</button>
        </div>

    `;
}