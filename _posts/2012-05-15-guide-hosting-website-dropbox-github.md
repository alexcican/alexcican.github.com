---
title: 'How I moved my websites to Dropbox and GitHub'
layout: post
bgcolour: red
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImRyb3Bib3hfeDJCX2dpdGh1Yl8xXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI3MzZweCIgaGVpZ2h0PSI0MTZweCIgdmlld0JveD0iMCAwIDczNiA0MTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDczNiA0MTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9Il94MkJfIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTI3OC4wNDQsMjI4LjIzMmwyNy0xNy43bC0xNi42NS0xMy4zNWwtMjcuMywxNi45NUwyNzguMDQ0LDIyOC4yMzJ6IE0yNDIuMzQ0LDE2NC4zMzJsLTI3LjMsMTcuMTAxDQoJCQlsMTguNzUsMTUuNzVsMjcuMy0xNy44NTFMMjQyLjM0NCwxNjQuMzMyeiBNMjc3LjU5NCwyMzYuNzgyYy0wLjUwMSwwLTAuOTUyLTAuMTk5LTEuMzUtMC42bC0xNS4xNS0xMi42MDFsLTE1LjE1LDEyLjc1DQoJCQljLTAuNDAxLDAuMzAxLTAuODUxLDAuNDUtMS4zNSwwLjQ1Yy0wLjUwMSwwLTAuOS0wLjA5OS0xLjItMC4zbC0xMS4yNS03LjV2NC4zNWwyOC45NSwxOC4zMDFsMjguOTUtMTguMzAxdi00LjM1bC0xMS4yNSw3LjUNCgkJCUMyNzguNDk0LDIzNi42ODQsMjc4LjA5MywyMzYuNzgyLDI3Ny41OTQsMjM2Ljc4MnogTTIxNy4xNDQsMjEwLjUzMmwyNywxNy43bDE2Ljk1LTE0LjFsLTI3LjMtMTYuOTVMMjE3LjE0NCwyMTAuNTMyeg0KCQkJIE0yNzkuODQ0LDE2NC4zMzJsLTE4Ljc1LDE1bDI3LjMsMTcuODUxbDE4Ljc1LTE1Ljc1TDI3OS44NDQsMTY0LjMzMnogTTUwMi45NTcsMTc3LjEwMWMtOC40NzYtOC40NzMtMTguNzM4LTEyLjcxLTMwLjc5LTEyLjcxDQoJCQljLTEyLjA1NCwwLTIyLjMxNyw0LjIzNy0zMC43OSwxMi43MWMtOC40NzUsOC40NzUtMTIuNzEsMTguNzM4LTEyLjcxLDMwLjc5YzAsMTIuMDU0LDQuMjM1LDIyLjMxNiwxMi43MSwzMC43OQ0KCQkJYzguNDczLDguNDczLDE4LjczNiwxMi43MSwzMC43OSwxMi43MWMxMi4wNTIsMCwyMi4zMTQtNC4yMzcsMzAuNzktMTIuNzFjOC40NzMtOC40NzQsMTIuNzEtMTguNzM2LDEyLjcxLTMwLjc5DQoJCQlDNTE1LjY2NywxOTUuODM5LDUxMS40MywxODUuNTc1LDUwMi45NTcsMTc3LjEwMXogTTQ5Ny45OTUsMjMzLjcxOWMtMy4zNTQsMy4zNTQtNy4yMDUsNS45ODEtMTEuNTU1LDcuODg0DQoJCQljLTEuMTc5LDAuNDU1LTIuMzEyLDAuODYyLTMuMzk4LDEuMjI0di02LjUyNGMwLTMuNDQzLTEuMTc5LTUuOTgxLTMuNTM0LTcuNjEzYzEuNDQ4LTAuMDg5LDIuNzg2LTAuMjcxLDQuMDEtMC41NDMNCgkJCWMxLjIyNC0wLjI3MiwyLjUzNi0wLjY1NywzLjk0Mi0xLjE1NmMxLjQwMy0wLjQ5NywyLjY1LTEuMDYzLDMuNzM4LTEuNjk5YzEuMDg3LTAuNjMzLDIuMTI4LTEuNDk1LDMuMTI2LTIuNTgyDQoJCQljMC45OTYtMS4wODgsMS44MzYtMi4zMTIsMi41MTUtMy42NzFjMC42OC0xLjM1OSwxLjIyNC0yLjk2NywxLjYzMi00LjgyNWMwLjQwNy0xLjg1NiwwLjYxMS0zLjkxOSwwLjYxMS02LjE4Ng0KCQkJYzAtNC4zNS0xLjQ1LTguMTA5LTQuMzUtMTEuMjgzYzEuMjY4LTMuMzUyLDEuMTMyLTcuMDIxLTAuNDA4LTExLjAxMWwtMS4wODctMC4xMzZjLTAuNzI3LTAuMDg5LTIuMDM5LDAuMjI4LTMuOTQyLDAuOTUxDQoJCQljLTEuOTAzLDAuNzI3LTQuMDMzLDEuODU4LTYuMzksMy4zOThjLTMuNDQ0LTAuOTA0LTYuOTc5LTEuMzU5LTEwLjYwMy0xLjM1OWMtMy42MjYsMC03LjA2OCwwLjQ1NS0xMC4zMzEsMS4zNTkNCgkJCWMtMS41NDItMC45OTYtMi45OTEtMS44MzUtNC4zNTEtMi41MTVzLTIuNDQ2LTEuMTMyLTMuMjYyLTEuMzU5Yy0wLjgxNi0wLjIyNS0xLjU2My0wLjM2MS0yLjI0My0wLjQwNw0KCQkJYy0wLjY4LTAuMDQ1LTEuMTExLTAuMDQ1LTEuMjkyLDBjLTAuMTgzLDAuMDQ2LTAuMzE4LDAuMDY3LTAuNDA3LDAuMDY3Yy0xLjYzMiwzLjk4OS0xLjc2OCw3LjY1OS0wLjQwOCwxMS4wMTENCgkJCWMtMi45MDEsMy4wODItNC4zNSw2Ljg0NC00LjM1LDExLjI4M2MwLDIuMjY3LDAuMjAzLDQuMzI5LDAuNjExLDYuMTg2YzAuNDA4LDEuODU4LDAuOTUxLDMuNDY2LDEuNjMyLDQuODI1DQoJCQljMC42NzksMS4zNTksMS41MTYsMi41ODMsMi41MTUsMy42NzFjMC45OTYsMS4wODcsMi4wMzksMS45NDksMy4xMjYsMi41ODJjMS4wODgsMC42MzYsMi4zMTIsMS4yMDIsMy42NzEsMS42OTkNCgkJCWMxLjM1OSwwLjQ5OSwyLjY3MiwwLjg4NCwzLjk0MSwxLjE1NmMxLjI2OSwwLjI3MSwyLjYyOCwwLjQ1NCw0LjA3OSwwLjU0M2MtMi4zNTgsMS42MzItMy41MzUsNC4xNy0zLjUzNSw3LjYxM3Y2LjY2DQoJCQljLTEuMjctMC40NTItMi41MzgtMC45MDQtMy44MDYtMS4zNTljLTQuMzUxLTEuOTAyLTguMjAzLTQuNTMtMTEuNTU1LTcuODg0Yy0zLjM1NC0zLjM1Mi01Ljk4MS03LjIwNS03Ljg4NS0xMS41NTUNCgkJCWMtMS45MDMtNC41MzEtMi44NTQtOS4yODktMi44NTQtMTQuMjczYzAtNC45ODMsMC45NTEtOS43NDEsMi44NTQtMTQuMjczYzEuOTAzLTQuMzUxLDQuNTMtOC4yMDEsNy44ODUtMTEuNTU1DQoJCQljMy4zNTItMy4zNTIsNy4yMDQtNS45ODEsMTEuNTU1LTcuODg1YzQuNTMtMS45MDMsOS4yODgtMi44NTQsMTQuMjczLTIuODU0YzQuOTgyLDAsOS43NCwwLjk1MSwxNC4yNzMsMi44NTQNCgkJCWM0LjM1LDEuOTAzLDguMiw0LjUzMywxMS41NTUsNy44ODVjMy4zNTIsMy4zNTQsNS45ODEsNy4yMDQsNy44ODQsMTEuNTU1YzEuOTAzLDQuNTMyLDIuODU1LDkuMjksMi44NTUsMTQuMjczDQoJCQljMCw0Ljk4NC0wLjk1Miw5Ljc0Mi0yLjg1NSwxNC4yNzNDNTAzLjk3NywyMjYuNTE0LDUwMS4zNDcsMjMwLjM2Nyw0OTcuOTk1LDIzMy43MTl6IE0zNjkuMDM0LDE5My45ODFoLTUuMDY2djEwLjk4M2gtMTAuMDM0DQoJCQl2NS4xMTdoMTAuMDM0VjIyMWg1LjA2NnYtMTAuOTE4aDkuOTUxdi01LjExN2gtOS45NTFWMTkzLjk4MXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="dropbox github svg" />'
---
A few months ago I cancelled my hosting and server accounts and moved all my websites to the cloud. I tried it **as an experiment**; never for a second I thought it would work this well. I did the switch out of impulse: I was pissed. I was pissed at the hosting companies charging so much, having such crappy support, and much downtime. I’m very glad I switched.
<!--more-->

