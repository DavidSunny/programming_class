// prototype object
//myPrototypeObject = {
//  sayHello: function () {
//    return 'Hello';
//  }
//};
//
//myObject = Object(myPrototypeObject);
// same code
//myObject = {};
//myObject.__proto__ = myPrototypeObject;
//myObject.sayHello


// Object.create(proto, [option])
// obj = {} -> create
// obj.__proto__ = myPrototypeObject : inherit
// __proto__는 prototype 포인터

// Object.prototype
//console.dir(Object);
//prototype: Object
//  __defineGetter__: __defineGetter__()
//  __defineSetter__: __defineSetter__()
//  __lookupGetter__: __lookupGetter__()
//  __lookupSetter__: __lookupSetter__()
//  constructor: Object() **** !!!
//  hasOwnProperty: hasOwnProperty()
//  isPrototypeOf: isPrototypeOf()
//  propertyIsEnumerable: propertyIsEnumerable()
//  toLocaleString: toLocaleString()
//  toString: toString()
//  valueOf: valueOf()
//  get __proto__: get __proto__()
//  set __proto__: set __proto__()

// 많은 다른 native prototype object
// Data.prototype
// Number.prototype
// Array.prototype
// Boolean.prototype
// MDN 참조할것
myObject = Object.create(Object.prototype);
//console.dir(myObject)
//Object {
// __proto__:
//}

myObject2 = Object.create(Date.prototype);
//myObject2 = Object.create(Boolean.prototype);
//console.dir(myObject2)
//Object
//  __proto__: Boolean

//console.dir(Boolean.prototype)
//Boolean
//  constructor: Boolean()
//  toString: toString()
//  valueOf: valueOf()
//  __proto__: Object
//    [[PrimitiveValue]]: false

//console.dir(Boolean)
//function Boolean()
//  arguments: null
//  caller: null
//  length: 1
//  name: "Boolean"
//  prototype: Boolean
//  __proto__: function()
//  <function scope>

//Date()
//UTC: UTC()
//arguments: null
//caller: null
//length: 7
//name: "Date"
//now: now()
//parse: parse()
//prototype: Date ****
//__proto__: ()
//<function scope>

myObject3 = Object.create();
// Uncaught TypeError: Object prototype may
// only be an Object or null: undefined(…)

myObject4 = Object.create(null);
//console.dir(myObject4)
//Object
// No Properties

// MDN Browser compatibility 확인할 것