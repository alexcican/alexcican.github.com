---
title: 'How to remove .php, .html, .htm extensions with .htaccess'
layout: post
bgcolour: blue
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Il94MkVfaHRtbF8xXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4Ig0KCSB5PSIwcHgiIHdpZHRoPSI3MzZweCIgaGVpZ2h0PSI0MTZweCIgdmlld0JveD0iMCAwIDczNiA0MTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDczNiA0MTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9Il94MkVfaHRtbCI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNDIuODY2LDE5Ny4yMDljLTIuNjc0LDAtNC42MjUsMC45ODctNS44NTQsMi45NjNoLTAuMjg5bDAuMTI2LTEuNjI2DQoJCQljMC4wODQtMS42NSwwLjEyNy0yLjY5OCwwLjEyNy0zLjE0NHYtNi40MTVoLTUuOTQ4djI4Ljk2Nmg1Ljk0OHYtOS42N2MwLTIuMzQ5LDAuMzQzLTQuMDQ3LDEuMDI5LTUuMDk1czEuMzYzLTEuNTcxLDIuOTA1LTEuNTcxDQoJCQljMi4xNjgsMCwzLjA2NCwxLjQ1NywzLjA2NCw0LjM3MnYxMS45NjRoNS45NDd2LTEzLjMzN2MwLTIuMzg1LTAuNjE0LTQuMjE2LTEuODQzLTUuNDkyUzM0NS4yMzgsMTk3LjIwOSwzNDIuODY2LDE5Ny4yMDl6DQoJCQkgTTMyMy41MDEsMjEyLjEzMmMtMS4wMzYsMC0xLjgyNSwwLjI1OS0yLjM2NywwLjc3NmMtMC41NDIsMC41MTktMC44MTIsMS4yODMtMC44MTIsMi4yOTVjMCwwLjk3NiwwLjI3NiwxLjczMSwwLjgzMSwyLjI2OA0KCQkJYzAuNTU0LDAuNTM1LDEuMzM3LDAuODA0LDIuMzQ5LDAuODA0YzAuOTg3LDAsMS43NTgtMC4yNzQsMi4zMTItMC44MjJjMC41NTQtMC41NDgsMC44MzEtMS4yOTgsMC44MzEtMi4yNDkNCgkJCWMwLTAuOTg3LTAuMjc0LTEuNzQ2LTAuODIyLTIuMjc2UzMyNC41LDIxMi4xMzIsMzIzLjUwMSwyMTIuMTMyeiBNNDA3LjAwNCwxODkuMDA5djI5LjAyN2g2LjA1MnYtMjkuMDI3SDQwNy4wMDR6DQoJCQkgTTM5NC42MzksMTk3LjIwOWMtMS4zMjUsMC0yLjUxNSwwLjI1OS0zLjU2OCwwLjc3NmMtMS4wNTUsMC41MTktMS44NTIsMS4yNDctMi4zOTQsMi4xODdoLTAuNDg4DQoJCQljLTEuMDcyLTEuOTc2LTMuMTE5LTIuOTYzLTYuMTQzLTIuOTYzYy0xLjMyNSwwLTIuNDk5LDAuMjYyLTMuNTIyLDAuNzg2Yy0xLjAyNCwwLjUyMy0xLjgwNywxLjI0OS0yLjM0OSwyLjE3N2gtMC4zMDgNCgkJCWwtMC43NC0yLjI3MWgtNC4yMXYyMC4xMzZoNi4wMTF2LTkuNzUzYzAtMi4zNzIsMC4zMTgtNC4wNzYsMC45NTctNS4xMTJzMS4xNjItMS41NTQsMi41NzEtMS41NTQNCgkJCWMxLjA0OCwwLDIuMzE1LDAuMzY0LDIuODA0LDEuMDkzYzAuNDg3LDAuNzI5LDAuNzMxLDEuODIyLDAuNzMxLDMuMjc5djEyLjA0N2g1LjAxMXYtMTAuMzg1YzAtMi4wOTYsMC4zMzQtMy42MjUsMS4wMDItNC41ODkNCgkJCWMwLjY2OS0wLjk2NCwxLjY3OC0xLjQ0NSwzLjAyNi0xLjQ0NWMxLjA0OCwwLDEuODE1LDAuMzY0LDIuMzA0LDEuMDkzYzAuNDg3LDAuNzI5LDAuNzMxLDEuODIyLDAuNzMxLDMuMjc5djEyLjA0N2g1Ljk0NXYtMTMuNDINCgkJCWMwLTIuNTktMS4wMDQtNC40NzItMi4xNzktNS42NDZDMzk4LjY1OCwxOTcuNzk2LDM5Ni45MjcsMTk3LjIwOSwzOTQuNjM5LDE5Ny4yMDl6IE0zNjIuNjE3LDIxMy4xOTcNCgkJCWMtMC40NC0wLjM3My0wLjY2LTAuOTUxLTAuNjYtMS43MzR2LTkuNDg3aDUuMDNWMTk3LjloLTUuMDN2LTQuOTI1aC00LjE0N2wtMS41OSw0LjU3NmwtMy4wMzUsMS44NDN2Mi41ODFoMi42Mzh2OS40ODcNCgkJCWMwLDIuMjI5LDAuNTAzLDMuODk5LDEuNTA5LDUuMDE0YzEuMDA1LDEuMTE0LDIuNjEsMS42NzEsNC44MTQsMS42NzFjMS45OTksMCwzLjQ5OC0wLjMwNyw0Ljg3MS0wLjkyMXYtNC4xMDINCgkJCWMtMS4zNSwwLjQyMi0xLjY5MywwLjYzMy0yLjY1NiwwLjYzM0MzNjMuNjM4LDIxMy43NTgsMzYzLjA1NywyMTMuNTcxLDM2Mi42MTcsMjEzLjE5N3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="html svg" />'
---
I recently wanted to remove the extensions from my website, in order to make the URLs more user and search engine friendly. I stumbled across tutorials on how to remove the `.php` extension from a PHP page. What about the `.html`? I wanted to remove those as well! In this tutorial I’ll show you how to do that easily, by editing the `.htaccess` file.
<!--more-->

