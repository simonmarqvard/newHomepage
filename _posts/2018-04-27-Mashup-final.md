---
layout: post
title: Finding Trends - Final
postHero: https://thumbs.gfycat.com/YearlyAmusedHind-size_restricted.gif
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

This week we had our Final in "Mashup - creating with web API's". For this project I
went back to my initial idea of creating a single page website that would display data
for individual countries. This was the idea I presented in the very first weeks of this class. Originally I wanted to do it with Twitter trends API - but decided
to do it with the Google Trends API instead.

When planning out this sketch one of the reasons for going with this idea was the challenges.
The Google Trends API is only accessible through node. So for this to work I had to set up a server. I signed up for one through DigitalOcean and used the googleTrends.interestOverTime and googleTrends.interestByRegion serve the information that I needed.
Another challenge was that I wanted to display the information in a d3 sketch. I am new to d3 but would like to learn more about it. For that reason I figured this could be a good opportunity.

The outlines of the assignment were as follows:
<br>
<em> The final project will involve creating a single page (client-side only) web experience that ideally leverages data from at least one public web API and incorporates the use of at least one Javascript “interaction” library, such as p5, d3, Three, etc. Server side storage will be covered and encouraged to be used, but is not a requirement. <em>

The following shows a sketch of what I initially imagined my sketch to look like and how to create it.
<div class="aroundImage">
<img src="/blog_assets/2018-04-27/sketch.png"
     alt="circles">
</div>

