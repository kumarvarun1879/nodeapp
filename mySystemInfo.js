var os = require('os');

var msg = new Array('Type: '+os.type(),
                    'Node Version: '+process.Version,
                    'Platform: '+os.platform(),
                    'Hostname: '+os.hostname(),
                    'Total Memmory: '+os.totalmem(),
                    'Free Memmory: '+os.freemem(),
                    'Up Time: '+os.uptime()
                  );

console.log(msg);

var len = msg.length;
for(loop =0;loop<len;loop++){
                  console.log(msg[loop]);
}
