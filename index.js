let stylesheet;
let cache = {
    css: '',
    classesNames: {}
};

export function c(rules) {
    return parse(rules);
}

export function styles() {
    return cache.css;
}

function insert(rule) {
    if (typeof document !== 'undefined') {
        if (!stylesheet) {
            stylesheet = document.createElement('style');

            document.body.appendChild(stylesheet);
        }

        // @see: https://stackoverflow.com/a/28930990
        stylesheet.appendChild(document.createTextNode(rule));
    }

    if (typeof document === 'undefined' && cache.css.indexOf(rule) === -1) {
        cache.css = cache.css + rule;
    }
}

// @see https://github.com/jxnblk/object-style/blob/v1.0.3/src/index.js
// @see https://github.com/cxs-css/cxs/blob/master/src/index.js
function parse(obj, children = '', media = '') {
    return Object.keys(obj)
        .map((key) => {
            const value = obj[key];

            if (value === null) return '';
            if (typeof value === 'object') {
                const isMedia = /^@m/.test(key);

                return parse(
                    value,
                    isMedia ? children : (children + key).replace(' ', ''),
                    isMedia ? key : media
                );
            }

            const id = key + value + children + (media || '');

            if (cache.classesNames[id]) return cache.classesNames[id];

            // @see https://github.com/cristianbote/goober/blob/v1/src/core/to-hash.js#L10
            const className =
                'c' + id.split('').reduce((out, i) => (101 * out + i.charCodeAt(0)) >>> 0, 11);

            insert(createRule(className, key, value, children, media));

            cache.classesNames[id] = className;

            return className;
        })
        .join(' ');
}

function createRule(className, key, value, children, media) {
    const selector = '.' + className + children;
    const rule =
        selector + '{' + key.replace(/[A-Z]|^ms/g, '-$&').toLowerCase() + ':' + value + '}';

    if (!media) return rule;

    return media + '{' + rule + '}';
}
