---
layout: post
title: Understanding Networks - TraceRoute
postHero: /blog_assets/2018-09-25/imageFront.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

This week in Understanding Networks our assignment was to explore the TraceRoute commando.
TraceRoute is a computer network diagnostic tool displaying paths and measuring transit delays
of packets across an IP network.

TraceRoute can be used from the command line and returns information such as: Hop number, Round trip time (RTT), Name and IP-address. However the overview you get in the command line can be hard to interpret.

<div class="aroundImage">
<img src="/blog_assets/2018-09-25/terminal.png"
     alt="circles">
</div>
TraceRoute as it looks from the commandLine
<br>

There are many pages out there visualizing the traceRoute information - [Monitis](https://www.monitis.com/traceroute/) is one of these.

For this weeks assignment I decided that I wanted to build my own TraceRoute.app - mapping information
from my Domain searches to a map. I wanted to build it in node - since I am still familiarizing myself with this library.

How I imagined it to work:
A npm library called 'nodejs-traceroute' would return the Ip-address
from the different "hops". An API called [Ip-api](http://ip-api.com/docs/api:json) would provide additional information such as geolocation and provider for each Ip-address - this would be added to a map. (The information returned from the Ip-API is shown in the following image. <br>

<div class="aroundImage">
<img src="/blog_assets/2018-09-25/IPAPI.png"
     alt="circles">
</div>

In my node app, I passed information from each HOP into the API and loaded the returned information into the browser using express. In the browser I used mappa.js, a canvas wrapper for maps, to create a map and imported name, latitude and longitude of each Ip-address into the sketch to get an idea of how paths of IP networks are connected. The app would enable me to type a domain and see the request travel through the world.
I ran into a lot of code-related issues along the way and will need more time to refine functions, provide better information on the map and change the user-input. However, this early version still provides some helpful visual feedback to the topic and is useful as a tool for my own use.  

This video shows how the app currently works, displaying a traceRoute request to a government page in Russia.

<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/Srce946LXao" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>

There was a lot of learning from working on this project in node. Also, when running traceRoute over and over again you tend to see some "network patterns".

A few observations:
* A lot of searches to Scandinavia goes through "NORDUnet". Also, paths going from the US to Scandinavia seem to often go through Madrid first(at least the searches I did).

<div class="aroundImage">
<img src="/blog_assets/2018-09-25/scandi.png"
     alt="circles">
</div>

* There are a lot of small jumps in the NewYork city area - often going through New Jersey before moving on to other parts of the US/world.

<div class="aroundImage">
<img src="/blog_assets/2018-09-25/uslocal.png"
     alt="circles">
</div>

* Denver often seems to be stop between international connections or longer US connections.

* It seems that a small number of providers account for the large number of connections.
  Tata Communications, Time Warner Cable Internet (Spectrum), Amazon, Level3 and Google* and Facebook* - (* especially when you search google and facebook domains)

The code for this project can be found [here](https://github.com/simonmarqvard/traceroute)

  <br>
  <br>
