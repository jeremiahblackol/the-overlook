// import Room from "./Room";
// import Manager from "./Manager";
// import Customer from "./Customer";
// import Hotel from "./Hotel";

// class DataRepo {
// constructor() {

// let usersPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(response => response.json());
// let roomsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(response => response.json());
// let bookingsPromise = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(response => response.json());

// var data = {};
// let hotel;


// Promise.all([usersPromise, roomsPromise, bookingsPromise]).then(response => {
//   data = {
//     usersData: response[0],
//     roomsData: response[1],
//     bookingsData: response[2]
//   }
// }).then(() => { 
//   createNewHotel(data.usersData, data.roomsData, data.bookingsData)
// });

// function createNewHotel(users, rooms, bookings) {
//   hotel = new Hotel(users, rooms, bookings);
// }
// }
// }

// export default DataRepo