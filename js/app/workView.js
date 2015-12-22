define(["app/templates", "user"], function(templates, user){
  
  //insert data into the template
  function insert(key, value){
    return templates[key].replace("%data%", value);
  }

  //append the processed template into the DOM
  function insertInto(selector, key, value){
    $(selector).append(insert(key, value));
  }

  function render(){
    //populate jobs
    for(var job in user.work.jobs){
      $("#workExperience").append(templates.HTMLworkStart);

      //populate title
      var formattedEmployer = insert("HTMLworkEmployer", user.work.jobs[job].employer);
      var formattedTitle = insert("HTMLworkTitle", user.work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      //populate dates
      var formattedDates = insert("HTMLworkDates", user.work.jobs[job].dates);
      $(".work-entry:last").append(formattedDates);

      //populate description
      var formattedDescription = insert("HTMLworkDescription", user.work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }

  return {
    display: render
  };
  
});