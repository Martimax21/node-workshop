
// Getting some data
// Create a file called iss.js. In it, write a simple node program that will output the latitude and 
// longitude of the International Space Station.
// Practice your google-fu by searching for “iss api” and figuring out the correct URL to use.
// Hint: there are many options and they are all good :)
// Notice that the values provided by the API are very precise. Round off the values to two
// decimal digits for a nicer display. Hint: toFixed

// Save/commit/push
var request = require('request');


var url = "http://api.open-notify.org/iss-now.json";

request(url, function(err, response,body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        try {
            var data = JSON.parse(body);
            console.log("The iss is at lat = " + data.iss_position.latitude.toFixed(2));
            console.log(data.iss_position.longitude.toFixed(2));
        }
        catch(e){
            console.log("There as an error")
        }
    }
});

function getISS(err, response,body) {
    if (err) {
        console.log('there was an error');
    }
    else {
        try {
            var data = JSON.parse(body);
            console.log("The iss is at lat = " + data.iss_position.latitude.toFixed(2));
            console.log(data.iss_position.longitude.toFixed(2));
        }
        catch(e){
            console.log("There as an error")
        }
    }
}

