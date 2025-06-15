import { moviesDB } from './movies-db'

export const getMovies = (indexes) => indexes.map(i => moviesDB.find(movie => movie.id === i)).filter(Boolean);





const heroDB = [10];
export const heroData = getMovies(heroDB);

const continueDB = [
    25, 2, 6, 18, 26, 16,
    1, 11, 22, 12, 3, 17,
];
export const continueData = getMovies(continueDB);

const topDB = [2, 25, 24, 26];
export const topData = getMovies(topDB);

const trendingDB = [
    0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11,
];
export const trendingData = getMovies(trendingDB);

const newDB = [
    12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23,
];
export const newData = getMovies(newDB);

export const listData = topData