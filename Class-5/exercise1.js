// Set Variables from document
var name = document.querySelector("#name").value;
var superhero = document.querySelector("#superhero").value;
var printList = document.querySelector(".printList");
var submitBtn = document.querySelector("#submitBtn");
var heroesList = JSON.parse(localStorage.getItem("heroesList")) || [];
// add the form object to the array of superheroes
function addSuperhero(event) {
    event.preventDefault();
    // add to the array
    var ident = {
        name: document.querySelector("#name").value,
        superhero: document.querySelector("#superhero").value
    };
    heroesList.push(ident);
    // Send array to localStorage
    localStorage.setItem("heroesList", JSON.stringify(heroesList));
    // Begin loop for iteration
    for (var i = 0; i < heroesList.length; i++) {
        var hero = heroesList[i];
        // remove empty objects from the array
        if (heroesList[i].name === "") {
            heroesList.splice(i, 1);
        }
        ;
        // prevent from printing arrays at each display
        if (!printList.innerHTML.includes(hero.name)) {
            printList.innerHTML += '<div class="mt-4 p-5 bg-success text-white rounded "><img src="pow.png" width="150px">' + hero.name + ' is ' + hero.superhero + '!';
        }
        else {
            document.getElementById("form").reset();
        }
        ;
    }
}
function resetForm() {
    // remove empty objects from array
    for (i = 0; i < heroesList.length; i++) {
        if (heroesList[i].name === "") {
            heroesList.splice(i, 1);
        }
        ;
    }
    ;
    // send array to localStorage
    localStorage.setItem("heroesList", JSON.stringify(heroesList));
    // reset form
    document.getElementById("form").reset();
}
function eraseData() {
    heroesList = [];
    localStorage.setItem("heroesList", JSON.stringify(heroesList));
}
// add event listeners
submitBtn.addEventListener("click", addSuperhero);
resetBtn.addEventListener("click", resetForm);
eraseBtn.addEventListener("click", eraseData);
