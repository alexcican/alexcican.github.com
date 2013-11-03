---
title: 'Designing the experience'
layout: post
bgcolour: light_blue
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InBfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzM2cHgiIGhlaWdodD0iNDE2cHgiIHZpZXdCb3g9IjAgMCA3MzYgNDE2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3MzYgNDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJwIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwMC4wNTYsMjMzLjk1NWMtNC4yNDUtMy42MjYtOC42Ni02LjUwMS0xMy4yNDUtOC42MjVjLTQuNTg5LTIuMTIxLTguMTgzLTMuMzg4LTEwLjc4MS0zLjc5OQ0KCQkJYy0wLjU0OSwwLTAuOTk1LTAuNDc5LTEuMzM1LTEuNDM4Yy0wLjM0NC0wLjk1Ni0wLjUxNC0xLjkxNi0wLjUxNC0yLjg3NXYtMS40MzhjMy44MzEtMy44MzEsNi4xNjEtOC4zNDksNi45ODItMTMuNTU0DQoJCQljMS43NzcsMCwzLjAxLTEuNDcsMy42OTYtNC40MTVjMC42ODQtMi45NDIsMC4yMDUtNS4xNjYtMS40MzgtNi42NzRjMC0wLjEzNSwwLjAzMi0wLjc4NiwwLjEwMy0xLjk1MQ0KCQkJYzAuMDY3LTEuMTYxLDAuMTM1LTIuMjI0LDAuMjA1LTMuMTgzYzAuMDY3LTAuOTU3LDAuMDMyLTIuMjI0LTAuMTAzLTMuOGMtMC4xMzgtMS41NzItMC4zNzgtMi45NzgtMC43MTktNC4yMQ0KCQkJYy0wLjM0My0xLjIzMS0wLjk1OS0yLjU2Ni0xLjg0OC00LjAwNGMtMC44OTMtMS40MzgtMS45NTEtMi42MzUtMy4xODQtMy41OTRjLTEuMjMxLTAuOTU2LTIuODQzLTEuNzQ2LTQuODI1LTIuMzYxDQoJCQljLTEuOTg2LTAuNjE2LTQuMjgxLTAuOTI1LTYuODgtMC45MjVjLTIuNjAzLDAtNC44OTYsMC4zMDktNi44OCwwLjkyNWMtMS45ODUsMC42MTUtMy41OTQsMS40MDUtNC44MjUsMi4zNjENCgkJCWMtMS4yMzIsMC45NTktMi4yOTUsMi4xNTYtMy4xODQsMy41OTRjLTAuODkyLDEuNDM4LTEuNTA4LDIuNzcyLTEuODQ4LDQuMDA0Yy0wLjM0NCwxLjIzMi0wLjU4NCwyLjYzOC0wLjcxOSw0LjIxDQoJCQljLTAuMTM5LDEuNTc2LTAuMTc0LDIuODQzLTAuMTAzLDMuOGMwLjA2NywwLjk1OSwwLjEzNSwyLjAyMSwwLjIwNSwzLjE4M2MwLjA2NywxLjE2NSwwLjEwMywxLjgxNiwwLjEwMywxLjk1MQ0KCQkJYy0xLjY0MywxLjUwOC0yLjEyNCwzLjczMS0xLjQzOCw2LjY3NGMwLjY4NCwyLjk0NSwxLjkxNiw0LjQxNSwzLjY5Niw0LjQxNWMwLjQxMSwyLjMzLDEuMTk3LDQuNjIxLDIuMzYxLDYuODgNCgkJCWMxLjE2MiwyLjI1OSwyLjIyNCwzLjkzNywzLjE4NCw1LjAzMWwxLjQzOCwxLjY0M2MwLDMuNjk2LTAuNjE2LDUuNjE1LTEuODQ5LDUuNzVjLTIuNjAyLDAuNDExLTYuMTk1LDEuNjc4LTEwLjc4MSwzLjc5OQ0KCQkJYy00LjU4OCwyLjEyNC05LjAwMyw0Ljk5OS0xMy4yNDUsOC42MjVjLTQuMjQ1LDMuNjI2LTYuMzY2LDcuMjItNi4zNjYsMTAuNzgxaDgwLjUNCgkJCUM0MDYuNDIyLDI0MS4xNzUsNDA0LjI5OCwyMzcuNTgxLDQwMC4wNTYsMjMzLjk1NXoiLz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg==" alt="user svg" />'
---
It doesn’t matter if you have a beautifully designed button in the wrong place—it will frustrate the user and curse your decision of placing the button there. It is important to think how the user will experience that button, interface, website, product, and in what context.
<!--more-->

