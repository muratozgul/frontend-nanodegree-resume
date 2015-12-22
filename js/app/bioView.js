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
    //populate name & role
    $(insert("HTMLheaderName", user.bio.name)).insertBefore("#topContacts");
    $(insert("HTMLheaderRole", user.bio.role)).insertBefore("#topContacts");

    //populate contacts
    insertInto("#topContacts", "HTMLmobile", user.bio.contacts.mobile);
    insertInto("#topContacts", "HTMLemail", user.bio.contacts.email);
    insertInto("#topContacts", "HTMLtwitter", user.bio.contacts.twitter);
    insertInto("#topContacts", "HTMLgithub", user.bio.contacts.github);
    insertInto("#topContacts", "HTMLblog", user.bio.contacts.twitter);
    insertInto("#topContacts", "HTMLlocation", user.bio.contacts.location);

    //populate picture & welcome message
    insertInto("#header", "HTMLbioPic", user.bio.biopic);
    insertInto("#header", "HTMLwelcomeMsg", user.bio.welcomeMessage);
    
    //populate skills
    if(user.bio.skills.length > 0){
      $("#header").append(templates.HTMLskillsStart);
      for(var index in user.bio.skills){
        insertInto("#skills", "HTMLskills", user.bio.skills[index]);
      }
    }
  }

  return {
    display: render
  };
  
});