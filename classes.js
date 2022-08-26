

class Hamster {
  owner = "";
  price = 15;
  constructor(name) {
    this.name = name;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

const jerry = new Hamster("Jerry");

console.log(jerry);