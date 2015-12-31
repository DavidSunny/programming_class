// Iterators

//Your objects can now participate in JavaScript
// iteration.
// For example, you could use
// a for of loop with a custom object!
// Learn how to define an iterator method
// on your object that returns an iterator.
// The iterator works alongside the iterator
// protocol to let the JavaScript runtime work
// with our iterable objects.

//myArray = [1, 2, 3];

//for (let i of myArray) {
//  // 1, 2, 3
//  console.log(i);
//}
//
//MyList = {
//  _list: [1, 2, 3],
//
//  [Symbol.iterator]() {
//    let i = 0;
//
//    // 여기부터가 iterator
//    return {
//      next: () => {
//        // 여기가 프로토콜 객체
//        return {
//          // current value
//          value: this._list[i++] * 10,
//          // 리스트 길이가 3이라면 4번째 수행하고 false
//          // value는 undefined
//          done: i > this._list.length
//        }
//      }
//    };
//  }
//};
//
//for (let i of MyList) {
//  // 10, 20, 30
//  console.log(i);
//}