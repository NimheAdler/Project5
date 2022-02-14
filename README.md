# Udacity Front End Web Developer Nanodegree Program. Project 5.
## Travel App.

The goal for this project is to put all of the skills we have learned during the course building our own custom travel app.
The project includes a simple form where the users can enter the location they are traveling to and the date they are leaving. Because of that this project requires us to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

### This project showcases the following front-end dev skills:
 - Use of **Express** as a back-end framework.
 - Use of **Fetch API** for web requests.
 - Use of **Webpack** module bundler as a build tool, in concert with the following plugins:
   - **Babel**, to translate ES6 JavaScript into vanilla JS compatible with any browser.
   - **Loaders**, to translate **Sass** stylesheets into vanilla CSS.
   - **Minimizers**, to reduce file sizes of built assets for browser optimization.
   - **Webpack Dev Server**, to view live updates during development.
   - **dotenv**, to keep private information (like API keys) hidden from client view in production.

## Dependencies
- @babel/runtime
- body-parser
- cors
- dotenv
- express
- form-data
- node-fetch

## Developer Dependencies
- @babel/core
- @babel/plugin-transform-runtime
- @babel/preset-env
- babel-loader
- css-loader
- css-minimizer-webpack-plugin
- html-webpack-plugin
- jest
- mini-css-extract-plugin
- node-sass
- sass-loader
- style-loader
- terser-webpack-plugin
- webpack
- webpack-cli
- webpack-dev-server
- workbox-webpack-plugin

## Installation instructions
1. Clone the repository in Project 5 at https://github.com/NimheAdler.
2. Install the dependencies
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run `npm install`

3. Sign up for the required API keys at:
	- [Geonames](http://www.geonames.org/export/web-services.html).
	- [Weatherbit](https://www.weatherbit.io/account/create).
	- [Pixabay](https://pixabay.com/api/docs/).

4. Configure environment variables using the dotenv package
	- Create a new `.env` file in the root folder of your project
	- Store the API keys in the `.env` file like this:
	```
	API_KEY=**************************
	```
5. Build project
	- Open a terminal or command prompt
	- Navigate to the project root folder
	- Run the command `npm run build`

6. Start the server
	- Run the command `npm run start`
7. Open the browser at http://localhost:8081/
