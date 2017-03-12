const execFile = require('child_process').execFile;

const checkVLCInstalledMac = () => {
  return execFile('ls', [], {cwd: '/Applications'}, (error, stdout, stderr) => {
    console.log(stdout.split('\n').includes('VLC.app'));
  });
};

checkVLCInstalledMac();
