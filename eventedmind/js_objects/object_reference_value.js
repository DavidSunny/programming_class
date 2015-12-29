// primitive value
// reference value

myVar = 'A string'; //
myOtherVar = myVar; // value copy

//console.dir(myVar)
//A string
//console.dir(myOtherVar)
//A string  // Copy!!!

// identifier : myVar, myOtherVar
// value : "A string", "A string"

// reference value
myVar2 = {};
myOtherVar2 = myVar;

myVar2.name = 'yongsun';
//여기서 value가 객체를 가리키고 있음
//myOtherVar2도 동일한 객체를 가리키고 있음 (heap상 메모리에 있는 객체)

//myVar = {}
//myOtherVar = myVar
//myVar.name = 'yong'
//myOtherVar
//Object {name: "yong"}
//myOtherVar.age = 11;
//myVar
//Object {name: "yong", age: 11}

//여기서 myOtherVar2 = { name: 'yeondoo' }

// 이렇게 객체 리터럴로 새로운 객체를 생성하면 value가 reference하고 있던
// 객체의 pointer가 새로 생성된 객체를 가리킴
// creating new reference

// 이것도 동일함
myVar3 = [];
myOtherVar = myVar3;