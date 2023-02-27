
//CURRENT ISSUE! logoData property 'text' is undefined. works in index.js but not here

class Logo {
    constructor(shape, text) {
        this.text = text;
        this.shape = shape;
    }

    makeLogo(shape, text) {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape}
        ${text}
        /svg>`;
    }

}

class Shape extends Logo {
    constructor(color) {
      super(color);
      this.color = color;
    }
}

class Circle extends Shape {
    .this
    return `<Circle cx="150" cy="100" r="80" fill="${color}" />`;
}

class Square extends Shape {

    return ` <rect width="150" height="150" fill="${color}"/>`;
}

class Triangle extends Shape {

    return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
}

// makeShape() {
//     const svgText = `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

//     </svg>`;


//     // return svg code
//     return svgText;
// }


// function makeShape(logoData) {
//     const { text, textColor, shape, shapeColor } = logoData;

//     //create svg parameters in .svg format
//     const svgText = `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

//     </svg>`;


//     // return svg code
//     return svgText;
// }
console.log(Shape);
//module.exports = shapes;