## Nodejs 설치

![Nodejs](http://res.cloudinary.com/dljb241lq/image/upload/v1451037181/nodejsorg_ulft4r.png)

1) Install Node
-> pkg 설치파일 다운로드 시작됨(for Mac)
-> 라이센스 동의
-> install 버튼 클릭
-> 비밀번호 입력
-> `/usr/local/bin/node` 에 Node 설치
-> ` /usr/local/bin/npm` 에 NPM 설치
-> 설치완료

2) Open Terminal App
-> 설치된 버전 확인하기
![Node&NPM Version](http://res.cloudinary.com/dljb241lq/image/upload/v1451038336/nodeandnpm_v9mfck.png)

###Precompiled binaries

이점
- 마법사 기반의 설치로 쉽게 설치
- 모든 환경 설정을 해줌

단점
- 업데이트는 재설치 해야함
- 버전을 바꿀때 재설치 해야함

###NVM(Node Version Manager)
- repo(https://github.com/creationix/nvm)
- 복수의 active한 node.js 버전들을 관리하기 위한 간단한 bash 스크립트
- 구동 System이 c++ 컴파일러를 가져야함, OSX에서는 XCode가 이것을 해줄것이다.

이점 (Good)
- 어떤 Node버전이라도 빠르게 설치
- 빠르게 버전을 바꿀 수 있음
- Linux에서 쉽게 설치

단점
- 마법사 기반의 설치제공 안함(CLI기반을 사용해야함)
- 버전을 바꿀때 글로벌 모듈을 재설치해야함
- 버전 매니저를 설치 -> 그리고 나서 .nvm에 버전별 Node를 설치

**설치**
```
curl -o-  https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```
**설치 후 메시지**

```
=> Source string already in /Users/mac/.zshrc
=> You currently have modules installed globally with `npm`. These will no
=> longer be linked to the active version of Node when you install a new node
=> with `nvm`; and they may (depending on how you construct your `$PATH`)
=> override the binaries of modules installed with `nvm`:

/usr/local/lib
├── babel@5.8.23
├── browserify@11.2.0
├── supervisor@0.9.1
└── underscore@1.8.3

=> If you wish to uninstall them at a later point (or re-install them under your `nvm` Nodes), you can remove them from the system Node as follows:

     $ nvm use system
     $ npm uninstall -g a_module

=> Close and reopen your terminal to start using nvm
```

**터미널 다시 열기**
버전확인
```
~|master⚡ ⇒ nvm --version
0.29.0
```

NVM 커맨드 보기
```
~|master⚡ ⇒ nvm

Node Version Manager

Note:
<version> refers to any version-like string nvm understands.

This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

Usage:

nvm help
  : Show this message

nvm --version
  : Print out the latest released version of nvm

nvm install [-s] <version>
  : Download and install a <version>, [-s] from source. Uses .nvmrc if available

--reinstall-packages-from=<version>
  : When installing, reinstall packages installed in <node|iojs|node version number>

nvm uninstall <version>
  : Uninstall a version

nvm use : [--silent] <version>
  : Modify PATH to use <version>. Uses .nvmrc if available

nvm exec [--silent] <version> [<command>]
  : Run <command> on <version>. Uses .nvmrc if available

nvm run [--silent] <version> [<args>]
  : Run `node` on <version> with <args> as arguments. Uses .nvmrc if available

nvm current
  : Display currently activated version

nvm ls
  : List installed versions

nvm ls <version>
  : List versions matching a given description

nvm ls-remote
  : List remote versions available for install

nvm version <version>
  : Resolve the given description to a single local version

nvm version-remote <version>
  : Resolve the given description to a single remote version

nvm deactivate
  : Undo effects of `nvm` on current shell

nvm alias [<pattern>]
  : Show all aliases beginning with <pattern>

nvm alias <name> <version>
  : Set an alias named <name> pointing to <version>

nvm unalias <name>
  : Deletes the alias named <name>

nvm reinstall-packages <version>
  : Reinstall global `npm` packages contained in <version> to current version

nvm unload
  : Unload `nvm` from shell

nvm which [<version>]
  : Display path to installed node version. Uses .nvmrc if available

Example:

nvm install v0.10.32
  : Install a specific version number

nvm use 0.10
  : Use the latest available 0.10.x release

nvm run 0.10.32 app.js
  : Run app.js using node v0.10.32
```

현재 시스템에 설치된 node.js 버전 사용하기
```
// If you want to use the system-installed version of node,
// you can use the special default alias "system":
~|master⚡ ⇒ nvm use system
Now using system version of node: v4.2.1 (npm v2.14.7)

//If you want to see what versions are installed:
~|master⚡ ⇒ nvm ls
    iojs-v1.5.0
->       system
node -> stable (-> N/A) (default)
iojs -> iojs-v1.5 (-> iojs-v1.5.0) (default)
```

새로운 Node 버전 설치하기
```
~|master⚡ ⇒ nvm install 5.0
Downloading https://nodejs.org/dist/v5.0.0/node-v5.0.0-darwin-x64.tar.xz...                                                                                                                      ##                                                                    ###                                                                   ######                                                                ########                                                                                                                                                             100.0%
WARNING: checksums are currently disabled for node.js v4.0 and later
Now using node v5.0.0 (npm v3.3.6)
~|master⚡ ⇒ node -v
v5.0.0
// 터미널 재실행(재로그인)
Last login: Fri Dec 25 19:48:21 on ttys000
~|master⚡ ⇒ node -v
v4.2.1
// nvm에 설치된 특정버전 node로 변경
~|master⚡ ⇒ nvm use 5.0
Now using node v5.0.0 (npm v3.3.6)
~|master⚡ ⇒ node -v
v5.0.0
```

NVM 디폴트 노드버전 변경
```
~|master⚡ ⇒ nvm alias --default 5.0
--default -> 5.0 (-> v5.0.0)
~|master⚡ ⇒ nvm ls
    iojs-v1.5.0
->       v5.0.0
         system
--default -> 5.0 (-> v5.0.0)
node -> stable (-> v5.0.0) (default)
stable -> 5.0 (-> v5.0.0) (default)
iojs -> iojs-v1.5 (-> iojs-v1.5.0) (default)
```

현재 nvm에 설치된 node 위치 확인하기
```
~|master⚡ ⇒ nvm which 5.0
/Users/mac/.nvm/versions/node/v5.0.0/bin/node
~|master⚡ ⇒ nvm which 4.2.1
N/A: version "v4.2.1" is not yet installed
```

nvm 옵션
```
$ nvm [tab][tab]

alias
unalias
deactivate
install
uninstall
exec
run
use
unload
clear-cache
ls(==list)
ls-remote
list-remote
current
reinstall-packages
help
version
```

알리아스 제거
```
~|master⚡ ⇒ nvm unalias --default
Deleted alias --default
```


###Compiling

이점
- 절대적 최소 코드를 얻음
- 설치를 커스터마이징할 수 있음

단점
- 편집 과정에 익숙해야함
- 오래 걸림
- 버전을 바꾸는 것은 재편집을 요구함


