---
title: 'Project: TimeWasted'
layout: post
design_type: 'Web application'
case_study_link: 'http://timewasted.co.uk'
designs: '
<div class="cover_image">
  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9InRpbWV3YXN0ZWRfeDBEXyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4Ig0KCSB5PSIwcHgiIHdpZHRoPSIyOTBweCIgaGVpZ2h0PSIyOTBweCIgdmlld0JveD0iMCAwIDI5MCAyOTAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI5MCAyOTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI0LjU5NCwxNTMuOTk1YzEuMzQ0LDAsMi42ODgtMC4yMTEsNC4wMzEtMC42MzN2NC4xNDhjLTAuNjA5LDAuMjY3LTEuMzk1LDAuNDg4LTIuMzU1LDAuNjY4cy0xLjk1NywwLjI3LTIuOTg4LDAuMjcNCgkJYy01LjIxOSwwLTcuODI4LTIuNzUtNy44MjgtOC4yNXYtMTMuOTY5aC0zLjUzOXYtMi40MzhsMy43OTctMi4wMTZsMS44NzUtNS40ODRoMy4zOTh2NS43NjZoNy4zODN2NC4xNzJoLTcuMzgzdjEzLjg3NQ0KCQljMCwxLjMyOCwwLjMzMiwyLjMwOSwwLjk5NiwyLjk0MVMyMy41MTYsMTUzLjk5NSwyNC41OTQsMTUzLjk5NXoiLz4NCgk8cGF0aCBkPSJNMzEuNTU3LDEyNS4xOWMwLTAuOTg0LDAuMjctMS43NDIsMC44MDktMi4yNzNjMC41MzktMC41MzEsMS4zMDktMC43OTcsMi4zMDktMC43OTdjMC45NjksMCwxLjcyMywwLjI2NiwyLjI2MiwwLjc5Nw0KCQljMC41MzksMC41MzIsMC44MDksMS4yODksMC44MDksMi4yNzNjMCwwLjkzOC0wLjI3LDEuNjc2LTAuODA5LDIuMjE1cy0xLjI5MywwLjgwOS0yLjI2MiwwLjgwOWMtMSwwLTEuNzctMC4yNy0yLjMwOS0wLjgwOQ0KCQlTMzEuNTU3LDEyNi4xMjgsMzEuNTU3LDEyNS4xOXogTTM3LjM5MywxNTcuOTc5aC01LjUwOHYtMjUuOTIyaDUuNTA4VjE1Ny45Nzl6Ii8+DQoJPHBhdGggZD0iTTY1LjE5MSwxNTcuOTc5SDU5LjY2di0xNS45ODRjMC0xLjk4NC0wLjM3NS0zLjQ2NC0xLjEyNS00LjQ0MWMtMC43NS0wLjk3Ni0xLjkyMi0xLjQ2NS0zLjUxNi0xLjQ2NQ0KCQljLTIuMTI1LDAtMy42ODQsMC42OTEtNC42NzYsMi4wNzRjLTAuOTkzLDEuMzgzLTEuNDg4LDMuNjg0LTEuNDg4LDYuOTAydjEyLjkxNGgtNS41MDh2LTI1LjkyMmg0LjMxMmwwLjc3MywzLjM5OGgwLjI4MQ0KCQljMC43MTgtMS4yMzQsMS43NjEtMi4xODcsMy4xMjktMi44NTljMS4zNjctMC42NzEsMi44NzEtMS4wMDgsNC41MTItMS4wMDhjMy45ODQsMCw2LjYyNSwxLjM1OSw3LjkyMiw0LjA3OGgwLjM3NQ0KCQljMC43NjUtMS4yODEsMS44NDMtMi4yODEsMy4yMzQtM2MxLjM5LTAuNzE4LDIuOTg0LTEuMDc4LDQuNzgxLTEuMDc4YzMuMDk0LDAsNS4zNDcsMC43ODIsNi43NjIsMi4zNDQNCgkJYzEuNDE0LDEuNTYzLDIuMTIxLDMuOTQ2LDIuMTIxLDcuMTQ4djE2Ljg5OGgtNS41MDh2LTE1Ljk4NGMwLTEuOTg0LTAuMzc5LTMuNDY0LTEuMTM3LTQuNDQxDQoJCWMtMC43NTgtMC45NzYtMS45MzQtMS40NjUtMy41MjctMS40NjVjLTIuMTQxLDAtMy43MDgsMC42NjgtNC42OTksMi4wMDRjLTAuOTkzLDEuMzM2LTEuNDg4LDMuMzg3LTEuNDg4LDYuMTUyVjE1Ny45Nzl6Ii8+DQoJPHBhdGggZD0iTTk4LjYzOSwxNTguNDQ4Yy00LjAzMSwwLTcuMTg0LTEuMTc1LTkuNDU3LTMuNTI3Yy0yLjI3My0yLjM1Mi0zLjQxLTUuNTktMy40MS05LjcxNWMwLTQuMjM0LDEuMDU1LTcuNTYyLDMuMTY0LTkuOTg0DQoJCWMyLjEwOS0yLjQyMSw1LjAwNy0zLjYzMyw4LjY5NS0zLjYzM2MzLjQyMiwwLDYuMTI1LDEuMDQsOC4xMDksMy4xMTdjMS45ODQsMi4wNzksMi45NzcsNC45MzgsMi45NzcsOC41Nzh2Mi45NzdIOTEuNDQzDQoJCWMwLjA3OCwyLjUxNywwLjc1Nyw0LjQ1LDIuMDM5LDUuODAxYzEuMjgxLDEuMzUyLDMuMDg1LDIuMDI3LDUuNDE0LDIuMDI3YzEuNTMxLDAsMi45NTctMC4xNDQsNC4yNzctMC40MzQNCgkJYzEuMzItMC4yODksMi43MzgtMC43Nyw0LjI1NC0xLjQ0MXY0LjQ3N2MtMS4zNDQsMC42NDItMi43MDQsMS4wOTQtNC4wNzgsMS4zNTlDMTAxLjk3NCwxNTguMzE1LDEwMC40MDQsMTU4LjQ0OCw5OC42MzksMTU4LjQ0OHoNCgkJIE05Ny42MzEsMTM1Ljc2MWMtMS43NSwwLTMuMTUyLDAuNTU1LTQuMjA3LDEuNjY0Yy0xLjA1NSwxLjExLTEuNjg0LDIuNzI3LTEuODg3LDQuODUyaDExLjc2Ng0KCQljLTAuMDMyLTIuMTQtMC41NDctMy43NjItMS41NDctNC44NjNDMTAwLjc1NSwxMzYuMzEyLDk5LjM4LDEzNS43NjEsOTcuNjMxLDEzNS43NjF6Ii8+DQoJPHBhdGggZD0iTTEzNS4xMzIsMTU3Ljk3OWwtMy0xMi42NTZsLTAuNzAzLTMuODJsLTAuNDY5LTMuMDdoLTAuMTQxYy0wLjc2Niw0LjM3NS0xLjI4MSw3LjEzNC0xLjU0Nyw4LjI3M2wtMi42OTUsMTEuMjczaC05LjYzMw0KCQlsLTcuMjQyLTI2LjU1NWg5LjAyM2wyLjE1NiwxMC4xOTVjMC42ODgsMy41MDEsMS4wODYsNi40MDcsMS4xOTUsOC43MTloMC4xNDFjMC4wNDctMS40MzgsMC40NzctNC4xNzIsMS4yODktOC4yMDNsMi40NjEtMTAuNzExDQoJCWgxMC4xMjVsMi4yNSwxMC44NTJjMC43MTksMy40NTQsMS4xNzIsNi4xNDEsMS4zNTksOC4wNjJoMC4xNDFjMC4wOTQtMS4xODcsMC4yNS0yLjY2OCwwLjQ2OS00LjQ0MQ0KCQljMC4yMTktMS43NzMsMC40NjEtMy4xOTksMC43MjctNC4yNzdsMi4zNDQtMTAuMTk1aDguODM2bC03LjI5LDI2LjU1NUgxMzUuMTMyeiIvPg0KCTxwYXRoIGQ9Ik0xNzEuMzY5LDE1Ny45NzlsLTEuNzU4LTMuNTE2aC0wLjE4OGMtMS4yMzUsMS41MzItMi40OTMsMi41NzgtMy43NzMsMy4xNDFjLTEuMjgyLDAuNTYyLTIuOTM4LDAuODQ0LTQuOTY5LDAuODQ0DQoJCWMtMi41MDEsMC00LjQ3LTAuNzUtNS45MDYtMi4yNWMtMS40MzgtMS41LTIuMTU2LTMuNjA5LTIuMTU2LTYuMzI4YzAtMi44MjcsMC45ODQtNC45MzQsMi45NTMtNi4zMTZzNC44MTktMi4xNiw4LjU1NS0yLjMzMg0KCQlsNC40My0wLjE0MXYtMC4zNzVjMC0yLjE4Ny0xLjA3OC0zLjI4MS0zLjIzNC0zLjI4MWMtMS45MzgsMC00LjM5OSwwLjY1Ni03LjM4MywxLjk2OWwtMi42NDgtNi4wNDcNCgkJYzMuMDk0LTEuNTk0LDYuOTk5LTIuMzkxLDExLjcxOS0yLjM5MWMzLjQwNSwwLDYuMDQyLDAuODQ0LDcuOTEsMi41MzFjMS44NjYsMS42ODgsMi44MDEsNC4wNDcsMi44MDEsNy4wNzh2MTcuNDE0SDE3MS4zNjl6DQoJCSBNMTY0LjU3MiwxNTEuOTc5YzEuMTA4LDAsMi4wNTgtMC4zNTIsMi44NDgtMS4wNTVjMC43ODgtMC43MDMsMS4xODQtMS42MTcsMS4xODQtMi43NDJ2LTIuMDYybC0yLjEwOSwwLjA5NA0KCQljLTMuMDE3LDAuMTA5LTQuNTIzLDEuMjE5LTQuNTIzLDMuMzI4QzE2MS45NzEsMTUxLjE2OCwxNjIuODM4LDE1MS45NzksMTY0LjU3MiwxNTEuOTc5eiIvPg0KCTxwYXRoIGQ9Ik0yMDIuNTQzLDE0OS44MjNjMCwyLjg0NS0wLjk3LDQuOTkyLTIuOTA2LDYuNDQ1Yy0xLjkzOCwxLjQ1My00LjcyLDIuMTgtOC4zNDQsMi4xOGMtMS45NjksMC0zLjY4LTAuMTA1LTUuMTMzLTAuMzE2DQoJCXMtMi45MzgtMC41OTgtNC40NTMtMS4xNnYtNy4zMzZjMS40MjEsMC42MjUsMi45NzksMS4xNDEsNC42NzYsMS41NDdjMS42OTQsMC40MDcsMy4yMDYsMC42MDksNC41MzUsMC42MDkNCgkJYzEuOTgzLDAsMi45NzctMC40NTMsMi45NzctMS4zNTljMC0wLjQ2OS0wLjI3OC0wLjg4Ny0wLjgzMi0xLjI1NGMtMC41NTYtMC4zNjYtMi4xNjgtMS4wODEtNC44NC0yLjE0NQ0KCQljLTIuNDM4LTAuOTk5LTQuMTQyLTIuMTM2LTUuMTA5LTMuNDFjLTAuOTctMS4yNzMtMS40NTMtMi44ODYtMS40NTMtNC44NGMwLTIuNDY4LDAuOTUyLTQuMzksMi44NTktNS43NjYNCgkJYzEuOTA1LTEuMzc1LDQuNjAxLTIuMDYyLDguMDg2LTIuMDYyYzEuNzQ5LDAsMy4zOTQsMC4xOTIsNC45MzQsMC41NzRjMS41MzgsMC4zODMsMy4xMzYsMC45NDIsNC43OTMsMS42NzZsLTIuNDg0LDUuOTA2DQoJCWMtMS4yMTktMC41NDYtMi41MDgtMS4wMTEtMy44NjctMS4zOTVjLTEuMzU5LTAuMzgyLTIuNDctMC41NzQtMy4zMjgtMC41NzRjLTEuNSwwLTIuMjUsMC4zNjgtMi4yNSwxLjEwMg0KCQljMCwwLjQ1NCwwLjI2MSwwLjg0LDAuNzg1LDEuMTZjMC41MjIsMC4zMjEsMi4wMzQsMC45NzMsNC41MzUsMS45NTdjMS44NTgsMC43NjYsMy4yNDYsMS41MTYsNC4xNiwyLjI1DQoJCWMwLjkxNCwwLjczNSwxLjU4NSwxLjU5OCwyLjAxNiwyLjU5QzIwMi4zMjcsMTQ3LjE5NSwyMDIuNTQzLDE0OC40MDIsMjAyLjU0MywxNDkuODIzeiIvPg0KCTxwYXRoIGQ9Ik0yMTguNzE2LDE1MS4yMDZjMS4yMzQsMCwyLjcxMS0wLjMwNSw0LjQzLTAuOTE0djYuNjhjLTEuMjM0LDAuNTMxLTIuNDEsMC45MTEtMy41MjcsMS4xMzcNCgkJYy0xLjExNywwLjIyNy0yLjQyNiwwLjM0LTMuOTI2LDAuMzRjLTMuMDc4LDAtNS4yOTctMC43NTMtNi42NTYtMi4yNjJjLTEuMzU5LTEuNTA4LTIuMDM5LTMuODIzLTIuMDM5LTYuOTQ5di0xMC45NDVoLTMuMjExDQoJCXYtMy43MjdsNC4wNzgtMi44ODNsMi4zNjctNS41NzhoNnY1LjMyaDYuNTE2djYuODY3aC02LjUxNnYxMC4zMzZDMjE2LjIzMSwxNTAuMzQ4LDIxNy4wNiwxNTEuMjA2LDIxOC43MTYsMTUxLjIwNnoiLz4NCgk8cGF0aCBkPSJNMjM4LjY4NywxNTguNDQ4Yy00LjQyMiwwLTcuODU1LTEuMTc1LTEwLjMwMS0zLjUyN2MtMi40NDUtMi4zNTItMy42NjgtNS42OTgtMy42NjgtMTAuMDQzDQoJCWMwLTQuNDg0LDEuMTMzLTcuOTI1LDMuMzk4LTEwLjMyNGMyLjI2Ni0yLjM5OCw1LjUtMy41OTgsOS43MDMtMy41OThjNCwwLDcuMDksMS4wNDMsOS4yNywzLjEyOXMzLjI3LDUuMDksMy4yNyw5LjAxMnY0LjA3OA0KCQloLTE2LjM4M2MwLjA2MiwxLjQ4NSwwLjYwNSwyLjY0OCwxLjYyOSwzLjQ5MnMyLjQxOCwxLjI2Niw0LjE4NCwxLjI2NmMxLjYwOSwwLDMuMDktMC4xNTIsNC40NDEtMC40NTdzMi44MTYtMC44MjMsNC4zOTUtMS41NTkNCgkJdjYuNTg2Yy0xLjQzOCwwLjczNS0yLjkyMiwxLjI0Mi00LjQ1MywxLjUyM1MyNDAuODEyLDE1OC40NDgsMjM4LjY4NywxNTguNDQ4eiBNMjM4LjE0NywxMzcuMTljLTEuMDc4LDAtMS45OCwwLjM0LTIuNzA3LDEuMDINCgkJcy0xLjE1MiwxLjc0Ni0xLjI3NywzLjE5OWg3Ljg3NWMtMC4wMzEtMS4yODEtMC4zOTUtMi4zMDQtMS4wOS0zLjA3QzI0MC4yNTMsMTM3LjU3NCwyMzkuMzE5LDEzNy4xOSwyMzguMTQ3LDEzNy4xOXoiLz4NCgk8cGF0aCBkPSJNMjYxLjg2OCwxNTguNDQ4Yy0xLjg5MSwwLTMuNTQzLTAuNTM5LTQuOTU3LTEuNjE3cy0yLjUwOC0yLjY2My0zLjI4MS00Ljc1OGMtMC43NzMtMi4wOTQtMS4xNi00LjUzOC0xLjE2LTcuMzM2DQoJCWMwLTQuMzEyLDAuODY3LTcuNjg4LDIuNjAyLTEwLjEyNXM0LjExNy0zLjY1Niw3LjE0OC0zLjY1NmMxLjQ4NCwwLDIuNzg1LDAuMjk3LDMuOTAyLDAuODkxYzEuMTE3LDAuNTk0LDIuMTM3LDEuNTk0LDMuMDU5LDMNCgkJaDAuMTg4Yy0wLjI5Ny0yLjA3OC0wLjQ0NS00LjE1Ni0wLjQ0NS02LjIzNHYtNy4xMDJoOS4yMzR2MzYuNDY5aC02LjkxNGwtMS45NjktMy4zNTJoLTAuMzUyDQoJCUMyNjcuMzQ1LDE1Ny4xNzUsMjY0Ljk5MywxNTguNDQ4LDI2MS44NjgsMTU4LjQ0OHogTTI2NS42MTgsMTUxLjIwNmMxLjQ2OSwwLDIuNTA0LTAuNDYsMy4xMDUtMS4zODMNCgkJYzAuNjAyLTAuOTIyLDAuOTI2LTIuMzQ0LDAuOTczLTQuMjY2di0wLjcyN2MwLTIuMzQ0LTAuMzM2LTQuMDExLTEuMDA4LTUuMDA0Yy0wLjY3Mi0wLjk5Mi0xLjcyNy0xLjQ4OC0zLjE2NC0xLjQ4OA0KCQljLTEuMjAzLDAtMi4xMzcsMC41NjctMi44MDEsMS42OTljLTAuNjY0LDEuMTMzLTAuOTk2LDIuNzQ3LTAuOTk2LDQuODRjMCwyLjA2MiwwLjMzNiwzLjYzMywxLjAwOCw0LjcxMQ0KCQlTMjY0LjM2OCwxNTEuMjA2LDI2NS42MTgsMTUxLjIwNnoiLz4NCjwvZz4NCjwvc3ZnPg0K" alt="timewasted logo"/>
