console.log("JS File was loaded")

//35.216665 N, 80.831473 W -> 35.216665, -80.831473

let map= L.map("map",{
  center: [35.216665, -80.831473],
zoom: 15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  

let marker = L.marker(
  [35.216665, -80.831473], {
    title: "CPCC Central Campus"
  }
).bindPopup(`<h2>Hello from CPCC!</h2><hr><iframe width="280" height="315" src="https://www.youtube.com/embed/nKrZk6cOcEU?si=MW173h0Yr_pmQobg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);