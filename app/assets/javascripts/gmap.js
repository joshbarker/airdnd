/* Bootstrap Css Map Fix*/
#map-container #map-canvas img {
  max-width: none;
}
/* Bootstrap Css Map Fix*/
#map-container #map-canvas label {
  width: auto; display:inline;
}

handler = Gmaps.build('Google');
handler.buildMap({ internal: {id: 'basic_map' }});