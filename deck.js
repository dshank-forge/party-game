class deck {
  constructor(standard) {
    console.log("You have created a deck.");
    this.isStandard = standard;
  }
}

blueDeck = new deck(true);
console.log(blueDeck.isStandard);
