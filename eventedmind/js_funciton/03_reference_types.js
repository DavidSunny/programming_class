//function myFunctionName () {};
//
//myFuncA = myFunctionName;
//
//myFuncB = myFuncA;
//
//myObj = {
//  func: myFuncB
//};

function myFunctionName () {};

myFuncA = myFunctionName;

myFuncB = myFuncA;

function otherFunctionName () {};

myObj = {
  func: otherFunctionName
};

function myNamedFunction () {

}

myVarA = myNamedFunction;

map = function (func) {
  // 이렇게 하니까 개발자도구에서 func 치니까 찍힘
  // 처음에 스택영역에 func - undefined
  // call time 시 assigning - 같은 함수를 가리킴
  // function object on heap(memory)
  debugger;
};

map(myNamedFunction);