Previously, when playing around with d3, I found a tutorial showing how to create a 3 dimensional globe or a orthographic globe projection - which it is also called. The link can be found here: [globe](https://github.com/d3/d3-geo/blob/master/README.md#geoPath). The sketch on my brainstorm image is based on that projection.
My first objective was to get the Google Trends API to work. I had some valuable help from a classmate who had succesfully used that API for another project. Together we set up an account on digitalocean and created a droplet for this project. This setup would create a server from which I could access the data through node. The serverside code is displayed in the following.

```javascript
var express = require('express')
var app = express()
var fs = require('fs');

app.listen(2000, function() {
  console.log('Example app listening on port 2000!')
})

//get data from google trends api
const googleTrends = require('google-trends-api');

//every time theres a new selected country or new keyword, a new
//route is created with that keyword and selectedCountry
//https://expressjs.com/en/guide/routing.html//
app.get("/trends/:keyword/:selectedCountry/:startDate", function(req, res) {
  console.log(req.params);

  googleTrends.interestOverTime({
    keyword: req.params.keyword,
    geo: req.params.selectedCountry,
    startTime: new Date(req.params.startDate),
    endTime: new Date(Date.now()) //30days
    //resolution: 'CITY',
    //  granularTimeResolution: true,
  }, function(err, results) {
    if (err) console.log('oh no error!', err);
    else {
      console.log("hello");
      res.send(results);;
    }
  });
});

app.get("/trends/:worldinputTerm", function(req, res) {
  console.log("IM A RUNNING");

  googleTrends.interestByRegion({
      keyword: req.params.worldinputTerm,
      startTime: new Date(Date.now()),
      endTime: new Date('2018-01-01'),
      resolution: 'COUNTRY'
    },
    function(err, results) {
      if (err) console.log('oh no error!', err);
      else {
        console.log(results)
        res.send(results);;
      }
    });
});

//app use is called every time a request is sent to server
//serves a static file
app.use('/', express.static('public'));
```

I had to make two separate requests. One asking for trends over time - another
asking for interests by region. This way I could search individual countries for trends but also
make a global search for trends. Which would make a more interesting comparison.

When I had the Google Trends API working I created a line chart using [Chart.js](http://www.chartjs.org/samples/latest/). I find this tool very useful and appealing for displaying data. I wanted it to be very simple. Also, since the values returned from the Google Trends API (interestovertime) was relative to the highest measured value - it did not really make sense to add labels to the y-axis. The way the data is returned doesn't allow for comparisons between countries. Rather, it allows to seek out the words that have been searched the most within a certain time range for each individual country.

<div class="aroundImage">
<img src="/blog_assets/2018-04-27/graph2.png"
     alt="circles">
</div>

This graph is showing how often the searchword: "Olympics" has been searched on a daily basis in Brazil between Jan.1 2016 and today. The trending peak was obviously when the Olympics were held in Rio august 2016.

Using jQuery I created some input boxes on the screen. The information from these boxes would be used for a $.ajax "get request" that would pull out new information from the Google-API and draw the new chart. Getting the search information from the input box (word and date), creating a new get request from the server and drawing the chart was done using the following code.

```javascript
function searchWord() {
  $('#chessBoardButton').click(function() {
    var inputTerm = $('#inputBox').val();
    $(".selectedSearchWord").empty();
    $(".selectedSearchWord").append(inputTerm);
    $(".info").css("display", "none")

    startDate = $('#startDate').val();
    console.log(startDate)
    console.log(selectedCountry)
    console.log(inputTerm)
    getData(inputTerm);
  })
}


//make ajax call to get data from google trends
function getData(inputTerm) {
  console.log(selectedCountry);
  $.ajax({
    //makes request to localhost:2000/trends
    url: "/trends/" + inputTerm + "/" + selectedCountry + "/" + startDate,
    type: 'GET',
    dataType: "json",
    error: function(err) {
      console.log("yikes there's an error" + err);
    },
    success: function(data) {
      console.log("GETTING DATA");
      //    console.log(data.default.timelineData.length)
      for (var i = 0; i < data.default.timelineData.length; i++) {
        googleDataValues[i] = data.default.timelineData[i].value[0];
        // console.log(googleValues[i]);
        googleDataDates[i] = data.default.timelineData[i].formattedAxisTime;
        // console.log(googleDates[i]);
      }
      //use returning values to createChart using chart.js (x: time, y:value)
      createChart(googleDataDates, googleDataValues)
      console.log(selectedCountry)
    }
  })
}
```

With the trends working the next step was to incorporate the d3 globe projection.
I wanted to be able to click a country on the globe and have that country be the "geo" in
my API request - meaning the country I was searching the information from. The Google-Api geo expected a two letter abbreviation for a country fx. DK, GB, US. However, the Paths (country-lines) in the d3 world sketch only came with a code 004, 008 etc. To convert, I imported a second json.file called convertfile.json. This file had all countries listed with all information and could convert the country codes into two-letter-alpha codes that could go into the API.


```javascript
//import convertfile
d3.json("convertfile.json", function(code) {
  countryCodeData = code;
});

function drawWorld(){
  //load the paths (countries with codename)
  d3.json("world.json", function(world) {
  //access the codename
    var geojson = topojson.feature(world, world.objects.countries);

//map function creates new array calling a function on each element
    geojson.features = geojson.features.map(function(d){
//iterate through convertfile
      countryCodeData.forEach(function(element){
//if id from world file is equal to country code from convertfile
//change worlds countrycode to two-letter code
        if(d.id == element["country-code"]){
          d.countryCode = element["alpha-2"];
          }
        })
      return d; // #W()@U#OIWUJKNWJ!IW
    });
})
}
```
What this meant was that I could now press a country on the map - and that country
would be the country in which I searched for information.

The last feature I wanted to add was a global search function. The code to do this was very in line with the country search. However the returning values from the API would give me all countries and the popularity of the search word based on a scale from 0-100. I used the following code to color the
countries based on the popularity of the search.

```javascript
function getWorldData(worldinputTerm) {
  $.ajax({
    //makes request to localhost;2000/trends
    url: "/trends/" + worldinputTerm,
    type: 'GET',
    dataType: "json",
    async: false,
    error: function(err) {
      console.log("yikes there's an error" + err);
    },
    success: function(data) {
      for (var i = 0; i < data.default.geoMapData.length; i++) {
        //create an object containing the val and geocode for each country
        dataToReturn[i] = {
          val: data.default.geoMapData[i].formattedValue,
          geo: data.default.geoMapData[i].geoCode
        }
      }
      console.log(dataToReturn)
      console.log(countries);
      //filter out countries that doesnt have a value
      dataToReturn = dataToReturn.filter(function(d) {
        //d.val[0] because it is in an array
        return d.val[0].length > 0;
      })
      //Going through the countries find highest value in array
      let max = d3.max(dataToReturn, function(d) {
        return Number(d.val[0]);
      });
      console.log(max);

      //assign graded color based value based on the max value in array
      //most popular most orange - least popular = white
      var color = d3.scale.linear()
        .domain([0, max])
        .range(["white", "orange"]);

      //if the country code is equal to the received data color the country
      countries
        .attr("fill", function(d) {
          // dataToReturn.forEach(function(freshD) {
          for (let i = 0; i < dataToReturn.length; i++) {
            let freshD = dataToReturn[i];

            if (d.countryCode == freshD.geo) {
              // console.log(color(freshD.val[0]));
              return color(Number(freshD.val[0]));
            }
          }
        })
      }
    })
  }
```
This is what the final result looked like:




<div class="aroundImage">
<img src = "https://thumbs.gfycat.com/YearlyAmusedHind-size_restricted.gif"
     alt="circles">
     <span> Trends searched locally and globally </span>
</div>

<br>
<br>


The full code can be found on github here:
[code](https://github.com/simonmarqvard/GoogleTrendsD3Sketch)

<br>
<br>
<br>
