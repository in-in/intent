var map;
function initialize() {
  'use strict';
  
  var myLatlng = new google.maps.LatLng(52.135610, -106.635511);

  var mapOptions = {
    zoom: 14,
    center: myLatlng,
    disableDefaultUI: true

  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(52.135024, -106.647645),
      map: map
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
