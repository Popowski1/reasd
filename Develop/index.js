// TODO: Include packages needed for this application
const { Console } = require('console');
const fs = require ('fs');
const inquirer = require ('inquirer');
const { callbackify } = require('util');
const generatemarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt ([{

    type: 'input',
    message :'Title ??',
    name:'title'

},

{
    type: 'input',
    message :'description ??',
    name:'description'


},
{
    type: 'input',
    message :' installation ??',
    name:'installation'

},
{
    type: 'input',
    message :' usage ??',
    name:'usage'


},
{
    type: 'input',
    message :' contribution ?',
    name:'contribution'

},
{
    type: 'input',
    message :' tests ??',
    name:'tests'

},
{
    type: 'input',
    message :'  github user??',
    name:'githubuser'

},
{
    type: 'input',
    message :' email ??',
    name:'email'

}
])


 .then((data) => {
    const readmedata = generatemarkdown(data);
    function writeToFile(fileName, data) {
        fs.writeFile( fileName, data, null , (err) =>
        err ? console.error(err) : console.log("Readme generated"));
    }
    writeToFile('readme.md', readmedata);
 })




// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
