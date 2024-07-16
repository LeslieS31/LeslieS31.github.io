//19.4326 , -99.1332
let map= L.map("map",{
  center: [19.4326, -99.1332],
  zoom:15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
