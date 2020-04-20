import Room from "./room";
import Manager from "./manager";
import Hotel from "./hotel";

class Customer {
  constructor(id, allBookings) {
    this.id = id;
    this.allBookings = allBookings;
    this.pastBookings = [];
    this.futureBookings = [];
    this.amountPaid; 
  }

  returnPastBookings() {

  }

  returnFutureBookings() {

  }

  returnAmountPaid() {
    
  }
}

export default Customer;