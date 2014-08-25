var map;

function initialize() {
  var mapOptions = {
    zoom: 5
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {

      $.ajax({
      	url: '/search/pharmacy.json',
      	data: { lat: position.coords.latitude, lng: position.coords.longitude},
      }).done( function(data)	 {
  		  console.log(data);
  		  f = data[0];
	      var posF = new google.maps.LatLng(f.lat ,
	                                       f.lng);

	      var infowindowF = new google.maps.InfoWindow({
	        map: map,
	        position: posF,
	        content: '' + f.name + '                   '
	      });

  	  });


      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(60, 105),
    content: content
  };

  var infowindow = new google.maps.InfoWindow(options);
  map.setCenter(options.position);
}

google.maps.event.addDomListener(window, 'load', initialize);