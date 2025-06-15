import { moviesDB } from './movies-db'

export const getMovies = (indexes) => indexes.map(i => moviesDB.find(movie => movie.id === i)).filter(Boolean);

const heroDB = [10];
export const heroData = getMovies(heroDB);

const continueDB = [
    25, 2, 6, 18, 26, 16,
    1, 11, 22, 12, 3, 17,
];
export const continueData = getMovies(continueDB);

const topDB = [2, 25, 7, 24, 26];
export const topData = getMovies(topDB);

const trendingDB = [
    7, 0, 1, 2, 25, 3, 4, 5, 24,
    6, 17, 8, 26, 9, 10, 11, 14
];
export const trendingData = getMovies(trendingDB);

const newDB = [
    12, 13, 8, 14, 15, 0, 16, 17,
    18, 6, 19, 20, 21, 9, 22, 23,
];
export const newData = getMovies(newDB);

export const listData = topData