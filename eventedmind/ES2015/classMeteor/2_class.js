//class Person {
//  // 더이상 function 키워드가 필요하지 않음
//
//  // 이 생성자 함수가
//  // 생성자 함수 호출시 건내받는 파라미터를 take
//  constructor(name) {
//    // this는 새로 생성된 {}를 말함
//    this.name = name;
//  }
//
//  greeting() {
//    console.log("Hello ", this.name);
//  }
//
//  static staticMethod() {
//    console.log('static');
//  }
//}
//
//me = new Person('Chris');
//
////you = new Person('You');
//
//// 인스턴스 생성 없이도 바로 사용가능
//Person.staticMethod();
//
//// me.__proto__ === you.__proto__ (true)
//
//// new 라는 keyword로 메모리상의 heap 영역에
//// 메모리 공간을 할당받고 {} 객체 create
//// 생성자 함수가 called 되고
////
//
//// extends!!
//
//// scope chain에서 먼저 call
//class BetterPerson extends Person {
//  greeting() {
//    console.log("Better Hello ", this.name);
//  }
//}
//
//you = new BetterPerson('You');