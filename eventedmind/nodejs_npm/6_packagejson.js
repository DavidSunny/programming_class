//Scripts in Package.json
//
// Npm allows us to specify scripts in the package.json file
// which makes it useful as a build tool or even as a general utility
// for running project scripts. For example, you might want to always
// run your program through the babel compiler,
// and you can do that inside an npm start script.

// npm run-script test
// error..

//npm run-script test
//> echo "Error: no test specified" && exit 1
// shortcut : npm test

//"scripts": {
//  "test": "echo \"Error: no test specified\" && exit 1",
//  "prestart": "echo 'prestart'",
//  "start": "node app.js",
//  "poststart": "echo 'poststart'"
//},

// npm install --save babel

// .bin 폴더에 커맨드라인툴 설치

// https://docs.npmjs.com/misc/scripts 참조
//  pretest, test, posttest: Run by the npm test command.
//  prestop, stop, poststop: Run by the npm stop command.
//  prestart, start, poststart: Run by the npm start command.
//  prerestart, restart, postrestart: Run by the npm restart command. Note:
// npm restart will run the stop and start scripts if no restart script is provided.

// automatically deploy workflow 가능하게 ..
