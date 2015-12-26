var number, origin, destination

// three setter func
exports.setNumber = (num) => {
  number = num
};

exports.setOrigin = (o) => {
  origin = o
};

exports.setDestination = (d) => {
  destination = d
};

// one getter func
exports.getInfo = () => {
  return { number, origin, destination }
};