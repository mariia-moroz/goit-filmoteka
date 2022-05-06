const API_KEY = '306e564986f0782b8ec4bf227b0f3c28';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export default class FilmInfoApiService {
    constructor() {
        this.id = '';
    }
    
    async getFilmInfo() {
        console.log(this.id);
        const response = await fetch(`${BASE_URL}/${this.id}?api_key=${API_KEY}`);
        return response;
    }

    get id() {
        return this.id;
    }

    set id(newId) {
        this.id = newId;
    }
}