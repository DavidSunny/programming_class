## REPL

Read-Eval-Print-Loop (REPL)는 단독 프로그램과 다른 프로그램에 쉽게 포함해서 사용할 수 있다. REPL은 자바스크립트를 실행하고 결과를 보는 대화식 방법을 제공한다. 이는 디버깅, 테스팅이나 그냥 간단한 것을 시도해 볼 때 사용할 수 있다.

명령행에서 아규먼트없이 node를 실행하면 REPL에 들어간다. REPL은 극도로 단순한 emacs 라인수정을 가진다.

```
~|master⚡ ⇒ node
>
```

`repl.start(options)`

REPLServer 인스턴스를 시작하고 반환한다. 다음 값의 "options" 객체를 받는다.

`prompt` - 모든 I/O에 대한 프롬프트와 stream. 기본값은 > 이다.


