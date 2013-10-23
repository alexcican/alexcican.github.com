---
title: 'Different content or CSS depending on iOS version'
layout: post
bgcolour: black
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImRyb3Bib3hfeDJCX3NjcmlwdG9ncmFtXzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjczNnB4IiBoZWlnaHQ9IjQxNnB4IiB2aWV3Qm94PSIwIDAgNzM2IDQxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNzM2IDQxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iYSI+DQoJPGc+DQoJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zNzQuMDk0LDE3OC4zNDVjMi41NjEtMS4zMTIsNC43MTctMy4wMjksNi40NjktNS4xNTZjMy45OTktNC43NDksNS42ODctOS44NzMsNS4wNjItMTUuMzc1DQoJCQljLTIuMzc2LDAuMTI2LTQuOTA3LDAuODc2LTcuNTk0LDIuMjVjLTIuNjg5LDEuMzc3LTQuODQ2LDMuMDY0LTYuNDY5LDUuMDYyYy00LjEyNSw0Ljc1Mi01Ljg3Nyw5LjY4OC01LjI1LDE0LjgxMg0KCQkJQzM2OC45MzgsMTgwLjE5LDM3MS41MywxNzkuNjU3LDM3NC4wOTQsMTc4LjM0NXogTTQwMy45MDYsMjI3LjQ3Yy0wLjU2Mi0wLjMxMS0xLjU2NC0xLjAzMS0zLTIuMTU2DQoJCQljLTEuNDM4LTEuMTI1LTIuNzE5LTIuMzQ0LTMuODQ0LTMuNjU2cy0yLjEyNy0zLjEyMy0zLTUuNDM4Yy0wLjg3Ni0yLjMxMi0xLjMxMi00Ljc4MS0xLjMxMi03LjQwNg0KCQkJYy0wLjEyNi03LjYyMywzLjMxMS0xMy42ODgsMTAuMzEyLTE4LjE4OGMtNC4xMjUtNi4xMjMtMTAuMDAyLTkuMzExLTE3LjYyNS05LjU2MmMtMi44NzctMC4yNDktNi40MzksMC40MDctMTAuNjg4LDEuOTY5DQoJCQljLTQuMjUxLDEuNTY0LTYuODE0LDIuMzQ0LTcuNjg4LDIuMzQ0Yy0xLjAwMiwwLTMuMzEzLTAuNjg2LTYuOTM4LTIuMDYyYy0zLjYyNy0xLjM3NC02LjU2Mi0yLjA2Mi04LjgxMi0yLjA2Mg0KCQkJYy00LjEyNSwwLjEyNi03LjkzOSwxLjI1MS0xMS40MzgsMy4zNzVjLTMuNTAxLDIuMTI3LTYuMzEzLDUuMDAxLTguNDM4LDguNjI1Yy0yLjYyNSw0LjYyNi0zLjkzOCwxMC4wNjMtMy45MzgsMTYuMzEyDQoJCQljMCw2LjI1MiwwLjkzOCwxMi4wOTQsMi44MTIsMTcuNTMxczQuMjQ4LDEwLjI4Myw3LjEyNSwxNC41MzFjMS43NDksMi41MDIsMy4yNDksNC41LDQuNSw2YzEuMjQ4LDEuNSwyLjg3NCwyLjkzNiw0Ljg3NSw0LjMxMg0KCQkJYzEuOTk4LDEuMzc0LDMuOTM4LDEuOTk4LDUuODEyLDEuODc1YzEuODc1LTAuMTI2LDQuMzEyLTAuODE0LDcuMzEyLTIuMDYyYzMtMS4yNTEsNS44MTItMS44NzUsOC40MzgtMS44NzUNCgkJCWMyLjQ5OSwwLDUuMjUsMC42NTYsOC4yNSwxLjk2OXM1LjU2MSwxLjkwNCw3LjY4OCwxLjc4MWMxLjk5OCwwLDMuOTY3LTAuNjU2LDUuOTA2LTEuOTY5YzEuOTM3LTEuMzEyLDMuNDM3LTIuNjI1LDQuNS0zLjkzOA0KCQkJYzEuMDYxLTEuMzEyLDIuNDY3LTMuMjgxLDQuMjE5LTUuOTA2YzIuNzQ4LTMuODczLDQuOTM3LTguMzczLDYuNTYyLTEzLjVDNDA0Ljk5OSwyMjguMDY0LDQwNC40NjksMjI3Ljc4Myw0MDMuOTA2LDIyNy40N3oiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="apple svg" />'
---
<del>I’m currently caught in the process of developing my first web application</del> It’s finished: [TimeWasted](http://timewasted.co.uk). I’m optimising it to work and look great on the iPhone and iPad. Testing the app was done on my iPhone 3G running iOS 4.2 — the last supported iOS for this device.
<!--more-->

A word on online simulators. Aside from resizing the browser size—operation you can do by yourself—and adding a fake iPhone/iPad-like address bar, they’re rubbish at rendering the page like a mobile browser. In order to test the app on other devices besides my 3G, I went to my local Apple store where they have the newest Apple devices running the latest iOS. I was surprised to see that there were a number of differences in the way the page was rendered, compared to my iPhone 3G.

##New addition to browser checks?

How a website is displayed depends largely on the browser—Firefox, Chrome, Safari, Opera, IE8, IE9. Although inconsistencies in the way a website is rendered is being reduced with every new version of a browser that comes out—for example IE8 vs IE9—it’s far from insignificant. So, every once-in-a-while during the development stage I check the website in other browsers and fix the inconsistencies—if possible.

Now, I have to add iOS (iOS 4 vs iOS 5) to that check. I won’t go into all the differences, but one of the biggest is that in iOS 4 you could not have fixed elements on the page and a scrolling div—you had to use JavaScript alternatives, like [iScroll](http://cubiq.org/iscroll-4), to mimic the effect. This has been fixed with iOS 5: just add the following code and mobile rendering of that `div` will be similar to a desktop browser:

	-webkit-overflow-scrolling: touch;

##Older versions of iOS

If you don’t care about older versions of iOS and you only want to support the latest version, that’s fine. But I think we’re not quite there yet. The situation is similar to IE 6. A couple of years ago, even though there were new versions of IE out there, we had to include hacks in our code to make the website look as good as possible on IE 6. Slowly, as usage of that version dropped, we stopped supporting it nowadays.

##Add content or change CSS values depending on iOS

Nonetheless, in order to check for what iOS a user has, use the code below. I have setup my HTML/CSS to cater for iOS 4 and I make any required changes for iOS 5, using JavaScript. The code below will check if the user is using iOS 5 and will change the CSS property bottom to a value of 0 for the footer of the page. Note that the value is in pixels. Moreover, it will append to the body of the page some text or HTML element.

	var iOS5 = navigator.userAgent.match(/OS 5_/i) != null;

	if (iOS5) {
		$("footer").css('bottom','0');
		$("body").append('<h3>This is for iOS5</h3>');
	}

##Conclusion

That’s it basically! There are many uses for this script. One idea would be to only load certain scripts—for example iScroll—in order for the website to work great in older versions of iOS, if the user is on iOS 4 or below. That will save the user that’s browsing using iOS 5 some precious bandwidth. Other uses not related to iOS would be to cater for different browsers. For example if in Firefox the web font looks great, but in Chrome it needs some extra letter-spacing. Use the code below:

	var chrome = navigator.userAgent.match(/Chrome/i) != null;

	if (chrome) {
		$("body").css('letter-spacing','0.5');
	}

Am I forgetting something? Yes I am: Android OS. If only I could get my hands on an Android device and test my websites/apps on it. In the meantime I can only trust my coding skills and hope that the page looks acceptable…