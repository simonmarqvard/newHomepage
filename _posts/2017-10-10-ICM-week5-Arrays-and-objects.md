---
layout: post
title: ICM - Arrays and Objects
postHero: /blog_assets/2017-10-10/2017-10-10.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
---

This week in class we were introduced to objects and arrays. Objects it turns out, has changed slightly – so that it is now a class and a constructor you use to create an object. After becoming more familiar with this it now makes perfect sense. I spent a lot of time on this weeks quiz. I found it very difficult. Especially the challenge and the SuperDuperChallenge – with some help i managed to sort it out.

This weeks assignment was to design a sketch in an object oriented fashion. We were also allowed to reorganize an already existing sketch.

I decided to create a new sketch to play around with the array functions – but also to get better at communication between objects.

My intentions were to create a sketch where boxes would land and stack on each other. The sketch has some flaws as I couldn’t sort out the formula for when the boxes collide. *UPDATE* The code should now be fixed. Instead of using a dist function to calculate the distance between the squares I did two separate disx and disy calculations with absolute(). This worked a lot better as you can see.

<div class="aroundSketch">
<iframe frameborder="0" style= "width: 420px; height: 420px;"  src="/blog_assets/2017-10-10/sketch/index.html" ></iframe>
</div>

The code looked as follows:


<div>
{% highlight js %}
{% include /codeSnippets/2017-10-10.js %}
{% endhighlight %}
</div>
