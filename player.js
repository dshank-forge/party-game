// console.log("hello world from player.js");

class player {
  constructor(name) {
    console.log("We have created a player.");
    this.name = name;
  }
}

// john = new player("John");

// console.log(john.name);

module.exports = {
  the_player_class: player,
};
