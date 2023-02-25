const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/shapes.js'); //logo generator

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

function makeShape(logoData) {
    const { text, textColor, shape, shapeColor } = logoData;

    //create svg parameters in .svg format
    const svgText = `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;


    // return svg code
    return svgText;
}

//Create a function to initialize logo
function init() {
    inquirer.prompt(questions)
        .then((logoData) => {

            //spits out user answers from shapes function
            const returnedSvg = makeShape(logoData);

            // TODO: Create a function to write README file
            fs.writeFile('logo.svg', returnedSvg, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg')
            );
        });
}

// Function call to initialize app
init();