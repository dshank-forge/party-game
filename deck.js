// Deck Design Plan:
// -Give the deck a cards attribute that is a simple array of integers
// -When a card is drawn from the deck, the deck will instantiate an object of the card class, and tie that object to the appropriate number in its array

class deck {
  constructor(standard) {
    console.log("You have created a deck.");
    this.isStandard = standard;
    this.cards = [];
    if (this.isStandard === true) {
      console.log("This is a standard deck.");
      for (var counter = 1; counter <= 52; counter++) {
        this.cards.push(counter);
      }
    } else {
      console.log("This is NOT a standard deck.");
    }
  }
  drawCard() {
    console.log("You have drawn a card.");
    return 0;
  }
}

blueDeck = new deck(true);
num = blueDeck.drawCard();
console.log(num);

// console.log("hello " + blueDeck.cards);

// console.log(blueDeck.isStandard);

const myModule = require("./card");

let cardClass = myModule.card;

let myCard = new cardClass("diamonds", 7);

console.log(myCard.value + " of " + myCard.suit);

// let val = myModule.hello();
// console.log(val);
