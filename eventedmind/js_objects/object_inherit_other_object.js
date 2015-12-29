//Parent = {
//  //firstName: 'Good',
//  toString: function () {
//    return this.firstName + ' ' + this.lastName;
//  }
//};
//
//Child = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};

// __proto__ : private property
// value는?? Object - 포인터

//Child.__proto__ = Parent;

//Child : own object
//Object {
//  firstName: "Evented"
//  lastName: "Mind"
//  __proto__: Object
//    toString: function ()
//      __proto__: Object
// }

// look up chain
// own object -> 순차적으로 Parent 최상위 Object까지..(없으면)
// 찾으면 상위로 look up 안함

// prototype object??

/// ==================

//superParent = {
// toString: function () {
//   return 'SuperParent';
// }
//};
//
//Parent = {};
//Parent.__proto__ = superParent;
//
//Child = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Child.__proto__ = Parent;

//{
//  firstName: "Evented"
//  lastName: "Mind"
//  __proto__: Object
//    __proto__: Object
//      toString: ()
//      __proto__: Object
//}

//Child.toString()
//"SuperParent"



superParent = {
  toString: function () {
    return 'SuperParent';
  }
};

Parent = {
  toString: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

Parent.__proto__ = superParent;

Child = {
  firstName: 'Evented',
  lastName: 'Mind'
};

Child.__proto__ = Parent;
