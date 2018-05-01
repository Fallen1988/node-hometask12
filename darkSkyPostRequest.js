const request = require('request');
const math = require('mathjs');

const darkSkyPostRequest = (key, state) => {
    request.get(
        `https://api.darksky.net/forecast/${key}/${state.lat},${state.lng}`,
        (error, response, body) => {
            try {
                const weather = JSON.parse(body).currently;
                console.log(`
                    TEMPERATURE: ${math.unit(weather.temperature, 'fahrenheit').to('celsius')},
                    WIND SPEED: ${weather.windSpeed}, 
                    HUMIDITY: ${weather.humidity}
                `)
            } catch (error) {
                console.error(error);
            }
        }
    )
};

module.exports = darkSkyPostRequest;