

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


class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}
class Chef {
  constructor(name) {
    this.name = name;
  }
  dinners = [];
  getOrder(appetizer, entree, dessert) {
    const order = new Dinner(appetizer, entree, dessert);
    this.dinners.push(order);
    console.log(
      `${this.name} made ${order.appetizer}`,`${order.entree}`,`${order.dessert}`);
    let loglog = "";
    for (let i = 0; i < this.dinners.length; i++) {
      loglog += `${this.dinners[i].appetizer}`, `${this.dinners[i].entree}`, `${this.dinners[i].dessert}`;
    }
    // console.log(loglog);
    return order;
  }
}

const pierre = new Chef("Pierre");
pierre.getOrder('poppers', 'swordfish', 'cake');
pierre.getOrder('salad', 'gefilte fish', 'mousse');
pierre.getOrder('garlic twinkie bites', 'puffer fish', 'cake');
