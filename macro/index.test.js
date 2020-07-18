const { readFileSync } = require('fs');
const { expect, test } = require('t-t');

test('should replace the callExpression by the classes names', () => {
    const example = readFileSync('./macro/output/example.js').toString();

    expect(example).toBe(
        'const css0 = "c2343579090 c2342591469";\n' +
            'const css1 = "c4218071375";\n' +
            'const css2 = "c4218071375";'
    );
});

test('should create a file with the the styles', () => {
    const styles = readFileSync('./styles.css').toString();

    expect(styles).toBe('.c2343579090{padding:0}.c2342591469{margin:0}.c4218071375{padding:1rem}');
});
