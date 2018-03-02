  //     var marker;

  // function initMap() {
      
  //       var map = new google.maps.Map(document.getElementById('map'), {
  //         center: {lat: 50.431782, lng: 30.516382},
  //         zoom: 8
  //       });

  //     }
  //   marker = new google.maps.Marker({
  //         map: map,
  //         draggable: true,
  //         animation: google.maps.Animation.DROP,
  //         position: {lat: 59.327, lng: 18.067}
  //       });
  //       marker.addListener('click', toggleBounce);
      

  //     function toggleBounce() {
  //       if (marker.getAnimation() !== null) {
  //         marker.setAnimation(null);
  //       } else {
  //         marker.setAnimation(google.maps.Animation.BOUNCE);
  //       }
  //     }


      var marker;

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 50.431782, lng: 30.516382}
        });

        marker = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 50.431782, lng: 30.516382}
        });
        marker.addListener('click', toggleBounce);
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

       var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var labelIndex = 0;

      function initialize() {
        var bangalore = { lat: 50.431782, lng: 30.516382};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: bangalore
        });

        // This event listener calls addMarker() when the map is clicked.
        google.maps.event.addListener(map, 'click', function(event) {
          addMarker(event.latLng, map);
        });

        // Add a marker at the center of the map.
        addMarker(bangalore, map);
      }

      // Adds a marker to the map.
      function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        // from the array of alphabetical characters.
        var marker = new google.maps.Marker({
          position: location,
          label: labels[labelIndex++ % labels.length],
          map: map
        });
      }

      google.maps.event.addDomListener(window, 'load', initialize);