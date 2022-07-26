// List of packages
const generateMarkdown = ('./utils/generateMarkdown.js');
// Return license badge
// Returns empty string if no license available
function renderLicenseBadge(license) {
  if (license == 'no license found')
  return `https://img.shields.io/badge/<LABEL>-${license}-red>`;
  else {
    return '';
  }
}

// Retunr license link, and empty string if no license available
function renderLicenseLink(license) {
  if (license == 'no license found') {
    return 'https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba';
  }
  else {
    return '';
  }
}

// Returns license section of ReadMe
function renderLicenseSection(license) {
  if (license == 'no license found') {
    return `## [License](#table-of-contents)

    the following license is already rendered: ${renderLicenseLink}`


  }
}

// Should generate markdown for ReadMe
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
`;
}

module.exports = generateMarkdown;
