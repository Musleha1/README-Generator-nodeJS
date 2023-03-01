// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ![Project License](https://img.shields.io/badge/license-${data.License}-yellow.svg)

## Description

${data.Description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contribution](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

## Installation

${data.Installation}

## Usage

${data.Usage}

## License

This project is licensed under the ${data.License} license.

## Contributing

${data.Contributing}

## Tests

${data.Tests}

## Questions

${data.Questions}
${data.questions}

`;
}

module.exports = generateMarkdown;


