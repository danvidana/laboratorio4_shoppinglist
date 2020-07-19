$("#form").on("submit", function( event ) {
    event.preventDefault();
    addItem($("#itemText").val());
})

$("#shoppingList").on("click", ".checkButton", function( event ) {
    let textChange = $(this).parent().find(".itemName");
    textChange.toggleClass("linethrough")
})

$("#shoppingList").on("click", ".deleteButton", function( event ) {
    $(this).parent().remove();
})

function addItem(itemName) {
    var itemText = $(`<div class="item">
        <p class="itemName">
            ${itemName}
        </p>
        <button class="checkButton" type="button">Check</button>
        <button class="deleteButton" type="button">Delete</button>
        </div>`);

    $("#shoppingList").append(itemText)
}


