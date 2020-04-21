class card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

myCard = new card("spades", "9");
console.log(myCard.suit);
console.log(myCard.value);

// module.exports = {
//   hello: function () {
//     return "Hello";
//   },

// };

module.exports = {
  card: card,
};
