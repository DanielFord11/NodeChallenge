// TODO: Create a function that returns the license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // TODO: Implement logic to return the license badge based on the provided license
  // Return an empty string if there is no license
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // TODO: Implement logic to return the license link based on the provided license
  // Return an empty string if there is no license
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // TODO: Implement logic to return the license section based on the provided license
  // Return an empty string if there is no license
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, contact me through:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
