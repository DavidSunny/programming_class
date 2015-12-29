//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};

//o.firstName;
//o['firstName'];

// 지금은 writable : o.fullName으로 변경가능
// writable 프로퍼티가 없으면 디폴트 true
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value'
//});

//{
//  firstName: "Evented",
//  fullName: "Default value",
//  lastName: "Mind",
//  __proto__: Object
//}

//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value',
//  writable: false
//});

// true일 경우 수정 가능
//Object
// {firstName: "Evented", lastName: "Mind", fullName: "Default value"}
//o.fullName = 'yong'
//console.dir(o)
//Object
// {firstName: "Evented", lastName: "Mind", fullName: "yong"}

// 하지만 keys 메서드 호출 시 빠짐 (not enumerable)
//Object.keys(o)
//  ["firstName", "lastName"]

//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//// enumerable 없으면 default false
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value',
//  writable: true,
//  enumerable: true
//});

//Object
// {firstName: "Evented", lastName: "Mind", fullName: "Default value"}
//o.fullName = 'yo'
//Object.keys(o)
//  ["firstName", "lastName", "fullName"]

//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};

// enumerable 없으면 default false
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value',
//  writable: true,
//  enumerable: true
//});
//
//Object.defineProperty(o, 'fullName', {
//  enumerable: false
//});

// => 이렇게 하면 redefine 할 수 없다고 에러남
// Uncaught TypeError: Cannot redefine property: fullName(…)

//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//// 프로퍼티의 재정의 가능
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value',
//  writable: true,
//  enumerable: true,
//  configurable: true
//});
//
//Object.defineProperty(o, 'fullName', {
//  enumerable: false
//});


//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Object.defineProperty(o, 'fullName', {
//  value: 'Default value',
//  writable: true,
//  enumerable: true,
//  configurable: true,
//  get: function () {
//    console.log('getting the fullName');
//    return this.firstName + ' ' + this.lastName;
//  }
//});

// => 에러남
// Uncaught TypeError: Invalid property.
// A property cannot both have accessors
// and be writable or have a value, #<Object>(…)


//o = {
//  firstName: 'Evented',
//  lastName: 'Mind'
//};
//
//Object.defineProperty(o, 'fullName', {
//  enumerable: true,
//  configurable: true,
//  get: function () {
//    console.log('getting the fullName');
//    return this.firstName + ' ' + this.lastName;
//  }
//});

//Object
//{firstName: "Evented", lastName: "Mind"}
//o.fullName
//getting the fullName
//"Evented Mind"

o = {
  firstName: 'Evented',
  lastName: 'Mind'
};

Object.defineProperty(o, 'fullName', {
  enumerable: true,
  configurable: true,
  get: function () {
    console.log('getting the fullName');
    return this._fullName;
  },
  set: function (value) {
    // private property
    this._fullName = value + '_modified';
  }
});

//o.fullName
//getting the fullName
//undefined
//
//o.fullName = 'Yongsun Lee'
//"Yongsun Lee"
//console.dir(o)
//Object
//{
//  _fullName: "Yongsun Lee_modified"
//  firstName: "Evented"
//  fullName: (...)
//  get fullName: ()
//  set fullName: (value)
//  lastName: "Mind"
//  __proto__: Object
//}


function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();

arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;

// [{ val: 11 }, { val: 13 }]
arc.getArchive();