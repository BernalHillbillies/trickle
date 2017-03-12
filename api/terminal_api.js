const execFile = require('child_process').execFile;

const checkVLCInstalledMac = () => (
  new Promise((resolv, reject) => {
    execFile('ls', [], {cwd: '/Applications'}, (error, stdout, stderr) => {
      if(stdout.split('\n').includes('VLC.app')){ resolv(); }
      else { reject(); }
      // console.log(stdout.split('\n').includes('VLC.app'));
    });
  })
);

console.log(checkVLCInstalledMac());
