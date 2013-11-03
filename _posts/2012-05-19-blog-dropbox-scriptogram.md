---
title: 'How I moved my blog to Dropbox'
layout: post
bgcolour: blue
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImRyb3Bib3hfeDJCX3NjcmlwdG9ncmFtXzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjczNnB4IiBoZWlnaHQ9IjQxNnB4IiB2aWV3Qm94PSIwIDAgNzM2IDQxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzM2IDQxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iUmVjdGFuZ2xlXzMiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZFIiBkPSJNMjc3LjU5NCwyMzYuNzgyYy0wLjUwMSwwLTAuOTUyLTAuMTk5LTEuMzUtMC42bC0xNS4xNS0xMi42MDFsLTE1LjE1LDEyLjc1DQoJCQljLTAuNDAxLDAuMzAxLTAuODUxLDAuNDUtMS4zNSwwLjQ1Yy0wLjUwMSwwLTAuOS0wLjA5OS0xLjItMC4zbC0xMS4yNS03LjV2NC4zNWwyOC45NSwxOC4zMDFsMjguOTUtMTguMzAxdi00LjM1bC0xMS4yNSw3LjUNCgkJCUMyNzguNDk0LDIzNi42ODQsMjc4LjA5MywyMzYuNzgyLDI3Ny41OTQsMjM2Ljc4MnogTTI0Mi4zNDQsMTY0LjMzMmwtMjcuMywxNy4xMDFsMTguNzUsMTUuNzVsMjcuMy0xNy44NTFMMjQyLjM0NCwxNjQuMzMyeg0KCQkJIE0yMTcuMTQ0LDIxMC41MzJsMjcsMTcuN2wxNi45NS0xNC4xbC0yNy4zLTE2Ljk1TDIxNy4xNDQsMjEwLjUzMnogTTI3OC4wNDQsMjI4LjIzMmwyNy0xNy43bC0xNi42NS0xMy4zNWwtMjcuMywxNi45NQ0KCQkJTDI3OC4wNDQsMjI4LjIzMnogTTI3OS44NDQsMTY0LjMzMmwtMTguNzUsMTVsMjcuMywxNy44NTFsMTguNzUtMTUuNzVMMjc5Ljg0NCwxNjQuMzMyeiBNNDg4Ljk2MiwyMDMuODIybDAuMzE1LTAuMzE2DQoJCQlsLTEuODY4LTEuODY4Yy0wLjE0Ni0wLjE2My0wLjI4NC0wLjMzMi0wLjQ0MS0wLjQ4OGMtMC4xNTctMC4xNTctMC4zMjUtMC4yOTUtMC40ODgtMC40NDFsLTE2LjE2My0xNi4xNjNsNC4xNjItNC4xNjINCgkJCWwtMC43ODEsMC4yMTdjMi42OTQtNC40OTQsMi4xMTgtMTAuNDAzLTEuNzU2LTE0LjI3NmMtNC41NjktNC41NjktMTEuOTc3LTQuNTY5LTE2LjU0NiwwYy0wLjE2NywwLjE2Ny0wLjMxNCwwLjM0NS0wLjQ2OSwwLjUxOQ0KCQkJbC0yNS40MDYsMjUuNDA2bDAuMDQxLDAuMDQxYy0wLjUyNywwLjM3NS0xLjAzNSwwLjc4Ni0xLjUwOCwxLjI1OGMtNC4zMzksNC4zMzktNC41NSwxMS4yMzItMC42NDgsMTUuODI4bC0wLjA1OSwwLjA1OQ0KCQkJbDE3LjUzNiwxNy41MzVsLTIuNTgxLDIuNTgxYy0wLjU1MiwwLjM4Ni0xLjA4NywwLjgwNS0xLjU3OSwxLjI5N2MtNC41NjksNC41NjktNC41NjksMTEuOTc4LDAsMTYuNTQ2DQoJCQljNC41NjksNC41NjksMTEuOTc4LDQuNTY5LDE2LjU0NywwYzAuMTYtMC4xNiwwLjMwMS0wLjMzMSwwLjQ0OS0wLjQ5N2wyOC43NjEtMjguNzZjMC4xNjMtMC4xNDYsMC4zMzEtMC4yODQsMC40ODgtMC40NDENCgkJCXMwLjI5NS0wLjMyNCwwLjQ0MS0wLjQ4OGwwLjIwNy0wLjIwN2wtMC4wMS0wLjAxMkM0OTAuNzg3LDIxMy4yNSw0OTEuMjM5LDIwNy45OTMsNDg4Ljk2MiwyMDMuODIyeiBNNDQ3LjY2NCwxODIuNDdsMTAuOTYtMTAuOTYNCgkJCWwwLjA1OSwwLjA1OGMwLjIzOC0wLjM5MSwwLjUxLTAuNzY4LDAuODQ5LTEuMTA2YzIuMjg0LTIuMjg0LDUuOTg4LTIuMjg0LDguMjcyLDBjMi4yODUsMi4yODQsMi4yODUsNS45ODgsMCw4LjI3Mw0KCQkJYy0wLjMzOCwwLjMzOC0wLjcxNCwwLjYxLTEuMTA1LDAuODQ5bDAuMDU4LDAuMDU4bC02LjIyMiw2LjIyMWMwLjAwMSwwLDAuMDAyLDAsMC4wMDMsMC4wMDFsLTEyLjkyLDEyLjkyDQoJCQljLTAuNTE0LTEuOTE3LTEuNTEzLTMuNzMxLTMuMDE3LTUuMjM2Yy0xLjQzNS0xLjQzNC0zLjE0OC0yLjQxNy00Ljk2Ni0yLjk1MWw4LjA3OC04LjA3OEw0NDcuNjY0LDE4Mi40N3ogTTQ1NC4yOTEsMjQxLjYwNQ0KCQkJbC0wLjI2MywwLjI2MmwwLjA1OSwwLjA5NGMtMC4yNTcsMC40NjMtMC41NjIsMC45MDUtMC45NTUsMS4yOThjLTIuMjg1LDIuMjg0LTUuOTg5LDIuMjg0LTguMjczLDANCgkJCWMtMi4yMTItMi4yMTMtMi4yNjItNS43NDUtMC4xODktOC4wNDFsLTAuMDEtMC4wMWwwLjA5NS0wLjA5NWMwLjAzOC0wLjA0MSwwLjA2NC0wLjA4OCwwLjEwNC0wLjEyOA0KCQkJYzAuMDQ2LTAuMDQ2LDAuMS0wLjA3OSwwLjE0Ni0wLjEyM2wzLjkwOC0zLjkwOGwzLjA2NCwzLjA2M2wtMC4wNjMsMC4wNjNjMC4wNTMsMC4wMywwLjExLDAuMDUxLDAuMTYyLDAuMDgzbDEuODc4LDEuODc3DQoJCQlDNDU1LjAwNCwyMzcuNzI5LDQ1NS4xMTgsMjM5LjgzMSw0NTQuMjkxLDI0MS42MDV6IE00ODMuNjY2LDIxMi40NzhsLTAuMTE2LTAuMTMzbC0yMy4zNjQsMjMuMzY0DQoJCQljLTAuNTQtMS43NzgtMS41MS0zLjQ1NS0yLjkxNi00Ljg2MWMtMC4xNTctMC4xNTctMC4zMjUtMC4yOTUtMC40ODgtMC40NDFsLTEyLjE0Ni0xMi4xNDVsLTAuMDM1LDAuMDM1bC0xMS41NS0xMS41NWwwLjA2NS0wLjA2NQ0KCQkJYy0wLjA0Ni0wLjAzMS0wLjA5Ny0wLjA1LTAuMTQzLTAuMDgzbC0xLjM5Ni0xLjM5NmwtMC4wMDMsMC4wMDNjLTEuNjMtMi4yODUtMS40MzYtNS40NzEsMC42MTUtNy41MjENCgkJCWMyLjI4NC0yLjI4NCw1Ljk4OC0yLjI4NCw4LjI3MywwYzEuNzExLDEuNzExLDIuMTQsNC4yMTgsMS4yODcsNi4zMjlsNC41NDksNC41NDlsMTkuNzg3LTE5Ljc4N2w1Ljg0NCw1Ljg0NGwwLjAxMi0wLjAxMg0KCQkJbDkuOTg4LDkuOTg4bC0wLjAxMiwwLjAxMmwxLjczNCwxLjczNEM0ODQuODE4LDIwOC4yMTgsNDg0LjgyMSwyMTAuNTk4LDQ4My42NjYsMjEyLjQ3OHogTTM2OS4wMzQsMTkzLjk4MWgtNS4wNjZ2MTAuOTgzaC0xMC4wMzQNCgkJCXY1LjExN2gxMC4wMzRWMjIxaDUuMDY2di0xMC45MThoOS45NTF2LTUuMTE3aC05Ljk1MVYxOTMuOTgxeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="dropbox scriptogram svg" />'
---
A few months ago I cancelled my hosting accounts and moved all my [websites to Dropbox and GitHub](http://alexcican.com/post/guide-hosting-website-dropbox-github). The only problem I was left with was where I should host the blog. I decided to use Tumblr. Regretting the decision after only two months, the solution was right in front of me the entire time: **use Dropbox for the blog** as well. In this article I’ll show you how I did it.
<!--more-->

##Downside of Dropbox
On Dropbox you can only host **static files**. This becomes a problem when you want to host a blog. Updating a blog with content regularly becomes tedious when you have a static layout. You have to include all the parts of the layout (header, footer, javascript) on every page. You have to write your blog post using HTML syntax. This method is not future-friendly because in the future, for example if you want to change even one link of the header menu, you’ll have to change every single blog post. Therefore, there’s a gap…

##An awesome thing called Scriptogr.am
A gap that is filled excellently by [Scriptogr.am](http://scriptogr.am/). Scriptogr.am is an app that connects to your Dropbox account and allows you to host a blog or dynamic website. The blog posts, or pages, are simple [Markdown](http://daringfireball.net/projects/markdown/syntax) files located inside `Dropbox>Apps>scriptogram>posts`.

Some cool features of Scriptogr.am:

1. **Custom domain name**: Use your own domain name for the blog, like `blog.alexcican.com`.
2. **Awesome themes**: Build your own themes (very easy to do) or select one from the gallery.
3. **Awesome HTML and CSS editor**: Beautifully designed online editor with syntax highlighting.
4. **One step sign-up**: One step to sign-up and one click sign-in to Scriptogr.am.
5. **Offline and online editing**: Use your favourite text editor (for me: [SublimeText 2](http://www.sublimetext.com/2) and [Byword app](http://bywordapp.com/) for iPad) or Scriptogr.am’s online editor.
6. **Posts or pages**: aside from blog posts, you can also host pages (and style them differently in the theme).
7. **Tags, Slugs, Drafts**: For each blog post you can specify your own tags, slug[^3], and its state (whether it’s published or not).


##Creating a post
To create a new blog post, simply create a Markdown file inside the `posts` directory with this front-block (required) at the top of the file:

	---
	Date: 2012-05-19
	Title: How I moved my blog to Dropbox
	---

You can add some extra attributes to this front-block if you want:

	---
	Date: 2012-05-19
	Title: How I moved my blog to Dropbox
	Slug: blog-dropbox-scriptogram
	Tags: blog, dropbox, tutorial
	Type: post
	Published: false
	Excerpt: A few months ago I cancelled my hosting accounts and moved all my [websites to Dropbox and GitHub](http://blog.alexcican.com/post/guide-hosting-website-dropbox-github)…
	---

Once you are done with the front-block, you can start writing your blog post. When you’ve finished, save the file, go to your [admin page](http://scriptogr.am/admin/) and click the button *Synchronize* to update the blog with the new post. I hope this process of having to click the button in order to update the blog will be removed in the future. Simply, have the server update the directory once a new file is added to the `posts` folder.

![scriptogram synchronize button](http://alexcican.com/images/blog/assets/scriptogram-publish-button.jpg)

##Adding a custom domain name
To add a custom domain name for your Scriptogr.am blog, simply go to your [admin panel](http://scriptogr.am/admin/), find the *“custom domain”* field and insert your desired custom domain name without the `http://`. For me it’s:

	blog.alexcican.com

Make sure you click the *“Update Settings”* button below the input field to apply the changes. Now it’s time to change the **DNS settings**.

If you’re using GoDaddy, login to your account, launch the domains and click on the domain name you want to change. From that page, go down and find the *“DNS Manager”* section. Click on *“Launch”*.

![godaddy dns editor](http://alexcican.com/images/blog/assets/godaddy-dns-editor.jpg)

Based on the type of custom domain name you’ve added in the Scriptogr.am’s admin panel, we’ll make different changes to the DNS. For a sub-domain like `http://www.alexcican.com` or `http://blog.alexcican.com` you would simply create a `CNAME` record pointing to `scriptogr.am`. If you are using a top-level domain like `http://alexcican.com`, you must use an `A (Host)` record pointing to `50.116.1.192`. There’s no need to add a `CNAME` record for top-level domains. Wait up to 48-72 hours for the changes to take effect (usually within an hour or so).

##Creating a theme
I won’t go into theming extensively, but Scriptogr.am themes are pretty easy to edit or create, if you have basic knowledge of HTML. If you have some theming experience from other CMSs (Content Management System) like Wordpress or Drupal, theming for Scriptogr.am will be a **stroll in the park** for you.

For a Scriptogr.am theme, you have only two files to worry about. The first file represents **the content** (HTML) and the other, **the styling** (CSS). For creating a layout, the *magic* happens inside conditional statements. Each section of the `<body>` below represents the `homepage`, `post`, `page` or `archive` pages.

	<body>
		<!-- Get posts -->
		{{ "{{#posts" }}}}

			<!-- Outputs the home page -->
			{{ "{{#is_index" }}}}
				...
			{{ "{{/is_index" }}}}

			<!-- Outputs the "Blog post" -->
			{{ "{{#is_post" }}}}
				...
			{{ "{{/is_post" }}}}

			<!-- Outputs the "Page" -->
			{{ "{{#is_page" }}}}
				...
			{{ "{{/is_page" }}}}

			<!-- Outputs the "Archive" page -->
			{{ "{{#is_archive" }}}}
				...
			{{ "{{/is_archive" }}}}

		{{ "{{/posts" }}}}
		<!-- End posts -->
	</body>

