//Person = function (firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//};

// 모든 자바스크립트 함수는 자신의 특별한 프로퍼티인
// prototype 을 가짐
// 이것은 object(여기선 Person)를 가리킴
//person = new Person('Yongsun', 'Lee');

// new Person하면 __proto__는 Person의 prototype을 가리킴




Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Person.prototype.toString = function () {
  return this.firstName + ' ' + this.lastName;
};
person = new Person('Yongsun', 'Lee');

// 기억할 것 (테이블 그려서 확인할 것)
// 1) new 키워드 + 생성자 함수
// JavaScript runtime시 새로운 텅빈 객체를 생성({})
// 2) object's prototype chian을 연결
// 해당 함수의 prototype까지..
// __proto__(prototype property를 향하는 포인터)
// 끝 {} prototype property에 대한 value가 person 일 것이다.

// 2) __proto__ setting (->) Person.prototype
// 3) constructor call(연결된 Person.prototype에 있음)
// (this.({}) 프로퍼티 셋팅, firstName, lastName)
// 4) prototype에 정의된 toString은
// Person.prototype 객체안에 프로퍼티 셋팅


