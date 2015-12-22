define([
    "user",
    "app/bioView",
    "app/workView",
    "app/projectsView",
    "app/educationView",
    "app/map"
  ], function(data, bioView, workView, projectsView, educationView, mapView){
    
    var resumeBuilder = {
      build: function(){
        bioView.display();
        workView.display();
        projectsView.display();
        educationView.display();

        require(["async!http://maps.google.com/maps/api/js?libraries=places&callback=initMap"], function(){
          // once google map with all dependencies loads
          mapView.initializeMap();

          window.addEventListener('resize', function(e) {
          //Make sure the map bounds get updated on page resize
          mapView.map.fitBounds(mapView.mapBounds);
        });
        });        
        
      }
    };

    return resumeBuilder;
  }
);