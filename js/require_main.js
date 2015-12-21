requirejs.config({
  baseUrl: "js",
  paths: {
    jquery: "libs/jQuery"
  }
});

require(["resumeBuilder"], function(resumeBuilder){ 
  console.log("jQuery version: ", $.fn.jquery);
  resumeBuilder.start();
});