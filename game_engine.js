// require("./player");
// require("./card");
// require("./deck");

// var prompt = require("prompt");

readline();

class game {
  constructor() {
    console.log("A game has been created.");
  }
  start_game() {
    console.log(
      "\n--------------------\nPARTY GAME IS STARTING\n--------------------\n"
    );
    var isGameOver = false;
    var counter = 1;
    while (!isGameOver) {
      console.log(counter);
      counter++;
    }
  }
}

newGame = new game();
newGame.start_game();