</div>

<div class="image_container">
  <noscript data-alt="timewasted mobile design" data-src="http://sicanstudios.com/images/work/timewasted/mobile-design.jpg" data-src-retina="http://sicanstudios.com/images/work/timewasted/mobile-design@2x.jpg"><img src="http://sicanstudios.com/images/work/timewasted/mobile-design.jpg" alt="timewasted mobile design"></noscript>
</div>

<div class="image_container">
  <noscript data-alt="timewasted mobile screens" data-src="http://sicanstudios.com/images/work/timewasted/mobile-screens.png" data-src-retina="http://sicanstudios.com/images/work/timewasted/mobile-screens@2x.png"><img src="http://sicanstudios.com/images/work/timewasted/mobile-screens.png" alt="timewasted mobile screens"></noscript>
</div>

<div class="image_container">
  <noscript data-alt="timewasted tablet and mobile" data-src="http://sicanstudios.com/images/work/timewasted/tablet-mobile.jpg" data-src-retina="http://sicanstudios.com/images/work/timewasted/tablet-mobile@2x.jpg"><img src="http://sicanstudios.com/images/work/timewasted/tablet-mobile.jpg" alt="timewasted tablet and mobile"></noscript>
</div>

<div class="image_container">
  <noscript data-alt="timewasted desktop add show" data-src="http://sicanstudios.com/images/work/timewasted/desktop-add-show.png" data-src-retina="http://sicanstudios.com/images/work/timewasted/desktop-add-show@2x.png"><img src="http://sicanstudios.com/images/work/timewasted/desktop-add-show.png" alt="timewasted desktop add show"></noscript>
