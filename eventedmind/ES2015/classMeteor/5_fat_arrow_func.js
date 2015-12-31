//let arr = [1, 2, 3];
//
//let newArr = arr.map(function (value) {
//  return value +1;
//});
//
//console.log(newArr);

let arr = [1, 2, 3];

arr.map(function (value) {
  return value +1;
});


// function keyword delete
// param list

// arrow statement function
arr.map( (value) => { return value +1; });

// only one param
// arrow statement function with no parentheses around the first and only param
arr.map ( value => { return value + 1; });

// arrow expression function with no parentheses around the first and only param
arr.map ( value => value + 1 )

//console.log(newArr);

//MyObject = {
//  age: 0,
//
//  startAging: function () {
//    let self = this;
//    // callback의 'this' binding problem
//    setInterval(function () {
//      self.growUp();
//    }, 2000);
//  },
//
//  growUp: function () {
//    this.age++;
//    console.log("age: ", this.age);
//  }
//};

MyObject = {
  age: 0,

  startAging: function () {
    // setInterval이 선언된 곳은 window 객체
    // 즉, 콜백함수를 fat arrow func으로 쓰면?
    setInterval( () => this.growUp(), 2000 );
  },

  growUp: function () {
    this.age++;
    //console.log("age: ", this.age);
  }
};

//MyObject.startAging();

// 이게 핵심이구만..
// Be careful!
// Fat arrow binds "this" to the outer functions's thisArg,
// or window, or window if there is none.
AnotherObject = {
  age: 0,

  what: () => {
    //
    // this에 undefined -> window 객체 출력
    //console.log(this);
  }
};

AnotherObject.what();
