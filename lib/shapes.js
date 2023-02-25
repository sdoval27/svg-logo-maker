//CURRENT ISSUE! logoData property 'text' is undefined. works in index.js but not here
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
console.log (makeShape());
module.exports = shapes;