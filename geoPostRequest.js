const request = require('request');

const geoPostRequest = (city, key, callback) => {
    request.post(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${key}`,
        (error, response, body) => {
            try {
                const {lat, lng} = JSON.parse(body).results[0].geometry.location;
                callback(null, {lat, lng})
            }catch (error){
                callback(error)
            }
        }
    );
};

module.exports = geoPostRequest;