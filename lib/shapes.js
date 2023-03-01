
//CURRENT ISSUE! logoData property 'text' is undefined. works in index.js but not here
class Shape {
    constructor() {
      this.color = '';
    }
    //set object method
    setColor(color) { 
        this.color = color;
    }
}

class Circle extends Shape {
    render(){
        return `<Circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render(){
        return ` <rect width="150" height="150" fill="${this.color}"/>`;
    }

}

class Triangle extends Shape {
    render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// class Logo {
//     constructor(shape, text) {
//         this.text = text;
//         this.shape = shape;
//     }

//     makeLogo(shape, text) {
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//         ${shape}
//         ${text}
//         /svg>`;
//     }

// }

//export shapes
module.exports = {Circle, Triangle, Square};