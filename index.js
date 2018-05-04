process.stdin.setEncoding('utf-8');

var OSinfo = require('./modules/OSinfo')
var time = require('./modules/timeFormat');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if(input !== null) {
    var instruction = input.trim();
    switch(instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/sayhello':
        process.stdout.write('hello!\n');
        break;
      case '/getOSinfo':
        OSinfo.print();
        time.timeFormat();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }
});