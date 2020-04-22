import Room from "./Room";
import Manager from "./Manager";
import Hotel from "./Hotel";

class Customer {
  constructor(id, name, allBookings) {
    this.id = id;
    this.name = name;
    this.allBookings = allBookings;
    this.pastBookings = [];
    this.futureBookings = [];
    this.amountPaid = 0; 
  }

  returnPastBookings(date) {
    
  }

  returnFutureBookings() {

  }

  returnAmountPaid() {
    
  }
}

export default Customer;