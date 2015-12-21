define(["user"], function(data){
  var resumeBuilder = {
    start: function(){
      console.log("resumeBuilder starting...");
      console.log("Bio:", data.bio);
      console.log("Edu:", data.education);
      console.log("Proj:", data.projects);
      console.log("Work:", data.work);
    }
  };

  return resumeBuilder;
});