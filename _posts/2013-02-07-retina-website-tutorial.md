---
title: 'Making your website look pretty on retina devices'
layout: post
bgcolour: pink
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IlJlY3RhbmdsZV8zXzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiDQoJIHk9IjBweCIgd2lkdGg9IjczNnB4IiBoZWlnaHQ9IjQxNnB4IiB2aWV3Qm94PSIwIDAgNzM2IDQxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzM2IDQxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iUmVjdGFuZ2xlXzMiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzU0Ljk2MSwyMjcuMDIxaDIxLjA3M2MwLjc0MiwwLDEuNDIyLTAuMzExLDIuMDQxLTAuOTI4YzAuNjE3LTAuNjE5LDAuOTI4LTEuMjk5LDAuOTI4LTIuMDQxdi00Ni4xMDINCgkJCWMwLTAuNzQyLTAuMzExLTEuNDIyLTAuOTI4LTIuMDQxYy0wLjYxOS0wLjYxNy0xLjI5OS0wLjkyOC0yLjA0MS0wLjkyOGgtMjEuMDczYy0wLjc0MiwwLTEuNDI0LDAuMzExLTIuMDQxLDAuOTI4DQoJCQljLTAuNjE5LDAuNjE5LTAuOTI4LDEuMjk5LTAuOTI4LDIuMDQxdjQ2LjEwMmMwLDAuNzQyLDAuMzA5LDEuNDIyLDAuOTI4LDIuMDQxQzM1My41MzcsMjI2LjcxMSwzNTQuMjE5LDIyNy4wMjEsMzU0Ljk2MSwyMjcuMDIxeg0KCQkJIE0zNjguOTkyLDIyNC4wMjFoLTV2LTRoNVYyMjQuMDIxeiBNMzYxLjk3LDE3OS4wMzVoOC4wNDN2MS4wMjhoLTguMDQzVjE3OS4wMzV6IE0zNTUuMDQ0LDE4Mi4wMDJoMjAuOTQ4djM2LjAwOWgtMjAuOTQ4VjE4Mi4wMDINCgkJCXogTTM5MC4xNDksMTUzLjk0MWMtMS4yMzctMS4yMzUtMi41OTgtMS44NTUtNC4wODItMS44NTVoLTQxLjE0NmMtMS40ODQsMC0yLjg0NywwLjYyLTQuMDgyLDEuODU1DQoJCQljLTEuMjM4LDEuMjM3LTEuODU1LDIuNTk4LTEuODU1LDQuMDgydjkwLjAzNWMwLDEuNDg0LDAuNjE3LDIuODQ1LDEuODU1LDQuMDgyYzEuMjM1LDEuMjM1LDIuNTk4LDEuODU1LDQuMDgyLDEuODU1aDQxLjE0Ng0KCQkJYzEuNDg0LDAsMi44NDUtMC42Miw0LjA4Mi0xLjg1NWMxLjIzNS0xLjIzNywxLjg1NS0yLjU5OCwxLjg1NS00LjA4MnYtOTAuMDM1QzM5Mi4wMDUsMTU2LjUzOSwzOTEuMzg1LDE1NS4xNzksMzkwLjE0OSwxNTMuOTQxeg0KCQkJIE0zNTcuOTM5LDE1OS4wMjNoMTYuMDg3djIuMDU3aC0xNi4wODdWMTU5LjAyM3ogTTM3MC45ODQsMjQ3Ljk5NmgtOXYtN2g5VjI0Ny45OTZ6IE0zODYuOTg0LDIzNi45NzZoLTQzLjA2MnYtNzEuMDE4aDQzLjA2Mg0KCQkJVjIzNi45NzZ6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=" alt="clock svg" />'
---
I thought I’d mix it up a bit and instead of writing a tutorial, I decided to make a video screencast. In this video tutorial I’ll show you some modern practices on how to make your website look great on retina devices, such as an iPhone 5 or a retina MacBook Pro.
<!--more-->

##What you’ll learn
From this tutorial you’ll learn how to make your logos and icons infinitely scalable by exporting them as SVG (Scalable Vector Graphics) format. Next, we’ll link the SVG image to the HTML file and talk performance, and how to encode the image into data URL to save an HTTP request. Lastly, you will learn how to export @2x images and how to embed them in CSS with media queries. Finally, we’ll learn about some cool JavaScript plugins that help you with that. Check out the video:
<iframe src="http://player.vimeo.com/video/59101559?byline=0" width="740" height="416" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
<figcaption><a href="http://vimeo.com/59101559">Making your website look pretty on retina devices</a> from <a href="http://vimeo.com/alexcican">Alex Cican</a> on Vimeo.</figcaption>

##Clarifications from the video (Spoiler Alert)
1. You can also copy the vector shape directly from Photoshop, paste it into Illustrator, and then export is as SVG. No need to save as PSD if you don’t want to.
2. The scripts that I mention may replace standard quality images with retina @2x images automatically, but only for the HTML side (`img` tag). For CSS images (`background-image`), the best way to target them is usign a media query. Unless you use LESS or SASS mixins for your CSS.
3. In the video I say that I want to target other devices with the CSS3 media query, yet use only a `-webkit` a vendor prefix. That's because I didn’t finish the entire script. Grab it here: [gist.github.com/alexcican/4726254](http://gist.github.com/alexcican/4726254).

##Links from the video
[DataURL creator](http://dataurl.net/#dataurlmaker)<br/>
[Slicy app](http://macrabbit.com/slicy/)<br/>
[RetinaJS](http://github.com/imulus/retinajs)<br/>
[Picturefill](http://github.com/scottjehl/picturefill)<br/>
[Retina images](http://blog.netvlies.nl/design-interactie/retina-revolution/)

