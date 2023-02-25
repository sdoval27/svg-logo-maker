//figure out what to do ahahhahahhahahaha help
class Shape{

}
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Triangle();
shape.setText("wee");
expect(shape.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">wee</text>');
