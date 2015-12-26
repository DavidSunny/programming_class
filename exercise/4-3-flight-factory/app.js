var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

var pl = flight(pdxlax);

pl.triggerDepart();
console.log(pl.getInformation());

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

var ad = flight(ausdca);

pl.data.origin = 'STL';
pl.data.origin = 'Seoul';

console.log(pl.getInformation());
console.log(ad.getInformation());
