const {geoPostRequest} = require('./geoPostRequest');
const {darkSkyPostRequest} = require('./darkSkyPostRequest');
const {GEOCODING_API_KEY, DARK_SKY_API} = require('./apiKeys');

const city = process.argv[2];

geoPostRequest(
    city,
    GEOCODING_API_KEY,
    (error, state) => error ? console.error(error) : darkSkyPostRequest(DARK_SKY_API,state)
);