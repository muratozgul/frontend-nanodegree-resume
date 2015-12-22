requirejs.config({
  baseUrl: "js",
  
  paths: {
    text: "libs/requirejs/text",
    json: "libs/requirejs/json",
    jquery: "libs/jquery/jQuery",
    user: "data/user",
    builder: "app/resumeBuilder"
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
      deps: ["user"],
      exports: "builder"
    }
  }
});

require(["builder"], function(resumeBuilder){

  var internationalizeButton = '<button>Internationalize</button>';
  var googleMap = '<div id="map"></div>';

  $(document).ready(function() {
    // populate sections
    resumeBuilder.build();

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