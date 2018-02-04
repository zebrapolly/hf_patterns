abstract class Pizza {
  components: string[];
  description: string
  public getDescription(): string {
    return this.description;
  }
  public prepare(): void {
    const components = this.components.join(' ');
    console.log('prepare components', components);
  };
  public baking(): void {
    console.log('backing on 300 C degrees');
  }
  public cutting(): void {
    console.log('cutting on 8 pices')
  }
  public boxing(): void {
    console.log('boxing on offivial box');
  }
}

export default Pizza;