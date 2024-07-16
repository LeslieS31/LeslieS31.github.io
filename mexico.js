//19.4326 , -99.1332
let map= L.map("map",{
  center: [19.4326, -99.1332],
  zoom:15
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// chapultepec castle coordinates 19.4204, -99.1819
L.circle([19.4204, -99.1819], {
fillColor: '#326317', 
  color: '#809e8c',
  radius:600
}).bindPopup(`<h2>Chapultepec Castle</h2><iframe width="280" height="160" src="https://www.youtube.com/embed/oFF4vxDIgEE?si=0g58ooqVeoGLFnP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`)
  .addTo(map);
