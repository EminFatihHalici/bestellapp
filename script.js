function init() {
    renderContent();
}

function renderContent() {
    let contentDish = document.getElementById('content_div');
    contentDish.innerHTML = "";

    let categories = [...new Set(dishes.map(d => d.category))];
    let html = "";

    categories.forEach(category => {
        let categoryId = `category-${category.toLowerCase()}`;

        html += `<h2 id="${categoryId}" class="category-title">${category.toUpperCase()}</h2>`;

        let filteredDishes = dishes.filter(d => d.category === category);
        filteredDishes.forEach(dish => {
            html += getNotesHTML(dish);
        });
    });

    contentDish.innerHTML = html;
}