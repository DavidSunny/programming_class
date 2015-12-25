var flight = require('./module');

flight.setOrigin('LAX');
flight.setDestination('DCA');
flight.setNumber(462);

// flight.getInfo():  {
// number: 462,
// origin: 'LAX',
// destination: 'DCA'
// }

console.log('flight.getInfo(): ', flight.getInfo());
