Person = function (name) {
  this.name = name;
};

Person.prototype.sayHello = function () {
  return 'Hello, ' + this.name;
};

me = new Person('Yongsun');

//console.dir(Person.prototype)
//Person
//{
//  constructor: function (name)
//  sayHello: function ()
//  __proto__: Object
//}
//
//console.dir(me)
//Person
//{
//  name: "Yongsun"
//  __proto__: Person
//}


myNumber = 5;
// get converted ->
// new Number(5) : Boxed value (object form)
// read 시 unboxed -> primitive form
// 잠깐 동안만 object다..

// "foo".constructor === String;
// true

//"foo".__proto__ === String.prototype;
//// true
//
//"foo" instanceof String;
//// false
//
//typeof "foo";
//// "string"
//
//new String("foo") instanceof String;
//// true
//
//typeof new String("foo");
//// "object"


var objectStr = new String("foo");
objectStr.bar = 2;
console.log(objectStr.bar);
// 2

var primitiveStr = "foo";
primitiveStr.bar = 2;
console.log(primitiveStr.bar);
// undefined

//As you can see, objects can have properties but primitives cannot.
//  However though, when you try to set a property on a primitive it gets boxed into an object,
//  so that object gets the property set. Then when you try to read that property,
//  you are reading from the primitive which gets boxed again (with a new object)
//so the property is no longer there. This also may help explain why primitives
//in Javascript are immutable.


// 자바스크립트에서는 소수점으로 인식
//5.toString(); // SyntaxError: Unexpected token ILLEGAL
//What is actually happening here is that when you put a dot after a number
// literal in Javascript it is expecting a decimal (e.g. 5.23).
// You can get around this with
// (5).toString() // "5"
// 5.0.toString() // "5"

// manually control


var objectStr = Object("foo");
var primitiveStr = objectStr.toString(); // === objectStr.valueOf()

var objectNum = new Number(5);
var primitiveNum = objectNum.valueOf();