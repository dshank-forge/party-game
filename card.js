class card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

// console.log(available_suits);
// console.log(available_values);

// myCard = new card("spades", "9");
// console.log(myCard.suit);
// console.log(myCard.value);

// module.exports = {
//   hello: function () {
//     return "Hello";
//   },

// };

module.exports = {
  the_card_class: card,
};
