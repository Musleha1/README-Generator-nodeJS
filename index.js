// variables containing required package
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");

// variable to connect module to application
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

    
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
          message: 'What are the installation instructions for your project?',
          name: 'Installation',
        },
        {
          type: 'input',
          message: 'What command should be run to install dependencies?',
          name: 'Usage',
        },
        {
          type: 'list',
          message: 'What kind of license should your project have?',
          name: 'License',
          choices: [
            "Apache",
            "Boost",
            "GNU_AGPLv3",
            "GNU_GPLv3",
            "GNU_LGPLv3",
            "MIT",
            "Mozilla",
          ],
        },
        {
          type: 'input',
          message: 'What does the user need to know about contributing to the repo?',
          name: 'Contributing',
        },
        {
            type: 'input',
            message: 'What command should be run to install tests?',
            name: 'Tests',
          },
          {
            type: 'email',
            message: 'What is your GitHub username?',
            name: 'Github',
          },
          {
            type: 'email',
            message: 'What is your email address?',
            name: 'Email',
          },
          

];


// function to write README file
function writeToFile(data) {
    fs.writeFile("genREADME.md", generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("Generating README...")
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
