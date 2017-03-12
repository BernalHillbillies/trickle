const execFile = require('child_process').execFile;

export default () => (
  new Promise((resolv, reject) => {
    execFile('ls', [], {cwd: '/Applications'}, (error, stdout, stderr) => {
      if(stdout.split('\n').includes('VLC.app')){ resolv(); }
      else { reject(); }
    });
  })
);
