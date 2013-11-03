---
title: 'Displaying recent posts on Scriptogr.am'
layout: post
bgcolour: light_blue
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzM2cHgiIGhlaWdodD0iNDE2cHgiIHZpZXdCb3g9IjAgMCA3MzYgNDE2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3MzYgNDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJjIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM2OS4wMTYsMTgwLjk0aC03LjAzMXYyNy42NzdsMTYuOTkyLDE3LjE4OGw1LjA3OC01LjA3OGwtMTUuMDM5LTE0Ljg0NFYxODAuOTR6IE0zOTguMTE3LDE3NC42MzMNCgkJCWMtOC45ODQtOC45ODQtMTkuODU3LTEzLjQ3Ni0zMi42MTctMTMuNDc2Yy0xMi43NjMsMC0yMy42MzMsNC40OTEtMzIuNjE3LDEzLjQ3NmMtOC45ODQsOC45ODUtMTMuNDc3LDE5Ljg1OC0xMy40NzcsMzIuNjE4DQoJCQljMCwxMi43NjIsNC40OTIsMjMuNjMyLDEzLjQ3NywzMi42MTdjOC45ODQsOC45ODMsMTkuODU0LDEzLjQ3NiwzMi42MTcsMTMuNDc2YzEyLjc2LDAsMjMuNjMzLTQuNDkyLDMyLjYxNy0xMy40NzYNCgkJCWM4Ljk4NC04Ljk4NSwxMy40NzctMTkuODU1LDEzLjQ3Ny0zMi42MTdDNDExLjU5NCwxOTQuNDkxLDQwNy4xMDIsMTgzLjYxOCwzOTguMTE3LDE3NC42MzN6IE0zOTAuODkxLDIzMi42NDINCgkJCWMtNy4wMzEsNy4wMzEtMTUuNDk3LDEwLjU0Ni0yNS4zOTEsMTAuNTQ2Yy05Ljg5NiwwLTE4LjM1OS0zLjUxNS0yNS4zOTEtMTAuNTQ2Yy03LjAzMS03LjAzMi0xMC41NDctMTUuNDk0LTEwLjU0Ny0yNS4zOTENCgkJCWMwLTkuODk1LDMuNTE2LTE4LjM1OSwxMC41NDctMjUuMzkxYzcuMDMxLTcuMDMyLDE1LjQ5NC0xMC41NDcsMjUuMzkxLTEwLjU0N2M5Ljg5NCwwLDE4LjM1OSwzLjUxNSwyNS4zOTEsMTAuNTQ3DQoJCQljNy4wMzEsNy4wMzEsMTAuNTQ3LDE1LjQ5NiwxMC41NDcsMjUuMzkxQzQwMS40MzgsMjE3LjE0NywzOTcuOTIyLDIyNS42MDksMzkwLjg5MSwyMzIuNjQyeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="clock svg" />'
---
In the previous design of this blog I used to show a list with my latest three articles. There is no option to do that in Scriptogr.am. People kept asking me how I did it and if I could share with them the script that shows the latest articles. When I responded that I do it manually—there’s no script I just go and edit the theme file every time—they were disappointed. But it keeps coming up in my [Twitter feed](https://twitter.com/alexcican). So I spent an hour last night writing a script that reads your blog’s `RSS` feed and shows the latest three posts.
<!--more-->

##Implications
Before we get started you should know that JavaScript has a [same origin policy](http://en.wikipedia.org/wiki/Same_origin_policy). What this means is that with JavaScript, you can’t read an external `XML` feed from [Digg.com](http://digg.com), for example, and show it on your website. A workaround is to create a `PHP` file that will act as a proxy, pull the external `XML` file on your server, and then parse that file in JavaScript. But we can’t run a `PHP` file on Scriptogr.am or Dropbox.

Thankfully, there’s an awesome thing called Google API. We’ll use the Google Loader to load the external feed’s `XML` file and then parse it in JavaScript. You can see the demo of this script at the bottom of this page.

##Step 1 - RSS Feed
Find your Scriptogr.am `RSS` feed. It should be in this format:

	http://scriptogr.am/USERNAME/feed/

##Step 2 - Add script
From the [Scriptogr.am dashboard](http://scriptogr.am/dashboard/), go to the *Tools* tab, and edit your `HTML` theme file. Go at the bottom of the file, before the end of the `</body>` tag, and add [the script](https://gist.github.com/alexcican/4753483) below:
<script src="https://gist.github.com/alexcican/4753483.js"></script>

##Step 3 - Personalise script
The bits you have to edit are on **line 8** and **line 59**. Replace bits of code from this line:

	var feed = new google.feeds.Feed("http://scriptogr.am/sican/feed/");

with your feed URL from Step 1. Next, replace bits of code from this line:

	link.href = link.href.replace("scriptogr.am/sican","blog.sicanstudios.com");

with your feed URL’s first name and your custom domain name. Basically this line of code finds the `scriptogr.am/sican` links in the feed and replaces them with my custom domain name. If you don’t have a custom domain name for your blog, remove this line.

##Step 4 - Link to HTML
Last thing you need to do is add this `HTML` element:

	<div id="recent-articles">Loading…</div>

at the location(s) where you want the recent posts container to be displayed. For example, I have it at the bottom of the `index` and `post` page:

	   <!-- index -->
       {{"{{#is_index" }}}}
       {{"{{#first" }}}}
        <div class="post">
        <h1><a href="{{"{{permalink" }}}}" title="{{"{{title" }}}}">{{"{{title" }}}}</a></h1>
        {{"{{content" }}}}
        <h2>Recent articles</h2>
        <div id="recent-articles">Loading…</div>
        <p>More articles in the <a href="http://blog.sicanstudios.com/archive" title="Archive">Archive</a></p>
        </div>
      {{"{{/first" }}}}
      {{"{{/is_index" }}}}

##Further customisation
Feel free to customise the script even more. For example, I don’t show the most recent post, because I show it on the homepage. I skip it by stating the loop count at `1` instead of `0` on **line 20**:

	for (var i = 1; i < 4; i++) {

Read through the script and make changes to the recent posts display format (starts from **line 44**) to suit your blog style. If you have any questions or problems, you know where to find me.