## Minimise
Once you have identified a problem and what you want your product to do, you have to start thinking about the user experience. The user won’t just be staring at the beautiful product, they’ll also interact with it.

So think specifically about every product’s element and interaction with it. Is that element necessary? If it’s not, then remove it. Question everything, even the most trivial stuff. How the user will move (user flow) from one page to the next. What content will go on each page (copywriting). In more general terms: how your app, website, or product will work. You have to sweat the small stuff.

## Delight the user
The end goal is to solve the problem that the user has but also provide a delightful, memorable experience from this process. Ask yourself how useful is your proposed design? How usable is your proposed design? Does it delight the user and makes the product memorable? Does it take too much time to load the interface? Refactor your code to make your app faster, more responsive. Users will be thankful.

Think about how your product works. Does it work well? Why? That’s just your opinion. Ask someone else.

## Test everything
Don’t punish the user for any mistakes they might make. It’s your job to help me avoid making mistakes. Errors are part of the product and you should’ve spotted them  during testing. Do you recall the cell reception problem iPhones had when you were holding the phone in a certain way? They said we were holding it wrong. No, Apple designed it wrong.

See, whenever you have the user interacting with a product, they are free to abuse it in any way they see fit. It’s your job to take into account all the different ways your product can be used. So you have to test everything. Once you are done with testing, analyse the results and make improvements.

## Design empty states
![](http://alexcican.com/images/blog/assets/kippt-empty-state.png)
<figcaption>[Kippt](https://kippt.com) web app’s empty state.</figcaption>

For apps and websites an important part often forgotten are the states of the app/website. These states are still part of the user experience, so don’t forget them. Design the initial state (first-time user) of the app, logged in state, the empty state, and any error states—though you should avoid showing errors altogether.

## Guide the user
People like to be guided, i.e. told what to do. A compelling experience guides the user through the product. For example, one of the most recent memorable walkthroughs that I experienced was in Vine application:

![](http://alexcican.com/images/blog/assets/vine.gif)
<figcaption>Vine app interactive tutorial GIF ([watch it again](http://alexcican.com/images/blog/assets/vine.gif))</figcaption>

Vine shows you an interactive tutorial how to record your first Vine, and once you are done with the walkthrough, the video you recorded is ready to be published. They guide the user through these different stages (recording, posting, browsing), seamlessly. Brilliant.

## Don’t annoy the user
Go easy with guiding the user, however. There’s a thin line between informing the user and showing a too detailed walkthrough of the product. If you cross it, you will annoy the user, and [ruin their experience](http://blog.maxrudberg.com/post/38958984259/if-you-see-a-ui-walkthrough-they-blew-it). Most users, when they see a new interface, they want to play with it. They want to click stuff, open windows, try to break the software, etc. Give them this flexibility by allowing them to skip your tutorial and come back to it later.

## Provide visual cues
![](http://alexcican.com/images/blog/assets/apple-packaging.jpg)
<figcaption>Lift the instructions booklet by pulling the semicircle.</figcaption>

Think how Apple packages their products. They don’t have instructions showing you how to lift the instructions booklet, but you know how to do it because of the visual cues.

The same goes for interfaces. Provide the user with visuals which clearly indicate that a button is clickable or there is a drop-down menu for that option. The small stuff add up and make an experience good or bad.

## Tell a story
I don’t mean you should come up with a story similar to Red Riding Hood. Have your ideals, vision, concept, reflect in your products and the process of making them. If you are into saving Earth, and minimising waste, you would choose a biodegradable element over plastic for the material of your product. Similarly, if you’re concerned about accessibility, you would have strong contrast between text and background—because it’s easier to read, and never use Helvetica Neue Light for interface text—because it’s difficult to read.

Express the things you value as an individual and incorporate them in your brand, product, website, app. This will distinguish you from the competition and create a unique user experience by fascinating the user with a small insight into your world.

> “Design is not just what it looks like and feels like. Design is how it works” — Steve Jobs