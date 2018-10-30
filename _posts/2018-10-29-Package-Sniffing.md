---
layout: post
title: Understanding Networks - Package Sniffing
postHero: /blog_assets/2018-10-29/cover.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

This weeks assignment was to explore package sniffing. The past few weeks we have been introduced to programs like Herbivore and Wireshark for capturing and analyzing traffic on our home networks.

<strong>Herbivore</strong>

Before opening any programs on my computer I was trying to think of the devices I have in my home and which of them I was expecting to see in the software. I share my internet/router with my neighbors and the router is located in their room. Also my computer setup is located in the far end from their apartment, meaning that my internet is usually slow if they are using it - I found out!
In my apartment I have my laptop and an Alexa home assistant. My neighbors have a printer, a wireless speaker and their computers. These were the things I was expecting to see when opening Herbivore.


<div class="aroundImage">
<img src="/blog_assets/2018-10-29/devicesHerb.png"
     alt="circles">
</div>

In Herbivore is was able to see two Apple computers, an Epson printer and a device called "Hon Hai precision". At first I had some serious doubts about what the Hon Hai device was. I imagined it to be my neighbors speaker. I looked up the name and found that Hon Hai is an electronics manufacturing company producing products for companies such as Blackberry, Apple, Nintendo, Sony and Nokia. I later found that it was simply my router - which is also clearly indicated in the Herbivore image.
I can't remember if we discussed this in class, but it surprised me that my Alexa didn't show up in the Herbivore mainpage overview?

I wanted to test the Herbivore sniffer. And today I decided to do it a couple of times, when the internet in my room was really slow. Finally, I was able to tell if the router simply is too far away from my room or whether my neighbors were taking up the connection speed.

<div class="aroundImage">
<img src="/blog_assets/2018-10-29/WhenInternetIsSlow.png"
     alt="circles">
</div>

When the internet slowed down significantly in my apartment - It did turn out that they were either downloading apps for Microsoft office or talking on Skype.   

I also wanted to see if I would be able to recollect some of the pages I had previously visited just by looking at the data from the Herbivore sniffer. There is a lot of noise when you start the "sniffer" - and I was curious If the noise would block out some the pages I visited. It didn't! I visited 6 webpages in a specific order. When I stopped the sniffer it had returned 253 packets. Still, it was very easy to tell which pages I had visited - and what order the visits came in. That is a little scary.

<strong>Wireshark</strong> - click images for better view

Wireshark is a whole different league when it comes to analyzing the network protocol. In order to get going I watched a few tutorials to understand what is being shown in the software.

I visited a Danish news website www.tv2.dk. I then filtered the http with everything outgoing from my computer (first image) and filtered http with everything coming into my computer (image 2). This helped me understand what was going on to some degree.

HTTP outgoing:
<div class="aroundImage">
<a href="/blog_assets/2018-10-29/httpReqfromPctoTv2.png">
<img src="/blog_assets/2018-10-29/httpReqfromPctoTv2.png"
     alt="circles"> </a>
</div>

The image shows the requests going from my computer to the tv2 server. These requests are then being responded with Status code definitions and Text/html content building up the page (as shown in image 2).

HTTP incoming:
<div class="aroundImage">
<a href="/blog_assets/2018-10-29/statusreturnedfromGet.png">
<img src="/blog_assets/2018-10-29/statusreturnedfromGet.png"
     alt="circles"></a>
</div>

The full correspondence can be seen <a href="/blog_assets/2018-10-29/httpNewsGETRes.txt">
by clicking this link</a> - I imagine this is what makes up the entire flow of a webpage - when making a http request in a browser.

In the center of the window different instances of the internet layers are displayed.
* Physical layer
* Data link
* Network
* Transport
* Application
Each of these can expand further to specify transport time, protocols, content etc.

When I read further into HTTP some pages are telling me that HTTP uses a TCP connection. This is in line with the information I get from the Transport layer in Wireshark. However, it is suggested that HTTP uses only one TCP connection - from client to server. Then something called TTL (time to live) is responsible for resending data if necessary? Do I understand this correctly?

When I visit youtube with WireShark open I see this.

<div class="aroundImage">
<a href="/blog_assets/2018-10-29/udp.png">
<img src="/blog_assets/2018-10-29/udp.png"
     alt="circles"> </a>
</div>

I looked up the source ip 173.194.162.201 - it belongs to Google, who owns Youtube. My best interpretation of this information is that because I am streaming a video the protocol is UDP. With UDP no error checking or correction is necessary which I why we do not see any information going back to google from my IP - instead it is a constant flow of data chunks sent to my computer.

As a last small attempt. I tried running my digitalOcean server while leaving WireShark open.

During login I received this screen.


<div class="aroundImage">
<a href="/blog_assets/2018-10-29/digitalOcean server.png">
<img src="/blog_assets/2018-10-29/digitalocean server.png"
     alt="circles"> </a>
</div>

This resulted in some new interesting protocols - such as SSHv2 - and client/server Key Exchange Init.
More interesting did it get when I tried running a peerJS webchat application hosted on the server.

<div class="aroundImage">
<a href="/blog_assets/2018-10-29/peerwebchat.png">
<img src="/blog_assets/2018-10-29/peerwebchat.png"
     alt="circles"> </a>
</div>

This image is showing data being sent from my computer to my server (198.211.104.167) and back again. It seems the webchat information is being passed back and forth using a TCP protocol? Maybe this is due to peerJS?


<br>
<br>
