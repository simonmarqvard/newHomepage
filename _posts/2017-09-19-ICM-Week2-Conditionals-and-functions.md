---
layout: post
title: ICM - Conditionals and Functions
postHero: /blog_assets/2017-09-19/RuneProgrammingDesignSystems.png
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---

This week we worked with loops and conditionals. Our homework assignment was to create a sketch that included the following:

* One element controlled by the mouse.
* One element that changes over time, independently of the  mouse.
* One element that is different every time you run the sketch.

The extra material this week was a link to ProgrammingDesignSystems by Rune Madsen. I decided to try to replicate one of the illustrations that was provided on the website, as I imagined it would contain many of the functions we went over in class as well as conditions, if statements and loops.

<!-- <div class ="aroundImage">
<img src="/images/RuneProgrammingDesignSystems.png"
     alt="Rune">
</div> -->

<div class ="aroundImage">
<img src="/blog_assets/2017-09-19/RuneProgrammingDesignSystems.png"
     alt="Rune">
</div>

The image shows the illustration by Rune. It is a shape where you can drag each corner to a new location and the coordinates will update accordingly on the right side.

I decided to approach this task using a “Circle” Object. My theory was that using a “isInside” and “mouseIsPressed” function you would be able to drag the circle around on the screen. I then initialized 3 additional circle-objects. These served as the corners of my square. The 4 circles were connected using a “beginShape” / “Endshape” function and the “fill” function was utilized to visualize the shape.
It ended up looking like this:

<iframe frameborder="0" style= "width: 100%; height: auto;"  src="/blog_assets/2017-09-19/sketch1/index.html" ></iframe>



The code can be seen here:

<div>
{% highlight js %}
{% include /codeSnippets/2017-09-19.js %}
{% endhighlight %}
</div>
