---
layout: post
title: Computational approaches to Typo - ANSI-Terminal
postHero: /blog_assets/2018-10-31/hello.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---


This week we were introduced to xterm.js - a terminal emulator written in Javascript.
We were asked to experiment with the content and create our own terminal sequence which could
either be a short "sketch" - playing with colors or randomness.

I used the "hello world" sketch to create a "hello". I then played around with carriage returns, newlines, spacing etc.
In the beginning I had an idea of what was going on - but as small changes were made I feel like strange things just
started happening on the screen. Some of the things looked good. Many things did not. Although I am not using the random
function at any point - I would still consider many parts of this sketch random.

My "hello" on screen was controlled by "for loops". In order to separate the loops I created two booleans: "move" and "back".
The various true/false combinations of these booleans combined with FrameCount would control what was happening to my "hello" and when it would happen.

If I were to call the sketch something - It would probably be "Hello - going crazy". As I think the control of the hello gets more and more out of hand.

I did add color to the text. But decided it looked better in classic terminal colors.

A couple of screenshots from the sketch.     


<div class="aroundImage">
<img src="/blog_assets/2018-10-31/1.png"
     alt="circles">
</div>


<div class="aroundImage">
<img src="/blog_assets/2018-10-31/2.png"
     alt="circles">
</div>



<div class="aroundImage">
<img src="/blog_assets/2018-10-31/4.png"
     alt="circles">
</div>

Link to P5 webEditer sketch [here](https://editor.p5js.org/Simonmarqvard/sketches/H183BSP3Q)


<br>
<br>
<br>
<br>
