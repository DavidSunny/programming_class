// How "Classes" Worked Before

// JavaScript has always supported class-like behavior
// by using constructor functions, prototype objects
// and prototypal property lookup.
// But the mechanics were very confusing,
// and if you wanted "class" inheritance
// you would have to write a function yourself.
// In this video we'll take a trip down memory lane
// so you can see why the new "class"
// and "extends" keywords are so much better.

inherits = function (Parent, Child) {
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F;
  Child.prototype.constructor = Child;

  return Child;
};

Person = function (name) {
  this.name = name;
};

Person.prototype.greet = function () {
  console.log("hello" + this.name);
};

BetterPerson = function (name) {
  this.name = name;
};

inherits(Person, BetterPerson);

BetterPerson.prototype.greet = function () {
  console.log("Better hello" + this.name);
};

me = new Person("Chris");
you = new BetterPerson('You');

// 결론
// 상속을 할때마다 이렇게 하기보다는 class & extends를
// 사용하자!