const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/shapes'); //logo generator

// Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'Choose 3 characters to put on your logo.',
    name: 'text',
},
{
    type: 'input',
    message: 'Name a color for your text.',
    name: 'textColor',
},
{
    type: 'list', //figure out how to put license badge in here
    message: 'Choose a shape.',
    choices: ['Triangle', 'Square', 'Circle'],
    name: 'shape',
},
{
    type: 'input',
    message: 'Name a color for your shape.',
    name: 'shapeColor',
}
];


//Create a function to initialize logo
function init() {
    inquirer.prompt(questions)
        .then((logoData) => {

            //spits out user answers from shapes function
            const returnedSvg = generateLogo(logoData);

            // TODO: Create a function to write README file
            fs.writeFile('./examples/logo.svg', returnedSvg, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        });
}

// Function call to initialize app
init();