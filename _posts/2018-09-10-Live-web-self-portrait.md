---
layout: post
title: LiveWeb - Self-portrait with video
postHero: /blog_assets/2018-09-11/1-brain.jpg
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

The first assignment in this class was to make a self-portrait using video and some form of user interaction. Aside from this the assignment was open to interpretation - and we could portray ourselves in whatever way we wanted.

My initial idea was to bring in a large amount of videos. I would arrange them in a brain shape, having the four major brain lobes: Frontal, Parietal (sensory), Occiptal (visual) and Temporal (memory). I would then place videos according to the themes - and my interest - in the different lobes.

<div class="aroundImage">
<img src="/blog_assets/2018-09-11/1-brain.jpg"
     alt="circles">
</div>


Attempting to create a brain-shaped object turned out to be quite a showoff in playing around with flexbox rows and columns in CSS. I wanted all the videos to be different sizes and shapes. The following image shows what the object looked like with background- and border colors enabled to help me navigate and adjusting the different divs and nested flexboxes.       

<div class="aroundImage">
<img src="/blog_assets/2018-09-11/lines.png"
     alt="circles">
</div>

I realized that no-one would ever associate my shape with a brain - and decided to put a transparent brain-layer on top of my boxes to make my intentions more clear. With some adjustments and some flex-shrink properties the "brain" and its "lobes" was finally coming together.

<div class="aroundImage">
<img src="/blog_assets/2018-09-11/brainwithlayer.png"
     alt="circles">
</div>

I then added a lot of youtube videos with topics that I frequently watch. Initially I would put certain videos in the lobe where they would belong - such as things I watch in the visual lobe, things related to movement in the motorcortex part etc. Eventually I realized this would take forever and I started adding the videos in a random order.

<div class="aroundImage">
<img src="/blog_assets/2018-09-11/videos.png"
     alt="circles">
</div>

I wanted to have the videos autoplaying and muted - the interaction would be buttons that would unmute the videos creating a sound chaos. This turned out to be much more complicated than I expected. Since the videos are embedded from youtube as <iframe> there is very little you can do to manipulate the videos without implementing it in the url. Eventually, I found a way by downloading a youtube-player-api. This would allow me to play and pause the videos - without referring to it in the url.

I created 34 buttons - one for each video - as a string and added it to the innerHTML of a div. When pressing the buttons the related video would start playing creating a sound chaos when enough videos are played at the same time. The noise- image- chaos is a reference to the way your brain functions during a semester at ITP.  

The sketch can be seen [here](https://simonmarqvard.github.io/Live-web-self-portrait/). Allow some time for the sketch to load - due to the many videos.

<br>
<br>
<br>
