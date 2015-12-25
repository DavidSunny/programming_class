## Express module

Fast, unopinionated, minimalist web framework

### Feature
- Robust routing
- Focus on high performance
- Super-high test coverage
- HTTP helpers (redirection, caching, etc)
- View system supporting 14+ template engines
- Content negotiation
- Executable for generating applications quickly


### 사용하지 않는 (`package.json`에 정의되어 있지 않는) 라이브러리 삭제
`$ npm prune`
// unbuild jade@1.11.0 -> node_modules에서 제거됨

### package.json은 프로퍼티 "", 값도 "", 사용되지 않는 컴마도 허용 안함 (엄격)



글로벌 설치시 `npm install express -g`
express 커맨드를 사용하기 위해서는 (Express 4.0.0 부터)
`sudo npm install -g express-generator`.
```
/usr/local/bin/express -> /usr/local/lib/node_modules/express-generator/bin/express
express-generator@4.13.1 /usr/local/lib/node_modules/express-generator
├── sorted-object@1.0.0
├── commander@2.7.1 (graceful-readlink@1.0.1)
└── mkdirp@0.5.1 (minimist@0.0.8)

```

```
exercise|master⚡ ⇒ express airline
zsh: command not found: express

exercise|master⚡ ⇒ npm install express -g
express@4.13.3 /usr/local/lib/node_modules/express
├── escape-html@1.0.2
├── merge-descriptors@1.0.......등

exercise|master⚡ ⇒ express airline
```

```
exercise|master⚡ ⇒ express airline
   create : airline
   create : airline/package.json
   create : airline/app.js
   create : airline/public
   create : airline/public/javascripts
   create : airline/public/images
   create : airline/public/stylesheets
   create : airline/public/stylesheets/style.css
   create : airline/routes
   create : airline/routes/index.js
   create : airline/routes/users.js
   create : airline/views
   create : airline/views/index.jade
   create : airline/views/layout.jade
   create : airline/views/error.jade
   create : airline/bin
   create : airline/bin/www

   install dependencies:
     $ cd airline && npm install

   run the app:
     $ DEBUG=airline:* npm start
```


```
3-2-express|master⚡ ⇒ npm install express --save

npm WARN package.json airline@0.0.0 No repository field.
npm WARN package.json airline@0.0.0 No README data

express@4.13.3 node_modules/express

├── escape-html@1.0.2
├── array-flatten@1.1.1
├── cookie-signature@1.0.6
├── utils-merge@1.0.0
├── content-type@1.0.1
├── methods@1.1.1
├── vary@1.0.1
├── content-disposition@0.5.0
├── fresh@0.3.0
├── range-parser@1.0.3
├── etag@1.7.0
├── serve-static@1.10.0
├── merge-descriptors@1.0.0
├── cookie@0.1.3
├── parseurl@1.3.0
├── path-to-regexp@0.1.7
├── depd@1.0.1
├── qs@4.0.0
├── finalhandler@0.4.0 (unpipe@1.0.0)
├── debug@2.2.0 (ms@0.7.1)
├── type-is@1.6.10 (media-typer@0.3.0, mime-types@2.1.8)
├── accepts@1.2.13 (negotiator@0.5.3, mime-types@2.1.8)
├── proxy-addr@1.0.10 (forwarded@0.1.0, ipaddr.js@1.0.5)
├── on-finished@2.3.0 (ee-first@1.1.1)
└── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
```

```
3-3-express-jade|master⚡ ⇒ npm install
jade@1.11.0 node_modules/jade
├── commander@2.6.0
├── character-parser@1.2.1
├── void-elements@2.0.1
├── mkdirp@0.5.1 (minimist@0.0.8)
├── constantinople@3.0.2 (acorn@2.6.4)
├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
├── clean-css@3.4.8 (commander@2.8.1, source-map@0.4.4)
├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
└── uglify-js@2.6.1 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)

express@3.4.0 node_modules/express
├── methods@0.0.1
├── range-parser@0.0.4
├── cookie-signature@1.0.1
├── fresh@0.2.0
├── buffer-crc32@0.2.1
├── cookie@0.1.0
├── mkdirp@0.3.5
├── debug@2.2.0 (ms@0.7.1)
├── send@0.1.4 (mime@1.2.11)
├── commander@1.2.0 (keypress@0.1.0)
└── connect@2.9.0 (uid2@0.0.2, qs@0.6.5, pause@0.0.1, bytes@0.2.0, multiparty@2.1.8)
```

jade제거 후 재설치
```
3-3-express-jade|master⚡ ⇒ npm install
jade@1.11.0 node_modules/jade
├── commander@2.6.0
├── character-parser@1.2.1
├── void-elements@2.0.1
├── mkdirp@0.5.1 (minimist@0.0.8)
├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
├── clean-css@3.4.8 (commander@2.8.1, source-map@0.4.4)
├── constantinople@3.0.2 (acorn@2.6.4)
├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
└── uglify-js@2.6.1 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)

```

```
3-3-express-jade|master⚡ ⇒ npm update : 자동으로 버전 맞춰줌(*와일드 카드)
jade@1.11.0 node_modules/jade
├── commander@2.6.0
├── character-parser@1.2.1
├── void-elements@2.0.1
├── mkdirp@0.5.1 (minimist@0.0.8)
├── constantinople@3.0.2 (acorn@2.6.4)
├── with@4.0.3 (acorn@1.2.2, acorn-globals@1.0.9)
├── jstransformer@0.0.2 (is-promise@2.1.0, promise@6.1.0)
├── clean-css@3.4.8 (commander@2.8.1, source-map@0.4.4)
├── transformers@2.1.0 (promise@2.0.0, css@1.0.8, uglify-js@2.2.5)
└── uglify-js@2.6.1 (async@0.2.10, uglify-to-browserify@1.0.2, source-map@0.5.3, yargs@3.10.0)
```