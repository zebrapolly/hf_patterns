interface FlyBehavior {
  fly(): void;
}

class FlyWithWings implements FlyBehavior {
  public fly(): void {
    console.log('Im flying!');
  }
}

class FlyNoWay implements FlyBehavior {
  public fly(): void {
    console.log('I cant fly!');
  }
}

class FlyRocketPowered implements FlyBehavior {
  /**
   * fly
   */
  public fly(): void {
    console.log('Im flying with a rocket!');
  }
}

interface QuackBehavior {
  quack(): void;
}

class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack!');
  }
}
class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('<<Silence>>');
  }
}
class Squack implements QuackBehavior {
  quack(): void {
    console.log('Squack!');
  }
}

abstract class Duck {
  constructor() {}
  flyBehavior: FlyBehavior;
  quackBehavior: QuackBehavior;
  /**
   * display
   */
  public setFlyBehavior(fb: FlyBehavior): void {
    this.flyBehavior = fb;
  }
  public setQuackBehavior(qb: QuackBehavior): void {
    this.quackBehavior = qb;
  }
  public display(): void {}
  public perfomFly(): void {
    this.flyBehavior.fly();
  }
  public perfomQuack(): void {
    this.quackBehavior.quack();
  }
  public swim(): void {
    console.log('Every can swim!');
  }
}

class MullardDuck extends Duck {
  constructor() {
    super();
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWings();
  }
  /**
   * display
   */
  public display(): void {
    console.log('MullardDuck');
  }
}

class ModelDuck extends Duck {
  constructor() {
    super()
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new Quack();
  }
  public display(): void {
    console.log('Im model duck!')
  }
}

class Manok {
  quackBehavior:QuackBehavior;
  constructor() {
    this.quackBehavior = new Quack();
  }
  public display(): void {
    console.log('Im duck manok!')
  }
  public quack():void {
    this.quackBehavior.quack();
  }
}
const manok: Manok = new Manok();
const model: Duck = new ModelDuck();

manok.quack();

model.perfomFly();
model.setFlyBehavior(new FlyRocketPowered());
model.perfomFly();