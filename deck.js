// Deck Design Plan:
// -Give the deck a cards attribute that is a simple array of integers
// -When a card is drawn from the deck, the deck will instantiate an object of the card class, and tie that object to the appropriate number in its array

const card_module = require("./card");

var card_class = card_module.the_card_class;

var available_suits = ["spades", "clubs", "hearts", "diamonds"];
var available_values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "j",
  "k",
  "q",
  "a",
];

class deck {
  constructor(standard) {
    console.log("You have created a deck.");
    this.isStandard = standard;
    this.cards = [];
    if (this.isStandard === true) {
      console.log("This is a standard deck.");
      for (var i = 0; i <= 3; i++) {
        let card_suit = available_suits[i];
        for (var j = 0; j <= 12; j++) {
          let card_value = available_values[j];
          this.cards.push(new card_class(card_suit, card_value));
        }
      }
    } else {
      console.log("This is NOT a standard deck.");
    }
  }

  drawCard() {
    console.log("You have drawn a card.");
    return this.cards.pop();
  }
}

// dog_deck = new deck(true);
// myCard = dog_deck.drawCard();

// console.log("My card is the " + myCard.value + " of " + myCard.suit);
// console.log(dog_deck.drawCard());

// blueDeck = new deck(true);
// num = blueDeck.drawCard();
// console.log(num);

// console.log("hello " + blueDeck.cards);

// console.log(blueDeck.isStandard);

// let cardClass = myModule.card;

// let myCard = new cardClass("diamonds", 7);

// console.log(myCard.value + " of " + myCard.suit);

// let val = myModule.hello();
// console.log(val);

module.exports = { the_deck_class: deck };
