define(["app/templates", "user"], function(templates, user){
  
  // insert data into the template
  function insert(key, value){
    return templates[key].replace("%data%", value);
  }

  // append the processed template into the DOM
  function insertInto(selector, key, value){
    $(selector).append(insert(key, value));
  }
  
  function render(){
    // populate projects
    var projects = user.projects.projects;

    for(var project in projects){
      $("#projects").append(templates.HTMLprojectStart);

      // populate title
      insertInto(".project-entry:last", "HTMLprojectTitle", projects[project].title);

      // populate dates
      insertInto(".project-entry:last", "HTMLprojectDates", projects[project].dates);

      // populate description
      insertInto(".project-entry:last", "HTMLprojectDescription", projects[project].description);

      // populate project images if any
      if(projects[project].images && projects[project].images.length > 0){
        for(var image in projects[project].images){
          insertInto(".project-entry:last", "HTMLprojectImage", projects[project].images[image]);
        }
      }
    }
  }

  return {
    display: render
  };
});