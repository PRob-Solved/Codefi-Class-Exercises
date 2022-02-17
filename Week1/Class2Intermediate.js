function intermediateAssignment() {
    
    let foodList = document.querySelector(".food-list");


    let foodObjects = [
        {name: "Chicken Fried Steak", price: 9.95},
        {name: "Bacon Double Cheeseburger", price: 8.95},
        {name: "Taco Salad", price: 7.95}
    ];

    for (let food of foodObjects) {
        const foodData = document.createElement('li');
        foodData.innerHTML = "<li>" + food.name + "</li>";
        foodList.appendChild(foodData);
        // foodItems += "<li>" + food.name + "</li>";
    }

    foodList.innerHTML = foodItems;
}