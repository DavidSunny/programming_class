var str = 'for better tomorrow';
var buf1 = new Buffer(str);
var buf2 = buf1.slice(4, 10);
var buf3 = new Buffer(str.length);

//buf1:  <Buffer 66 6f 72 20 62 65 74 74 65 72 20 74 6f 6d 6f 72 72 6f 77>
console.log('buf1: ', buf1);
//'buf2::  <Buffer 62 65 74 74 65 72>
console.log('buf2: ', buf2);
//buf3:  <Buffer 00 00 00 00 ff ff ff ff ff ff ff ff 00 ff ff ff ff ff ff>
console.log('buf3:', buf3);

buf1.copy(buf3, 0, 0, buf1.length);

// buf1: <Buffer 66 6f 72 20 62 65 74 74 65 72 20 74 6f 6d 6f 72 72 6f 77>
// for better tomorrow
console.log('buf1: ', buf1, '\n', buf1.toString());

// buf2:  <Buffer 62 65 74 74 65 72>
// better
console.log('buf2: ', buf2, '\n', buf2.toString());

// <Buffer 66 6f 72 20 62 65 74 74 65 72 20 74 6f 6d 6f 72 72 6f 77>
// for better tomorrow
console.log('buf3: ', buf3, '\n', buf3.toString());

str = '_best_';
for (var i = 0; i < str.length; i++) {
  buf2[i] = str.charCodeAt(i);
}

// buf1:  <Buffer 66 6f 72 20 5f 62 65 73 74 5f 20 74 6f 6d 6f 72 72 6f 77>
// for _best_ tomorrow
console.log('buf1: ', buf1, '\n', buf1.toString());

// buf2:  <Buffer 5f 62 65 73 74 5f>
// _best_
console.log('buf2: ', buf2, '\n', buf2.toString());

// buf3:  <Buffer 66 6f 72 20 62 65 74 74 65 72 20 74 6f 6d 6f 72 72 6f 77>
//for better tomorrow
console.log('buf3: ', buf3, '\n', buf3.toString());


// 많은 애플리케이션은 데이타를 ‘블록’으로 만들지 않고 정보를 연속적으로 송신할 방법을 필요로 한다.
// 그리고 일부 애플리케이션은 매우 큰 블록의 데이터를 송신할 필요가 있는데
// 그런 데이터는 하위 계층의 단일 메시지로 송신할 수 없다.
// TCP 설계자들은 별도의 분리된 데이터가 아니라 어떤 크기나 구조를 갖는 데이터도 받아들일 수 있도록 TCP를 설계했다.
// 좀 더 구체적으로 말하면 TCP는 애플리케이션에서 오는 데이터를 스트림으로 간주한다.
// 각 애플리케이션은 전송하고자 하는 데이터를 바이트 스트림으로 송신한다.

// TCP 데이터 패키징 : 세그먼트(Segment)
// TCP는 애플리케이션이 주는 바이트를 받아서 네트워크 계층 프로토콜(IP)로 송신해야 한다.
// IP는 스트림 중심 프로토콜이 아니라 메시지 중심 프로토콜이다.
// 그래서 TCP는 애플리케이션에서 오는 스트림을 IP에서 보낼 수 있는 분리된 메시지로 나눠야 한다.
// 이들 메시지를 TCP 세그먼트라고 부른다.
// TCP는 애플리케이션이 고정된 크기의 메시지가 아닌 바이트 스크림을 송신할 수 있도록 설계됐다.
// 이러한 특징은 다양한 애플리케이션에 응용될 수 있는 유연성을 제공한다.
// 왜냐하면 애플리케이션은 데이터 패키징을 신경 쓸 필요가 없으며 어떤 크기의 파일이나 메시지도 송신할 수 있기 때문이다.
// TCP는 이들 바이트를 세그먼트라는 메시지로 패키징하는 일을 한다.


// TCP 데이터 식별 : 순서 번호(Sequence Number)
// TCP는 신뢰성이 있기 때문에 목적지 장비가 모든 데이터를 수신했다는 것을 보장하기 위해,
// 애플리케이션으로부터 온 모든 데이터를 추적할 필요가 있다.
// 더욱이, TCP는 애플리케이션이 송신한 순서대로 데이터가 목적지에 도달했는지 확인할 필요가 있으며 손실 데이터도 재전송 해야 한다.
// TCP는 스트림 중심의 프로토콜이기 때문에 그러한 식별을 각 데이터 바이트에 대해 모두 수행해야 한다.
// 모든 바이트를 식별하는 것이 신기하게 들릴 수도 있지만 TCP는 순서 번호를 통해 그작업을 수행한다.
// 정리하자면, TCP는 분리된 메시지가 아닌 개별 데이터 바이트를 다루기 때문에 데이터 송신과 추적 시스템을 구현하기 위해
// 바이트 수준의 식별 방법을 사용해야 한다. 이를 위해 TCP는 처리하는 각 바이트에 순서 번호를 할당한다.


//애플리케이션의 데이터 구분 필요
// TCP는 들어오는 데이터를 스트림으로 간주하기 때문에 애플리케이션이 TCP로 수신하는 데이터는 구조화되어 있지 않다. 
// 송신 장비의 애플리케이션은 데이터 스트림을 TCP로 보내며 수신 장비는 TCP의 데이터 스트림을 애플리케이션으로 전달한다. 
// TCP는 스트림을 세그먼트로 나눠서 보내지만 이러한 세그먼트는 TCP 수준에서 구분되기 때문에 애플리케이션은 세그먼트 정보를 알지 못한다. 
// 이 경우 조각을 구분하는 것은 애플리케이션의 역할이며, 각 애플리케이션은 한 데이터 요소가 어디에서 끝나고 어디에서 
// 시작하는지를 결정하기 위한 고유한 방법을 사용해야 한다.