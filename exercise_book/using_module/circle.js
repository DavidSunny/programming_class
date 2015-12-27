// 원의 면적을 구하는 함수를 리턴하는 함수
function area(r) {
  function size() {
    return Math.PI * r * r;
  }

  // 클로저
  return size;
}

// 원 둘레 구하는 함수를 리턴하는 함수
function circumference(r) {
  function size() {
    return 2 * Math.PI * r;
  }
  // 클로저
  return size;
}

module.exports.area = area;
module.exports.circumference = circumference;

