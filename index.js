let driverId = 0;

let store = {drivers: [], items: []}

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
}
