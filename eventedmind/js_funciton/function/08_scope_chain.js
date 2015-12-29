//Understanding Scope Chains
//
// Variables in JavaScript are looked up using a Scope Chain,
// just like object property prototype chains.
// In this video you'll get a good intuition about what the scope chain is.

myPrototype = {
  parent: 'parent property value'
};

// create a new object that inherits from myPrototype
myObject = Object.create(myPrototype);
myObject.child = 'child property value';

// let the JavaScript runtime "lookup"
// the value of the "parent" property.
value = myObject.parent;

// scope chain variable lookup in runtime


