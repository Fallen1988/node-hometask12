const request = require('request');

const darkSkyPostRequest = (key, state, callback) => {
    request.get(
        `https://api.darksky.net/forecast/${key}/${state.lat},${state.lng}`,
        (error, response, body) => {
            if (response.statusCode && response.statusCode != 200) error = new Error('Status code is not 200');
            if (error) console.error(error);

            const weather = JSON.parse(body).currently;
            console.log(`
                TEMPERATURE: ${(5/9 * (parseFloat(weather.temperature) - 32)).toFixed(2)},
                WIND SPEED: ${weather.windSpeed}, 
                HUMIDITY: ${weather.humidity}
            `)
        }
    )
};

module.exports = {
    darkSkyPostRequest,
};