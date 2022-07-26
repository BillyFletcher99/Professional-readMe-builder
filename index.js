// List of packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = ('./utils/generateMarkdown.js');
//Question array for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Needed)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please pick a title for project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username? (Needed)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter Github username');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Needed)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a valid email address');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is the projects purpose? (Needed)',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log('Please enter reason for project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide a clear path to installing the project. (Needed)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please list instructions for download');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['BSD', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Please provide guidelines for contributing. (Needed)',
        when: ({ confirmContributers }) => {
            if (confirmContributers) {
                return true;
            } else {
                return false;
            }
        },
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter the contributing factors.');
                return false;
            }
        }
    },
];

//Function to write readme
function writeFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, error => {
        if (error) {
            throw error
        };
        console.log('Your ReadMe was successfully created.')
    });
};

//Function to initialize start
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeResponse => {
    console.log(writeResponse.message);
})
.catch(error => {
    console.log(error);
})
