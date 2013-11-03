---
title: 'How to set cookies with JavaScript'
layout: post
bgcolour: yellow
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImNvb2tpZV8xXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI3MzZweCIgaGVpZ2h0PSI0MTZweCIgdmlld0JveD0iMCAwIDczNiA0MTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDczNiA0MTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9ImNvb2tpZSI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik00MDEsMjI2bC02LjgzMywzLjMzM2wyLjUtNi4xNjZMMzg5LDIxOS44MzNsNC4xNjctNS42NjZMMzg3LjgzMywyMDhsNC41LTUuMTY3TDM4Ni41LDE5N2w1LjUtMw0KCQkJbC0xLjMzMy04LjY2N0wzOTgsMTg3LjVsMi40MjgtNy44MzRjLTguMDk2LTkuOTU3LTIwLjQzOC0xNi4zMjItMzQuMjcxLTE2LjMyMmMtMjQuMzg3LDAtNDQuMTU2LDE5Ljc3LTQ0LjE1Niw0NC4xNTYNCgkJCXMxOS43Nyw0NC4xNTYsNDQuMTU2LDQ0LjE1NmMxNi41MzMsMCwzMC45MzQtOS4wOTIsMzguNTAyLTIyLjU0M0w0MDEsMjI2eiBNMzc5LjQyMywxNzcuODYzbDIuNDExLDQuMzhsLTUuMjU3LDIuODk0bC0yLjQxMS00LjM4DQoJCQlMMzc5LjQyMywxNzcuODYzeiBNMzY4Ljc4NywxNjguNzY1bDAuNDA2LDQuOTgzbC01Ljk4LDAuNDg3bC0wLjQwNi00Ljk4M0wzNjguNzg3LDE2OC43NjV6IE0zMzQuMDM2LDIxMC44MzJsLTUuNjgxLTEuOTMNCgkJCWwxLjYwOC00LjczNGw1LjY4MSwxLjkzTDMzNC4wMzYsMjEwLjgzMnogTTMzMi4yMTMsMTk0LjIzNWwtMC40MDYtNC45ODNsNS45OC0wLjQ4N2wwLjQwNiw0Ljk4M0wzMzIuMjEzLDE5NC4yMzV6DQoJCQkgTTMzOC41NzksMjE5LjYxN2w1Ljg5MS0xLjE0M2wwLjk1MSw0LjkwOGwtNS44OTEsMS4xNDNMMzM4LjU3OSwyMTkuNjE3eiBNMzQ5LjY5NiwyMzguMDE4bC01LjQ2Mi0yLjQ4M2wyLjA2OS00LjU1Mmw1LjQ2MiwyLjQ4Mw0KCQkJTDM0OS42OTYsMjM4LjAxOHogTTM0Ny41NzcsMjA5LjEzN2wtMi40MTEtNC4zOGw1LjI1Ny0yLjg5NGwyLjQxMSw0LjM4TDM0Ny41NzcsMjA5LjEzN3ogTTM1Mi42MjYsMTg2LjM5MWwtNS45NDItMC44MjkNCgkJCWwwLjY5LTQuOTUybDUuOTQyLDAuODI5TDM1Mi42MjYsMTg2LjM5MXogTTM1OS45NjIsMTg3LjE2OWw1LjY4MywxLjkyOGwtMS42MDYsNC43MzRsLTUuNjgzLTEuOTI4TDM1OS45NjIsMTg3LjE2OXoNCgkJCSBNMzYwLjIzNCwyMTUuNTM0bDIuMDY5LTQuNTUybDUuNDYyLDIuNDgzbC0yLjA2OSw0LjU1MkwzNjAuMjM0LDIxNS41MzR6IE0zNjYuMjEzLDIzNC4yMzVsLTAuNDA2LTQuOTgzbDUuOTgtMC40ODdsMC40MDYsNC45ODMNCgkJCUwzNjYuMjEzLDIzNC4yMzV6IE0zNzMuMzU3LDE5OC42MjVsNS45NDcsMC43OTRsLTAuNjYyLDQuOTU2bC01Ljk0Ny0wLjc5NEwzNzMuMzU3LDE5OC42MjV6IE0zNzguMjEzLDIxOC4yMzVsLTAuNDA2LTQuOTgzDQoJCQlsNS45OC0wLjQ4N2wwLjQwNiw0Ljk4M0wzNzguMjEzLDIxOC4yMzV6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=" alt="cookies svg" />'
---
Cookies are an important part of modern browsers. Without them, we couldn’t browse websites that require authentication, such as social networks since we’d be asked for our password on every page we’d browse. We wouldn’t be able to write a simple e-mail, or purchase stuff online. Website usage would be limited to browsing only static websites. In this tutorial we’ll focus only on creating and editing cookies using jQuery.

<!--more-->

<a href="http://lab.alexcican.com/set_cookies/" class="button" target="_blank">View the Demo &rarr;</a>

