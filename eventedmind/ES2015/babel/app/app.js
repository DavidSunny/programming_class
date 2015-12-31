MyObject = {
  timer() {
    setTimeout(() => {
      this.sayHello();
    }, 5000);
  },

  sayHello() {
    console.log("Hello World");
  }
};

// babel app.js
// 바로 보여줌

//"use strict";
//
//MyObject = {
//  timer: function timer() {
//    var _this = this;
//
//    setTimeout(function () {
//      _this.sayHello();
//    }, 5000);
//  },
//
//  sayHello: function sayHello() {
//    console.log("Hello World");
//  }
//};

// babel app.js --source-maps inline
// -s, --source-maps [booleanString]
// [true|false|inline] (output)

//# sourceMappingURL
// =data:application/json;base64,
// eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpb
// ImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdz
// IjoiOztBQUFBLFFBQVEsR0FBRztBQUNULE9BQUss
// RUFBQSxpQkFBRzs7O0FBQ04sY0FBVSxDQUFDLFlB
// QU07QUFDZixZQUFLLFFBQVEsRUFBRSxDQUFDO0tB
// Q2pCLEVBQUUsSUFBSSxDQUFDLENBQUM7R0FDVjs7
// QUFFRCxVQUFRLEVBQUEsb0JBQUc7QUFDVCxXQUFP
// LENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFD
// O0dBQzVCO0NBQ0YsQ0FBQyIsImZpbGUiOiJ1bmRl
// ZmluZWQiLCJzb3VyY2VzQ29udGVudCI6WyJNeU9i
// amVjdCA9IHtcbiAgdGltZXIoKSB7XG4gICAgc2V0
// VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNh
// eUhlbGxvKCk7XG4gICAgfSwgNTAwMCk7XG4gIH0s
// XG5cbiAgc2F5SGVsbG8oKSB7XG4gICAgY29uc29s
// ZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbiAgfVxu
// fTtcblxuLy8gYmFiZWwgYXBwLmpzXG4vLyDrsJTr
// oZwg67O07Jes7KSMXG5cbi8vXCJ1c2Ugc3RyaWN0
// XCI7XG4vL1xuLy9NeU9iamVjdCA9IHtcbi8vICB0
// aW1lcjogZnVuY3Rpb24gdGltZXIoKSB7XG4vLyAg
// ICB2YXIgX3RoaXMgPSB0aGlzO1xuLy9cbi8vICAg
// IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8g
// ICAgICBfdGhpcy5zYXlIZWxsbygpO1xuLy8gICAg
// fSwgNTAwMCk7XG4vLyAgfSxcbi8vXG4vLyAgc2F5
// SGVsbG86IGZ1bmN0aW9uIHNheUhlbGxvKCkge1xu
// Ly8gICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3Js
// ZFwiKTtcbi8vICB9XG4vL307XG5cbi8vIGJhYmVs
// IGFwcC5qcyAtLXNvdXJjZS1tYXBzIGlubGluZVxu
// Ly8gLXMsIC0tc291cmNlLW1hcHMgW2Jvb2xlYW5T
// dHJpbmddXG4vLyBbdHJ1ZXxmYWxzZXxpbmxpbmVd
// XG5cbiJdfQ==


// babel app.js -s inline --out-file=build/app.js
// build 폴더가 없으면 에러.. no such file or directory,ㅊ
//  -o, --out-file [out]
// Compile all input files into a single file


// mkdir app && mv app.js app
// babel app --source-maps inline --out-dir=build --watch