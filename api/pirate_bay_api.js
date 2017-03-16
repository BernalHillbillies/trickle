import PirateBay from 'thepiratebay';

export const searchVideos = (query) => (
 PirateBay.search(query, {
   category: 'video',
   orderBy: 'seeds',
   sortBy: 'desc'
 })
);
