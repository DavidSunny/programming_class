var fs = require('fs');

var stream = fs.createReadStream('data.json'),
	writable = fs.createWriteStream('copy.json');

/**
 * source: http://blog.outsider.ne.kr/931
 *
 * Node.js로 프로그램을 짜던 중 표준출력을 변경해야 할 필요가 있었다.
 * 여기서 표준 출력이라는 것은 stdout이나 stderr로 출력되는 내용을 말하고 기본적으로는
 * Node.js에서 console로 출력하고 터미널에 메시지가 출력된다. 이는 console.log()를 사용하면
 * 터미널에 출력된다고 생각하기 쉽지만 좀 더 적확히는 console.log()는 stdout으로 출력되고
 * console.error()는 stderr로 출력되는 것인데 stdout과 stderr가 터미널로 출력하는 것이다.
 * 물론 일반적으로는 그냥 이 stdout과 stderr을 그대로 사용하고 로거를 따로 사용하거나 shell에서
 * 파이프로 파일에 쓰이도록 하는 것이 더 바람직하다고 본다. 하지만 좀 특별한 용도로 소스내에서
 * stdout이나 stderr를 가로채서 임의로 조작해야할 필요가 있었다.
 */
stream.pipe(process.stdout);

// 내용을 copy??
stream.pipe(writable);

/**
 * 9-4-pipe-readabledata-into-writable-streams|master⚡ ⇒ diff data.json copy.json
 2068c2068
 <               "number": 577,
 ---
 >               "number": 576,
 9-4-pipe-readabledata-into-writable-streams|master⚡ ⇒

 */