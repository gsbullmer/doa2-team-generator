Duel of Ages 2: Team Generator
==============================

The Purpose of this project is to
- [ ] Learn the basics of using git and github
- [ ] Learn higher level JavaScript programming
- [ ] Make a cool app!

This application is a team building application for the tabletop game [Duel of Ages II](http://www.duelofages.com). Once everyone has decided on the scenario that they want to play in, you can configure this tool to generate teams based on that criteria. You can configure the following options with this application:

Team Setup
--------
- Number of Teams
- Characters Per Team
- Draft Type
- Extra Characters

Session Settings
----------------
- Game Sets Available (Basic or Master)
- Available Ages
- Available Settings
- Available Circles
- Available Natures

Once you have configured your settings for how you want to play this round, click the 'Draft Teams' button. The app will do the rest: assigning you and the other players characters from the available pool. You will get a list of the charcter's name and id number to help you locate their corresponding card and token.

Development Setup
=================
If you're interested in contributing to this project, here is how to get started and get setup.

Requirements
------------
To develop in this manner there are a couple of libraries that you should have installed on you development machine.
- [node.js](http://nodejs.org) and [NVM](http://www.npmjs.org)
- Build tools installed globally `npm install -g grunt bower`
  - [Grunt](http://gruntjs.com)
  - [Bower](http://bower.io)

Getting Started
---------------
Here's your initial setup. It is a good practice to follow these steps every time you begin development, as dependencies may change or get updated. This will ensure you have the latest repositories, and will alert you in development if a dependency breaks your build.

1. Open your terminal and browse to the root of this project.
2. Install your grunt dependencies: `npm install`
3. Install your JavaScript Library dependencies: `bower install`

Building your code
------------------
If you tried to load the application and you got a message that build tools haven't been run yet. That means that this step has been skipped. Here's how to produce your code and create a usable application.

1. Open your terminal and browse to the root of this project.
2. Run Grunt. Note: Depending on what type of environment you are building for, you need to pass a different parameter to grunt
```
grunt build[:ENVIRONMENT]
```
Possible environments include:
- `dev` - **Default:** If no build parameter is passed grunt will automatically build for development. CSS and JS will not be minified for debugging purposes
- `production` - CSS and JS are minified. JS is uglified.