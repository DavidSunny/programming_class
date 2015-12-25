var number, origin, destination;

// three setter func
exports.setNumber = function (num) {
  number = num;
};

exports.setOrigin = function (o) {
  origin = o;
};

exports.setDestination = function (d) {
  destination = d;
};

// one getter func
exports.getInfo = function () {
  return {
    number:number,
    origin: origin,
    destination: destination
  }
};