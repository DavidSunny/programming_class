// Creating Executables
//
// Npm packages can install runnable programs.
// In this lesson you'll see how
// to create an executable that users of your package can use
// just like any other command line tool.
// We'll start off by creating a command line tool and giving
// it executable permissions.
// Then we'll use the npm link command
// to install it locally so we can test it out.

// 추가
// "bin": {
//  "hello": "bin/hello"
// },
// 파일 열고
// 해쉬 뱅 추가 #!/usr/bin/env node

//hello|master⚡ ⇒ bin/hello
//zsh: permission denied: bin/hello

// executable file 실행시 권한요구
// Mac 에서 이것을 하기 위해서는
// chmod +x (실행권한 추가)

// var hello = require("../index.js"); 상대경로로.
// bin/hello 쳐보면 이제 실행된다..

//  sudo npm link
// Please try running this command again as root/Administrator.
//  /usr/local/bin/@keycode/hello ->
// /usr/local/lib/node_modules/@keycode/hello/bin/hello (추가 됩니다)
// /usr/local/lib/node_modules/@keycode/hello ->
// /Users/mac/workspace/nodejs/programming_class/eventedmind/nodejs_npm/packages/hello

// 이제 hello 폴더에서도 hello 커맨드가 작동하는지 확인
// 하지만 zsh: command not found: hello 아직도 이러면?
// 다시 터미널 재실행

// os 어디서나 hello 커맨드 사용 가능

// 코드 수정 후 sudo npm link를 다시 해주니까 되네요.

// which hello
// /usr/local/bin/hello
// wstorm /usr/local/bin/hello

// app|master⚡ ⇒ npm bin
// /Users/mac/workspace/nodejs/programming_class/eventedmind/nodejs_npm/app/node_modules/.bin

// "$(npm bin)"/hello