</div>
'
---
TimeWasted is a web app that calculates how much time you’ve wasted from your life watching TV shows.
<!--more-->

##What I learned
I learned how to create a modern web application that would prove useful to the the user. I learned to use JavaScript (Ajax) to fetch database items, interact, and display them. I became familiar with all the different mobile browser quirks, and their workarounds and fixes. Finally, I tried to mimic the Google search engine by making searching for shows intuitive and easy (read below).

##Concept Idea
I wanted to create a web application that would look awesome on the iPhone and iPad. Web apps are popular these days because they look great on any device or OS, and you&#8217;re not required to submit the app to a certain store and wait weeks for approval. 

This has several advantages some of which: you get all the profit from the app—if you decide to charge for using it, you always interact with the latest version, and you don’t have to install and update anything.

The idea for the app came to me from all these productivity and time management tools that calculate how much time you&#8217;ve spent on a task. Why not have a calculator that shows you how much time you&#8217;ve wasted watching TV shows?

<a href="http://sicanstudios.com/images/work/timewasted/timewasted.jpg" class="img" target="_blank"><img src="../images/work/timewasted/timewasted-small.jpg" alt="timewasted design" title="TimeWasted design" /></a>

Time flies and we are often unaware of this when we&#8217;re watching TV shows. Slowly, with time, the total amount spent on TV shows adds up to days, even weeks. By evaluating the time spent on TV shows on a calculator, maybe you will reduce the time you spend on watching TV shows. Even better, you may decide to spend your time on something else, like starting a business, improving your craft, or reading a book.