Inside each block you can add whatever HTML you want to show in that particular page. There are a handful of shortcodes available (like for example: `{{ "{{content" }}}}` will output the content of the blog post/page), that can be found at the bottom of [this page](http://support.scriptogr.am/kb/creating-themes/creating-or-editing-a-theme). Here’s the code I have for the blog post (i.e. this page you’re currently viewing):

	{{ "{{#is_post" }}}}
		<div class="post">
			<div class="content">

				<div id="continue_reading" class="title">
					<h1><span>{{ "{{title" }}}}</span></h1>
				</div>

				<div class="body-post">
					{{ "{{content" }}}}

					<!-- if tags -->
					{{ "{{#if_tags" }}}}
						<ul class="tags">
							{{ "{{#tags" }}}}
								<li><a href="{{ "{{base_url" }}}}/tag/{{ "{{name" }}}}">{{ "{{name" }}}}</a></li>
							{{ "{{/tags" }}}}
						</ul>
					{{ "{{/if_tags" }}}}
					<!-- endif -->

				</div><!--end body-->
			</div><!--end content-->
		</div><!--end post-->
		<p class="more"><a href="http://blog.alexcican.com/archive">More articles in the Archive →</a></p>
	{{ "{{/is_post" }}}}

Above and below those conditional statements, the code for the `header` and `footer` is inserted (because I want that code to be applied to every page). And at the bottom, before closing the `</body>` tag, I add some JavaScript code for smooth font resizing and Google Analytics tracker.

