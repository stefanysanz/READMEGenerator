const fs = require("fs");
const inquirer = require("inquirer");

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
    name: "license",
    message: "What license do you want to use?\n1) MIT\n2) GNU\n3) Apache\n4) None\nEnter a number:"
  },
  {
    type: "input",
    name: "Title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project."
  },
  {
    type: "input",
    name: "Usage",
    message: "How does one use your app?"
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to your app?"
  },
  {
    type: "input",
    name: "Tests",
    message: "How does one test your app?"
  },
  {
    type: "input",
    name: "Installation",
    message: "How does one use your app?"
  },
]
// writes the README
function writeToFile(fileName, data) {
  console.log("generating README...")
  let file = "";
  let license = "This code is protected by the ";
  switch (data.license) {
    case "1":
      file += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      license += "MIT license.";
      break;
    case "2":
      file += "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      license += "GNU license.";
      break;
    case "3":
      file += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      license += "Apache license.";
      break;
    default:
      license = "This code is not protected by a license."
  }
  file = addToFile(file, "Title", data.Title);
  file = addToFile(file, "Description", data.Description);
  file = addToFile(file, "Table of Contents", "[Installation](#installation)\n[Usage](#usage)\n[License](#license)\n[Contributing](#contributing)\n[Tests](#tests)\n[Questions](#questions)");
  file = addToFile(file, "Installation", data.Installation);
  file = addToFile(file, "Usage", data.Usage);
  file = addToFile(file, "License", license);
  file = addToFile(file, "Contributing", data.Contributing);
  file = addToFile(file, "Tests", data.Tests);
  file = addToFile(file, "Questions", "Github Profile: https://github.com/" + data.github + "\nEmail: " + data.email);
  fs.writeFile("MY_README.md", file, "utf8", writeComplete);
}

function addToFile(file, title, info) {
  let hash = "";
  if (title == "Title") {
    hash = "# ";
  } else {
    hash = "## ";
  }
  file += hash + title + "\n";
  file += info + "\n\n";
  return file;
}

// callback for when the file is written
function writeComplete(err) {
  console.log("README generated");
}

// initializes the program
function init() {
  inquirer.prompt(questions)
    .then(res => {
      writeToFile("README2.md", res);
    });
}

init();
