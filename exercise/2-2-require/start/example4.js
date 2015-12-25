// core module은 path를 지정할 필요 없음
var os = require('os');

 // Darwin is operating system OSX( os ten 이라 읽음) built on top of
console.log('This code is running on: ' + os.type());
console.log('hostname is: ' + os.hostname());
console.log('hostname is: ' + os.release());


/**
 * start|2-2-exercise⚡ ⇒ node
 * os is core module..
 > os
 { hostname: [Function: getHostname],
   loadavg: [Function: getLoadAvg],
   uptime: [Function: getUptime],
   freemem: [Function: getFreeMem],
   totalmem: [Function: getTotalMem],
   cpus: [Function: getCPUs],
   type: [Function: getOSType],
   release: [Function: getOSRelease],
   networkInterfaces: [Function: getInterfaceAddresses],
   homedir: [Function: getHomeDirectory],
   arch: [Function],
   platform: [Function],
   tmpdir: [Function],
   tmpDir: [Function],
   getNetworkInterfaces: [Function: deprecated],
   EOL: '\n',
   endianness: [Function] }
 >

 *
 *
 *
 */