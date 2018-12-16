---
layout: post
title: Understanding networks Final - Restful API
postHero: /blog_assets/2018-12-04/main.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
Topics: Arduino, Sockets.io, RESTful, server, node.js
---

Assignment : "Over the next three weeks, you'll design RESTful web interface to a physical device. Your device can either be a controller that sends data to the web interface, or an actuator that is controlled by the web interface."

For this 2 part assignment we were working in pairs. I was working with Keerthana and our assignment was the following:
<br>
1: Create a physical controller for Jason and Roxanne's light system. Meaning we would create the client-side system communication with their server.
<br>
2: Create a web interface/projection that Roland, Sandy and Kellee would build a controller for. Meaning we would create a server for another group to connect to.

All communication had to be orchestrated with the RESTfull API using HTTP requests such as GET, PUT, POST and DELETE to communicate between our devices. This meant that we would need to agree with the other groups on specifications like url routes and parameters to update. Initially this is what the specifications looked like:

Physical light controller - that we would make updates with:

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/restful.png"
     alt="circles">
</div>

Our projection server - that another group would make updates to:

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/floor.jpg"
     alt="circles">
</div>

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/api.png"
     alt="circles">
</div>

<strong>Part 1</strong>
<br>
Physical controller for light:
Based on the API we received from Jason and Roxanne we knew that there were three parameters to update:
<blockquote>
    <p>
- Pattern <br>
- Color <br>
- Speed <br>
</p>
</blockquote>

 We agreed that a wifi-connection led was necessary, as all communication would happen over wifi using the Arduino maker 1000. We agreed to use switches for the pattern states (Fire, Rainbow, Lightning), a circular soft potentiometer for color and a chickenhead knob potentiometer for speed.

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/buttons.JPG"
     alt="circles">
</div>

To get started with our arduino code we used the [TestHTTPClient](https://github.com/tigoe/MakingThingsTalk2/blob/master/3rd_edition/chapter4/TestHttpClient/TestHttpClient.ino) example from Tom Igoe's "Making things talk 2" repo on github.
We made sure our buttons were sending the correct outputs using the serial monitor and tested the post requests on our "example API" before connecting with the other group.

Ideally, at this point, connecting to the other group would be a simple task, but as some changes had been made in the specifications - this took a little extra time/adjusting.
When we had our controller connecting the the server, we "beautified" our controller. This was the final result.

<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/rXQ6hi5XLHU" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>


The code for the arduino controller can be seen [here](https://github.com/simonmarqvard/RESTfullHTTP/blob/master/Light_Controller/Light_Controller.ino).

The code for the light-server can be seen here [here](https://github.com/simonmarqvard/RESTfullHTTP/blob/master/Light_Controller/server/app2.js)


<strong> Part 2 </strong>

For the other part of the assignment we asked a group to create a physical controller for a projected visual. We wanted to create a dancefloor where you could see the feet of a number of people. Depending on the type of dance the feet would reorganize.


<div class="aroundImage">
<img src="/blog_assets/2018-12-04/feet.jpg"
     alt="circles">
</div>

The parameters to control were:
<blockquote>
    <p>
- Server connection <br>
- Tempo <br>
- Dance type <br>
- Number of people <br>
- Color <br>
</p>
</blockquote>

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/apiforus.png"
     alt="circles">
</div>

For our visuals/projection project we set up a an HTTP server and created an object of global variables called "state". State contained all the parameters that could be controlled using the post requests from the controller built by another group.

Structure of get requests that would return the requested variable.
<div>
{% highlight js %}
{% include /codeSnippets/2018-12-04 %}
{% endhighlight %}
</div>

Example of server response to a post request. This is example is telling the user to connect to the server before making changes.
<div>
{% highlight js %}
{% include /codeSnippets/2018-12-04-2 %}
{% endhighlight %}
</div>

In order to get an instant update with the results from the POST request we used sockets to connect the back-end and front-end. This way we would get an instant update to the new parameters passed into the global container ("state")

After some small adjustments this is what our combined projects looked like.

<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/rrUdj8CIVIw" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>


Serverside code can be seen [here](https://github.com/simonmarqvard/RESTfullHTTP/blob/master/dancefloor/server.js)


A few images of the projects:

<div class="aroundImage">
<img src="/blog_assets/2018-12-04/use.png"
     alt="circles">
</div>
<br>
<div class="aroundImage">
<img src="/blog_assets/2018-12-04/use2.png"
     alt="circles">
</div>
<br>
<div class="aroundImage">
<img src="/blog_assets/2018-12-04/use3.png"
     alt="circles">
</div>
