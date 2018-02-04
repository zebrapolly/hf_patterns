// abstract class Pizza {
//   components: string[];
//   description: string
//   public getDescription(): string {
//     return this.description;
//   }
//   public prepare(): void {
//     const components = this.components.join(' ');
//     console.log('prepare components', components);
//   };
//   public baking(): void {
//     console.log('backing on 300 C degrees');
//   }
//   public cutting(): void {
//     console.log('cutting on 8 pices')
//   }
//   public boxing(): void {
//     console.log('boxing on offivial box');
//   }
// }

// class NYStyleCheezePizza extends Pizza {
//   constructor() {
//     super()
//     this.description = 'Ny stile sheeze pizza';
//     this.components = ['cheese', 'souce', 'fat'];
//   }
// }

// class LAStyleCheezePizza extends Pizza {
//   constructor() {
//     super()
//     this.description = 'Ny stile sheeze pizza';
//     this.components = ['cheese', 'souce', 'slim'];
//   }
// }

// abstract class Store {
//   public orderPizza(type: string) {
//     let pizza:Pizza;
//     pizza = this.createPizza(type)
//     pizza.prepare();
//     pizza.baking();
//     pizza.cutting();
//     pizza.boxing();
//     return pizza;
//   }
//   public abstract createPizza(type: string): Pizza
// }

// class NYStore extends Store {
//   public createPizza(type: string): Pizza {
//     if (type === 'cheeze') {
//       return new NYStyleCheezePizza();
//     }
//   }
// }

// class LAStore extends Store {
//   public createPizza(type: string): Pizza {
//     if (type === 'cheeze') {
//       return new LAStyleCheezePizza();
//     }
//   }
// }

// const nyStore = new NYStore();
// const laStore = new LAStore();
// const order1 = nyStore.orderPizza('cheeze');
// console.log(order1.getDescription());
// const order2 = laStore.orderPizza('cheeze');