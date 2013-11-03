---
title: 'How to code a Teehan+Lax navigation'
layout: post
bgcolour: blue
cover: '<img class="cover" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkFfMV8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNzM2cHgiIGhlaWdodD0iNDE2cHgiIHZpZXdCb3g9IjAgMCA3MzYgNDE2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3MzYgNDE2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJBIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTM0Ny4zNjIsMjQ5LjA0N2MtMC4zNy0wLjMxMi0wLjc2Ni0wLjU5Ni0xLjE5MS0wLjg1MWMtMC40MjUtMC4yNTYtMC42OTUtMC40MzktMC44MDgtMC41NTRsLTAuNjgxLTAuNDI1DQoJCQljLTAuNzk1LTAuNzk0LTEuMzA2LTEuNDE3LTEuNTMxLTEuODcybC0wLjQyNi0xLjUzMWwwLjUxMS0wLjQyNWwtMC4yNTUtMS4xOTFjLTAuMjI4LTAuMzk2LTAuMzk3LTAuNjgtMC41MTEtMC44NTENCgkJCWMtMC4wNTctMC4xNy0wLjA1Ny0wLjczNiwwLTEuNzAxYzAtMC4xNy0wLjA1Ny0wLjQ1My0wLjE3LTAuODUxbC0wLjE3LTAuNTExYy0wLjA1OC0wLjc5My0wLjA4Ni0xLjQxNi0wLjA4Ni0xLjg3MQ0KCQkJYzAtMC4wNTYtMC4wNDItMC4xODQtMC4xMjctMC4zODNjLTAuMDg1LTAuMTk4LTAuMTI4LTAuMzU0LTAuMTI4LTAuNDY4YzAtMC4wNTYtMC4wMjktMC4yNC0wLjA4NS0wLjU1Mw0KCQkJYy0wLjA1Ny0wLjMxMi0wLjEyOC0wLjY1MS0wLjIxMy0xLjAyMWMtMC4wODUtMC4zNjgtMC4xMjctMC42OTQtMC4xMjctMC45NzljLTAuMTcxLTAuNjgxLTAuNDgyLTEuOTg0LTAuOTM3LTMuOTEzbC0wLjc2Ni0zLjE0Nw0KCQkJYy0wLjczNy00LjI1NC0xLjEzNS02LjQ5My0xLjE5LTYuNzIxdi0wLjY4YzAtMC4yMjcsMC4wMjctMC41MTEsMC4wODUtMC44NTJ2LTAuNDI1YzAtMC4wNTYtMC4wNTgtMC4yODMtMC4xNy0wLjY4MWwtMC4xNy0wLjU5Ng0KCQkJbC0wLjE3MS0wLjUxYy0wLjA1Ny0wLjM0MS0wLjA4NS0wLjU2Ni0wLjA4NS0wLjY4MWwtMC4zNC0wLjkzNmMwLjIyNi0wLjM0MSwwLjM5Ni0wLjU5NiwwLjUxMS0wLjc2NmwwLjI1NS0wLjM0MQ0KCQkJYzAuMjI2LTAuMTcsMC4zNC0wLjM0LDAuMzQtMC41MWwwLjM0MS0xLjM2MWMwLjA1Ni0wLjA1NiwwLjE0MS0wLjE0MSwwLjI1NS0wLjI1NmwwLjI1NS0wLjUxDQoJCQljMS41MzEtMS4zNjEsMi4zODItMi4xNTQsMi41NTMtMi4zODJjMC4xNy0wLjA1NiwwLjQ1My0wLjM4MywwLjg1MS0wLjk3OWMwLjM5Ni0wLjU5NiwwLjYyMy0wLjg5NCwwLjY4MS0wLjg5NA0KCQkJYzAuMDU2LDAsMC4yNC0wLjE5NywwLjU1My0wLjU5NWMwLjMxMS0wLjM5NiwwLjYwOC0wLjc2NiwwLjg5My0xLjEwNmMwLjI4My0wLjM0LDAuNDgxLTAuNTk1LDAuNTk2LTAuNzY2DQoJCQljMC43MzYtMS4wNzYsMS4yMTktMS44NDIsMS40NDYtMi4yOTdjMC42ODEtMS4zMDQsMC45OTEtMi4yMzksMC45MzYtMi44MDdjMC0wLjkwNi0wLjI4NC0xLjY0NS0wLjg1MS0yLjIxMg0KCQkJYy0wLjkwOC0wLjkwNi0xLjk1Ni0xLjM4OS0zLjE0Ny0xLjQ0NmMtMC43OTUtMC4wNTYtMS42NDYsMC4yMjgtMi41NTIsMC44NTFjLTAuMDU4LDAtMC4yODQsMC4wNTgtMC42ODEsMC4xNzENCgkJCWMtMC4zOTcsMC4xMTQtMC42NTIsMC4yMjctMC43NjYsMC4zNGwtMS41MzEsMS4xMDVjLTAuMzk3LDAuMjI4LTAuNzEsMC4zNy0wLjkzNiwwLjQyNmMtMC42ODEsMC4yMjgtMS4zMDYsMC41OTYtMS44NzIsMS4xMDUNCgkJCWMtMC4xNywwLjA1OC0wLjQ1NCwwLjE0My0wLjg1MSwwLjI1NmwtMS4xMDUsMC40MjVjMC0wLjE3LTAuMDg1LTAuMzExLTAuMjU1LTAuNDI1bC0wLjQyNi0wLjI1Ng0KCQkJYy0wLjA1Ny0wLjY4MS0wLjE0My0xLjEzNC0wLjI1NS0xLjM2YzAtMC41MTEtMC4xNy0xLjEwNi0wLjUxMS0xLjc4N2MtMC43MzctMS4zNi0xLjEzNS0yLjI2OC0xLjE5LTIuNzIyDQoJCQljLTAuMzQxLTAuOTA2LTAuNzEtMi41MjItMS4xMDYtNC44NDljLTAuMzQtMS44NzItMC43MS0zLjQ1OS0xLjEwNS00Ljc2NGMtMC4xNy0wLjIyNy0wLjM4My0wLjUzOS0wLjYzOC0wLjkzNw0KCQkJYy0wLjI1Ni0wLjM5Ni0wLjQ5Ny0wLjY1LTAuNzI0LTAuNzY1bC0wLjM0LTAuNDI2Yy0wLjU2Ny0wLjM5Ni0xLjczLTAuOTA2LTMuNDg4LTEuNTMxYy0wLjA1NywwLTAuMzU0LTAuMTEzLTAuODkzLTAuMzQNCgkJCWMtMC41NC0wLjIyNy0wLjgzOC0wLjM2OC0wLjg5NC0wLjQyNmMtMC4zOTctMC4wNTYtMC44NTEtMC4zMTEtMS4zNjEtMC43NjZ2LTIuMzgyYzAuNTExLTAuNzM2LDAuODIxLTEuMzMyLDAuOTM3LTEuNzg2di0yLjA0Mg0KCQkJYzAuMDU2LDAsMC4xNDEtMC4wNDIsMC4yNTUtMC4xMjdjMC4xMTItMC4wODYsMC4xMTItMC4zNTQsMC0wLjgwOXYtMS4yNzZjMC0wLjU2NS0wLjAyOS0wLjkzNi0wLjA4NS0xLjEwNQ0KCQkJYy0wLjA1OC0wLjA1Ni0wLjE3LTAuMDg1LTAuMzQxLTAuMDg1aC0wLjE3Yy0wLjM0LTIuMDk4LTAuOTc5LTMuNTQ0LTEuOTE0LTQuMzM5Yy0wLjkzNi0wLjc5My0yLjM2OC0xLjA3Ni00LjI5Ni0wLjg1MQ0KCQkJYy0wLjY4MSwwLjA1OC0xLjQxOCwwLjQyNi0yLjIxMiwxLjEwNmMtMC43OTUsMC42ODEtMS4yNzUsMS4zMDUtMS40NDUsMS44NzFjLTAuMTcxLDAuMzk3LTAuMjI4LDEuMTM1LTAuMTcxLDIuMjEybDAuMTcxLDIuMDQyDQoJCQljLTAuMjI4LDAuMDU3LTAuMjg1LDAuMzk2LTAuMTcxLDEuMDIxYzAuMDU3LDAuMDU3LDAuMTU2LDAuMjEzLDAuMjk4LDAuNDY4czAuMjY5LDAuNDEyLDAuMzgzLDAuNDY4DQoJCQljMC4xNywwLjUxMSwwLjM2OCwwLjg4LDAuNTk2LDEuMTA1bDAuMzQsMC4xNzFjMC4yMjcsMC4zOTcsMC4zOTYsMC43MDksMC41MTEsMC45MzZsMC4zNCwwLjc2NnYxLjE5bC0wLjUxLDAuNzY2DQoJCQljLTEuNzAxLDAuNzk1LTIuODM3LDEuMjc2LTMuNDAyLDEuNDQ2Yy0yLjEsMC43OTUtMy4yMDUsMS4yNDgtMy4zMTgsMS4zNjFjLTAuMzk3LDAuMjI4LTAuNzY1LDAuNTM5LTEuMTA1LDAuOTM2DQoJCQljLTAuMDU3LDAuMDU4LTAuMTcsMC4yMTMtMC4zNCwwLjQ2OHMtMC4zNCwwLjUxMS0wLjUxLDAuNzY2Yy0wLjE3LDAuMjU1LTAuMjg1LDAuNDQtMC4zNCwwLjU1Mw0KCQkJYy0wLjA1NywwLjExNC0wLjE3LDAuNDU1LTAuMzQsMS4wMjFjLTAuMTcsMC41NjctMC4zNCwxLjEwNS0wLjUxLDEuNjE2TDMwMywxODYuMjI2YzAsMS45MjgsMC4xMTMsNC4wMjcsMC4zNCw2LjI5NQ0KCQkJYzAuMDU2LDAuMzQsMC4xOTgsMS4wNjIsMC40MjUsMi4xNjljMC4yMjYsMS4xMDUsMC4zNjgsMS45NDMsMC40MjUsMi41MDljMC4xNywxLjI0OCwwLjU5NiwyLjQzOSwxLjI3NiwzLjU3Mw0KCQkJYy0wLjIyNywzLjc0My0wLjM5Nyw1LjkyNy0wLjUxLDYuNTVjLTAuMjI3LDEuNjQ2LTAuMzk3LDMuMTc3LTAuNTEsNC41OTRjLTAuOTA4LDExLjUxNC0xLjI3NiwxOC42My0xLjEwNiwyMS4zNTJsMC41MSwwLjM0MQ0KCQkJbDAuNTEtMC4xNzFjMC43MzctNy4wMzEsMS4xOTEtMTEuMDI5LDEuMzYxLTExLjk5NGMwLjc5My01LjIxNywxLjIxOS03LjgyNiwxLjI3Ni03LjgyNmMwLjE3LTAuNTEsMC40MjYtMC43OTMsMC43NjYtMC44NTFoMS4zNjENCgkJCWwyLjcyMiwyLjU1MmwwLjQyNiwyNy4yMjJjMC4wNTYsMC4xNywwLjI1NSwwLjI1NSwwLjU5NiwwLjI1NWMwLjIyNiwwLDAuNDUzLTAuMDg1LDAuNjgtMC4yNTVsMS40NDYtMjUuMTgNCgkJCWMwLjE3LTAuMzQsMC4yODMtMC41MzgsMC4zNDEtMC41OTZsMC44NTEtMC4wODVsNS43ODQtMC4xN2MwLjM5NiwwLjkwOCwwLjkzNiwxLjY0NiwxLjYxNiwyLjIxMg0KCQkJYzAuMjI2LDAuMjI3LDAuNTM4LDAuNDU0LDAuOTM2LDAuNjgxYzAuMzk2LDAuMjI3LDAuNzA5LDAuMzQsMC45MzYsMC4zNGwwLjQyNiwwLjA4NWMwLjUxMS0wLjA1NiwwLjk2NCwwLjAyOSwxLjM2MSwwLjI1NQ0KCQkJYzAuMjI2LDAuMDU4LDAuNjUxLDAuNDI2LDEuMjc1LDEuMTA2YzAsMC4yMjgsMC4wNDMsMC41MSwwLjEyOCwwLjg1MWMwLjA4NSwwLjM0LDAuMTk4LDAuNjY3LDAuMzQsMC45NzkNCgkJCWMwLjE0MiwwLjMxMiwwLjIxMywwLjUyNCwwLjIxMywwLjYzOGMwLDAuMzQsMC4wNTYsMS41MDMsMC4xNywzLjQ4N2MwLjA1NywwLjY4MSwwLjQyNiwxLjk4NiwxLjEwNiwzLjkxMw0KCQkJYzAuNzkzLDIuNDM5LDEuMzA0LDMuOTEzLDEuNTMxLDQuNDI0YzAuMDU2LDAuMDU3LDAuMDg1LDAuNDEyLDAuMDg1LDEuMDYzdjEuMTljMCwwLjE0MywwLjA1NiwwLjM5NywwLjE3LDAuNzY2DQoJCQljMC4xMTMsMC4zNywwLjE3LDAuNTgyLDAuMTcsMC42MzljMC4yMjcsMC43MzcsMC4zNjgsMS42NDYsMC40MjYsMi43MjJjMCwwLjU2NywwLjExMiwwLjk2NSwwLjM0LDEuMTkxbDAuMDg1LDEuMTA1aDAuNDI2djEuMTkNCgkJCWwtMC4xNywwLjE3MWwtMC4wODUsMS40NDVsMC4zNCwwLjU5NmMwLjA1NiwwLjA1OCwwLjE0MSwwLjE0MywwLjI1NSwwLjI1NmMwLjM0MSwwLjM0LDAuODIyLDAuNTk1LDEuNDQ2LDAuNzY2bDAuODUxLDAuMjU1DQoJCQljMC4wNTYsMCwwLjI4MywwLjI0MiwwLjY4MSwwLjcyM2MwLjM5NiwwLjQ4MSwwLjg2NCwwLjk5MiwxLjQwMywxLjUzMWMwLjUzOSwwLjUzOCwxLjExOSwwLjg2NCwxLjc0NCwwLjk3OQ0KCQkJYzMuMTE4LDAuNzk0LDUuMDQ3LDEuMDQ5LDUuNzg0LDAuNzY2YzEuODcyLTAuOTA4LDIuODA4LTEuNTAzLDIuODA4LTEuNzg2YzAtMC4zNDEtMC4xNDMtMC42ODEtMC40MjYtMS4wMjENCgkJCUMzNDguMDU2LDI0OS42ODUsMzQ3LjczLDI0OS4zNTcsMzQ3LjM2MiwyNDkuMDQ3eiBNMzY5LjUyMSwxOTMuMDNoLTMuOTEzdjUuMjc0aC01LjI3M3YzLjkxM2g1LjI3M3Y1LjEwNGgzLjkxM3YtNS4xMDRoNS4xMDQNCgkJCXYtMy45MTNoLTUuMTA0VjE5My4wM3ogTTQyNy44NzcsMjEybC0xLjAyMS0yMi4yODdoLTMuMDYyYzAtMC4wNTYsMC4wNDMtMC4zMjYsMC4xMjgtMC44MDljMC4wODUtMC40OCwwLjEyNy0wLjc5MywwLjEyNy0wLjkzNg0KCQkJYzAtMC4xNDEtMC4wODUtMC41ODEtMC4yNTUtMS4zMThjLTAuMTctMC43MzYtMC4yODQtMS4xMzQtMC4zNC0xLjE5Yy0wLjE3MS0wLjk2NC0wLjI1Ni0xLjU2LTAuMjU2LTEuNzg3DQoJCQljMC0wLjIyNi0wLjE3LTAuNTY1LTAuNTEtMS4wMjFjLTAuMDU4LTAuMDU2LTAuMTcxLTAuMjU1LTAuMzQxLTAuNTk2Yy0wLjE3LTAuMzQtMC4yODQtMC41OTUtMC4zNC0wLjc2Ng0KCQkJYy0wLjE3LTAuMjI2LTAuNTgyLTAuNTgtMS4yMzMtMS4wNjNjLTAuNjUzLTAuNDgtMS4wNjMtMC43NzgtMS4yMzMtMC44OTNjLTAuMDU4LDAtMC4zODMtMC4xODQtMC45NzktMC41NTMNCgkJCWMtMC41OTYtMC4zNjgtMS4wMDgtMC41ODEtMS4yMzMtMC42MzljLTAuMDU4LTAuMDU2LTAuNzEtMC4yNTUtMS45NTctMC41OTVjLTAuMDU3LDAtMC40MTItMC4xMjgtMS4wNjItMC4zODMNCgkJCWMtMC42NTMtMC4yNTYtMS4wNjMtMC40MTEtMS4yMzQtMC40NjljLTAuNTY3LTAuMDU2LTAuOTkyLTAuMjgyLTEuMjc1LTAuNjhjLTAuMDU4LTAuNTY2LTAuMDg1LTAuOTM3LTAuMDg1LTEuMTA2DQoJCQljMC0wLjA1NiwwLjA1Ni0wLjE0MSwwLjE3LTAuMjU1YzAuMTEzLTAuMTEzLDAuMTctMC4yMjYsMC4xNy0wLjM0MWwwLjA4NS0wLjUxYzAuMDU2LTAuMjgzLDAuMDg1LTAuNTIzLDAuMDg1LTAuNzI0di0wLjU1Mw0KCQkJbDAuMDg1LTEuMTA1bC0wLjA4NS0wLjg1MWwwLjI1Ni0wLjY4MWMtMC4wNTgtMC4zNDEtMC4xMTQtMC41NjYtMC4xNzEtMC42ODF2LTAuNzY2Yy0wLjA1Ny0wLjUxMS0wLjIyNy0wLjk2NC0wLjUxLTEuMzYxDQoJCQlsLTAuMTctMC4yNTVjLTAuMTE0LTAuMjI2LTAuMjEzLTAuNDI2LTAuMjk4LTAuNTk2cy0wLjEyOC0wLjI4My0wLjEyOC0wLjM0Yy0wLjA1Ny0wLjUxMS0wLjE0My0wLjc2Ni0wLjI1NS0wLjc2NmwtMC41OTYtMC40MjYNCgkJCWwtMC4wODUtMC40MjVjLTAuMTcsMC4wNTctMC4zMTIsMC4wNTctMC40MjYsMGwtMC40MjUtMC40MjZjLTAuMjI4LDAuMDU4LTAuMzk3LDAuMDU4LTAuNTExLDBsLTAuMjU1LTAuNTFsLTAuNTExLDAuMjU1DQoJCQlsLTAuMjU1LTAuNDI2bC0wLjM0MSwwLjE3MWMtMC4wNTcsMC0wLjE3LTAuMDQzLTAuMzQtMC4xMjhzLTAuMzEyLTAuMTI4LTAuNDI2LTAuMTI4aC0xLjAyMWMtMC4wNTcsMC0wLjE1NiwwLjA0My0wLjI5OCwwLjEyOA0KCQkJcy0wLjI3LDAuMTI4LTAuMzgzLDAuMTI4Yy0wLjA1NywwLTAuMjEyLDAuMDE1LTAuNDY4LDAuMDQyYy0wLjI1NSwwLjAyOS0wLjQxMiwwLjA0My0wLjQ2OCwwLjA0Mw0KCQkJYy0wLjIyOCwwLTAuNDI1LDAuMDU3LTAuNTk2LDAuMTdjLTAuMzQsMC4yMjgtMC41OTUsMC4zOTctMC43NjYsMC41MTFsLTAuMjEyLDAuMjEyYy0wLjA4NSwwLjA4NS0wLjE4NiwwLjEyOC0wLjI5OCwwLjEyOA0KCQkJbC0wLjg1MSwwLjUxMWwtMC4zNDEsMC42OGMtMC4zNCwwLTAuNTM5LDAuMDU4LTAuNTk1LDAuMTcxdjAuMDg1bDAuMjU1LDAuMDg1djAuMTdjLTAuMDU4LDAtMC4xNDMsMC4wMjktMC4yNTUsMC4wODUNCgkJCWMtMC4zNDEsMC41NjctMC41NjgsMC44NTEtMC42ODEsMC44NTFjLTAuMDU4LDAuMDU4LTAuMDg1LDAuMzctMC4wODUsMC45MzdjMCwwLjA1NywwLjA1NiwwLjI3LDAuMTcsMC42MzgNCgkJCWMwLjExMiwwLjM2OSwwLjE3LDAuNTk2LDAuMTcsMC42ODFzMC4wMjgsMC4yODQsMC4wODUsMC41OTVjMC4wNTYsMC4zMTIsMC4wODUsMC41MjUsMC4wODUsMC42MzlsMC4yNTYsMS4xMDUNCgkJCWMtMC4wNTgsMC4wNTgtMC4xMTUsMC4xNy0wLjE3MSwwLjM0MWwwLjA4NSwwLjQyNWMwLjA1NywwLjM0MSwwLjA4NiwwLjU0LDAuMDg2LDAuNTk2YzAsMC4wNTcsMC4wNTYsMC4yNDIsMC4xNywwLjU1Mw0KCQkJYzAuMTEyLDAuMzEyLDAuMTcsMC41MjUsMC4xNywwLjYzOGwwLjU5NiwxLjEwNmwwLjU5NSwwLjUxYzAsMC4wNTgsMC4xNDIsMC4zNywwLjQyNiwwLjkzN2MwLjM0LDAuNzM3LDAuNDgxLDEuMTksMC40MjUsMS4zNg0KCQkJYzAsMC4wNTgtMC4xMTQsMC4xNDMtMC4zNCwwLjI1NmMtMC4yMjgsMC0wLjM5NywwLjAyOS0wLjUxMSwwLjA4NWMtMC4xNywwLjA1Ny0wLjY4LDAuNDgyLTEuNTMsMS4yNzVsLTEuNzAyLDAuOTM3DQoJCQljLTAuNjgxLDAuMzQtMS4wNSwwLjUzOS0xLjEwNSwwLjU5NWMtMC4wNTgsMC4wNTgtMC4yNDIsMC4yOTgtMC41NTMsMC43MjRjLTAuMzEyLDAuNDI1LTAuNDgyLDAuNjgxLTAuNTExLDAuNzY2DQoJCQljLTAuMDI5LDAuMDg1LTAuMjEzLDAuMzI3LTAuNTUzLDAuNzIzYy0wLjM0MSwwLjM5Ny0wLjU2NywwLjY4MS0wLjY4MSwwLjg1MWMtMC4xMTQsMC4xNy0wLjE5OSwwLjU0LTAuMjU1LDEuMTA2DQoJCQljLTAuMDU4LDAuNTY3LTAuMDg1LDAuOTA3LTAuMDg1LDEuMDIxYy0wLjIyOCwwLjY4MS0wLjM0MSwxLjEwNS0wLjM0MSwxLjI3NWMwLDAuMTcxLTAuMjQyLDAuNjI1LTAuNzIzLDEuMzYxDQoJCQljLTAuNDgyLDAuNzM4LTAuNzI0LDEuMTYzLTAuNzI0LDEuMjc2Yy0wLjM5NywwLjkwNy0wLjYyNCwxLjQ2MS0wLjY4MSwxLjY1OGMtMC4wNTcsMC4yLTAuMTk5LDAuNzgtMC40MjUsMS43NDQNCgkJCWMtMC4yMjgsMC45NjUtMC4zNDEsMS41MDMtMC4zNDEsMS42MTZjMCwwLjExNC0wLjEyNywwLjU2Ny0wLjM4MywxLjM2MWMtMC4yNTUsMC43OTUtMC40MTEsMS4yNzYtMC40NjgsMS40NDZsMC4wODYsMS43MDENCgkJCWMtMC41MTEsMC4zOTctMC43NjYsMC42ODEtMC43NjYsMC44NTFjMCwwLjA1Ny0wLjEwMSwwLjMyNy0wLjI5OCwwLjgwOWMtMC4xOTksMC40ODItMC4zMjcsMC43NzktMC4zODMsMC44OTMNCgkJCWMtMC4xNywwLjE3LTAuMTcsMC42MjUsMCwxLjM2MWMwLDAuMDU3LDAuMDg1LDAuMTE0LDAuMjU1LDAuMTdjMC4xNywwLjA1OCwwLjMyNSwwLjEsMC40NjgsMC4xMjgNCgkJCWMwLjE0MSwwLjAyOSwwLjI2OSwwLjA0MiwwLjM4MywwLjA0MmMtMC4wNTcsMC4wNTgtMC4yODQsMC4yMTMtMC42ODEsMC40NjhjLTAuMzk3LDAuMjU2LTAuODIyLDAuNTExLTEuMjc1LDAuNzY2DQoJCQljLTAuNDU1LDAuMjU2LTAuNzEsMC40MTItMC43NjYsMC40NjhjLTAuMzk3LDAuMjI4LTEuMTM2LDEuMDc4LTIuMjEyLDIuNTUzYy0wLjM0MSwwLjUxLTAuNTExLDEuMzktMC41MTEsMi42MzcNCgkJCWMwLDAuMjI4LTAuMDI5LDAuODUxLTAuMDg1LDEuODcxYy0wLjA1NywwLjE3MS0wLjA3MSwwLjUyNS0wLjA0MiwxLjA2M2MwLjAyNywwLjU0LDAuMDQyLDAuOTc5LDAuMDQyLDEuMzE4DQoJCQljMC4wNTYsMC4xNzEsMC4xNTUsMC43NjYsMC4yOTgsMS43ODdjMC4xNDEsMS4wMjEsMC4yNCwxLjY0NiwwLjI5OCwxLjg3MWMwLjIyNiwwLjM5NywwLjQyNSwxLjI0OCwwLjU5NiwyLjU1Mg0KCQkJYzAuMDU2LDAuMDU4LDAuMTEyLDEuMjMzLDAuMTcsMy41M2MwLjA1NiwyLjI5NywwLjE3LDMuNjQ1LDAuMzQsNC4wNDFjMC4wNTYsMC4zNCwwLjEyOCwwLjc5NSwwLjIxMywxLjM2MQ0KCQkJYzAuMDg1LDAuNTY3LDAuMTcsMS4wOTIsMC4yNTUsMS41NzNjMC4wODUsMC40ODIsMC4xMjgsMC43OCwwLjEyOCwwLjg5NGMwLjA1NiwwLjE3LDAuMDE0LDAuNDU0LTAuMTI4LDAuODUxDQoJCQljLTAuMTQyLDAuMzk3LTAuMjEyLDAuNjUyLTAuMjEyLDAuNzY2bC0wLjA4NiwxLjQ0NmMwLjIyNywwLjM0LDAuMzY5LDAuNTM5LDAuNDI2LDAuNTk1Yy0wLjM5NywwLjUxMS0xLjA3OCwxLjA1MS0yLjA0MiwxLjYxNg0KCQkJYy0wLjM5NywwLjM0MS0wLjc2NiwwLjU2OC0xLjEwNSwwLjY4MWwtMS45NTYsMS4yNzZsLTAuMDg2LDEuNTMxYzAuMDU3LDAuMjI4LDAuNzY2LDAuNTk2LDIuMTI3LDEuMTA1DQoJCQljMS43MDEsMC42ODEsMy4yNjEsMC44NTEsNC42NzksMC41MTFjMS4xMzQtMC4yMjcsMi42MzctMC45NjQsNC41MDktMi4yMTJjMC4xNy0wLjE3LDAuNzA4LTAuMzk2LDEuNjE2LTAuNjgxDQoJCQljMC45MDYtMC4yODMsMS4zODktMC40NTMsMS40NDYtMC41MWwxLjAyMS0wLjg1MmwtMC4xNy0xLjM2aC0wLjA4NWMwLTAuMzk2LTAuMTcxLTEuMTA2LTAuNTExLTIuMTI3bC0wLjE3LTAuMzQNCgkJCWMtMC4wNTgtMC4yMjctMC4wODUtMC4zOTYtMC4wODUtMC41MTFsLTAuMDg2LTAuNDI2Yy0wLjExMy0wLjI4Mi0wLjE4NS0wLjQ2OC0wLjIxMi0wLjU1M2MtMC4wMjktMC4wODUtMC4wNDMtMC4zMjUtMC4wNDMtMC43MjMNCgkJCXYtMC42ODFjLTAuMTctMC42ODEtMC4yNTUtMS4xMzQtMC4yNTUtMS4zNjF2LTAuNjgxYzAuMDU2LTAuNDUzLDAuMDg1LTAuNzA4LDAuMDg1LTAuNzY2YzAtMC4zOTYtMC4wMjktMS4xMzQtMC4wODUtMi4yMTF2LTEuMTA2DQoJCQlsMC4wODUtMC44NTFjMC0xLjg3MSwwLjA1Ni0yLjg2MywwLjE3LTIuOTc4di0xLjgyOGMwLTAuODc5LTAuMDU3LTEuMzc1LTAuMTctMS40ODljLTAuMTctMC41NjYtMC4yNTUtMS4yNDctMC4yNTUtMi4wNDENCgkJCWMwLTAuMDU3LDAuMTctMC4yNTYsMC41MS0wLjU5NmMwLjA1Ny0wLjA1NiwwLjExMy0wLjExMywwLjE3LTAuMTd2LTEuMTkxYzAuMDU3LTAuMDU2LDAuMTcxLTAuMDg1LDAuMzQxLTAuMDg1aDEuMTkNCgkJCWMwLjE3MS0wLjA1NiwwLjQyNi0wLjE1NSwwLjc2Ni0wLjI5OGMwLjM0MS0wLjE0MSwwLjUzOS0wLjIxMywwLjU5Ni0wLjIxM2gxLjM2MWwxLjAyMS0wLjI1NWwtMC42ODEsMjIuNzEzDQoJCQljMC4yMjcsMC4xNywwLjQ1MywwLjI1NSwwLjY4MSwwLjI1NWgwLjQyNmMxLjA3Ni0xMS4xNzIsMS43ODYtMTguMjYsMi4xMjYtMjEuMjY3bDAuNDI2LDAuMzQxbDAuMTcsMTMuNjk1DQoJCQljMC4xNywwLjE3LDAuMzQxLDAuMjU1LDAuNTExLDAuMjU1bDAuNDI1LTAuMjU1bDAuNzY2LTEyLjU5YzAuMjI3LDAuNTY3LDAuMzk2LDAuOTA4LDAuNTExLDEuMDIxbC0wLjA4NSwwLjY4MQ0KCQkJYy0wLjExNCwwLjUxMS0wLjE3LDAuODUxLTAuMTcsMS4wMjFjMC4xNywwLjczOCwwLjQ1MywxLjUwNCwwLjg1MSwyLjI5N3YxLjg3MmMwLDEuMTksMC4wMjcsMS44NDQsMC4wODUsMS45NTYNCgkJCWMwLjE3LDEuOTI5LDAuMjU1LDMuMzQ3LDAuMjU1LDQuMjU0djUuNzg0Yy0wLjA1NywwLjA1Ny0wLjI3LDAuMzI3LTAuNjM4LDAuODA4Yy0wLjM2OSwwLjQ4My0wLjYxLDAuODY1LTAuNzI0LDEuMTQ4DQoJCQljLTAuMDU3LDAuMjg1LDAuMTEzLDAuOTkzLDAuNTExLDIuMTI3YzAuMDU2LDAuMjI4LDAuMDk5LDAuNDU1LDAuMTI4LDAuNjgxYzAuMDI3LDAuMjI4LTAuMDE1LDAuNDI1LTAuMTI4LDAuNTk2djAuMzRsMC41OTYsMC4xNw0KCQkJYy0wLjA1OCwwLjIyOC0wLjA4NSwwLjQ1NS0wLjA4NSwwLjY4MWMwLDAuMDU4LTAuMSwwLjI4NC0wLjI5OCwwLjY4MWMtMC4xOTksMC4zOTctMC40NCwwLjc4LTAuNzI0LDEuMTQ4DQoJCQljLTAuMjg0LDAuMzY5LTAuNDgyLDAuNjEtMC41OTUsMC43MjNjLTAuNTY3LDEuMDc4LTAuOTM2LDEuNjE2LTEuMTA2LDEuNjE2djAuMTcxYy0wLjA1NywwLjExNC0wLjE0MiwwLjE3LTAuMjU1LDAuMTcNCgkJCWMtMC41MTEsMC4yMjgtMC43MzcsMC41MTEtMC42ODEsMC44NTFsLTAuMjU1LDEuODcxYzAuMDU2LDAuMTcxLDAuNTIzLDAuMzU0LDEuNDAzLDAuNTU0YzAuODc5LDAuMTk3LDEuNDMyLDAuMjk3LDEuNjU5LDAuMjk3DQoJCQljMC4wNTYsMCwwLjY5MywwLjA1NywxLjkxNCwwLjE3MWMxLjIxOSwwLjExMiwyLjA1NSwwLjE3LDIuNTA5LDAuMTdjMC43OTQsMCwxLjcyOS0wLjM5NywyLjgwOC0xLjE5MQ0KCQkJYzAuNTEtMC4zOTcsMC45OTEtMS4yMTksMS40NDYtMi40NjdsMC4xNy0wLjI1NWwwLjUxMS0wLjUxMWMwLjE3LTAuMjI2LDAuMzExLTAuMzk2LDAuNDI1LTAuNTFsMC41MTEtMS4zNjFsLTAuMjU2LTEuMTA2aC0wLjI1NQ0KCQkJbC0wLjM0LTEuNzAxYzAuMDU2LTAuMzk2LDAuMDg1LTAuNjUxLDAuMDg1LTAuNzY2bDAuMzQtMC44NTFjMC4yODMtMC41NjYsMC40MjYtMC45MDYsMC40MjYtMS4wMjENCgkJCWMwLTAuMTEzLTAuMDQzLTAuMzExLTAuMTI4LTAuNTk2Yy0wLjA4NS0wLjI4My0wLjEyOC0wLjQ4LTAuMTI4LTAuNTk2di0xLjM2bDAuMDg2LTIuMzgyYzAtMC4wNTYtMC4wNTgtMC4yODMtMC4xNzEtMC42ODENCgkJCWMtMC4xMTQtMC4zOTYtMC4xOTktMC42NTEtMC4yNTUtMC43NjZjLTAuMDU4LTAuMTEzLDAtMC41MjMsMC4xNy0xLjIzM2MwLjE3LTAuNzA5LDAuMjU2LTEuMDc3LDAuMjU2LTEuMTA2DQoJCQljMC0wLjAyNywwLjA3LTAuNDEsMC4yMTItMS4xNDdzMC4yMTMtMS4xOTEsMC4yMTMtMS4zNjFzMC4wMTQtMC40NjgsMC4wNDMtMC44OTRjMC4wMjctMC40MjUsMC4wNTYtMC44OTMsMC4wODUtMS40MDMNCgkJCWMwLjAyNy0wLjUxMSwwLjA0Mi0wLjc5NCwwLjA0Mi0wLjg1MXYtMy4yMzJjMC0wLjA1NiwwLjA0My0wLjI1NiwwLjEyOC0wLjU5NmMwLjA4NS0wLjM0MSwwLjEyOC0wLjU2NiwwLjEyOC0wLjY4MWwtMC4yNTYtMS4zNjENCgkJCWMwLjA1Ni0wLjUxLDAuMTQyLTAuODc4LDAuMjU2LTEuMTA1YzAtMC4wNTYsMC4wMjctMC4yNTUsMC4wODUtMC41OTZjMC4wNTYtMC4zNCwwLjA4NS0wLjU2NiwwLjA4NS0wLjY4MQ0KCQkJYzAtMC4wNTYtMC4xNy0wLjM2OC0wLjUxMS0wLjkzNmwwLjI1NS0wLjM0YzAuMTcxLTAuMDU2LDAuMjU2LTAuMTQyLDAuMjU2LTAuMjU2bDAuNTk2LTAuNTFjMC4xNy0wLjA1NiwwLjM2OC0wLjE3LDAuNTk1LTAuMzQxDQoJCQlsNS4wMiwwLjI1NmMwLjM0LDAuMTcsMC41OTUsMC4yODQsMC43NjYsMC4zNGwwLjM0LDAuNTExYzAuNjgxLDE0LjkxNiwxLjA0OSwyMi40ODYsMS4xMDUsMjIuNzEybDAuOTM3LTAuMDg1bDAuNjgxLTI1LjY4OQ0KCQkJTDQyNy44NzcsMjEyeiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="teehan+lax logo svg" />'
---
This type of navigation was first seen on the [Teehan+Lax](http://www.teehanlax.com) website, then it became quite popular and got adopted by several other websites ([MailChimp](http://mailchimp.com), [Wunderlist](https://www.wunderlist.com/)). The navigation bar works as follows: it’s being hidden once you start scrolling. As soon as you scroll up a few pixels it is shown. After that, when you scroll down again it gets hidden. When you have reached the bottom of the page the navigation bar reappears.
<!--more-->

I saw it first, a couple of months ago, on [Teehan+Lax](http://www.teehanlax.com). Since then, I have been waiting for a good out-of-the-box coded solution that would replicate this functionality to come out. But it didn’t, so I coded my own by reverse-engineering Teehan+Lax’s navigation. I’ll be using this solution for the redesign of this site (coming soon, hopefully).

## Making it better
On top of the basic functionality that can be found on Teehan+Lax’s navigation, I coded a better version:

* Enabled navigation only with a keyboard (Tab + Enter/Space).
* Added keyboard shortcuts (Esc / M).
* Fixed Firefox animation bugs.
* Added functionality to close navigation if you click anywhere outside link area.

<a href="http://lab.alexcican.com/teehan_lax_navigation/" class="button" target="_blank">View the Demo &rarr;</a>

## Step 1 - HTML

We need some HTML code for the navigation. The navigation bar, `.site-width` (what is visible by default) is separated from the dropdown `#navigation`:

    <nav>
      <div class="site-width">
        <a href="http://twitter.com/alexcican" target="_blank">Alex Cican</a>
        <span class="menu icon" title="Menu (Esc)" tabindex="0" data-icon="m"><span>Menu</span></span>
      <div>

      <div id="navigation">
        <ul>
          <li><span>The man behind this site</span><a href="#" class="about" title="About me">About me</a></li>
          <li><span>Pretty things I made</span><a href="#" class="portfolio" title="My Portfolio">My Portfolio</a></li>
          <li><span>Cool stories I wrote</span><a href="#" class="blog" title="My Blog">My Blog</a></li>
          <li><span>Experiments I conducted</span><a href="#" class="labs" title="My Lab">My Lab</a></li>
          <li><span>Where you can find me</span><a href="#" class="contact" title="Contact Me">Contact Me</a></li>
        </ul>
      </div>
    </nav>

## Step 2 - JavaScript

The logic behind the functionality is simple. Once the user has scrolled past the navigation, if they scroll back up, we show the navigation with a `position:fixed` so that it stays fixed on the screen.

We need three states for the navigation: *'invisible'*, *'detached'*, and *'expanded'*. The navigation becomes 'invisible' once you scroll past it. If you scroll back up we show a nice drop animation. If you scroll beyond a certain point, the navigation becomes 'detached', i.e. fixed on the screen. If you scroll back up the navigation will show the nice drop animation but because of the `.detached` class, only a few pixels above instead of at the beginning of the site. Lastly, if the dropdown is shown, the navigation has an `.expanded` class.

To achieve that we need four variables:

    var previousScroll = 0, // previous scroll position
        menuOffset = 54, // height of menu (once scroll passed it, menu is hidden)
        detachPoint = 650, // point of detach (after scroll passed it, menu is fixed)
        hideShowOffset = 6; // scrolling value after which triggers hide/show menu

Don’t make the `detachPoint` value too small, because if the user scrolls fast, the class `.detached` will be added before having the chance to hide the navigation, resulting in a show/hide flicker of the navigation.

We’ll write efficient code. On scroll, only if the navigation is not shown we’ll compute its position and whether it will have `position:fixed` or not.

    // on scroll hide/show menu
    $(window).scroll(function() {
      if (!$('nav').hasClass('expanded')) {
    })

Inside the `else {}` we need to calculate if the user scrolled past the navigation’s height, if they scrolled past the `detachPoint`, if they’re scrolling up or down, how fast they’re scrolling, and if they are at the bottom of the site (we’ll show navigation again):

    var currentScroll = $(this).scrollTop(), // gets current scroll position
        scrollDifference = Math.abs(currentScroll - previousScroll); // calculates how fast user is scrolling

    // if scrolled past menu
    if (currentScroll > menuOffset) {
      // if scrolled past detach point add class to fix menu
      if (currentScroll > detachPoint) {
        if (!$('nav').hasClass('detached'))
          $('nav').addClass('detached');
      }

      // if scrolling faster than hideShowOffset hide/show menu
      if (scrollDifference >= hideShowOffset) {
        if (currentScroll > previousScroll) {
          // scrolling down; hide menu
          if (!$('nav').hasClass('invisible'))
            $('nav').addClass('invisible');
        } else {
          // scrolling up; show menu
          if ($('nav').hasClass('invisible'))
            $('nav').removeClass('invisible');
        }
      }
    } else {
      // only remove “detached” class if user is at the top of document (menu jump fix)
      if (currentScroll <= 0){
        $('nav').removeClass();
      }
    }

    // if user is at the bottom of document show menu
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $('nav').removeClass('invisible');
    }

    // replace previous scroll position with new one
    previousScroll = currentScroll;

Next we need a function to check if we’re showing or hiding the dropdown of the navigation:

    // checks if navigation’s popover is shown
    function showHideNav() {
      if ($('nav').hasClass('expanded')) {
        hideNav();
      } else {
        showNav();
      }
    }

Next we create functions to show or hide the navigation dropdown. We a add class to the navigation, another class to the content (to blur it), and a class to the body in order to disable scrolling of the content whilst the navigation’s dropdown is shown. We add a delay to this because of Firefox, when the class is added, the dropdown animation is not shown.

Lastly, you should be able to navigate with the TAB key on your keyboard. We don’t want the user to select the links with the TAB key when the navigation is hidden:

    // shows the navigation’s popover
    function showNav() {
      $('nav').removeClass('invisible').addClass('expanded');
      $('#container').addClass('blurred');
      window.setTimeout(function(){$('body').addClass('no_scroll');}, 200); // Firefox hack. Hides scrollbar as soon as menu animation is done
      $('#navigation a').attr('tabindex', ''); // links inside navigation should be TAB selectable
    }

    // hides the navigation’s popover
    function hideNav() {
      $('#container').removeClass('blurred');
      window.setTimeout(function(){$('body').removeClass();}, 10); // allow animations to start before removing class (Firefox)
      $('nav').removeClass('expanded');
      $('#navigation a').attr('tabindex', '-1'); // links inside hidden navigation should not be TAB selectable
      $('.icon').blur(); // deselect icon when navigation is hidden
    }

Now we just need to define when to show the dropdown and when to hide it (clicking/tapping anywhere outside link area). To disable hiding the navigation when you click/tap inside the link area (say you select some text), we need to `stopPropagation()`:

    // shows/hides navigation’s popover if class "expanded"
    $('nav').on('click touchstart', function(event) {
      showHideNav();
      event.preventDefault();
    })

    // clicking anywhere inside navigation or heading won’t close navigation’s popover
    $('#navigation').on('click touchstart', function(event){
        event.stopPropagation();
    })

Lastly, we add the possibility to navigate with the keyboard. If the menu icon is focused and you press Enter/Space then we show the navigation’s dropdown. If you press Esc or M we do the same thing.

    // keyboard shortcuts
    $('body').keydown(function(e) {
      // menu accessible via TAB as well
      if ($("nav .icon").is(":focus")) {
        // if ENTER/SPACE show/hide menu
        if (e.keyCode === 13 || e.keyCode === 32) {
          showHideNav();
          e.preventDefault();
        }
      }

      // if ESC show/hide menu
      if (e.keyCode === 27 || e.keyCode === 77) {
        showHideNav();
        e.preventDefault();
      }
    })

## Step 3 CSS
I won’t go too deep into styling the navigation. You can browse through the [CSS code on GitHub](https://github.com/alexcican/lab/blob/gh-pages/teehan_lax_navigation/style.css). The most important styles you need are for the three states of the navigation: *invisible*, *detached*, and *expanded*.

    nav {
      color: #333;
      position: absolute;
      top: 0;
      width: 100%;
      height: 46px;
      padding-top: 8px;
      right: 0;
      z-index: 1000;
      cursor: pointer;
      overflow: hidden;
      -webkit-transform: translate(0,0);
      -moz-transform: translate(0,0);
      -o-transform: translate(0,0);
      transform: translate(0,0);
      -webkit-transition: -webkit-transform .4s, height .3s, background .4s;
      -moz-transition: -moz-transform .4s, height .3s, background .4s;
      transition: transform .4s, height .3s, background .4s;
    }

    /* when hidden it goes up */
    nav.invisible {
      -webkit-transform: translate(0,-64px);
      -moz-transform: translate(0,-64px);
      -o-transform: translate(0,-64px);
      transform: translate(0,-64px);
      -webkit-transition: -webkit-transform .2s;
      -moz-transition: -moz-transform .2s;
      -o-transition: -o-transform .2s;
      transition: transform .2s;
      opacity: 0;
    }

    /* when shown & detached position is fixed */
    nav.detached {
      position: fixed;
      background: rgba(255,255,255,.9);
      -webkit-transition: -webkit-transform .3s, height .3s, background .4s, opacity .3s;
      -moz-transition: -moz-transform .3s, height .3s, background .4s, opacity .3s;
      -o-transition: -o-transform .3s, height .3s, background .4s, opacity .3s;
      transition: transform .3s, height .3s, background .4s, opacity .3s;
    }

    /* increases menu width & height */
    nav.expanded {
      width: 100%;
      height: 100%;
      position: fixed;
      cursor: default;
      background: rgba(255,255,255,.85);
    }

    /* positions navigation content */
    #navigation {
      -webkit-transform: translate(0,-700px);
      -moz-transform: translate(0,-700px);
      -o-transform: translate(0,-700px);
      transform: translate(0,-700px);
      opacity: 0;
      padding-top: 2em;
      text-align: center;
      -webkit-transition: -webkit-transform .15s, opacity .7s;
      -moz-transition: -moz-transform .15s, opacity .7s;
      -o-transition: -o-transform .15s, opacity .7s;
      transition: transform .15s, opacity .7s;
    }

    /* shows navigation */
    nav.expanded #navigation {
      -webkit-transform: translate(0,0);
      -moz-transform: translate(0,0);
      -o-transform: translate(0,0);
      transform: translate(0,0);
      opacity: 1;
    }

Find the rest of the [CSS code on GitHub](https://github.com/alexcican/lab/blob/gh-pages/teehan_lax_navigation/style.css).

## Conclusion

It’s fairly straightforward to create a navigation like Teehan+Lax have. Where you need to pay attention is on the timing of the animations. We don’t want to annoy the user, rather delight them and improve their experience.