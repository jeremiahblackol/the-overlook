import Room from "./Room";
import Manager from "./Manager";
import Customer from "./Customer";
import DataRepo from './DataRepo';

class Hotel {
  constructor(customerList, allRooms, bookedRooms) {
    this.customerList = customerList;
    this.allRooms = allRooms;
    this.bookedRooms = bookedRooms;
  }

  returnCurrentCustomer(customerID) {
    return this.customerList.users.filter((customer) => customerID === customer.id)
    // finds customer 
    // then uses user's class to instantiantiate customer
    // then assigns the value of this.currentCustomer
  }

  returnCustomerRooms(customer) {
    let customerRooms = [];
    customer.allBookings.forEach((room) => {
      this.allRooms.rooms.forEach((hotelRoom) => {
        if (room.roomNumber === hotelRoom.number) {
          customerRooms.push(hotelRoom)
          return
        }
      })
    });
    return customerRooms
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