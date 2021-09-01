const request = require("postman-request");

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Juazeiro do Norte.json?access_token=pk.eyJ1IjoiZ3V0ZW1iZXJnLWFycmFpcyIsImEiOiJja3QwcjBha2wwN3V3MndvM3F5OWI1bWtwIn0.l4AF2uFwSUc3SZh-HacdHQ'
request(url, (error, response) => {
    if(error) {
        return console.error(error)
    }
    
    const {features} = JSON.parse(response.body)
    return console.log(`City: ${JSON.stringify(features[0].place_name)}, Coordinates: ${JSON.stringify(features[0].center.reverse())} `)
})
