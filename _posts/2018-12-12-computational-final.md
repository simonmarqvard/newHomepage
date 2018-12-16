---
layout: post
title: Computational typo Final - Robotjs generated text
postHero: /blog_assets/2018-12-12/postcard.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
Topics: Robotjs, Opentype.js, Sockets.io, Node.js
---

For the final project I revisited a prior assignment from the first weeks of this class. I wanted to create something that looked like human handwriting
with an ink-pen.  

Something like this is what I had in mind

<div class="aroundImage">
<img src="/blog_assets/2018-12-12/skrå.jpg"
     alt="circles">
</div>


Since it didn't go well last time, I wanted to give it another attempt.
This time I used opentype.js to get the contour of the letters.

<br>

<div class="aroundImage">
<img src="/blog_assets/2018-12-12/opent.png"
     alt="circles">
</div>

opentype.js return an array with all the x,y positions making up the letter. I then fed them into robotjs. Robotjs takes control of your mousePosition - and imitates the movement of the contour. All I then had to do was to set of a canvas in p5 - that would connect lines between the x,y positions from the "robot-hand".

<br>
<div class="aroundImage">
<img src="/blog_assets/2018-12-12/postcard.png"
     alt="circles">
</div>

I separated the letters out to individual keyboard keys and used sockets.io - so that
when a "d" was pressed - it would draw "d'". Most of the code was written in node. The code can be seen [here](https://github.com/simonmarqvard/computationalApproachTypography).

<br>
<br>
