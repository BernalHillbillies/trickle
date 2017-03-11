import nrc from 'node-run-cmd';

export const runPeerFlix = (magnetLink) => (
  nrc.run('node ./node_modules/.bin/peerflix --vlc ' + magnetLink)
);
