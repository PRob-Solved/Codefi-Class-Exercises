(function () {
    var foodList = document.querySelector('.food-list');
    var foodObjects = [
        { name: "Chicken Fried Steak", price: 9.95 },
        { name: "Bacon Double Cheeseburger", price: 8.95 },
        { name: "Taco Salad", price: 7.95 }
    ];
    var foodItems = '';
    for (var _i = 0, foodObjects_1 = foodObjects; _i < foodObjects_1.length; _i++) {
        food = foodObjects_1[_i];
        foodItems += '<li>' + food.name + ', ' + food.price + '</li>';
    }
    foodList.innerHTML = foodItems;
})();
