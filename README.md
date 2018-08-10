# Description

This repo is intended as starter kit and boilerplate to quickly kick start a React (Redux) / NodeJS web application.
The aim is to not be particularly prescriptive or opinionated but offer a simple and clean way to getting a React Redux front-end environment paired with a NodeJS / Express API backend.

It does not use the absolute latest technologies on the market, in part to a protest about the endless churn in the Web Dev community.

I make no claim that this is perfect or complete in any way - it just works, and offers a way for myself to get on with my projects in a straight-forward way with no unnecessary extras piled on.

There are no tests yet - sorry! 

# Usage

Requires MongoDB to be running on your system / server - in order to persist session storage quickly and easily for your users.
Please install and run Mongo first before proceeding. If you don't need session storage, go ahead and delete this bit in `server/server.js` 

`npm install`

`gulp watch`

`node server/index.js`

Then navigate to `http://localhost:3000` which will serve files with `/dist/` as the root, via Express.

The example app will make a call to `/api/example` when the button is clicked - simply to demo a basic end-to-end system working. 

This project is basic, and not complete - it just helps to kick-start React Redux apps using a Node back-end. 
