// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ![Project License](https://img.shields.io/badge/license-${data.License}-yellow.svg)

## Description

${data.Description}

## Usage

${data.Usage}

`;
}

module.exports = generateMarkdown;
