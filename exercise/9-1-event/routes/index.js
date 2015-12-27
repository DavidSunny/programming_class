
/*
 * GET home page.
 */

var FlightSchema = require('../schemas/flight');

// added
var Emitter = require('events').EventEmitter;
// added
var flightEmitter = new Emitter();
// create event listener
flightEmitter.on('arrival', function(flight) {
  var record = new FlightSchema(
  	flights.getInformation()
  );

  record.save(function(err) {
  	if (err) {
  		console.log(err);
  	}
  });
});

flightEmitter.on('arrival', function(flight) {
  console.log('Flight arrived: ' + flight.data.number);
});


module.exports = function (flights) {
	var flight = require('../flight');

	for(var number in flights) {
		flights[number] = flight(flights[number]);
	}

	var functions = {};

	functions.flight = function(req, res){
		var number = req.param('number');

		req.session.lastNumber = number;

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			res.json(flights[number].getInformation());
		}
	};

	functions.arrived = function (req, res) {
		var number = req.param('number');

		if (typeof flights[number] === 'undefined') {
			res.status(404).json({status: 'error'});
		} else {
			flights[number].triggerArrive();

      //added
      flightEmitter.emit('arrival', flights[number]);
      res.json({status: 'success'});

			//var record = new FlightSchema(
			//	flights[number].getInformation()
			//);
      //
			//record.save(function(err) {
			//	if (err) {
			//		console.log(err);
			//		res.status(500).json({status: 'failure'});
			//	} else {
			//		res.json({status: 'success'});
			//	}
			//});
      //
			//res.json({status: 'done'});
		}
	};

	functions.list = function (req, res) {
		res.render('list', {
			title: 'All Flights', 
			flights: flights});
	};

	functions.arrivals = function(req, res) {
		FlightSchema.find()
		.setOptions({sort: 'actualArrive'})
		.exec(function(err, arrivals) {
			if (err) {
				res.status(500).json({status: 'failure'});
			} else {
				res.render('arrivals', {
					title: 'Arrivals',
					arrivals: arrivals,
					lastNumber: req.session.lastNumber
				});
			}
		});
	};

	return functions;
};
