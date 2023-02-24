// variables containing required package

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// variable to connect module to application
const generateMarkdown = require("./utils/generateMarkdown");

// allows for use of async await

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user

const questions = [


    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
      },
      {
          type: 'input',
          message: 'Please write a short description of your project',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What kind of license should your project have?',
          name: 'license',
          choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
          ],
        },
        {
          type: 'input',
          message: 'What command should be run to install dependencies?',
          name: 'dependencies',
        },
        {
            type: 'input',
            message: 'What command should be run to install tests?',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'repo',
          },
          {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing',
          },

];

const getHTML = (userInput) =>

  ` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${userInput.name}</h1>
      <p class="lead">I am from ${userInput.location}.</p>
      <h3>For more information <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${userInput.github}</li>
        <li class="list-group-item">LinkedIn: ${userInput.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
