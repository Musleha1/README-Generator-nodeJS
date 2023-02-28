// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ![Project License](https://img.shields.io/badge/license-${data.License}-yellow.svg)

`;
}

module.exports = generateMarkdown;
