const mascotsList = document.querySelector('.mascots-list');
const mascots = [
  { name: 'University of Arkansas', type: 'Razorback', color1: 'red', color2: 'white' },
  { name: 'University of Kentucky', type: 'Wildcat', color1: 'blue', color2: 'white' }
];

for (let mascot of mascots) {
      const mascotData = document.createElement('div');
      mascotData.classList.add('jumbotron', 'text-center');
      mascotData.innerText = `The ${mascot.name} mascot is a ${mascot.type} and their colors are ${mascot.color1} and ${mascot.color2}.`;
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