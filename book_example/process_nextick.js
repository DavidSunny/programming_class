// 덜 중요한 작업을 뒤로 미룰 수 있음
process.nextTick(function() {
  console.log("nextTick을 이용하면 이벤트 루프에서 덜 중요한 작업의 실행을 뒤로 미루기");
});

for (var i = 0; i < 5; i++) {
  console.log(i + ': 중요한 작업 실행    ');
}