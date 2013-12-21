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

Based on the example above, we create a `DIV` and inside it we add two messages. One that will be displayed only once, when the page is loaded, and the other will be displayed after the first one was shown. Whether to show the first or second message is the job of CSS:

	<div class="message  change-message--on-load  hide--second">
	  <p>This message is displayed only the first time you visit this page. Refresh your page to hide it!</p>
	  <p>This is shown only after the previous message was shown in the last visit. Even when you refresh the page, the browser remembers your option.</p>
	</div>

##Step 2 - CSS

With CSS we tell the browser to hide the first message if the div’s class is `.hide--first` or hide the second message if the div’s class is `.hide--second`:

	.hide--first > *:first-child {
	  display: none;
	}
	.hide--second > *:last-child {
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

First we add the cookie code. There are two parts to this: one that checks if cookie exists, and the other part is the one that adds the cookie. First, we will check for the cookie (I’ll explain why later). If the cookie is true, hide the initial message and show the other one (with CSS) by changing the class of the `<div>`:

		if ($.cookie('hide-after-load') == 'yes') {
		  $('.change-message--on-load').removeClass('hide--second');
		  $('.change-message--on-load').addClass('hide--first');
		}

Before we close the script tag, we have to add the cookie that will hide the first message. We add it to the end, because if we were to add it before the code that checks (see above) the cookie, it would hide the first message from the start. Adding it at the end ensures that the message will be hidden the next time the page is loaded. It’s set to expire in 7 days.

		$.cookie('hide-after-load', 'yes', {expires: 7 });

The complete code for the first example:

	<script type="text/JavaScript">
		$(document).ready(function() {
			if ($.cookie('hide-after-load') == 'yes') {
			  $('.change-message--on-load').removeClass('hide--second');
			  $('.change-message--on-load').addClass('hide--first');
			}

			$.cookie('hide-after-load', 'yes', {expires: 7 });
		});
	</script>

##Step 5 - Add cookie on click

In the demo page, you saw that the second container would hide the first message and show the other one, only after you clicked on the “&times;” icon. First we need to add an empty `href` tag for the icon to our HTML:

	<p>You can only hide this message, by clicking the &times; on the right of this box <a href="#" class="close" title="Hide This Message">&times;</a></p>

To position the “&times;” icon to the top-right of the container, we use the absolute inside relative container trick in the CSS:

	.message {
		position: relative
	}

	.close {
	  color: #f00;
	  position: absolute;
	  text-transform: lowercase;
	  right: 20px;
	  font-size: 1.5em;
	  top: 10px;
	  line-height: 1;
	  border: none !important;
	}

Inside the JavaScript tag, we add the code to do something once the icon is clicked. In this case, return nothing so that the URL is not populated with the empty `href` hash (#) symbol:

	$('.close').click(function() {
	  return false;
	})

Once the user has clicked on the icon, we need to check whether the parent container of the icon is displaying the first message or the second. If it displays the first message, hide it by changing its class. Finally, we also add a cookie with the variable `yes` so that this option is remembered next time.

	if (!$('.change-message--on-click').is('hide--first')) {
	  $('.change-message--on-click').removeClass('hide--second');
	  $('.change-message--on-click').addClass('hide--first');

	  // add cookie setting that user has clicked
	  $.cookie('hide-after-click', 'yes', {expires: 7 });
	}

The complete script when clicking the icon looks like this:

	  $('.close').click(function() {
	    if (!$('.change-message--on-click').is('hide--first')) {
	      $('.change-message--on-click').removeClass('hide--second');
	      $('.change-message--on-click').addClass('hide--first');

	      $.cookie('hide-after-click', 'yes', {expires: 7 });
	    }
	    return false;
	  })

But wait, we are not done! We also need to check if the clicked cookie has the `yes` variable attached to it. If it does, show the second message, and hide the first:

	if ($.cookie('hide-after-click') == 'yes') {
	  $('.change-message--on-click').removeClass('hide--second');
	  $('.change-message--on-click').addClass('hide--first');
	}

The complete code for the second example:

	<script type="text/JavaScript">
	  $(document).ready(function() {
	    // COOKIES
	    // if the cookie is true, hide the initial message and show the other one
	    if ($.cookie('hide-after-click') == 'yes') {
	      $('.change-message--on-click').removeClass('hide--second');
	      $('.change-message--on-click').addClass('hide--first');
	    }



	    // when clicked on “X” icon do something
	    $('.close').click(function() {
	      // check that “X” icon was not cliked before (hidden)
	      if (!$('.change-message--on-click').is('hide--first')) {
	        $('.change-message--on-click').removeClass('hide--second');
	        $('.change-message--on-click').addClass('hide--first');

	        // add cookie setting that user has clicked
	        $.cookie('hide-after-click', 'yes', {expires: 7 });
	      }
	      return false;
	    })
	  });
	</script>

Download and [browse the complete code on GitHub](https://github.com/alexcican/lab/tree/gh-pages/set_cookies).

##Conclusion

Cookies can be used in many ways. Now you know how to create your own [Hellobar](http://www.hellobar.com/). You could take it a step further and figure out how to authenticate users (remember login details) and save entire sessions in the cookies (sign up process doesn’t get lost in case you refresh the page).