For some time now, I&#8217;ve been wanting to create this app. It wasnt&#8217;t until November 2011, that I got a chance to begin working on it. Here&#8217;s the initial homepage design that I had drafted back then:

<img src="http://sicanstudios.com/images/work/timewasted/timewasted-old.jpg" alt="old timewasted design" title="Old TimeWasted design" />

##iPhone and iPad
The web app was optimised for the iPhone and the iPad. Several elements were included or excluded from the devices accordingly.

<a href="http://sicanstudios.com/images/work/timewasted/ipad-iphone.jpg" class="img" target="_blank"><img src="http://sicanstudios.com/images/work/timewasted/ipad-iphone-small.jpg" alt="iPad iPhone design" title="iPad iPhone design" /></a>

On first load, an *&#8220;add to homepage&#8221;* popup would appear once, asking the user to add this web app to their home screen. A homepage iOS icon was created for this instance.

<img src="http://sicanstudios.com/images/work/timewasted/ios-icon.jpg" alt="iOS icon" title="iOS icon" />

If the user is browsing from an iPhone, using JavaScript, I hide the mobile Safari browser&#8217;s address bar to create more room for the application’s interface. On mobile devices, social buttons were disabled from loading to save bandwidth and only the &#8220;Tweet my results&#8221; button was kept.

