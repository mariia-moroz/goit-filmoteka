import getData from './getData';

const options = {
  key: 'api_key=306e564986f0782b8ec4bf227b0f3c28',
    configUrl: 'https://api.themoviedb.org/3/configuration?',
    base_url: '',
    poster_size: '',
};

export async function saveConfiguration() {
    try {
        const { data } = await getData(options.configUrl + options.key);
        localStorage.setItem("base_url", data.images.secure_base_url);
        localStorage.setItem("poster_size", data.images.poster_sizes[3]);
    } catch (error) {
        console.error('error is: ', error);
    }
}

export function getBaseUrl() {
    return localStorage.getItem("base_url");
}

export function getPosterSize() {
    return localStorage.getItem("poster_size");
}