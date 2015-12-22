define(["app/templates", "user"], function(templates, user){
  
  var render = function(){
    for(var job in user.work.jobs){
      $("#workExperience").append(templates.HTMLworkStart);

      var formattedEmployer = 
      templates.HTMLworkEmployer.replace("%data%", user.work.jobs[job].employer);

      var formattedTitle = 
      templates.HTMLworkTitle.replace("%data%", user.work.jobs[job].title);

      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $(".work-entry:last").append(formattedEmployerTitle);
    }
  }

  return {
    render: render
  };
  
});