Each device is served a different design (responsive design). On the iPhone and iPad, the add-TV-show page has a big central input section, and it doesn&#8217;t display the app logo or any additional info. On the iPhone, a single column design is prominent throughout the app. On desktops, the shows are displayed in three separate columns.

The method of having a fixed element and scroll inside it, doesn&#8217;t work on iOS devices. Therefore, I used a handy JS plugin called <a href="http://cubiq.org/iscroll-4" target="_blank">iScroll</a>. The problem that I encountered was I couldn&#8217;t fetch new data with AJAX and refresh the iScroll to work properly with the new content. That&#8217;s why the app has three different pages. I would prefer a single page without refreshing, by using AJAX to fetch additional content behind the scenes, but it wasn’t possible.

The issue, of fixed element and scrollable container, explained in the previous paragraph is solved on iOS 5 and above. It works, without the need for additional plugins or hacks. But in order to make the app accessible for iOS 4 and iOS 5 users, I had to guess what iOS was being used and serve them with different content. I wrote a tutorial about it: <a href="http://sicanstudios.com/post/different-content-css-ios-version" target="_blank">Different content or CSS depending on iOS version</a>.

Aside from the portrait version, the app also has a landscape version. Using CSS3, the design is altered accordingly to accommodate for more space. Additional text was added to some elements. For example the button which adds a TV show to the list, in portrait mode it says &#8220;Add this&#8221; and in landscape mode it says &#8220;Add this TV show&#8221;.

