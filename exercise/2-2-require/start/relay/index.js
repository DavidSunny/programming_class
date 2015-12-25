//prefix = 'Relaying: ';

prefix = {
  msg: 'Relaying: ',
  show: false
};

// exports 할때 execute context도 유지함
module.exports = function (message) {
  console.log('prefix: ', prefix);
  //var prefix = 'hello: ';

	console.log(prefix.msg + message);
};