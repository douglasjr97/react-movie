import axios from 'axios';

const { TMDB_BEARER_TOKEN } = process.env;
const baseUrlImages = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
const languageApi = '?language=pt-BR';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: { Authorization: 'Bearer ' + TMDB_BEARER_TOKEN }
});

export { api, baseUrlImages, languageApi };
