import { db } from './movies-db'

const movies = (indexes) => indexes.map(i => db[i])

export const heroDB = db[10]

export const continueDB = movies([
    25, 2, 6, 18, 26, 16,
    1, 11, 22, 12, 3, 17,
])

export const topDB = movies([2, 25, 24, 26])

export const trendingDB = movies([
    0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11,
])

export const newDB = movies([
    12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23,
])