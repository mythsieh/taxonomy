var Bee = function() {
  //invoke Grub with this object as the context
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

// This creates a copy of the prototype of Grub and makes the Grub prototype it's prototype 
Bee.prototype = Object.create(Grub.prototype);
// However, this makes the Grub prototype the constructor value and so checking the constructor would point to  Grub instead

// This sets the constructor function of the prototype to the Bee function
Bee.prototype.constructor = Bee;

//instance of any bee should return true for bee and grub

