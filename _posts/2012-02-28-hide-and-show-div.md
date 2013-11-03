---
title: 'Hide and show a div'
layout: post
bgcolour: light_mauve
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkVsbGlwc2VfMl8xXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4Ig0KCSB5PSIwcHgiIHdpZHRoPSI3MzZweCIgaGVpZ2h0PSI0MTZweCIgdmlld0JveD0iMCAwIDczNiA0MTYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDczNiA0MTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkVsbGlwc2VfMiI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNjYuMTcyLDE4NS4xNzdjLTI2LjYwNCwwLTQ4LjE3Miw0LjQ5LTQ4LjE3MiwyNi40OTVjMCwxMi45OTEsMTMuODgxLDIwLjY4MiwzMy4xMDIsMjMuMjE4DQoJCQlsMTUuNDAzLTE1LjQwM2wxNS4zMjMsMTUuMzI0YzE4LjkxNi0yLjYxNSwzMi41MTYtMTAuMjc5LDMyLjUxNi0yMy4xMzlDNDE0LjM0NCwxODkuNjY3LDM5Mi43NzYsMTg1LjE3NywzNjYuMTcyLDE4NS4xNzd6DQoJCQkgTTM0NS44LDIxMy43Yy01Ljg1NCwwLTEwLjYtMi41OTctMTAuNi01LjhjMC0zLjIwNCw0Ljc0NS01LjgwMSwxMC42LTUuODAxczEwLjYwMSwyLjU5NywxMC42MDEsNS44MDENCgkJCUMzNTYuNCwyMTEuMTA0LDM1MS42NTQsMjEzLjcsMzQ1LjgsMjEzLjd6IE0zODcuOCwyMTMuN2MtNS44NTQsMC0xMC42LTIuNTk3LTEwLjYtNS44YzAtMy4yMDQsNC43NDUtNS44MDEsMTAuNi01LjgwMQ0KCQkJczEwLjYwMSwyLjU5NywxMC42MDEsNS44MDFDMzk4LjQsMjExLjEwNCwzOTMuNjU0LDIxMy43LDM4Ny44LDIxMy43eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="mask svg" />'
---
Hiding and showing a div in HTML is really simple. In this tutorial I will show you how to do that using only CSS. I will also show you another version of hiding and showing divs using jQuery. Furthermore, we will take the necessary precautions if Javascript is disabled. Let’s dive in!
<!--more-->

##Hide and show a div with CSS

The first method, involves using only CSS. We will use the CSS pseudo-class `:hover`. The idea is that we want to hide the div once the user has moved their mouse over it, and display something else instead. This effect is commonly used when you have a subscribe button. It saves space, without compromising the necessary information for the user.

<a href="http://lab.alexcican.com/hide_show_div/" class="button" target="_blank">View the Demo &rarr;</a>

##HTML Code

First we need to add the HTML. We create a div, `.subscribe`; inside it we add another div and a form, which is hidden at first. Once the user moves their mouse over the `.subscribe` div, the inside div is hidden and the form is displayed. The form was made to work with [FeedBurner](http://feedburner.google.com/). You can replace the form with whatever you want. If you want the form to work for your account, replace `alexcican` from the `…a/mailverify?uri='xxxxx'` and `value='xxxxx'` with your FeedBurner URI.

	<div class="subscribe">
		<div>Subscribe to this website</div>
		<form action="http://feedburner.google.com/fb/a/mailverify" method="post" target="popupwindow" onsubmit="window.open('http://feedburner.google.com/fb/a/mailverify?uri=alexcican', 'popupwindow', 'scrollbars=yes,width=550,height=520');return true" >
			<p>
				<input type="text" class="email_field" name="email" size="18" value="E-mail address" />
				<input type="hidden" value="alexcican" name="uri" />
				<input type="hidden" name="loc" value="en_US" />
				<input class="email_btn" name="submit" type="submit" value="Done" />
			</p>
		</form>
	</div>

##CSS Code

Next we have to add some CSS. By default, the elements that will be hidden are: a) the form and b) the inside div (once the .subscribe div is hovered). To affect something with CSS you add “ > ” at the end of the class, meaning you target the descendants of that class. For example: `.this_class>affects_this`. The one class you are changing must be a child of the parent class (in the previous example `affects_this` is the child of `.this_class`). The second CSS statement, tells the browser to show the form once the `.subscribe` div is hovered.

	form, .subscribe:hover>div {
		display: none;
	}

	.subscribe:hover>form {
		display: block;
	}

