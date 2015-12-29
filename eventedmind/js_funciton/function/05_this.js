//if (Meteor.isClient) {
//  // "use strict;" 를 사용하면
//  // greet()만 호출해도 this가 window가 아닌
//  // undefined가 됨
//  // 미티어 내에서는 이게 안되네;;
//
//  greet = function () {
//    return 'Hello' + this.name;
//  };
//
//  // 자바스크립트에서 이렇게 직접 함수를 호출하면
//  // this는 global object = window 가 됨
//  greet();
//
//  // Use a host object
//  // Scope variable
//  // 1) Local(this가 계속 바뀜, host 객체로..)
//  // : in call time
//  // 2) Global (= window)
//  host = {
//    name: 'yongsun',
//    greet
//  };
//
//  host.greet();
//}

"user strict";

if (Meteor.isClient) {
  window.greet =  (greeting) => {
    return greeting + this.name;
  };

  window.host = {
    name: 'yongsun',
  };

  //var result = greet.call(host, "Greeting!", "second");
  var result = greet.apply(host, ["Greeting!", "second"]);

  console.log('result: ', result);
  
}