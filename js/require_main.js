requirejs.config({
  waitSeconds : 120, //make sure it is enough to load all gmaps scripts
  findNestedDependencies: true,
  baseUrl: "js",
  
  paths: {
    async: "libs/requirejs/async",
    text: "libs/requirejs/text",
    json: "libs/requirejs/json",
    jquery: "libs/jquery/jQuery",
    user: "data/user",
    builder: "app/resumeBuilder",
    GoogleMapsLoader: 'libs/requirejs/google-maps-loader'
  },

  shim: {
    jquery: {
      deps: [],
      exports: "$"
    },
    user: {
      deps: ["jquery", "data/bio", "data/education", "data/projects", "data/work"],
      exports: "user"
    },
    builder: {
      deps: ["user", "app/map"],
      exports: "builder"
    }
  }
});

//"async!http://maps.google.com/maps/api/js?libraries=places"

require(["builder", "GoogleMapsLoader"], function(resumeBuilder, GoogleMapsLoader){



  var internationalizeButton = '<button>Internationalize</button>';

  $(document).ready(function() {
    // once google map with all dependencies loads
    GoogleMapsLoader.done(function(){
      // populate sections
      resumeBuilder.build();
    }).fail(function(){
      console.error("ERROR: Google maps library failed to load");
    });

    // add name i18n button
    $("#main").append(internationalizeButton);

    // bind click listener to name i18n button
    $('button').click(function() {
      var iName = inName($('#name').html()) || function(){};
      $('#name').html(iName);  
    });
  });
  
  // Internationalize name
  function inName(name){
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + 
              name[0].slice(1).toLowerCase();

    return name.join(" ");
  }

  // The next few lines about clicks locations
  var clickLocations = [];

  function logClicks(x, y) {
    clickLocations.push({x: x, y: y});
    console.log('x location: ' + x + '; y location: ' + y);
  }

  $(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
  });
});