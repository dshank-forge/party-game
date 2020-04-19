class card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

myCard = new card("spades", "9");
console.log(myCard.suit);
console.log(myCard.value);
