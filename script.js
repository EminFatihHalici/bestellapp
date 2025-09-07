function init() {
    renderContent();
}

function renderContent() {

    let contentDish = document.getElementById('content_div');
    for (let dishIndex = 0; dishIndex < dishes.value; dishIndex++) {
        contentDish.innerHTML += getNotesHTML(dishIndex);
    }
}