<a href="http://sicanstudios.com/images/work/timewasted/landscape-portrait.jpg" class="img" target="_blank"><img src="http://sicanstudios.com/images/work/timewasted/landscape-portrait-small.jpg" alt="landscape portrait orientation" title="Landscape/Portrait orientation" /></a>

##Production
For the development of this app, I decided to use the latest technologies available at that time: HTML5 and CSS3. Using <a href="http://html5boilerplate.com/" target="_blank">HTML5 Boilerplate</a> as the backend of this web app had many advantages. One of which was that the browsing experience degraded gracefully in browsers that don&#8217;t yet support this technology.

Along with PHP, the app relies heavily on jQuery and AJAX in order to work. When the user types in their favourite shows, a dropdown with all the available shows appears. The user can select one from the list or continue typing to refine the result.

<img src="http://sicanstudios.com/images/work/timewasted/dropdown.jpg" alt="dropdown" title="Dropdown" />

The app displays how much time was wasted, by multiplying the total number of shows and the number of seasons for each show inputted by the user. It searches the database for the show and multiplies the number of seasons with the episodes per season (average) times the runtime (minutes) for each episode (seasons x episodes x minutes). It then takes the total minutes and divides them into &#8220;Days&#8221;, &#8220;Hours&#8221; and &#8220;Minutes&#8221;.

