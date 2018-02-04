import Pizza from './Pizza';

abstract class PizzaStore {
  public orderPizza(type: string): Pizza {
    let pizza: Pizza;
    pizza = this.createPizza(type);
    pizza.prepare();
    pizza.baking();
    pizza.cutting();
    pizza.boxing();
    return pizza;
  }
  abstract createPizza(type: string): Pizza; 
}