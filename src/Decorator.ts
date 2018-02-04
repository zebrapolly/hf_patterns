abstract class Beverage {
  description: string = 'unknown beverage';
  public getDescription(): string {
    return this.description;
  }
  public abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  public abstract getDescription():string;
}
class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso"
  }
  cost() {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "HouseBlend";
  }
  cost() {
    return 0.89;
  }
}
class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "DarkRoast";
  }
  cost() {
    return 0.89;
  }
}
class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf";
  }
  cost() {
    return 1.05;
  }
}

class Mocha extends CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }
  getDescription() {
    return `${this.beverage.getDescription()} + Mocha`
  }
  cost() {
    return 0.2 + this.beverage.cost();
  }
}
class Soy extends CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }
  getDescription() {
    return `${this.beverage.getDescription()} + Soy`
  }
  cost() {
    return 0.15 + this.beverage.cost();
  }
}
class Whip extends CondimentDecorator {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super()
    this.beverage = beverage;
  }
  getDescription() {
    return `${this.beverage.getDescription()} + Whip`
  }
  cost() {
    return 0.1 + this.beverage.cost();
  }
}

function printOrder(beverage: Beverage) {
  console.log(`${beverage.getDescription()} ${beverage.cost()} $`);
}

let beverage1: Beverage = new Espresso();

printOrder(beverage1);

let beverage2: Beverage = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);

printOrder(beverage2);

let beverage3: Beverage = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);

printOrder(beverage3);