In order to make app load faster, the number of connections to the database was reduced to one. All the details are then passed using <code>POST</code> method to the other pages. The calculations are made by PHP on the fly, from the details included in the POST. The images of each TV show on the results page are displayed by simply removing the spaces from the title of the show.

##Error checking
Error checking is an important part of any project. It&#8217;s like having a proofreader. Because there is interaction with the user, all possibilities were accounted for. If the user has JavaScript disabled, a notification appears at the top, asking the user to enable JS in order to use the web app.

<img src="http://sicanstudios.com/images/work/timewasted/javascript-disabled.jpg" alt="javascript disabled" title="Javascript disabled" />

The user is not allowed to advance if they forgot to introduce a TV show or didn&#8217;t select a number of seasons. Moreover, if they directly accessed the results page, they are redirected to the home screen to go through the process of adding a TV show to the list first.

When adding a TV show, if the show they typed is not in the database, a message is displayed in the dropdown list saying &#8220; I couldn&#8217;t find the TV show&#8221;. This is a so-called soft notification. No popup or erasing what the user has typed until now. In case the user selects a show that already exists in the list, a popup appears saying that this show was added before to the list.

Upon selecting how many seasons of that TV show the user has watched, the entry is not added to the list automatically. The user has to click the &#8220;Add TV show&#8221; button first. The UX was created this way, in order to allow the user the option to edit the entry before adding it to the list, for example if they selected the wrong amount of seasons. I save the user from the trouble of having to delete the entry from the list, then typing it again and then selecting the correct amount of seasons watched.

##Additional checks
Additional checks were made to prevent unauthorised access to database or sensitive information via PHP such as using <code>mysql_real_escape_string()</code>.

Moreover, when typing a TV show, the app doesn&#8217;t immediately fetch the TV shows list. It waits for the user to finish typing and has a small delay from the time you finished typing until it creates a database connection. The UX was created in such way to reduce the amount of calls being made to the database.

##Being a smart-ass
I always admired Google for their search algorithm. You type in whatever you can think of and it comes back with meaningful results. Inspired by that, TimeWasted tries to be smart when identifying TV shows.

If you type in for example &#8220;Breaking&#8221;, the show Breaking Bad will be listed. If you type in first &#8220;Bad&#8221;, the same show will be displayed. Where I took it a step further, was in adding the main character(s)/actor(s) as a search term. So if you type in &#8220;Heisenberg&#8221;, the show Breaking Bad will appear. Similarly, if you type in &#8220;Stewie&#8221;, the TV show Family Guy will be listed.

<img src="http://sicanstudios.com/images/work/timewasted/30-rock.jpg" alt="30 rock" title="30 rock confusion" />

The negative aspect of this is if the user for example types in &#8220;Tr&#8221; searching for True Blood and the TV show 30 Rock is listed. It could make the user wonder why it&#8217;s shown in the results (because of Tracy Jordan, a character in the show).