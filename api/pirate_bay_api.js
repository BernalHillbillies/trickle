import PirateBay from 'thepiratebay';
import { isEmpty } from 'lodash';

export const searchVideos = (query) => (
  PirateBay.search(query, {
    category: 'video',
    orderBy: 'seeds',
    sortBy: 'desc'
  })
);
