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
    
    var schools = user.education.schools;
    var courses = user.education.onlineCourses;

    // populate schools
    for(var index in schools){
      var school = schools[index];

      $("#education").append(templates.HTMLschoolStart);

      // populate name & degree
      var formattedName = insert("HTMLschoolName", school.name);
      var formattedDegree = insert("HTMLschoolDegree", school.degree);
      $(".education-entry:last").append(formattedName + formattedDegree);

      // populate dates
      insertInto(".education-entry:last", "HTMLschoolDates", school.dates);

      // populate location
      insertInto(".education-entry:last", "HTMLschoolLocation", school.location);

      // populate major
      insertInto(".education-entry:last", "HTMLschoolMajor", school.majors[0]);
    }

    // populate online courses
    $("#education").append(templates.HTMLonlineClasses);

    for(var index in courses){
      var course = courses[index];

      $("#education").append(templates.HTMLschoolStart);

      // populate name & degree
      var formattedTitle = insert("HTMLonlineTitle", course.title);
      var formattedSchool = insert("HTMLonlineSchool", course.school);
      $(".education-entry:last").append(formattedTitle + formattedSchool);

      // populate dates
      insertInto(".education-entry:last", "HTMLonlineDates", course.dates);
      $(".education-entry:last").append("<br>");
    }
  }

  return {
    display: render
  };
});