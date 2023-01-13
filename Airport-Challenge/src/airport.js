class Airport {
  // here's a starting point for you
  planesAtAirport = [];
  capacity;
  totalCapacity = 0;
  confirmPalne = false;

  constructor(capacity) {
    this.capacity = capacity;
  }

  landPlane = (plane) => {
    if (this.isPlaneAtAirport(plane)) {
      return `${plane} is already at the Airport.`;
    } else if (this.isAirportFull()) {
      return "Airport is Full.";
    } else {
      this.planesAtAirport.push(plane);
    }
    return this.planesAtAirport;
  };

  overrideCapacity = (newCap) => {
    if (this.totalCapacity >= 0) {
      return (this.capacity += newCap);
    } else {
      return this.capacity;
    }
  };

  isAirportFull() {
    if (this.planesAtAirport.length >= this.capacity) {
      return true;
    } else {
      return false;
    }
  }

  takeOff = (plane) => {
    if (this.isPlaneAtAirport(plane)) {
      const index = this.planesAtAirport.indexOf(plane); //instructing the plane to takeoff
      this.planesAtAirport.splice(index, 1);
      this.confirmPalne = true;
      return `${plane} has taken off`;
    } else {
      return `${plane} cannot take off as it is not at the airport.`;
    }
  };

  // Checking :- is plane still at the Airport
  isPlaneAtAirport = (plane) => {
    if (this.planesAtAirport.includes(plane)) {
      return true;
    } else {
      return false;
    }
  };
  confirmPlaneNotAtAirport = (plane) => {
    this.takeOff(plane);
    if (this.confirmPalne) {
      return this.planesAtAirport.length - plane.length;
    } else {
      return this.planesAtAirport.length;
    }
  };
}

module.exports = Airport;
