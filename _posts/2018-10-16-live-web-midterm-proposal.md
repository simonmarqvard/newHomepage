---
layout: post
title: Live-web - Midterm Proposal
postHero: /blog_assets/2018-10-16/messenger-Logo.jpg
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

For the midterm assignment I would like to create my own chat/videochat-app. I use video communication
every day talking to friends and family in other parts of the world. Instead of going through Fb-messenger, Google or Skype I would like to connect with people through a service I created myself.

My idea is to combine sockets.io, WebRTC and PeerJS to create a videochat app. On the page you can see who is online and available to chat - you can call the person you want to talk to and you can make a group conversion with several people simultaneously. If possible, I would also like to make a screen-share feature so that I could potentially share my screen with others who are on the call. I have been told that ["webRTC screen share"](https://www.w3.org/TR/screen-capture/) could be a place to look for this. Also [this npm](https://www.npmjs.com/package/getscreenmedia) seems to useful for this feature.      

From a layout perspective I was thinking about arranging peoples' videos in a way similar to this Skype example.   
  Also, if the video can be treated as HTML a video player - features such as fullscreen/volume could be added for extra controls.

<div class="aroundImage">
<img src="/blog_assets/2018-10-16/callex.png"
     alt="circles">
</div>

An 'online indicator' could be added next to the callID for each person on the page. Similar to the one we know from several other platforms.

<div class="aroundImage">
<img src="/blog_assets/2018-10-16/greenstatus.jpg"
     alt="circles">
</div>
<br>
As we have already used some of these libraries and features in class - my hope is that this idea will be executable in a week. If not, I will focus on the Video-call and Screen-share aspect of the assignment.

<br>
<br>
