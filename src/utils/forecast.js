const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/bededd2a97696358fed5a770926a5bfc/${latitude},${longitude}`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const currentWeather = body.currently
            const dailyWeather = body.daily

            callback(undefined, `${dailyWeather.data[0].summary} It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precipProbability}% chance of rain.`)
        }
    })
}

module.exports = forecast