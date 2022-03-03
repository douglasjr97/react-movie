import axios from 'axios';

const baseUrlImages = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
const languageApi = '?language=pt-BR';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzg5YTZmZTdjNTZkMzJlODliMmM4YmZiY2UwODBmNCIsInN1YiI6IjYyMjBkNjRkOWYxYmU3MDAxYjFiMDgwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PsJSzczD7X7Aa13a7Hb52a6bGplRBexJ_xZlEr3K7mc'
    }
});

export { api, baseUrlImages, languageApi };
