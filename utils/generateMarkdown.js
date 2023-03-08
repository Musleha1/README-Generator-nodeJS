// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Project License](https://img.shields.io/badge/license-${data.license}-yellow.svg)

______________________________________________________________________________________

## Description

${data.description}

______________________________________________________________________________________

## Demonstration

Watch this demo to see the README Generator in action

_____________________________________________________________________________________

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

_______________________________________________________________________________________

## Installation

To install necessary dependencies, run the following command: ${data.installation}

_______________________________________________________________________________________

## Usage

${data.usage}

_______________________________________________________________________________________

## License

This project is licensed under the ${data.license} license.

________________________________________________________________________________________

## Contributing

${data.contributing}

________________________________________________________________________________________

## Tests

To run tests, run the following command: ${data.tests}

________________________________________________________________________________________

## Questions

Have questions about this project? 

### Contact information:

* Github: ${data.github}
* Email: ${data.email}

`;
}

module.exports = generateMarkdown;


