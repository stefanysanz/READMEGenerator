const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project."
  },
  {
    type: "input",
    name: "contribution",
    message: "Who contributed to your app?"
  },
]
// function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then(res =>{
      let 
    })

}

// function call to initialize program
init();
