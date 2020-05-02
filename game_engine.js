player_module = require("./player");
card_module = require("./card");
deck_module = require("./deck");

player_class = player_module.the_player_class;
card_class = card_module.the_card_class;
deck_class = deck_module.the_deck_class;

// var prompt = require("prompt");

// readline();

class game {
  constructor() {
    console.log("A game has been created.");
  }

  start_game() {
    console.log(
      "\n--------------------\nPARTY GAME IS STARTING\n--------------------\n"
    );
    var active_deck = new deck_class(true);
    var active_card;
    var active_color;
    var isGameOver = false;
    var counter = 1;
    while (!isGameOver) {
      active_card = active_deck.drawCard();
      // console.log(active_card);
      // console.log(counter);
      if (active_card.suit == "hearts" || active_card.suit == "diamonds") {
        active_color = "red";
      } else {
        active_color = "black";
      }
      console.log(active_color);
      counter++;
      if (counter == 53) {
        isGameOver = true;
      }
    }
  }
}

newGame = new game();
newGame.start_game();

// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
// const readline = require("readline");
// const rl = readline.createInterface({});

// bob = new player_class("bobby");
// h2 = new card_class("hearts", "2");
// myDeck = new deck_class(true);
// deckCard = myDeck.drawCard();

// console.log(bob.name);
// console.log("His card is: " + h2.value + h2.suit);
// console.log(deckCard.suit);
