define(["user"], function(user){
  var mapView = {
    map: null,
    mapOptions: {
      disableDefaultUI: true,
      center: {
        // Mountain View, CA
        lat: 37.4107, 
        lng: -122.0593
      },
      zoom: 8
    },
    mapBounds: null,
    service: null,
    locations: [],

    locationFinder: function() {
      var self = this;
      // adds the single location property from bio to the locations array
      self.locations.push(user.bio.contacts.location);

      // iterates through school locations and appends each location to
      // the locations array
      for (var school in user.education.schools) {
        self.locations.push(user.education.schools[school].location);
      }

      // iterates through work locations and appends each location to
      // the locations array
      for (var job in user.work.jobs) {
        self.locations.push(user.work.jobs[job].location);
      }
    },

    pinPoster: function() {
      var self = this;
      //pinPoster(locations) takes in the array of locations created by locationFinder()
      //and fires off Google place searches for each location
      
      // creates a Google place search service object. PlacesService does the work of
      // actually searching for location data.
      var service = new google.maps.places.PlacesService(self.map);

      // Iterates through the array of locations, creates a search object for each location
      for (var place in self.locations) {

        // the search request object
        var request = {
          query: self.locations[place]
        };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
        service.textSearch(request, function(results, status){
          if (status == google.maps.places.PlacesServiceStatus.OK) {
            self.createMapMarker(results[0]);
          } else {
            console.log("Location Search Req Failed, Status:", status);
          }
        });
      }
    },

    createMapMarker: function(placeData) {
      // createMapMarker(placeData) reads Google Places search results to create map pins.
      // placeData is the object returned from search results containing information
      // about a single location.
      var self = this;
      
      // The next lines save location data from the search result object to local variables
      var lat = placeData.geometry.location.lat();  // latitude from the place service
      var lon = placeData.geometry.location.lng();  // longitude from the place service
      var name = placeData.formatted_address;   // name of the place from the place service
      var bounds = self.mapBounds;            // current boundaries of the map window

      // marker is an object with additional data about the pin for a single location
      var marker = new google.maps.Marker({
        map: self.map,
        position: placeData.geometry.location,
        title: name
      });

      // infoWindows are the little helper windows that open when you click
      // or hover over a pin on a map. They usually contain more information
      // about a location.
      var infoWindow = new google.maps.InfoWindow({
        content: name
      });

      google.maps.event.addListener(marker, 'click', function() {
        // your code goes here!
      });

      // this is where the pin actually gets added to the map.
      // bounds.extend() takes in a map location object
      bounds.extend(new google.maps.LatLng(lat, lon));
      // fit the map to the new marker
      self.map.fitBounds(bounds);
      // center the map
      self.map.setCenter(bounds.getCenter());
    },

    initializeMap: function(){
      var self = this;

      self.map = new google.maps.Map(document.getElementById('map'), self.mapOptions);

      //Sets the boundaries of the map based on pin locations
      self.mapBounds = new google.maps.LatLngBounds();

      //Array of location strings returned from locationFinder()
      self.locationFinder();
      
      //Creates pins on the map for each location
      self.pinPoster();
    }
  };

  return mapView;
});