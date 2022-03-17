var button = document.querySelector(".button");
button.addEventListener("click", updateColors);
function updateColors() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 1000000);
    document.body.style.color = "#" + Math.floor(Math.random() * 1000000);
}
button.Add;
