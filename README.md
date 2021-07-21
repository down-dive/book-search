# Book Search

## Description

This application uses Google Books API to search for books and enables users to save the results under their own accounts.

## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Tasks List](#tasks-list)
* [Screenshots](#screenshots)
* [Available Scripts](#available-scripts)
* [Learn More](#learn-more)
* [Deployed Application](#deployed-application)
* [Questions](#questions)

## Technologies

* React
* GraphQL
* JSON Web Token (JWT)
* Apollo Server and Provider
* Google Books API
* Node
* Express

## Tasks List

In this project I have done the following changes in the existing code of book-search application:

- [x] Setting up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

- [x] Modifying the existing authentication middleware so that it works in the context of a GraphQL API.

- [x] Creating an Apollo Provider so that requests can communicate with an Apollo Server.

- [x] Deploying the application to Heroku.

## Screenshots

Please see below animations for different sections of this application:

* As you can see in the following animation, a user can type a search term (in this case, "star wars") in a search box and the results appear:

![alt=homepage](./Develop/client/src/utils/videos/homepage.gif)

* The user can save books by clicking "Save This Book!" under each search result, as shown in the following animation:

![alt=saving-books](./Develop//client/src/utils/videos/saveBook.gif)


* A user can view their saved books on a separate page, as shown in the following animation:

![alt=view-saved-books](./Develop/client/src/utils/videos/viewSavedBooks.gif)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Deployed Application

Please use the following link to view the deployed application on Heroku: [Deployed App](https://blooming-basin-29879.herokuapp.com/)

## Questions

If you have any questions please use the following two links to contact me:

* [GitHub](https://github.com/down-dive)

* [Email Address](mailto:yterlyuk@gmail.com)
