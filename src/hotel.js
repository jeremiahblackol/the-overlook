import Room from "./room";
import Manager from "./manager";
import Customer from "./customer";

class Hotel {
  constructor(allRooms, bookedRooms, customerList) {
    this.allRooms = allRooms;
    this.bookedRooms = bookedRooms;
    this.customerList = customerList;
    this.currentCustomer = '';
  }
}

export default Hotel;

// //the hotel class has all data
// //this is subjective -- when i pick a plan just go with it
// //be able to defend my decision

// class Hotel {
//     constructor() {
//       //manager
//       //all rooms
//       //booked rooms = [];
//       //current customer
//       //all previous bookings = [];
//     }
  
//     bookedRooms() {
//      //iterate over all rooms
//      //push rooms that are booked into booked rooms array
//     }
//   }
  
//   export default Hotel;