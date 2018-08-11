export default class User {
  name: string;

  constructor(name) {
    this.name = name;
  }

  sayHi(): void {
    console.log('Hi, I am ' + this.name + '.');
  }
}