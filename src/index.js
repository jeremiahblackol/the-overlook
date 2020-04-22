// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

const moment = require('moment');


import Hotel from '../src/Hotel.js';
import Customer from '../src/Customer.js';
import DataRepo from './DataRepo'
import Manager from './Manager';


let usersPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
let roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());
let bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());

var data = {};
let hotel;
let currentCustomer;
let manager;
let time = `"${moment().format('L')}"`;


Promise.all([usersPromise, roomsPromise, bookingsPromise]).then(response => {
  data = {
    usersData: response[0],
    roomsData: response[1],
    bookingsData: response[2]
  }
}).then(() => { 
  createNewHotel(data.usersData, data.roomsData, data.bookingsData)
});

function createNewHotel(users, rooms, bookings) {
  hotel = new Hotel(users, rooms, bookings);
}

$('.submit-button').on('click', function() {
  validateForm()
})
  
function validateForm() {
  const userName = $('.user-name').val();
  const password = $('.password').val();
  const regex = /^customer([1-9]|[1-4][0-9]|50)$/;
  const validPassword = 'overlook2020';

  if (regex.test(userName) && password === validPassword) {
    const userID = parseInt(userName.replace( /^\D+/g, ''));
    let customerName = hotel.returnCurrentCustomer(userID)[0].name;
    let customerBookings = hotel.returnCustomerBookings(userID);
    currentCustomer = new Customer(userID, customerName, customerBookings);
    createCustomerDashboard(customerName);
    displayCustomerBookings(currentCustomer);
    /*
    This is probably where I should be looking to create my domUpdates class
    Probably create a function that does all of these things
    The customer dashboard has no styling -- need to style cards for customer
    Already have access to all relevant information, just need to display it
    Are there images for every room?
    */
    console.log(displayCustomerTotalSpent(currentCustomer))

  } else if (userName === 'manager' && password === validPassword) {
    manager = new Manager()
    //should be able to see total rooms available for current date
    //should see total revenue for date
    //percentage of rooms occupied
    console.log(manager.returnBookedRoomsForGivenDate(hotel, '2020/01/24'))
    console.log(hotel.bookedRooms.bookings[0].date);
    console.log(time)
    //HOW DOES MOMENT WORK?

  } else {
    console.log('hey')
  }
}

function createCustomerDashboard(userName) {
  $( 'body' ).html(`<p>Welcome ${userName}!</p>`)
}

function displayCustomerBookings(customer) {
  hotel.returnCustomerRooms(customer).forEach((room) => {
    $( 'body' ).append(`<div><p>${room.number}</p><p>${room.roomType}</p></div>`)
  })
}

function displayCustomerTotalSpent(customer) {
  return hotel.returnCustomerRooms(customer).reduce((acc, room) => {
    acc += room.costPerNight
    return acc
  }, 0)
}









