let driverId = 0;
let passengerId = 0;
let tripId = 0;

let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }
}

class Trip {
  constructor(driver, passenger) {
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    this.id = ++tripId;

    store.trips.push(this);
  }

  driver(){
    return store.drivers.find(function(driver){
      console.log(driver)
      console.log(this)
      return driver.id === this.driverId
    })
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    })
  }
}
