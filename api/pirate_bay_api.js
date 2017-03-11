var PirateBay = require('thepiratebay');

const searchVideos = (query) => (
  PirateBay.search(query, {
    category: 'video',
    orderBy: 'seeds',
    sortBy: 'desc'
  })
);
