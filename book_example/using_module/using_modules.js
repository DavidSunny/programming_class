// require() 호출을 통해 로딩된 모듈들은 캐싱됨으로 여러번 호출해도 문제 없음 
var circle = require('./circle.js');
//var add = require('./add.js');
var add = require('add');

// 클로저를 리턴받아 area에 할당
var area = circle.area(5);

console.log('area: ', area().toFixed(2));

var circumference = circle.circumference(5);
console.log('circumference: ', circumference().toFixed(2));

console.log('add(2,3): ', add(2,3));
