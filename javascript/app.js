$(document).ready(function() {



// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC508PqCEWe1C6ytWYhVDWT_CIJIXMq5Ds",
    authDomain: "projectoneb-d82a1.firebaseapp.com",
    databaseURL: "https://projectoneb-d82a1.firebaseio.com",
    projectId: "projectoneb-d82a1",
    storageBucket: "",
    messagingSenderId: "629735740796"
  };
  firebase.initializeApp(config);

  //Google Maps API key = AIzaSyDAECOd2n_nBS8HC4lP7cAOwzD82pkXKjk
  var googleApi = "AIzaSyDAECOd2n_nBS8HC4lP7cAOwzD82pkXKjk";
 
  var austinLat = 30.307;
  var austinLon = -97.756

  function initMap() {
        var uluru = {lat: austinLat, lng: austinLon};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

      initMap();



      

      var googlePlacesUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + austinLat + "," + austinLon + "&radius=500&types=food&name=cruise&key=" + googleApi;
      //place search
      $.ajax({
      	url: googlePlacesUrl,
      	method: "GET"
      })

      .done(function(response) {
      	console.log(googlePlacesUrl);
      	console.log(response);
      });



	var bartonSprings = {
		name: "Barton Springs Pool",
		open: "5am-10pm",
		admission: "$3 for residents, $8 for non-residents",

	}
	var deepEddy = {
		name: "Deep Eddy Pool"
	}


//openweathermap.org API KEY (lisa)
    var APIKey = "4cf6d39172b7eea80a5f792268d8eed8";

    var place = "Austin,Texas"

    // Here we are building the URL we need to query the database
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?" +
      "q=" + place + "&units=imperial&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").html("Wind Speed: " + response.wind.speed);
        $(".humidity").html("Humidity: " + response.main.humidity);
        $(".temp").html("Temperature (F) " + response.main.temp);
        $(".sunset").html("Sunset: " + response.sys.sunset);
        $(".latt").html("Latitude: " + response.coord.lat);
        $(".long").html("Longitude: " + response.coord.lon);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
        console.log("Sunset: " + response.sys.sunset);
        console.log("Latitude: " + response.coord.lat);
        console.log("Longitute: " + response.coord.lon);
      });

      



});