define([
    "user",
    "app/bioView",
    "app/workView",
    "app/projectsView",
    "app/educationView"
  ], function(data, bioView, workView, projectsView, educationView){
    
    var resumeBuilder = {
      build: function(){
        bioView.display();
        workView.display();
        projectsView.display();
        educationView.display();
      }
    };

    return resumeBuilder;
  }
);