var mascotsList = document.querySelector(".mascots-list");
var mascots = [
    {
        name: "University of Arkansas",
        type: "Razorback",
        color1: "red",
        color2: "white"
    },
    {
        name: "University of Kentucky",
        type: "Wildcat",
        color1: "blue",
        color2: "white"
    },
];
for (var _i = 0, mascots_1 = mascots; _i < mascots_1.length; _i++) {
    var mascot = mascots_1[_i];
    var mascotData = document.createElement("div");
    mascotData.classList.add("jumbotron", "text-center");
    mascotData.innerText = "The ".concat(mascot.name, " mascot is a ").concat(mascot.type, " and their colors are ").concat(mascot.color1, " and ").concat(mascot.color2, ".");
    mascotsList.appendChild(mascotData);
}
// let i = 0;
// do {
//   const mascot = mascots[i];
//   const mascotData = document.createElement('div');
//   mascotData.classList.add('jumbotron', 'text-center');
//   mascotData.innerText = `The ${mascot.name} mascot is a ${mascot.type} and their colors are ${mascot.color1} and ${mascot.color2}.`;
//   mascotsList.appendChild(mascotData);
//   i++;
// } while (i < mascots.length);
