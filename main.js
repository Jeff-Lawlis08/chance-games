function cards (suit, value){
  this.suit = suit;
  this.value = value;
}
var card1 = new cards ('spades', 'ace');


function getRandom() {
  var randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  return randomNumber;
}

function NewValue() {
  // this.value = getRandom();
  return (this.value = getRandom());
}

function Die (value, name) {
  this.name = name;
  this.value = value;
  this.roll = function() {
  return (this.value = NewValue.call(Die));
};
  }



var die1 = new Die(1, 'die1');
var die2 = new Die(3, 'die2');

die2.roll();

// console.log(die.roll);
console.log(die2);


//1000 rolls

function getProbabilities (die1, die2) {
var i = 0;
var rolls = [];
do {
  var sum = die1.roll() + die2.roll();
  rolls.push(sum);
    i++;
} while (i < 1000);
// console.log(rolls);
var counter = [];
rolls.forEach(function(roll, i, arr) {
  if(!counter[roll - 2]) {
    counter[roll - 2] = 1;
  } else {
    counter[roll - 2] = counter[roll - 2] + 1;
  }

});
  return counter;

// console.log(counter);
}
var counter = getProbabilities(die1, die2);
console.log(counter);
