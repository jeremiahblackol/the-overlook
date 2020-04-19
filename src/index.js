// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

import Hotel from '../src/hotel.js';

console.log(Hotel)

console.log('This is the JavaScript entry file - your code begins here.');

let usersPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
let roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());
let bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());

var data = {};
let hotel;


$( window ).on( "load", function() {
  Promise.all([usersPromise, roomsPromise, bookingsPromise]).then(response => {
    data = {
      usersData: response[0],
      roomsData: response[1],
      bookingsData: response[2]
    }
  }).then(() => { 
    hotel = new Hotel(data.usersData, data.roomsData, data.bookingsData);
    this.console.log(hotel)
  });
})

// function createNewHotel(users, rooms, bookings) {
//   hotel = new Hotel(users, rooms, bookings)
// }








