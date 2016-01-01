// The npm Package System
//
// The npm command line tool allows us to work with packages.
// You can even use it as a build tool.
// The npm package server provides a place to publish
// and consume packages created by authors all over the world.
// In this class you'll learn how an npm package is structured
// and what we can do with packages in a Node.js application.

// search path

// require("foo"); - statement

require("foo");
// folder search
// 현재 경로에서 node_modules를 찾고
// 그 안에서 foo 폴더 찾는다.
// index.js 특별한 파일이름을 찾는다.
// 파일명이 다르면 여전히 에러..
// 하지만 이럴 경우 package.json 에 설정할 수 있음
// main 프로퍼티에 파일명 설정 가능
// 못찾으면 계쏙 올라가서 찾는다.. node_modules..


// require("./foo");
// foo 라는 폴더를 찾는다.
// index.js 파일 찾는다.