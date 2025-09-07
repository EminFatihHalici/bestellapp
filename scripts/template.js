function getNotesHTML(dishIndex) {
    let food = dishes[dishIndex]

    return `
    
      <div class="content_restaurant_category">

                <div class="img">
                    <img class="content_restaurant_category_img" src="./assets/pictures/pizza-5275191_1280.jpg"
                        alt="">
                </div>

                <h2 id="PIZZA">Pizza</h2>

                <div class="food_content_section">
                    <div>

                        <div>
                            <h3 class="food_head">name</h3>
                        </div>

                        <div>description</div>

                        <div class="price_section">price</div>

                    </div>

                    <span class="plus_icon"></span>

                </div>


            </div>


            <div class="content_restaurant_category">

                <div class="img">
                    <img class="content_restaurant_category_img" src="./assets/pictures/pasta-663096_1280.jpg"
                        alt="Pasta">
                </div>

                <h2 id="PASTA">Pasta</h2>

                <div class="food_content_section pd_left_8">
                    <div>

                        <div>
                            <h3 class="food_head">name</h3>
                        </div>

                        <div>description</div>

                        <div class="price_section">price</div>

                    </div>
                </div>


            </div>

            <div class="content_restaurant_category">

                <div class="img">
                    <img class="content_restaurant_category_img" src="./assets/pictures/steak.jpg" alt="Steak">
                </div>

                <h2 id="STEAK">Steak</h2>

                <div class="food_content_section pd_left_8">
                    <div>

                        <div>
                            <h3 class="food_head">name</h3>
                        </div>

                        <div>description</div>

                        <div class="price_section">price</div>

                    </div>
                </div>


            </div>

            <div class="content_restaurant_category">

                <div class="img">
                    <img class="content_restaurant_category_img" src="./assets/pictures/vors_bruschetta-887336_1280.jpg"
                        alt="Vorspeise">
                </div>

                <h2 id="VORSPEISE">Vorspeise</h2>

                <div class="food_content_section pd_left_8">
                    <div>

                        <div>
                            <h3 class="food_head">name</h3>
                        </div>

                        <div>description</div>

                        <div class="price_section">price</div>

                    </div>
                </div>


            </div>

            <div class="content_restaurant_category">

                <div class="img">
                    <img class="content_restaurant_category_img" src="./assets/pictures/baklava-8709450_1280.jpg"
                        alt="Nachspeise">
                </div>

                <h2 id="NACHSPEISE">Nachspeise</h2>

                <div class="food_content_section pd_left_8">
                    <div>

                        <div>
                            <h3 class="food_head">name</h3>
                        </div>

                        <div>description</div>

                        <div class="price_section">price</div>

                    </div>
                </div>


            </div>

    
    `
}