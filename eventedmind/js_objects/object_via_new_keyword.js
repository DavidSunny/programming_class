// object literal syntax
// properties, values
// allocate memory on heap

//person = {};
//person = new Object();
//person = Object.create();

// this is compact format
person = {
  name: 'Chris',
  year: 2014,
  getName: function () {
    return this.name;
  }
};

// 1) object create (메모리 공간 할당)
// 2) construct (프로퍼티 : 값)

//constructPerson = function (object) {
//  object.name = 'Chris';
//  object.year = 2014;
//  object.toString = function () {
//    return this.name + ' ' + this.year;
//  }
//};

//person = {};
//constructPerson(person);

//constructPerson = function (object) {
//  object.name = 'Chris';
//  object.year = 2014;
//  object.toString = function () {
//    return this.name + ' ' + this.year;
//  }
//};
//
//person = {};
//constructPerson(person);
//undefined
//person
//Object {name: "Chris", year: 2014}

// 이게 생성자 함수(Constructor Function)
//constructPerson = function () {
//  //this = {} 이게 생략
//  this.name = 'Chris';
//  this.year = 2014;
//  this.toString = function () {
//    return this.name + ' ' + this.year;
//  }
//};

// new 키워드가 해주는 것 (2단계)
// 1) 빈 {} 객체를 생성
// 2) 함수 호출하고 this 키워드를 사용해서 프로퍼티를 한대 모은다.
// 컨벤션상 생성자 함수는 첫 문자를 대문자
//person = new constructPerson();


// ## 최종
Person = function () {
  this.name = 'Chris';
  this.year = 2014;
  this.toString = function () {
    return this.name + ' ' + this.year;
  }
};

person = new Person();


// properties : values
// name :  String
// year : Number
// getName : Function

// special property : __proto__
//Object {name: "Chris", year: 2014}
//getName: ()
//name: "Chris"
//year: 2014
//__proto__: Object


//person['name'] = 'Chris';
////person.name = 'Chris';
//
//var prop = 'year';
//person[prop] = 2014;
//
//// person.year = 2014;
//
//person.getName = function() {
//  return this.name;
//};

// properties : values
// name :  String
// year : Number
// getName : Function


