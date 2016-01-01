// Managing Dependencies
//
// Packages usually have dependencies on other packages.
// In this lesson you'll see how to install dependencies
// and specify versions of those dependencies in the package.json file
// using semver versioning. We'll be installing and using
// the chalk package to give our program some color.
// Finally, you'll see how to use the npm outdated
// and npm update commands to keep our package dependencies up
// to date with our semver specification.


// npm install chalk --save
// 1.1.1 is the latest of 11 releases
// npm 사이트 가보면

// chalk/node_modules안에 해당 폴더명들이 존재
// Dependencies (5)
// supports-color,
// strip-ansi,
// has-ansi,
// escape-string-regexp,
// ansi-styles

// Dependents
//gitpush, aero,.....

// npm install --save chalk 하니까
// 현재 폴더에 node_modules 생성하네;

// npm version minor
// minor 0.1 올라감
// npm version major
// major 1.0 올라감

// 다시 npm publish
// + @keycode/hello@1.1.0

// 특정 버전 설치
// npm install --save @keycode/hello@1.0.0

// app|master⚡ ⇒ npm outdated
//Package         Current  Wanted  Latest  Location
//@keycode/hello    1.0.0   1.1.0   1.1.0  @keycode/hello

//  devDependencies에 설치되어 있으면 체크 못하네;

// npm update 해줌
// npm update --save @keycode/hello
// 이런식으로 업데이트 해줘야 package.json에도 반영

// 되는지 체크 : node app.js
// 초록색으로 콘솔 로그 찍힘


