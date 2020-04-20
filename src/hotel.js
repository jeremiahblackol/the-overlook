import Room from "./room";
import Manager from "./manager";
import Customer from "./customer";

class Hotel {
  constructor(customerList, allRooms, bookedRooms) {
    this.customerList = customerList;
    this.allRooms = allRooms;
    this.bookedRooms = bookedRooms;
    // this.currentCustomer = '';
  }

  returnCurrentCustomer(customerID) {
    return this.customerList.users.filter((customer) => customerID === customer.id)
    // finds customer 
    // then uses user's class to instantiantiate customer
    // then assigns the value of this.currentCustomer
  }

  returnCustomerBookings(customerID) {
    return this.bookedRooms.bookings.filter((booking) => customerID === booking.userID);
  }

  bookRoom(customer, date) {
    //update room status locally
  }

  removeBooking(customer, date) {

  }
}

export default Hotel;