Here’s a tip: It’s best to tinker with the theme a bit. Because, the default theme of Scriptogr.am could be improved in terms of SEO (`<h1>` tags, title, descriptions, etc.). I want to show you a better way to display the `<title>` of the blog:

	<title>{{ "{{#posts" }}}}{{ "{{#is_post" }}}}{{ "{{title" }}}}{{ "{{/is_post" }}}}{{ "{{/posts" }}}}{{ "{{#is_index" }}}}Blog of Alex Cican{{ "{{/is_index" }}}}{{ "{{#is_archive" }}}}Archive of the Blog of Alex Cican{{ "{{/is_archive" }}}}</title>

We’re saying if the page is a post, display the `{{ "{{title" }}}}` of the post, if it’s the homepage, display *“Blog of Alex Cican* and if it’s an archive, display *“Archive of the Blog of Alex Cican*.

This was a brief overview of the themes in Scriptogr.am. If you’re having any trouble, please visit the [FAQ](http://support.scriptogr.am/kb) or the [forums](http://support.scriptogr.am/discussions).

##Conclusion
Scriptogr.am has made it possible for me to host my blog on Dropbox. I now actually **enjoy the process** of writing a blog post. Hence, I’m inclined to writing more. I start writing on my iPad and I continue on my PC. When I’m finished, the post is published with literally one click. But don’t misunderstand me: it’s **not a silver bullet**.

Migrating from your previous CMS can become a **tedious process** if you have many blog posts. There’s no way to import your posts from a blog service like Wordpress. Luckily for me, I also used to store a text based version of my articles, as backup. Finally, some features, that have existed for years on other CMSs, are missing from Scriptogr.am. Here are some improvements that could be made:

* support __multiple blogs__
* allow me to __export/save__ the theme
* __update the blog automatically__ whenever the `posts` folder is updated by Dropbox, without having to click synchronize
* add a __preview window__ to the online text editor for Markdown files
* allow me to __customise 404__ (not found) error pages
* allow me to __sort archives__ by year as well, not only by month

Like with the custom domain name feature that was added recently to Scriptogr.am, hopefully we will see these changes implemented in the near future.

##Update: March 2013
I’m no longer using Scriptogr.am for my blog. I switched to [Jekyll](https://github.com/mojombo/jekyll), but I’m still using [GitHub](http://pages.github.com/) for hosting all my websites.