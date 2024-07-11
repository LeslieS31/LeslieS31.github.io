console.log("JS File was loaded")

//35.21665 N, 80.831473 W -> 35.21665, -80.831473

let map= L.map("map",{
  center:[35.21665, -80.831473],
zoom: 8
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
