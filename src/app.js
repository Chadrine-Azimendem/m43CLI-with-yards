const Movie = require("./utils/index");
const yargs = require("yargs");

//set  yargs.argv as a variable.
const input = yargs.argv;
console.log(input);

// if (input.actor) {
//   console.log(`Its's ${input.actor}`);
// }

function app(yargsObject) {
  if (yargsObject.add) {
    const newMovie = new Movie(
      yargsObject.title,
      yargsObject.actor,
      yargsObject.director,
      yargsObject.rating
    );
    newMovie.add();
  } else if (yargsObject.addMany) {
    for (let i = 0; i < yargsObject.title.length; i++) {
      const newMovie = new Movie(
        yargsObject.title[i],
        yargsObject.actor[i],
        yargsObject.director[i],
        yargsObject.rating[i]
      );

      // run the add method only after the las itteration
      i === yargsObject.title.length - 1
        ? newMovie.add(true)
        : newMovie.add(false);
    }
  } else {
    console.log("Hello whoever you are");
  }
}

app(input);
