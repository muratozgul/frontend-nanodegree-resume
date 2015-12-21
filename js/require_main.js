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
  resumeBuilder.start();
});