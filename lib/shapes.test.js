const {Circle, Square, Triangle} = require('./shapes');
//figure out what to test
describe('shape render tests', () =>{

test('color input should render a green triangle', () => {
    const shape = new Triangle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />')
})

test('color input should render a red square', () => {
    const shape = new Square();
shape.setColor("red");
expect(shape.render()).toEqual('<rect width="150" height="150" fill="red"/>');
})

test('color input should render a blue circle', () => {
    const shape = new Circle();
shape.setColor("blue");
expect(shape.render()).toEqual('<Circle cx="150" cy="100" r="80" fill="blue" />');
})

})



