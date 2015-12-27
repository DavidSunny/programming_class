// for profiling
// 라벨을 동일한 스트링으로 맞춰줘야함
console.time('for loop elapsed time');
var sum = 0;

for (var i = 0; i < 10000000000; i++) {
  sum += i;
}

//for loop elapsed time: 15415ms
console.timeEnd('for loop elapsed time');