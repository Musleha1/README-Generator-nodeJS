// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ![Project License](https://img.shields.io/badge/license-${data.License}-yellow.svg)

______________________________________________________________________________________

## Description

${data.Description}

______________________________________________________________________________________

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

_______________________________________________________________________________________

## Installation

To install necessary dependencies, run the following command: ${data.Installation}

_______________________________________________________________________________________

## Usage

${data.Usage}

_______________________________________________________________________________________

## License

This project is licensed under the ${data.License} license.

________________________________________________________________________________________

## Contributing

${data.Contributing}

________________________________________________________________________________________

## Tests

To run tests, run the following command: ${data.Tests}

________________________________________________________________________________________

## Questions

Have questions about this project? 

### Contact information:

* Github: ${data.Github}
* Email: ${data.Email}

`;
}

module.exports = generateMarkdown;


