(function() {

    let foodList = document.querySelector('.food-list')
      
    let foodObjects = [
        {name: "Chicken Fried Steak", price: 9.95},
        {name: "Bacon Double Cheeseburger", price: 8.95},
        {name: "Taco Salad", price: 7.95}
        ];
        
    
    let foodItems = ''
      
    for (food of foodObjects) {
        foodItems += '<li>' + food.name + ', ' + food.price + '</li>'
      }
      
    foodList.innerHTML = foodItems
    
    })();
