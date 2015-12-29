
this.x = 9;

// create {} on heap
// constructor가 property 셋팅
var module = {
  x: 81,
  getX: function() { return this.x; }
};

// 호출시 이 함수의 create 시점에 따라 this가 바뀜
module.getX(); // this=module, his.x = 81

// module.getX함수를 참조하는 retrieveX 함수의 reference 가 연결된 곳이 this
var retrieveX = module.getX;
// prototype이 module.getX? 참조하는 곳이 this = window
retrieveX();
// this = window, this.x = 9,

// because in this case, "this" refers to the global object

// Create a new function with 'this' bound to module
//New programmers (like myself) might confuse the global var getX
// with module's property getX
var boundGetX = retrieveX.bind(module);
boundGetX(); // this = module, this.x = 81;