define([
    "user",
    "app/bioView",
    "app/workView"
  ], function(data, bioView, workView){
    
    var resumeBuilder = {
      build: function(){
        bioView.render();
        workView.render();
      }
    };

    return resumeBuilder;
  }
);