import { listData } from "./db-functions"

export const myList = (movies) => [
    {
        title: "Daftar Saya",
        movies: movies,//listData,
        isWrapped: true,
    },
]