That’s all you need to make this work. Now, it’s up to you; style it and make it look sexy with some cool CSS3 coding.

##Hide and show a div with JavaScript

In this second example, we hide and show a div using a JavaScript library, called jQuery. This time, we won’t hide the div when it’s hovered but when it’s clicked. By default the divs will be hidden; once they are clicked, they become visible, displaying the text inside. Also, we want each div to be “independent“ from one another. Meaning, if I click on the first div to see its content, the other divs should remain hidden.

<a href="http://lab.alexcican.com/hide_show_div/demo2.html" class="button" target="_blank">View the Demo &rarr;</a>

##HTML Code

To get this to work, we will add two divs, one inside the other. The outer div will always be displayed, along with a title wrapped inside an h3 heading. The inner div will be hidden by default and once the outer div is clicked, the inner div will be shown. Feel free to alter the code to your needs. For example you can hide the divs completely once they are clicked, or you can add a button to hide them.

	<div class="text_container">
		<h3>This is a third title...</h3>
		<div><!--div that we want to hide-->
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, eros id adipiscing congue, lorem ante sagittis elit, id malesuada nibh est sed orci</p>
		</div>
	</div><!--end div_text_container-->

##CSS Code

In the CSS we will add two classes. One class, named `.hidden`, will hide the element and the other named `.visible` will display the element. Since we want to affect the div inside, we will be adding `>div` to the class. You can change it to whatever you want, for example `>span`. This will affect the span element inside the outer div.

	.hidden>div {
		display:none;
	}

	.visible>div {
		display:block;
	}

##JavaScript Code

Up until now, nothing happens. The divs are still visible and when you click on them, nothing happens. For a good reason; if the user has JavaScript disabled on their browser, they should still be able see and read the content of the divs. You should always use JavaScript as an enhancement and improve the browsing experience not degrade it.

Now, inside JavaScript we will hide the divs once the document has finished loading. This will be our default state. We hide the divs by adding a CSS class called hidden to the outer div called `.text_container`. This will trigger CSS to hide the inner div.

Once the user has clicked the div we will check to see if the div has a class hidden then we remove it and add the class visible which will show the inner div. If it doesn’t have the hidden class then it means that the inner div is visible; add a class hidden to the outer div to hide the inner div. Don’t forget to call jQuery before adding the following script:

	<script type="text/javascript">
		$(document).ready(function(){
			$('.text_container').addClass("hidden");

			$('.text_container').click(function() {
				var $this = $(this);

				if ($this.hasClass("hidden")) {
					$(this).removeClass("hidden").addClass("visible");

				} else {
					$(this).removeClass("visible").addClass("hidden");
				}
			});
		});
	</script>

##Conclusion

See how simple it is to hide and show a div? As a farewell gift from me to you, I will share with you another JS code. Following the same pattern of this code you can manipulate CSS values from within JavaScript directly, without having the need to add a class.

You can alter many CSS values, for example the JS code below will hide the `.text_container` element and change the font colour to red.

	<script type="text/javascript">
		$(document).ready(function(){
			$('.text_container').click(function() {
				$('.text_container').css("display", "none");

				$('.text_container').css("color", "red");
			});
		});
	</script>

Use the code wisely. If you have any questions, ask them in the comments section below.