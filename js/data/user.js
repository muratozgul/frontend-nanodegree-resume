define([
  "data/bio",
  "data/education",
  "data/projects",
  "data/work"
  ],
  function(bio, education, projects, work) {
    return {
      bio: bio,
      education: education,
      projects: projects,
      work: work
    };
  }
);