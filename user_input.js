const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// var outside_name = "hank";

// rl.question("What is your name ? ", function (name) {
//   rl.question("Where do you live ? ", function (country) {
//     if (name == outside_name) {
//       console.log(`${name}, is a citizen of  ${country}`);
//     }
//     rl.close();
//   });
// });

// rl.on("close", function () {
//   console.log("\n BYE BYE !!!");
//   process.exit(0);
// });

var really_good_dog = "strider";

rl.question("What is your dog's name? ", function (dog) {
  if (dog == really_good_dog) {
    console.log(dog + " is a REALLY good doggo!");
  } else {
    console.log(dog + " is a good doggo!");
  }
  rl.close();
});

// console.log("This is the dog_id: " + dog_id);

// console.log(dog);
