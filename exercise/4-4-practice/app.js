var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight.create(pdxlax);

pl.triggerDepart();

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight.create(ausdca);


console.log(ad.getInformation());

console.log(pl.getInformation());

console.log(flight.getCount());
console.log(flight.getDestinations());