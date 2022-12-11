const yargs = require("yargs");
// console.log(yargs.argv);
// log the value of the object element with key firstfield and secondtfield to the console
// console.log(yargs.argv.firstfield);
// console.log(yargs.argv.secondfield);

// we can set  yargs.argv as a variable to make code more readable.
const imput = yargs.argv;

if (imput.actor) {
  console.log(`Its's ${imput.actor}`);
}

// const yargs = require("yargs");
// const { Movie } = require("./utils");
// console.log(yargs.argv);
// console.log(yargs.argv.firstfield);
// console.log(yargs.argv.secondfield);

// const input = yargs(Movie(process)).argv;

// if (input.actor) {
//   console.log(`Its's ${input.actor}`);
// }
// clearInterval;
