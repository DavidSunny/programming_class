// 모듈 생성
// exports하는 모듈은 Function, Object, Array 등 모든 자바스크립트 자료형이면 가능

module.exports = function (announcement) {
	console.log('메시지: ' + announcement);
};