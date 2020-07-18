const { writeFile } = require('fs');
const { relative } = require('path');
const { createMacro } = require('babel-plugin-macros');
const { c, styles } = require('../index');

module.exports = createMacro(macro);

function macro({ references }) {
    const refs = references.c || [];

    if (!refs.length) return;

    refs.forEach((ref) => {
        const callExpressionPath = ref.parentPath;

        callExpressionPath.replaceWithSourceString(
            `"${c(callExpressionPath.get('arguments')[0].evaluate().value)}"`
        );
    });

    const output = relative(process.cwd(), 'styles.css');

    writeFile(output, styles(), function (err) {
        if (err) throw err;
    });
}
