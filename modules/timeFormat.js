var os = require('os');
var colors = require('colors');
process.stdin.setEncoding('utf8');


function timeFormat(){
  var uptime = os.uptime();
  
  var sec_num = parseInt(uptime, 10); 
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);
	console.log('Uptime: '.green + hours + " hours " +  minutes + " min " + seconds + " sec");
}


exports.timeFormat = timeFormat;