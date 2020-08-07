This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project root directory, you can run:

### `npm run install`

To run the app, you can run:

### `npm run start`

To run the unit tests, you can run:

### `npm run test`

The testing was focused around the api, render text _before_ fetching data and a simple router check to make sure it is populating the link correctly.

The first you run the test you will be prompted with a Terminal screen where you should press `a` to *run all tests* which should invoke the `App.test.js` file

### Approach

Although I might not have a ton of React experience I think I got it working in an efficient and effective manner. The API layer is abstracted to keep the actions clean and easy to understand.

Components are split with the idea to easily reuse anywhere, same with CSS styling and making use of SCSS variables.

The site is live and connected to Netlify too, so any changes on master branch will auto deploy to Netlify here: https://phil-rebels.netlify.app/