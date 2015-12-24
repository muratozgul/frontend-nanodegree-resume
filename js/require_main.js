requirejs.config({
  waitSeconds : 120, //make sure it is enough to load all gmaps scripts
  findNestedDependencies: true,
  baseUrl: "js",
  
  paths: {
    async: "libs/requirejs/async",
    jquery: "libs/jquery/jQuery",
    bootstrap: "libs/bootstrap/bootstrap.min",
    user: "data/user",
    builder: "app/resumeBuilder"
  },

  shim: {
    jquery: {
      deps: [],
      exports: "$"
    },
    bootstrap: { 
      deps: ["jquery"] 
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

require(["builder", "bootstrap"], function(resumeBuilder){
  
  var internationalizeButton = '<button id="i18n-button">Internationalize</button>';

  $(document).ready(function() {
    resumeBuilder.build();
    
    // add name i18n button
    //$("#main").append(internationalizeButton);

    // bind click listener to name i18n button
    $('#internationalize').click(function() {
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