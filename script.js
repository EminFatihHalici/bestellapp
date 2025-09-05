function init() {
    renderContent();
}

function renderContent() {

    let contentDish = document.getElementById('content_div');
    for (let dishIndex = 0; dishIndex < dishes.length; dishIndex++) {
        contentDish.innerHTML += getNotesHTML(dishIndex);
    }
}
