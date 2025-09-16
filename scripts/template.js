function getNotesHTML(indexDishes) {
    return `
        <div class="dish">
                <div class="dish_info_text">

                    <h3 class="dish-name">${dishes[indexDishes].name}</h3>
                    <p class="dish-description">${dishes[indexDishes].description}</p>
                    <p class="dish-price"><strong>${dishes[indexDishes].price.toFixed(2)} €</strong></p>

                </div>

             <div class="button">
                <button class="hinzufügen" onclick="addOrderToBasket(${indexDishes})">+</button>
             </div>   

        </div>

    `
}


function getBasketTemplate(indexBasket) {
    let item = basket[indexBasket];
    return ` 
      <p>${item.name}</p>
            <table class="basket_order"
                <tr>
                    <td class="basket_minus_icon backgr_hover" onclick="deleteOneOrder(${indexBasket})"></td>
                    <td>${item.amount}</td>
                    <td class="basket_plus_icon backgr_hover" onclick="addOneOrder(${indexBasket})"></td>
                    <td  id="order_price_${indexBasket}"class="p_right p_left">${(item.amount * item.price).toFixed(2)}€</td>
                    <td><img class="delete_bin backgr_hover"  onclick="deleteWholeOrder(${indexBasket})" src="./assets/pictures/trash-can-10412.svg" alt="Löschen"></td>
                </tr>
            </table>
    `;
}