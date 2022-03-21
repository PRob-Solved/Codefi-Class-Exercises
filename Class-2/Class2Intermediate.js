(function () {
    var foodList = document.querySelector('.food-list');
    var foodObjects = [
        { name: "Chicken Fried Steak", price: 9.95 },
        { name: "Bacon Double Cheeseburger", price: 8.95 },
        { name: "Taco Salad", price: 7.95 }
    ];
    var foodItems = '';
    for (var i = 0; i < foodObjects.length; i++) {
        foodItems += '<li>' + foodObjects[i].name + ', ' + foodObjects[i].price + '</li>';
    }
    // for (food of foodObjects) {
    //     foodItems += '<li>' + food.name + ', ' + food.price + '</li>'
    //   }
    foodList.innerHTML = foodItems;
})();
