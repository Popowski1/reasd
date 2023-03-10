// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` 
  # ${data.title}

  ## Description
  ${data.description}

   ## Table of contents
   ~ [Installation](#Installation)
   ~ [Usage](#Usage)
   ~ [Contribution](#contribution)
   ~[Tests](#tests)

   ## Installation
   ${data.installation}

   ## Usage
   ${data.Usage}

   ## Contribution
   ${data.contribution}

   ## Tests
   ${data.tests}

   ## Questions
   Questions ? Hml @
   Github: https://github.com//${data.githubuser}
   Email: ${data.email}
`;
}

module.exports = generateMarkdown;
