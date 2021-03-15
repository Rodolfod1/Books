# Google_Book_Search

Full Stack `MERN` application for book searches



#### Link to deployed app
 <https://booksrdiaz.herokuapp.com/>
   
MIT<br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## About this application:
`MERN`, full stack application, using `googlebooks` API.

## Table of contents:
* [Google Book Search](#Google_Book_Search)
* [About](#about-this-application)
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
* [Testing](#special-testing-instructions)
* [In case of Questions](#in-case-of-questions)
* [Link to App](#Link-to-deployed-app)

# Usage:
    This  application can be used locally localhost:3000 or remotely since it is deployed on `heroku`.
    The user is presented with a home page where he can choose to search for a new book or to visit his library of previously saved books. 
    When searching for a new book either by author or title this api makes a call to Google Books API, and retrieves only the articles that are books; the front end presents a `REACT` application where the top 4 results are displayed on cards.
    The user can select the favorite book and save it to its personal library. 

    

- Here it is an example on how this application works:

![GoogleBookSearchDemo](client/public/BookSearch_App.gif)

---
## Installation:
### For Local Deployment: 
The application requires `bootstrap`, `axios`, `mongoose`, `express` and `react`  node packages.
a JSON file is provided with these dependencies please Run `npm install`  before executing `npm start`


### For Remote Deployment: 
Please "click" on this link to go the deployed  version of this app:

<https://booksrdiaz.herokuapp.com/>

## License
I have used the MIT license for this application see repository documentation.

<https://opensource.org/licenses/MIT>

## Testing
This can be manually tested or using any test tool


## In case of questions:
Please contact me at my e-mail: 
rodolfodzr@gmail.com

Follow me on Github
<https://github.com/Rodolfod1>
