// 노트에 따로 정리함

function printList(array) {
  var n = array.length;
  var value;

  for (var i = 0; i < n; i++) {
    value = array[i];
    console.log(value);
  }
}

//console.time('time');
//printList([1, 2, 3, 4]);
// time: 0.911ms
// time: 0.716ms
// time: 0.551ms
// time: 0.804ms
// 계속 달라지네;;
//console.timeEnd('time');

function printList2(array) {
  var n = array.length;
  var value;

  for (var i = 0; i < n; i++) {
    value = array[i];
    console.log(value);
  }
}