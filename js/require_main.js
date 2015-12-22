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
  console.log("jQuery version: ", $.fn.jquery);
  resumeBuilder.build();

  /*
  The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. 
  Don't delete! It hooks up your code to the button you'll be appending.
  */
  // $(document).ready(function() {
  //   $('button').click(function() {
  //     var iName = inName() || function(){};
  //     $('#name').html(iName);  
  //   });
  // });

  // /*
  // The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
  // */
  // clickLocations = [];

  // function logClicks(x,y) {
  //   clickLocations.push(
  //     {
  //       x: x,
  //       y: y
  //     }
  //   );
  //   console.log('x location: ' + x + '; y location: ' + y);
  // }

  // $(document).click(function(loc) {
  //   // your code goes here!
  // });
});