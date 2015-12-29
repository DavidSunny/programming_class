var myParent = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  }
};

myObject = Object.create(myParent);
myObject.firstName = 'yong';
myObject.lastName = 'lee';

// _.has(obj, 'propName')
myObject.hasOwnProperty('fullName'); // false
myObject.hasOwnProperty('firstName'); // true

// 이렇게 하니까 아래 for 문에서 빠지네;;
//Object.defineProperty(myObject, 'lastName', {
//  enumerable: false
//});

for (var prop in myObject) { // enumerate
  if (myObject.hasOwnProperty(prop)) { // iterate over prop
    console.log(prop, ': ', myObject[prop]);
  }
}

keys = Object.keys(myObject); // enumerate

console.log(keys);
// ["firstName", "lastName"]