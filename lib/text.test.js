const Text = require('./text.js');
//const { formatDate } = require('../lib/date.js');

describe('Text', () => {
  test('Should not be more than 3 characters', () => {
    const expectedSvg = 
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    const text = new Text();
    expect(text.render()).toEqual(expectedSvg);
  });
});
