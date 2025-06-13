import { heroDB, continueDB, topDB, trendingDB, newDB } from "./db-functions"

export const movieHero = heroDB

export const movieGalleries = [
    {
        title: "Melanjutkan Tonton Film",
        type: "continue",
        movies: continueDB,
    },
    {
        title: "Top Rating Film dan Series Hari ini",
        movies: topDB,
    },
    {
        title: "Film Trending",
        movies: trendingDB,
    },
    {
        title: "Rilis Baru",
        movies: newDB,
    },
]

export const myList = [
    {
        title: "Daftar Saya",
        type: "listed",
        movies: topDB,
    },
]