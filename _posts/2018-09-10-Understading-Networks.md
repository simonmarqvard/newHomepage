---
layout: post
title: Understanding Networks - Ball Socket game
postHero: /blog_assets/2018-09-10/Ballsocketgame.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

In the first class of understanding networks we were introduced to different network
dynamics. We learned how computers connect to routers and what IP addresses are.
We were introduced to centralized networks, distributed networks and investigated
several real life networks - roadmaps, flightmaps, energy - and oilgrids, and their
structure. Also we were introduced to the (OSI) Open systems Interconnection Reference Model.

This weeks assignment "Socket Game" was intended to introduce us to sockets and wifi communication.
We were asked to design and build a device that could connect to a server using a TCP socket connection to
play a game.

The game is further described [here](http://tigoe.github.io/BallDropGame/). It was optional whether we
wanted to use the Arduino Uno and the Wifi101 shield, Arduino MKR1000, Ethernet Shields or a Raspberry Pi for this assignment. I chose to go with the Arduino MKR1000 since it seemed to be the most obvious choice for this assignment. I could be wrong though - and as I later found out the MKR1000 did leave me with some frustration as I will return to later.

My experience with Arduino is very much based on our learnings from Physical Computing. Since it's been a while I decided to start with the very basics in this assignment - setting up some buttons and getting a digital read. Supported by examples and code from Tom Igoe I quickly became more comfortable with it again. although a bit rusty.   

For the control of the game I used two buttons - one going to the left, one going to the right and then a potentiometer to control up and down. The potentiometer was coded with a big neutral zone where nothing would happen, whereas high and low reads would control the pad to go up and down. Aside from that a button was used to connect/disconnect to the game.

The early state:
<div class="aroundImage">
<img src="/blog_assets/2018-09-10/IMG_0800.JPG"
     alt="circles">
</div>

Up until this point everything had been going fairly well. The different buttons would print (Serial.print) "l", "r", "d" and "u" to my Serial Monitor when pressing the various buttons. As a first step I decided to test the control using the command line interface from my computer. This was done through a pipe connecting the information from my controller to the IP address of the game.
<br>
<br>
<em><strong> $ cat /dev/cu/usbmodem1421 | nc 172.22.151.125 8080 </strong></em>
<br>
<br>
This would allow me to test my controls and make a few adjustements to buttons where necessary.

The next step was to take advantage of the wifi board passing information directly to the IP address without using the command line. This turned out to more complicated than expected. Connecting to itpsandbox and the right server was no problem, but whenever I was trying to connect to the game - nothing would happen.
After several hours of frustration I decided to test the MKR1000 board - I isolated the <em> client.connect(server, 8080) </em> in the loop expecting my paddle to connect to the game right away, without pressing any buttons, only to realize the the board didn't work. This turned out to be the case with 5-6 other boards, until I found one that would connect me to the game.
<br>
With my controller connecting to the game a could attach a red LED indicating my connection to the wifi and a green LED indicating my connection to the game.

This is what my final board looked like:
<div class="aroundImage">
<img src="/blog_assets/2018-09-10/IMG_0807.JPG"
     alt="circles">
</div>

<br>
From a design-perspective it is not a beauty. However I do feel like the functionality of the board is good - especially the lights provide a great feedback, indicating whether you are connected to the wifi and/or the game.  

Testing the final board:
<br>
<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/K4MRjXRnJDo" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<br>

It seemed my controller was working through the Wifi-shield. However it confused me that I couldn't get the controller to work when powering it from a power plug in the wall. The best reason I can come up with is that when I upload the code using my computer and press Serial monitor it executes the script on the Arduino - connecting to the wifi. However when powering from the power plug I have no button to execute the code connecting to the wifi? I tried attaching another button to press for wifi connection - with no luck though - is that the right way to do it? If this doesn't make sense I'll ask during class. Along with a few other things.

Arduino code:

<div>
{% highlight c++ %}
{% include /codeSnippets/2018-09-10 %}
{% endhighlight %}
</div>

<br>
<br>
<br>