I’ll be using a cookie plugin created by Klaus Hartl. We do not need to edit anything in this file, just call it after jQuery. [Download the script](http://lab.alexcican.com/set_cookies/cookie.js)

##Step 1 - HTML first

Based on the example above, we create a DIV and inside it we add two messages. One that will be displayed only once, when the page is loaded, and the other will be displayed after the first one was shown. I used heading tags to separate them from one another:

	<div class="message">
		<h1>This message is displayed only the first time you visit this page. Refresh to hide it!</h1>
		<h3>This is shown only after the previous message was shown in the last visit. Even when you refresh the page, the browser remembers your option. In case JS is disabled, this message is more important and should be displayed!</h3>
	</div>

##Step 2 - CSS

I always take into account what happens when JavaScript is disabled. It’s good practice and makes your website more accessible and user friendly. In case JavaScript is disabled, we don’t want to confuse our visitor and have both messages shown at the same time. We need to hide the first message by default, in the CSS. We will display the message it in the JavaScript section:

	h1 {
		display: none;
	}

##Step 3 - Initialising

For faster loading times, add your JavaScript to the bottom of the page, before closing the `</body>` tag. First, we need to call jQuery.

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>

Next we call the cookie script. Make sure you add the correct URL pointing to the script.

	<script type="text/javascript" src="cookie.js"></script>

Below it, we add an empty script tag and we can start coding:

	<script type="text/JavaScript">
	</script>

##Step 4 - JavaScript

First, we will reverse what we did in our CSS file. Display the initial message `<h1>`, and hide the second message `<h3>`.

	$(document).ready(function() {
		$('.message h1').css("display", "block");
		$('.message h3').css("display", "none");

Next we add the cookie code. There are two parts to this: one that checks if cookie exists, and the other part is the one that adds the cookie. First, we will check for the cookie (I’ll explain why later). If the ID of the cookie is set to hide, then hide the first message and display the second:

		var cookie_mesage = $.cookie('welcome');
		if (cookie_mesage == 'hide') {
			$('.message h1').css("display", "none");
			$('.message h3').css("display", "block");
		};

Before we close the script tag, we have to add the cookie that will hide the first message. We add it to the end, because if we were to add it before the code that checks (see above) the cookie, it would hide the first message from the start. Adding it at the end ensures that the message will be hidden the next time the page is loaded. It’s set to expire in 7 days.

		$.cookie('welcome', 'hide', {expires: 7 });
	});

The complete code for the first example:

	<script type="text/JavaScript">
		$(document).ready(function() {
			$('.message h1').css("display", "block");
			$('.message h3').css("display", "none");

			var cookie_mesage = $.cookie('welcome');

			if (cookie_mesage == 'hide') {
				$('.message h1').css("display", "none");
				$('.message h3').css("display", "block");
			};

			$.cookie('welcome', 'hide', {expires: 7 });
		});
	</script>

##Step 5 - Add cookie on click

In the demo page, you saw that the second container would hide the text and show the other one, only after you clicked on the “X”. First we need to add an href tag to our HTML. I added it inside the first message, so that when it’s hidden, the button will be hidden as well:

	<h1>This message is displayed only the first time you visit this page. Refresh to hide it!
	<a href="#" title="Hide This Message">X</a></h1>

Position the “X” to the top of the container using the relative/absolute trick in the CSS:

	.message {
		position: relative
	}

	.message a {
		position: absolute;
		top: 0;
		right: 0;
	}

Inside the script tag, we add the code to do something once the a href is clicked:

	$('.message a').click(function() {
		return false;
	});

Inside the function we will be using classes to identify when a user has clicked or not. First we check to see if we already have a class clicked assigned to the link. If yes, do nothing. If we don’t have a class, it means that the user hasn’t clicked on the link before. Fade out the first message and queue the second one, once it’s finished. Finally, add a cookie with the variable clicked.

	var $this = $(this);

	if ($this.hasClass('clicked')) { }

	else {
		$(this).addClass('clicked');
		$('.message h1').delay(200).fadeOut(1300)

		.queue(function(n) {
			$('.message h3').css("display", "block");
			n();
		});

		$.cookie('welcome', 'clicked', {expires: 7 });
	}

But wait, we are not done! We need to check if the cookie has the clicked variable attached to it:

	var cookie_mesage_clicked = $.cookie('welcome');
	if (cookie_mesage_clicked == 'clicked') {
		$('.message_click a').addClass('clicked');
		$('.message_click h1').css("display", "none");
		$('.message_click h3').css("display", "block");
	};

The complete code for the second example:

	<script type="text/JavaScript">
		$(document).ready(function() {
			$('.message h1').css("display", "block");
			$('.message h3').css("display", "none");
			$('.message a').click(function() {

			var $this = $(this);

			if ($this.hasClass('clicked')) { }

			else {
				$(this).addClass('clicked');
				$('.message h1').delay(200).fadeOut(1300)

				.queue(function(n) {
					$('.message h3').css("display", "block");
					n();
				});

				$.cookie('welcome', 'clicked', {expires: 7 }); }
				return false;
			});

			var cookie_mesage_clicked = $.cookie('welcome');
			if (cookie_mesage_clicked == 'clicked') {
				$('.message_click h1').css("display", "none");
				$('.message_click h3').css("display", "block");
			};
		});
	</script>

##Step 6 - Accessibility

If you disable JavaScript and check the page, the first message will be completely hidden because we hid it in the CSS; that is good. But if you disable stylesheets both messages will be visible, thus creating confusion. Why would you want stylesheets disabled? Well for one: screen-readers; used by blind people, they read only what’s in the HTML code disregarding CSS. To fix this problem and make our website even more user friendly we have to add the first message in the `script` tag, so that it will be displayed only if the user has JavaScript enabled.

To do that, we remove the first message from the HTML. Then we just append the message to the `.message` div inside jQuery. Note that this has to go before the JavaScript code where you hide the initial message `<h1>`.

	$('.message').append('<h1>You can only hide this message, by pressing x at the top of this box <a href="#" title="Hide This Message">X</a></h1>');

##Conclusion

Cookies can be used in many ways. Now you know how to create your own [Hellobar](http://www.hellobar.com/). The next step after this is to authenticate users (remember login details) and saving sessions in the cookies.