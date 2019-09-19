// Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
let mymap = L.map('map').setView([-21.115141,55.536384], 10);


//Charger une seule zone de la map
/* let corner1 = L.latLng(-21.096192,55.310154);
let corner2 = L.latLng(-21.112207,55.284576);
let bounds = L.latLngBounds(corner1, corner2);

//les pointeurs à mettre en dessous de addTo
let firstMarker = L.marker(corner1).addTo(mymap);
let secondMarker = L.marker(corner2).addTo(mymap);*/ 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	/* bounds: bounds, */ // zoom sur une zone de la map
	id: 'mapbox.streets',
	accessToken: 'your.mapbox.access.token'
}).addTo(mymap);




//Ajout d'un popup (commentaire)
/* var popup = L.popup();

function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}

mymap.on('click', onMapClick);


//Pour nous localiser
mymap.locate({setView: true, watch: true}) /* This will return map so you can do chaining / 



            .on('locationfound', function(e){
                let marker = L.marker(e.latlng).bindPopup('BONJOUR LA RÉUNION :)');
                let circle = L.circle(e.latlng, e.accuracy/2, {
                    weight: 1,
                    color: 'blue',
                    fillColor: '#cacaca',
					fillOpacity: 0.3,
					radius: 500,
                });
                mymap.addLayer(marker);
                mymap.addLayer(circle);
            })
           .on('locationerror', function(e){
                console.log(e);
                alert("Location access denied.");
			});
let marker = L.marker([51.5, -0.09]).addTo(mymap);
 */