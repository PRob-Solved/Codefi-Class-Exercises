let button = document.querySelector(".button");

function updateColors() {
  document.body.style.background =
    "#" + Math.floor(Math.random() * 1000000);
  document.body.style.color = "#" + Math.floor(Math.random() * 100);
}

// updateColors();
button.addEventListener("click", updateColors);

      // button.Add;