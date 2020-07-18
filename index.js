let stylesheet;
let cache = {
    css: ''
};

export function c(rules) {
    const { className, css } = parse({ obj: rules });

    if (typeof document !== 'undefined' && css) {
        if (!stylesheet) {
            stylesheet = document.createElement('style');

            document.body.appendChild(stylesheet);
        }

        // @see: https://stackoverflow.com/a/28930990
        stylesheet.appendChild(document.createTextNode(css));
    }

    if (typeof document === 'undefined' && css && cache.css.indexOf(css) === -1) {
        cache.css = cache.css + css;
    }

    return className;
}

export function styles() {
    return cache.css;
}

// @see https://github.com/jxnblk/object-style/blob/v1.0.3/src/index.js
function parse({ obj, children = '', media }) {
    const rules = [];
    const classNames = [];

    for (const key in obj) {
        const value = obj[key];

        if (value === null || value === undefined) continue;

        if (/^@m/.test(key)) {
            const { className, css } = parse({
                obj: value,
                children: children,
                media: key
            });

            className && classNames.push(className);
            css && rules.push(css);
        }
        // object not at-rule
        if (typeof value === 'object' && !/^@/.test(key)) {
            const { className, css } = parse({
                obj: value,
                children: (children + key).replace(' ', ''),
                media: media
            });

            className && classNames.push(className);
            css && rules.push(css);
        }
        // declaration
        if (/string|number/.test(typeof value)) {
            const id = key + value + children + (media || '');

            // @see https://github.com/cristianbote/goober/blob/v1/src/core/to-hash.js#L10
            const className =
                'c' + id.split('').reduce((out, i) => (101 * out + i.charCodeAt(0)) >>> 0, 11);
            const hasClass = stylesheet && stylesheet.innerHTML.indexOf(className) >= 0;

            classNames.push(className);
            !hasClass && rules.push(createRule(className, key, value, children, media));
        }
    }

    return {
        className: classNames.join(' '),
        css: rules.join('')
    };
}

function createRule(className, key, value, children, media) {
    const selector = '.' + className + children;
    const rule =
        selector + '{' + key.replace(/[A-Z]|^ms/g, '-$&').toLowerCase() + ':' + value + '}';

    if (!media) return rule;

    return media + '{' + rule + '}';
}