##What is an .htaccess file

An `.htaccess` file is a simple ASCII file that you create with a text editor like Notepad or TextMate. It provides a way to make configuration changes on a per-directory basis.

> _Please note that `.htaccess` is the file’s extension. It isn’t `file.htaccess`, it is simply `.htaccess`._

`.htaccess` files affect the directory in which they are placed and all sub-directories. For example if there is one `.htaccess` file located in your root directory of yoursite.com, it would affect yoursite.com/content/, yoursite.com/content/images/, etc.

It is important to remember that this can be prevented — for example if you don’t want certain .htaccess commands to affect a specific directory — by placing a new `.htaccess` file within the directory you don’t want affected with the changes, and removing the specific command(s) from the new .htaccess file that you do not want affecting this directory.

##Features

With an `.htaccess` file you can:

* Redirect the user to different page
* Password protect a specific directory
* Block users by IP
* Preventing hot linking of your images
* Rewrite URIs
* Specify your own Error Documents

In this tutorial we’ll be focusing only on rewriting URIs.


##Removing Extensions

To remove the `.php` extension from a PHP file for example `yoursite.com/wallpaper.php` to `yoursite.com/wallpaper` you have to add the following code inside the `.htaccess` file:

	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^\.]+)$ $1.php [NC,L]

If you want to remove the `.html` extension from a html file for example `yoursite.com/wallpaper.html` to `yoursite.com/wallpaper` you simply have to alter the last line from the code above to match the filename:

	RewriteRule ^([^\.]+)$ $1.html [NC,L]

That’s it! You can now link pages inside the HTML document without needing to add the extension of the page. For example:

	<a href="http://whatever.com/wallpaper" title="wallpaper">wallpaper</a>

##Adding a trailing slash at the end

I received many requests asking how to add a trailing slash at the end. Ignore the first snippet and insert the following code. The first four lines deal with the removal of the extension and the following, with the addition of the trailing slash and redirecting. Link to the HTML or PHP file as shown above. Don’t forget to change the code if you want it applied to an HTML file.

	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^/]+)/$ $1.php
	RewriteRule ^([^/]+)/([^/]+)/$ /$1/$2.php
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteCond %{REQUEST_URI} !(\.[a-zA-Z0-9]{1,5}|/)$
	RewriteRule (.*)$ /$1/ [R=301,L]

Some people asked how you can remove the extension from both HTML and PHP files. I haven’t got a coding solution for that. But, you could just change the extension of your HTML file from `.html` or `.htm` to `.php` and add the code for removing the `.php` extension.

##Conclusion
For those who are not so experienced with .htaccess files there is an online tool for creating .htaccess files. It is pretty good for novice users and very easy to use. [Visit their website](http://www.htaccesseditor.com/en.shtml "Create .htacces files").

##Updates

Attention GoDaddy users: In order to remove the extensions you need to enable `MultiViews` before. The code should look like this:

	Options -MultiViews
	RewriteEngine On
	RewriteCond %{REQUEST_FILENAME} !-d
	RewriteCond %{REQUEST_FILENAME} !-f
	RewriteRule ^([^\.]+)$ $1.php [NC,L]

If you’re worried that search engines might index these pages as duplicate content, add a `canonical` meta tag in your HTML head:

    <link rel="canonical" href="http://alexcican.com/post/single-post">