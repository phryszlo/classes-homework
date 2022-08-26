

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

class Person {
  age = 0;
  height = 0;
  weight = 0;
  mood = 0;
  hamsters = [];
  bankAccount = 0;
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

const mickey = new Person("Mickey");
mickey.buyHamster(jerry);
console.log(mickey);

const timmy = new Person("Timmy");
//what's to stop me just doing timmy.age+=5?
for (let i = 5; i > 0; i--) {
  timmy.ageUp()
}
console.log(timmy.age);

for (let i = 5; i > 0; i--) {
  timmy.eat()
}
for (let i = 5; i > 0; i--) {
  timmy.exercise()
}
for (let i = 9; i > 0; i--) {
  timmy.ageUp()
}
const gus = new Hamster("Gus");
timmy.buyHamster(gus);

for (let i = 15; i > 0; i--) {
  timmy.ageUp()
}
for (let i = 2; i > 0; i--) {
  timmy.eat()
}
for (let i = 2; i > 0; i--) {
  timmy.exercise()
}
console.log(timmy)

