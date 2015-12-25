var announce = require('./announce_module.js');
var hello = require('./hello_world_msg_module');

// 터미널에서 node example1.js
// 메시지: hello.world
announce(hello.message);