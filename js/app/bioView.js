define(["app/templates", "user"], function(templates, user){

  //insert data into the template
  function insert(key, value){
    return templates[key].replace("%data%", value);
  }

  //append the processed template into the DOM
  function appendInto(selector, key, value, colSpanArr){
    if(colSpanArr){
      $(selector).append(columnify(insert(key, value), colSpanArr));  
    } else {
      $(selector).append(insert(key, value));  
    }
  }

  //preprend the processed template into the DOM
  function prependInto(selector, key, value){
    $(selector).prepend(insert(key, value));
  }

  //wrap in bootstrap column
  function columnify(value, colSpanArr){
    var classString = colSpanArr.map(function(data){
      return "col-" + data;
    }).join(" ");

    return '<div class="' + classString + '">' + value + '</div>';
  }
  
  function render(){
    //populate name & role
    $("#header").prepend( columnify(templates["HTMLseperator"], ["xs-12"]) );

    var nameAndRole = insert("HTMLheaderName", user.bio.name) + insert("HTMLheaderRole", user.bio.role);
    $("#header").prepend( columnify(nameAndRole, ["xs-12"]) );

    //populate header contacts
    appendInto("#topContacts", "HTMLmobile", user.bio.contacts.mobile);
    appendInto("#topContacts", "HTMLemail", user.bio.contacts.email);
    appendInto("#topContacts", "HTMLtwitter", user.bio.contacts.twitter);
    appendInto("#topContacts", "HTMLgithub", user.bio.contacts.github);
    //appendInto("#topContacts", "HTMLblog", user.bio.contacts.twitter);
    appendInto("#topContacts", "HTMLlocation", user.bio.contacts.location);

    //populate picture & welcome message
    //var aboutMeSection = insert("HTMLbioPic", user.bio.biopic) + insert("HTMLwelcomeMsg", user.bio.welcomeMessage);
    //$("#header").append( columnify(aboutMeSection, ["md-12"]) );
    appendInto("#header", "HTMLbioPic", user.bio.biopic, ["xs-6", "sm-3", "md-3", "lg-3"]);
    appendInto("#header", "HTMLwelcomeMsg", user.bio.welcomeMessage, ["xs-6", "sm-9", "md-9", "lg-9"]);
    
    //populate skills
    if(user.bio.skills.length > 0){
      //$("#header").append(templates.HTMLskillsStart);
      appendInto("#header", "HTMLskillsStart", null, ["xs-12", "sm-9", "md-9", "lg-9"]);
      for(var index in user.bio.skills){
        appendInto("#skills", "HTMLskills", user.bio.skills[index]);
      }
    }

    //populate footer contacts
    appendInto("#footerContacts", "HTMLmobile", user.bio.contacts.mobile);
    appendInto("#footerContacts", "HTMLemail", user.bio.contacts.email);
    appendInto("#footerContacts", "HTMLtwitter", user.bio.contacts.twitter);
    appendInto("#footerContacts", "HTMLgithub", user.bio.contacts.github);
    //appendInto("#footerContacts", "HTMLblog", user.bio.contacts.twitter);
    appendInto("#footerContacts", "HTMLlocation", user.bio.contacts.location);
  }

  return {
    display: render
  };
  
});