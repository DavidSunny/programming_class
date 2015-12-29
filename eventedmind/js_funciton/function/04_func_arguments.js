/**
 * 1. 인자할당(Argument assignment)
 * 2. 이름을 가진 args(Named arguments)
 * 3. args 객체(The arguments object)
 * 4. args 객체를 가지고 작업하기(Working with the arguments object)
**/

if (Meteor.isClient) {
  // argOne, argTwo가 named 된 인자들
  // variable name..
  myFunc = function(argOne, argTwo /*, other */) {
    // {} 내부가 call time 시.

    // array-like object
    // arguments[0], arguments[1],
    // argumnets.length
    // typeof arguments === 'object', not 'array'
    // var arr = [];
    // var other = arr.slice()
    // arr === other -> false
    //var args = arguments;

    // 배열같은 객체를 actual array로 바꾸자.
    var args = Array.prototype.slice.call(arguments);
    var other = args.slice(2);

    // 배열은 iterate 가능하니까
    args.forEach(function (arg) {
      console.log('arg: ', arg);
    });

    //debugger;
  };

  // two arguments passed in
  myFunc('one', 'two', 'three', 'four');
}


// 현재 웹스톰 11.0.2 ~ 11.0.3 server-side debug not working
//if (Meteor.isServer) {
//  Meteor.startup(function () {
//    myFunc = function(argOne, argTwo) {
//      // {} 내부가 call time 시.
//      //debugger;
//      console.log('1');
//    };
//
//    myFunc('one', 'two');
//  });
//}