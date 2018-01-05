driverId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
}