//json source:
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";

//loop through json data and establish a marker and popup at each coordinate
d3.json(queryUrl, function(data) {

    for (var i = 0; i < data.length; i++) {
        var location = data[i];
        L.marker([location.geometry.coordinates[1], location.geometry.coordinates[0]])
        .bindPopup("<h1>Earthquake at: " + location.properties.place + "</h1> <hr> <h3>Magnitude: " + location.properties.mag + "</h3>")
          .addTo(myMap);
    }
});
//create map
var myMap = L.map("map", {
        center: [30.27, -97.74],
        zoom: 4,
});
  
// Adding a tile layer (the background map image) to our map
L.tileLayer(
    "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?" +
      "access_token=[access_token]"
).addTo(myMap);

