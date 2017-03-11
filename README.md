# API

  searchVideos: Takes a query string and searches videos by title. The videos are ordered by seeds in descending order. Returns an array of PirateBay videos.

  Results:

  ```
    [ { id: 15005913,
    name: 'Game.of.Thrones.S06E09.HDTV.x264-KILLERS[ettv]',
    size: '414.56 MiB',
    link: 'https://thepiratebay.org/torrent/15005913/Game.of.Thrones.S06E09.HDTV.x264-KILLERS[ettv]',
    category: { id: '200', name: 'Video' },
    seeders: '1858',
    leechers: '33',
    uploadDate: '06-20 2016',
    magnetLink: 'magnet:?xt=urn:btih:693f52edfe020c4707f935ba197bd9f437b960e3&dn=Game.of.Thrones.S06E09.HDTV.x264-KILLERS%5Bettv%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969',
    subcategory: { id: '205', name: 'TV shows' },
    uploader: 'ettv',
    verified: true,
    uploaderLink: 'https://thepiratebay.org/user/ettv/' },

  { id: 14898207,
    name: 'Game.of.Thrones.S06E08.HDTV.x264-KILLERS[ettv]',
    size: '357.61 MiB',
    link: 'https://thepiratebay.org/torrent/14898207/Game.of.Thrones.S06E08.HDTV.x264-KILLERS[ettv]',
    category: { id: '200', name: 'Video' },
    seeders: '1758',
    leechers: '33',
    uploadDate: '06-13 2016',
    magnetLink: 'magnet:?xt=urn:btih:0ddf5052c1c580a129598186e05c494f45727881&dn=Game.of.Thrones.S06E08.HDTV.x264-KILLERS%5Bettv%5D&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fpublic.popcorn-tracker.org%3A6969',
    subcategory: { id: '205', name: 'TV shows' },
    uploader: 'ettv',
    verified: true,
    uploaderLink: 'https://thepiratebay.org/user/ettv/' }, .....
  ```

# electron-quick-start

**Clone and run for a quick way to see Electron in action.**

This is a minimal Electron application based on the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start) within the Electron documentation.

**Use this app along with the [Electron API Demos](http://electron.atom.io/#get-started) app for API code examples to help you get started.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

You can learn more about each of these components within the [Quick Start Guide](http://electron.atom.io/docs/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

#### License [CC0 1.0 (Public Domain)](LICENSE.md)
