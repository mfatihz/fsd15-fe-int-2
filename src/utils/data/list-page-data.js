import { getMovies } from "./db-functions"

export const myList = (ids) => [
    {
        title: "Daftar Saya",
        movies: getMovies(Array.from(ids)),
        isWrapped: true,
    },
]