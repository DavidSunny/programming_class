// Note that Generator and Modules in ES2015 not support Meteor 1.2
// will support from Meteor 1.3

// Generators
//
// Generators provide a much nicer syntax for performing.

// A generator function automatically
// returns a special generator object.

// The generator object has a next method just like
// the custom iterator method we wrote.

// Except, now we can simply use the yield keyword
// to pass control to the caller.
// In this video we'll rewrite our custom iterator method
// to use generators instead.

//MyList = {
//  _list: [1, 2, 3],
//  makeGenerator: function* () {
//    let i = 0;
//    while (i < this._list.length) {
//      yield this._list[i++];
//      console.log("after yield");
//    }
//  },
//  [Symbol.iterator]() {
//    return this.makeGenerator();
//  }
//};
//for (let i of MyList) {
//  console.log(i);
//}

//function* idMaker(){
//  var index = 0;
//  while(index < 3)
//    yield index++;
//}
//
//var gen = idMaker();
//
//console.log(gen.next().value); // 0
//console.log(gen.next().value); // 1
//console.log(gen.next().value); // 2
//console.log(gen.next().value); // undefined
// ...