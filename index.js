// variables containing required package
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// variable to connect module to application
const generateMarkdown = require("./utils/generateMarkdown");

// // allows for use of async await
// const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [


    {
        type: 'input',
        message: 'What is your name?',
        name: 'Name',
      },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'Username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'Email',
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title',
      },
      {
          type: 'input',
          message: 'Please write a short description of your project',
          name: 'Description',
        },
        {
          type: 'input',
          message: 'What kind of license should your project have?',
          name: 'License',
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
          name: 'Usage',
        },
        {
            type: 'input',
            message: 'What command should be run to install tests?',
            name: 'Tests',
          },
          {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'Repo',
          },
          {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'Contributing',
          },

];


// function to write README file
function writeToFile(data) {
    fs.writeFile("genREADME.md", generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("README page has been generated.")
    })
}

// function to initialize program
function init() {

    inquirer.prompt (questions).then ((responses) => {
        console.log(responses);
        writeToFile(responses);
    });



}

// function call to initialize program
init();
