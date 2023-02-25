const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./generateMarkdown'); TODO: Generate SVG

// Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What text do you want for your logo? (no more than 3 characters)',
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
    message: 'Name a color for your chosen shape.',
    name: 'shapeColor',
}
];


// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((answers) => {
        
        // pass your answers object into the generateMarkdown function here
        //const returnedMarkdown = generateMarkdown(answers);

        // TODO: Create a function to write README file
        fs.writeFile('logo.svg', returnedMarkdown, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });
}

// Function call to initialize app
init();