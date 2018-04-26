const request = require('request');

const geoPostRequest = (city, key, callback) => {
    request.post(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`,
        (error, response, body) => {
            if (response.statusCode && response.statusCode != 200) error = new Error('Status code is not 200');
            if (error) callback(error);

            const {lat, lng} = JSON.parse(body).results[0].geometry.location;
            callback(null, {lat, lng})
        }
    );
};

module.exports = {
    geoPostRequest,
};