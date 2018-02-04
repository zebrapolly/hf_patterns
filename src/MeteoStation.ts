interface Subject {
  registeAbserver(o: Observer): void;
  deleteAbserver(o: Observer): void;
  notifyAbserver(): void;
}

interface Observer {
  update(temp: number, preassure: number, humidity: number): void;
}

interface DisplayElement {
  display(): void;
}

class WeatherData implements Subject {
  private observers: Observer[];
  private temperature: number;
  private preassure: number;
  private humidity: number;
  constructor() {
    this.observers = [];
  }
  public registeAbserver(o: Observer): void {
    this.observers.push(o);
  }
  public deleteAbserver(o: Observer): void {
    this.observers.forEach((elem: Observer, index: number) => {
      if (elem === o) {
        this.observers.slice(index, 1);
      }
    });
  }
  public notifyAbserver(): void {
    this.observers.forEach((elem: Observer) => {
      elem.update(this.temperature, this.preassure, this.humidity);
    })
  }
  public measureChanged(): void {
    this.notifyAbserver();
  }
  public setMeasurements(temperature: number, preassure: number, humidity: number) {
    this.temperature = temperature;
    this.preassure = preassure;
    this.humidity = humidity;
    this.measureChanged();
  }
}

class CurrentConditionsDisplay implements DisplayElement, Observer {
  private weatherData: Subject;
  private temperature: number;
  private humidity: number;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registeAbserver(this);
  }
  public update(temperature: number, preassure: number, humidity: number) {
    this.humidity = humidity;
    this.temperature = temperature;
    this.display();
  }
  public display(){
    console.log(`temp: ${this.temperature} C, humidity: ${this.humidity} %`);
  }
}

const weatherData:WeatherData = new WeatherData();

const currentConditionsDisplay: CurrentConditionsDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(34, 34, 34);
weatherData.setMeasurements(37, 37, 37);