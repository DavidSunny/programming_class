var count = 0,
  destinations = [];

var Flight = function () {
	this.data = {
    // 비행편 넘너
		number: null,
    // 출발지
		origin: null,
    // 목적지
		destination: null,
    // 예상 출발시간
		departs: null,
    // 예상 도착시간
		arrives: null,
    // 실제 출발시간
		actualDepart: null,
    // 실제 도착시간
		actualArrive: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

  // 실제 출발시간을 트리거 하는 함수
	this.triggerDepart = function () {
		this.data.actualDepart = Date.now();
	};

  // 실제 도착시간을 트리거 하는 함수
	this.triggerArrive = function () {
		this.data.actualArrive = Date.now();
	};

	this.getInformation = function () {
		return this.data;
	};
};

// 비행편 생성하는 생성자 함수(Factory 함수)
exports.create = function(info) {
  var instance = new Flight();
  instance.fill(info);

  count++;

  console.log('info: ', info);

  // 배열에서 찾을 값, 두번째 인자가 없으면 디폴트 0 index
  // 배열에서 해당 도착지가 있는지 체크 없으면 -1을 리턴
  if (destinations.indexOf(info['destination']) < 0 ) {
    destinations.push(info['destination']);
  }

  return instance;
};

exports.getCount = function () {
  return count;
};

exports.getDestinations = function () {
  return destinations;
};
