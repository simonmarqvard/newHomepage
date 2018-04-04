---
layout: post
title: Mashups API - D3js
postHero: /blog_assets/2018-04-02/d3.jpg
author: Simon M. Jensen
gravatar: /images/homepageprofile.jpg
postFooter: Additional information, and maybe a <a href="#">link or two</a>
---
This week we were introduced to different programs for animation: three.js and d3.js. Our
assignment was to get familiar with one of them and create a sketch using data from a different source.

For a while I have been wanting to get more familiar with d3. This week was my chance. I have seen some great animations made using this library and I see a lot of potential in the things you can create with it. To learn the basics I did some online tutorials - to figure out the syntax.

The first sketch was creating a line of circles. Their radius was based on simple dataset.  

<div class="aroundImage">
<img src="/blog_assets/2018-04-02/d3simplecircles.png"
     alt="circles">
</div>

The next task was to create a pie-chart / donut-chart. These types of charts turned out to be very similar in their structure.

<div class="aroundImage">
<img src="/blog_assets/2018-04-02/pie.png"
     alt="circles">
</div>

<div class="aroundImage">
<img src="/blog_assets/2018-04-02/donut.png"
     alt="circles">
</div>

When learning more about the structure. I wanted to do something with animation. I found a well documented site using [topojson](https://github.com/topojson/topojson) a library that would outline different countries using a great number of line segments referred to as arcs. I downloaded the outline of Denmark and all its municipalities. With some difficulties I managed to make it work - especially finding my way into the interesting shapes was a struggle. After some work I had the outline of the map down. I then wanted it to be interactive and added a transition to each svg using the .on(mouseover, _____) function. And some minor fade-in effects when the document had loaded.    



<div>
{% highlight js %}
{% include /codeSnippets/2018-04-02.js %}
{% endhighlight %}
</div>
