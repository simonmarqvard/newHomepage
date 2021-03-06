---
layout: post
title: Nature of Code - Final
postHero: /blog_assets/2018-05-11/NOCgifsaved1.gif
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

For my nature of code final I wanted to combine two topics that we had worked
with during the semester. One being a physics library (matter.js) Another
being genetic algorithms.

In the first part of the semester we played around with physics simulation
using: vectors, forces and particles. Ultimately this led us to testing different physics libraries
such as matter.js and box2d. The second part of the semester took us trough some of the
basic principles about neural networks, genetic algorithms and machine learning.

My final project was inspired by this video from openAI gym.   

<br>
<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/uwz8JzrEwWY" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<br>

I liked the idea of random shaped creatures/objects moving from one side of the screen to the other.
Some would move a lot while others wouldn't move at all. Over time I wanted a genetic algorithm to
select the best moving creatures/objects and pass their DNA on to the next generation of objects. Ideally, this would, over time, create a group of objects with optimal shapes for moving forward.

My inspiration for the random basic shapes and their movement was found in Karl Sims work, Evolution Simulation, from 1994:  

<br>
<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/JBgG_VSP7f8" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<br>

To create the random moving shapes I decided to use matter.js. My initial idea was to attach a rectangle to a body and have the rectangle rotate. A problem here was the matter.js didn't have a "motor" that would keep rotating an element. Instead I did it with rotation. This is what my random objects looked like.  

<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/LOvAt-PXO4E" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>

Some objects didn't move at all and some moved very fast. However the physics didn't really seem to work.
I think this was partly due to me creating my function for forward movement. And therefore not really playing by the rules of the physics library.
Instead I decided to take advantage of the gravity already provided in the library and use that as movement. This way instead of having a horizontal target (a finish line for the moving objects). The target would be located vertically. The further my objects made it the higher the chances of passing on DNA to the next generation. The example is very similar to before - but turned from horizontal to vertical - replacing forward movement with gravity.

I used Dan Shiffmans code from Smart Rockets ([link](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp09_ga/NOC_9_02_SmartRockets_superbasic)) as a template. But changed the Genes (DNA) from a random vector to width, height and box friction. This way I would create a large number of boxes in different sizes and friction. Depending on how far a box would make it in a given time - its DNA would then be passed on to the next generation of boxes (The idea of "fitness": The longer a box made it - the higher the chances of having its DNA selected for next round).


This is what one of the first iterations looked like.

<br>
<div class="aroundSketch">
<iframe src="https://www.youtube.com/embed/sDlz_NeyfU4" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
</div>
<br>

The goal is for the boxes to get to the white dot. In the beginning the boxes come in all sizes. Gradually they adapt to the course by adjusting their shape towards the object that makes it closer to the target. There are many knobs and adjustments to place around with in an example like this. Number of boxes, mutationRate, time before resetting the sketch, friction, startingWidth and Height of boxes etc. Can all be adjusted to make a sketch that quickly makes it to the target or a sketch where everything happens slowly. I'm still in the process of finding the right amount of everything.
This is what my current project looks like.


<div class="aroundImage">
<img src="/blog_assets/2018-05-11/NOCgifsaved1.gif"
     alt="circles">
</div>



The real sketch can be seen [here](https://simonmarqvard.github.io/NatureOfCodeFinalGA/) (Zooming out is necessary as the sketch is made for a bigger screens).
<br>
<br>
The code for the project can be found [here](https://github.com/simonmarqvard/NatureOfCodeFinalGA).

<br>
<br>