##Why I switched
Prior to the cloud, I was hosting my websites on a **VPS (Virtual Private Server) with a company called [Linode](http://linode.com)**. This company gives you a server *as is* and you have to install the OS by yourself, maintain it, improve its performance, etc. I busted my chops trying to configure a fast server. After I was done, the server was running **CentOS + nginx + PHP-fpm + MySQL**, hosting my websites and Wordpress blogs.

The drop that spilled the cup came one day of February 2012, when all my websites (folders) **were deleted** somehow. Because I considered paying $20 per month for simply hosting my files was enough, I didn’t enable the backup option (it was an extra $2 per month, if I remember correctly). So that day came, and I went straight to their support ticketing system. The dude that was assigned to me was not helpful at all and said there was nothing to be done. My last backup of the websites was in December 2011.

Pissed off, I **cancelled my account**, got my refund and didn’t think back (or forward). Having been left only with my domain names, I had to do something (for *AlexCican.com* alone, I was averaging around 700 unique visitors per day). That’s when I made the decision to use the cloud.

##Why I switched to Dropbox and GitHub

I switched to these two services for a couple of reasons:

1. **Free**. It’s free and your account is created immediately. Free 2GB space for Dropbox and unlimited public repos for GitHub.

2. **Easy to use**. Just drag-n-drop the file inside your Dropbox folder. The file is accessible anytime from anywhere (Dropbox website, desktop, laptop, mobile, tablet). Uploading to GitHub (known as *pushing*), is very simple: `commit`, add your message and `push` the changes.

3. **Plenty of space**. I didn’t need 20GB for my websites. The free 2GB of space offered by Dropbox was more than enough.

4. **Backup**. Your files won’t get lost/deleted. The extra layer of pushing the files to GitHub as well, offered double protection.

5. **Restore**. In case you screwed up something, you can restore the file (as well as previous versions of it) and revert the changes. At no extra cost.

6. **Uptime**. Previously, with my VPS, and going back even more, with my shared hosting, the uptime was good but I would experience downtime. Switching to the cloud, made my websites online with an uptime of [99.991%](http://37signals.com/svn/posts/3099-benchmarking-basecamps-uptime-against-five-other-web-apps).

7. **Speed**. My websites are blazing fast. Dropbox and GitHub servers are optimised ”out of the box“ to be fast and reliable (pages are compressed and deflated).

8. **Security**. In my effort to improve the performance of my server, who knows what vulnerabilities I uncovered, making my server hackable (maybe that’s what happened on that day). I don’t have to worry about this again. Both services come with SSL and free support included.

Let’s get into **how I did** it.

##The specifics of Dropbox

If you want your files to be accessible by anyone, you have to move them into your “Public” folder. If you’re using absolute paths for your website, I suggest you change it to relative paths. So from this:

	<a href="http://alexcican.com/web/file.html"></a>

change them to this:

	<a href="./web/file.html"></a>

Doing it this way, you can still access the website without having the domain name of the website pointing to the correct folder.

Next step is to **change the DNS** to point to the Dropbox folder (skip this if you’re gonna use GitHub to host your online version of the site).

If you’re using GoDaddy, login to *“Your account”* and launch the *“Domains”*. Then, click on the domain name you want to edit and from the toolbar, select the *forward* icon. Click *“Forward Domain”* and insert in the popup input, the complete URL of the `index.html` from inside the Dropbox folder (to get the link: *right click on the file>Dropbox>Copy public link*).

![godaddy forward domain](http://alexcican.com/images/blog/assets/godaddy-forward-domain.jpg)

Wait a few hours and you should be able to access the website hosted on Dropbox via your domain name!

##Downsides of Dropbox

The big downside of hosting your website on Dropbox is that you can only **host static assets** (HTML, CSS, JS, images). No PHP. A solution to that was to use another service called [PHPFog](http://phpfog.com). I won’t go into details in this tutorial about PHP.

The other downside I found was the **URL system**. On Dropbox, the URL of a file is something like:

	https://dl.dropbox.com/u/212143/public/website/file.html

This means that the Dropbox URL would be visible when navigating the website. I couldn’t have something like:

	http://alexcican.com/file.html

unless I did a URL forwarding with masking from my DNS settings. This was not optimal because whichever page of the website I’d browse, it would show up only as:

	alexcican.com

To do this URL masking on GoDaddy, repeat the steps above for pointing the DNS record to Dropbox, but in the popup click on *“Advanced Options”* and select the second option: *“Forward with Masking”*.

Lastly, if you have a large website, with many pages, you will find it difficult when you want to update the copyright of the page, for example. Because of the website being static, you would have to edit every single page of your website. Whereas with a dynamic website, you edit once (the `header.php` for example) and you’re done.

##Specifics of GitHub

Searching for solutions to this issue I came across GitHub. On GitHub, you can host static websites with the option of adding your custom domain name (hence custom URLs) as well. There are two ways to do this:

1) You [create a repository](http://help.github.com/create-a-repo/) with your username and add `.github.com` at the end of the name. For example, if your username is *“sican”* you create a repo:

	sican.github.com

2) or within an existing repo, you [create a new branch](http://learn.github.com/p/branching.html) called `gh-pages` and push the HTML files of your website in there.

To enable **custom domain names**, you just have to create a file named `CNAME`, in the root of the repo or branch, open the file with a text editor and add your domain name inside:

	alexcican.com

GitHub pages also supports **custom error pages**. Simply push a `404.html` file with your message in the root of the repo or branch.

Now it’s time to change the **DNS settings** from GoDaddy to point to our GitHub page. Login to your account, launch the domains and click on the domain name you want to change. From that page (see screenshot above), go down and find the *“DNS Manager”* section. Click on *“Launch”*.

You have to decide what domain name you’ll be using. For a sub-domain like `http://www.alexcican.com` or `http://blog.alexcican.com` you would simply create a `CNAME` record pointing to `charlie.github.com`. If you are using a top-level domain like `http://alexcican.com`, you must use an `A (Host)` record pointing to `204.232.175.78`. There’s no need to add a `CNAME` record for top-level domains.

##Downsides of GitHub

The first downside is that you need **special software** for interacting (gracefully) with your repositories. The best software to install if you’re on a Mac is **[Git Tower](http://www.git-tower.com/)** and if you’re on Windows you shoud be using **[SmartGit](http://www.syntevo.com/smartgit/index.html)**.

The other downside to GitHub is that unless you’re a software geek, it **takes time** to *get it*. It’s not intuitive and it’s not drag-n-drop. After you went through the [help documents](http://help.github.com/) and learned how to setup stuff (repositories, branches, trees), it’s very easy to use.

Lastly, the same with Dropbox, GitHub only **supports static assets** (HTML, CSS, JS, images).

##Liberation begins

> *“FTP-ing is so 1999”* – everyone

Found an error on the website but you’re on the move without your laptop? Edit the page that’s hosted on Dropbox from your iPhone/iPad, save it and you’re done. If you’re on GitHub, `commit` the changes and `push` them to the repository. Job done!

*“Hold your horses, Johnny”*. There’s a catch: a Git version control app for the iPhone/iPad **doesn’t exist yet**, so you can’t update your repository on those devices. [Textastic](http://www.textasticapp.com/) has it planned but I don’t see it being completed any time soon.

There is a way around this but it involves Jailbreaking your iPhone/iPad and a great deal of hacking via the command line. Check out this [great tutorial](http://kreeger.posterous.com/textastic-git-a-match-made-in-jailbreaker-ner) showing you how to do it.

## Conclusion

There are some disadvantages to both systems:

* __Dropbox:__ __1)__ doesn’t support custom URLs __2)__ can host only static files (HTML, CSS, JS) and __3)__ making changes to a website with many pages is tedious

* __GitHub:__ __1)__ requires special software and takes time to learn __2)__ pushing changes difficult via mobile/tablet and __3)__ can host only static files (HTML, CSS, JS)

But for me it works. For me, the **advantages outweigh the disadvantages**. I like my websites more (since they load faster and stay online longer), I feel more relaxed and I also sleep better at night (secure servers, backups exist). Lastly, I feel liberated since I can access my files anytime from anywhere (and edit them, almost from any device).

Next article I have scheduled, is a continuation of this one: [*“How I moved my blog to Dropbox”*](http://alexcican.com/post/blog-dropbox-scriptogram). Make sure you [grab the RSS feed](http://feeds.feedburner.com/alexcican) and you [follow me on Twitter](http://twitter.com/alexcican).
