let request = require('request');

let apiKey = '1695bf68ecb287e93ddd11e33122ec4d';
let location = 'melbourne';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});
