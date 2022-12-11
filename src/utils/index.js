const movieArr = [];

class Movie {
  // if the actor is not tiped in, assign "Not specified" to the actor variable.
  constructor(
    title,
    actor = "Not specified",
    director = "Not specified",
    rating = "No rating yet"
  ) {
    this.title = title;
    this.actor = actor;
    this.director = director;
    this.rating = rating;
  }
  // add method(function) pushes this entries to the movieArr.
  add(print) {
    movieArr.push(this); //movieArr is therefore an array of objects {title: "title entry", actor: "actor entry"}
    print ? console.table(movieArr) : "";
  }
}

// because this is a module, export it.
module.exports = Movie;
