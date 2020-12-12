const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_COCKTAILS_URL = "https://www.thecocktaildb.com/api/json/v1";
const api_key = '1';

const urls = {
    posts: `${BASE_URL}/posts`,
};

const cocktailsUrls = {
    random: `${BASE_COCKTAILS_URL}/${api_key}/random.php`,
    search: `${BASE_COCKTAILS_URL}/${api_key}/search.php`
}

export { BASE_URL, urls, cocktailsUrls };