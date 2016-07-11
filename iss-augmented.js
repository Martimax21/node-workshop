// Augmenting our application

// Create a file called iss-augmented.js. It will be similar to iss.js but more difficult!

// Augment your ISS application to tell the user how “far” the ISS is from them. Here is how you will do it:

// Using the prompt module, ask the user to enter their location (e.g. “montreal”)

// Using Google’s Geolocation API, find out the latitude and longitude of the provided location. Here is how:

// This URL: https://maps.googleapis.com/maps/api/geocode/json?address=montreal will show the lat/long for montreal
// Explore this URL in your web browser to figure out where the lat/lng is located. Try to pass different 
//// When you are comfortable with finding the location based on an input address, you can then calculate the
//distance between the ISS and the user:
// Look at this URL: http://www.movable-type.co.uk/scripts/latlong.html
// It specifies a formula for calculating the distance. Scroll the page to the JavaScript portion, and create a
//function that uses the provided code. You don’t need to understand what is going on in there, it is very mathy!
// NOTE: In order for this code to work, you’ll need to add the following code at the beginning of your program:
// Number.prototype.toRadians = function() {
//     return this * Math.PI / 180;
//   }
// Finally, display a message to the user telling them what their “distance” to the ISS is.

// Save/commit/push
 Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  }

var prompt = require('prompt');
var request = require('request');

// function getISS(err, response,body) {
//     if (err) {
//         console.log('there was an error');
//     }
//     else {
//         var latIss = JSON.parse(body).iss_position.latitude.toFixed(2);
//         var longIss = JSON.parse(body).iss_position.longitude.toFixed(2);
//         calculaDistance(lat1,latIss,long1,longIss);
//     }
// }



prompt.get('loca', function(err, answers) {
    if (err) {
        console.log('there was an error');
    }
    else {
        var url = ("https://maps.googleapis.com/maps/api/geocode/json?address=" +answers.loca);

        request(url, function(err, response, body) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var parsedBody = JSON.parse(body);
                var lat1 = parsedBody.results[0].geometry.location.lat;
                var long1 = parsedBody.results[0].geometry.location.lng;
                
                var url2 = "http://api.open-notify.org/iss-now.json";
                request(url2, function(err, response, body) {
                    if (err) {
                        console.log('there was an error');
                    }
                    else {
                        var latIss = Number(JSON.parse(body).iss_position.latitude);
                        var longIss = Number(JSON.parse(body).iss_position.longitude);

                        var dist = calculaDistance(lat1, latIss, long1, longIss);
                        console.log("The distance to ISS is : " + dist);
                    }
                });
 //               console.log(latIss);
 //               console.log(longIss);
            }
        }); 
        
    }
});

function calculaDistance(lat1, lat2, lon1, lon2) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (lon2 - lon1).toRadians();

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d;
}