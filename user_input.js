const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name ? ", function (name) {
  rl.question("Where do you live ? ", function (country) {
    console.log(`${name}, is a citizen of  ${country}`);
    rl.close();
  });
});

rl.on("close", function () {
  console.log("\n BYE BYE !!!");
  process.exit(0);
});

// var dog_id;

// dog_id = rl.question("What is your dog's name? ", function (dog) {
//   console.log(dog);
//   rl.close();
//   return dog;
// });

// console.log("This is the dog_id: " + dog_id);

// console.log(dog);
