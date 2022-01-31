const { expect, test: t } = require('t-t');
const { c, styles } = require('./index');

const test = t;
// const only = t;
// const test = () => {};

// Should be the last test
test('should extract the styles', () => {
    c({ padding: '3rem' });

    expect(styles()).toBe('.c4220131977{padding:3rem}');
});
