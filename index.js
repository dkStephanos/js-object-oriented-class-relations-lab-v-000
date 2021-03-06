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

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    let driverTrips = this.trips();

    return store.passengers.filter(passenger => {
      console.log(passenger)
      return driverTrips.some(function(el) {
        return el.passengerId === passenger.id
      });
    });
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

  drivers() {
    let passengerTrips = this.trips();

    return store.drivers.filter(driver => {
      console.log(driver)
      return passengerTrips.some(function(el) {
        return el.driverId === driver.id
      });
    });
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
      return driver.id === this.driverId
    }.bind(this))
  }

  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId
    }.bind(this))
  }
}
