---
layout: post
title: Live-web - webRTC
postHero: /blog_assets/2018-10-09/image4.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
Topics: HTTPS-server, Sockets.io, WebRTC
---

This week in live-web we were working on webRTC (real time communication). This also introduced
us to HTTPS to set up a secure connection for our pages using keys and certificates. Our assignment was to create something using the ability to share camera images.

I did not fully manage to complete this task. I underestimated the amount of time needed to set up a HTTPs connection for the first time.

The first hurdle was getting the example sketch from our class to work. I was receiving the same error
over and over again.  

<em>"NotFoundError: Requested device not found"</em>

<div class="aroundImage">
<img src="/blog_assets/2018-10-09/errorLocalhost.png"
     alt="circles">
</div>

I figured it had probably something to do with running it on the localhost - so I tried setting up the class sketch with a HTTPs connection on my newly acquired smj470.itp.io domain. Only to find the same error.

<div class="aroundImage">
<img src="/blog_assets/2018-10-09/errorHTTPs.png"
     alt="circles">
</div>

I searched the internet for possible explanations - eventually deciding to restart my computer. This turned out to work. I now finally had a connection through to the webCam.

<div class="aroundImage">
<img src="/blog_assets/2018-10-09/classsketch.png"
     alt="circles">
</div>

Having the class sketch work - I could now start working on my own version of the sketch. I chose to rewrite the whole code from the beginning to get familiar with functions and libraries.

Here was my list of things to do:
  - set up HTTPs server.
  - figure out was how to pass in the credentials for the HTTPs server.
  - Make the sketch work on my "new" domain - smj470.itp.io.
  - Use mouse coordinates to control height and width of video-canvas using socket.io

The last point turned out to be more of a struggle than expected. I could send my mouseValues to the server and console.log them just fine. But when i was trying to emit them back to the users I would get an empty object. Since it was working in other assignments we had done - I figured I would upload it and ask about it in class. However, when uploading it to the server it suddenly starting working. For that reason I figured it probably had something to do with restarting the server.

As a last minute procedure I attempted to get the mouseX, mouseY to adjust the size of the video - by wrapping it inside a canvas, selecting the canvas and changing its style.width and style.height using the mouseValues. It was not successful though.

A link to the code can be found [here](https://github.com/simonmarqvard/webRTCboilerplate). Although the sketch does not meet the requirements for this weeks assignment I am hoping it will serve as a useful boilerplate for the coming weeks.

<br>
<br>
<br>  
