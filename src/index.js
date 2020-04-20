// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import Hotel from '../src/hotel.js';
import Customer from '../src/customer.js';


let usersPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
let roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());
let bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());

var data = {};
let hotel;


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
    hotel.currentCustomer = new Customer(userID, hotel.returnCustomerBookings(userID));
    createCustomerDashboard(hotel.returnCurrentCustomer(userID)[0].name);
    //this is where i'm going to have to link the users class
    //instantiating each user
    //call the method
    console.log(hotel.bookedRooms.bookings)
    console.log(hotel.currentCustomer)

  } else if (userName === 'manager' && password === validPassword) {
    //all methods that have hotel data could 
    console.log(hotel);

  } else {
    console.log('hey')
  }
}

function createCustomerDashboard(userName) {
    $( 'body' ).html(`<p>Welcome ${userName}!</p>`)
}








