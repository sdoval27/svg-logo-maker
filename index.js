const inquirer = require('inquirer');
const fs = require('fs');
//shape classes
const {Circle, Square, Triangle} = require('./lib/shapes'); 
//svg.js
const Svg = require('./lib/Svg');

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
        .then((response) => {
            console.log(response);
            //spits out user answers from shapes function
            let shape;
            if (response.shape === 'Circle'){
                shape = new Circle();
            }
            else if (response.shape === 'Square'){
                shape = new Square();
            } 
            else if (response.shape === 'Triangle'){
                shape = new Triangle();
            }
            shape.setColor(response.shapeColor);
            console.log(shape);

            //uses svg.js to create new logo
            const logo = new Svg();
            //renders user input text and text color
            logo.setText(response.text, response.textColor);
            logo.setShape(shape);
            //const svg = generateLogo(response);
            // // TODO: Create a function to write README file
            fs.writeFile('./examples/logo.svg', logo.render(), (err) =>
                 err ? console.log(err) : console.log('Generated logo.svg')
             );
        });
}

// Function call to initialize app
init();