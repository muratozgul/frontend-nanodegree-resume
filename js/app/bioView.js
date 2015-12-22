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
    //populate name
    insertInto("#skills", "HTMLheaderName", user.bio.skills[index]);
    insertInto("#skills", "HTMLheaderRole", user.bio.skills[index]);

    //populate skills
    if(user.bio.skills.length > 0){
      $("#header").append(templates.HTMLskillsStart);
      for(var index in user.bio.skills){
        insertInto("#skills", "HTMLskills", user.bio.skills[index]);
      }
    }

  }

  return {
    render: render
  };
  
});