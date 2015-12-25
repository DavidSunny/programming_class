// 폴더로 require하면 파일을 먼저 찾냐 폴더를 먼저 찾냐?
// 파일 모듈먼저 찾고 없으면 동일명의 폴더를 찾고 index.js를 찾는다.
// 폴더를 찾으면 index.js를 찾는다.
var relay = require('./relay');

// ./relay/index.js 에서 선언된 prefix 글로벌 변수의 값을 복사(string, boolean, number등..)
// 객체는 참조
//prefix = "Attention: ";
// 만약 prefix가 파일스코프(by IIFE)내부에서 지역변수로 선언되어 있다면 overide할 수 없음
// eg. var prefix

// 리터럴로 새로운 객체 생성하면 replace되는 것
//prefix = {
//  show: false
//};

// 참조값이 그대로이므로 overide 개념
prefix.msg = 'Announce: ';

relay('Ticket counter closes at 10PM');