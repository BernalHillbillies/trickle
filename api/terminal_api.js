const execFile = require('child_process').execFile;

const checkVLCInstalledMac = () => {
  return execFile('ls', [], {cwd: '/Applications'}, (error, stdout, stderr) => {
    return stdout.split('\n').includes('VLC.app');
  });
};

console.log(checkVLCInstalledMac());
