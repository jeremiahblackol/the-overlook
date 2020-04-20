import Room from "./room";
import Customer from "./customer";
import Hotel from "./hotel";

class Manager {
  constructor() {
    //manager calls hotel methods
    //magager says given certain data
    //the hotel should do something
    //manager should return which rooms can be booked
    //manager should tell hotel it wants to book a room
    //then manager should call the book room function on hotel class
        
  }

  calculateDailyEarnings() {
    //for the test i want this to return the sum total of all money made today
    //return the amount of all bookings for the day
  }
  
  returnAvailableRooms(/*date*/) {
    //goes to hotel and returns available rooms for a given day
  }

  findPercentageOfVacantRooms() {

  }
  
  bookRoomForCustomer() {
    //goes to hotel and calls book room method
    //also goes to hotel customerList and adds booking to user
  }

  deleteCustomerBooking() {
    //goes to hotel and deletes a booking based on given information
  }
}

export default Manager;