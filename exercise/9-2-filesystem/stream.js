var fs = require('fs');

// 첫번째 인자에 path
// Returns a new ReadStream object. (See Readable Stream).
var stream = fs.createReadStream('data.json');

console.log('stream: ', stream);

// Event: 'data'#
//chunk Buffer | String The chunk of data.
// 첫번째 인자에 이벤트명
stream.on('data', function (chunk) {
	console.log('----------------begin chunk----------------');
	console.log(chunk.toString());
	console.log('----------------end chunk----------------');
});

stream.on('data', function (chunk) {
	console.log('CHUNK LENGTH WAS: ' + chunk.length);
});

stream.on('end', function  () {
	console.log('----------------reached file end----------------');
});