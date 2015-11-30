var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen';
  this.color = 'yellow';
  this.canFly = true;
  this.treasureChest = [];
};

//Set the prototypal chain to equal a copy of the Bee.prototypal chain
ForagerBee.prototype = Object.create(Bee.prototype);
// Reset constructor to point back to prototype
ForagerBee.prototype.constructor = ForagerBee;
ForagerBee.prototype.forage = function(treasure){
  this.treasureChest.push(treasure);
}
