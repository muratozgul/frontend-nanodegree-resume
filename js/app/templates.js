define([], function(){

  var templates = {
    HTMLheaderName : '<h1 id="name">%data%</h1>',
    HTMLheaderRole : '<span>%data%</span><hr>',

    HTMLcontactGeneric : '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>',
    HTMLmobile : '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>',
    HTMLemail : '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>',
    HTMLtwitter : '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>',
    HTMLgithub : '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>',
    HTMLblog : '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>',
    HTMLlocation : '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>',

    HTMLbioPic : '<img src="%data%" class="biopic">',
    HTMLwelcomeMsg : '<span class="welcome-message">%data%</span>',

    HTMLskillsStart : '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
    HTMLskills : '<li class="flex-item"><span class="white-text">%data%</span></li>',

    HTMLworkStart : '<div class="work-entry"></div>',
    HTMLworkEmployer : '<a href="#">%data%',
    HTMLworkTitle : ' - %data%</a>',
    HTMLworkDates : '<div class="date-text">%data%</div>',
    HTMLworkLocation : '<div class="location-text">%data%</div>',
    HTMLworkDescription : '<p><br>%data%</p>',

    HTMLprojectStart : '<div class="project-entry"></div>',
    HTMLprojectTitle : '<a href="#">%data%</a>',
    HTMLprojectDates : '<div class="date-text">%data%</div>',
    HTMLprojectDescription : '<p><br>%data%</p>',
    HTMLprojectImage : '<img src="%data%">',

    HTMLschoolStart : '<div class="education-entry"></div>',
    HTMLschoolName : '<a href="#">%data%',
    HTMLschoolDegree : ' -- %data%</a>',
    HTMLschoolDates : '<div class="date-text">%data%</div>',
    HTMLschoolLocation : '<div class="location-text">%data%</div>',
    HTMLschoolMajor : '<em><br>Major: %data%</em>',

    HTMLonlineClasses : '<h3>Online Classes</h3>',
    HTMLonlineTitle : '<a href="#">%data%',
    HTMLonlineSchool : ' - %data%</a>',
    HTMLonlineDates : '<div class="date-text">%data%</div>',
    HTMLonlineURL : '<br><a href="#">%data%</a>',

    internationalizeButton : '<button>Internationalize</button>',
    googleMap : '<div id="map"></div>'
  };

  return templates;
});
