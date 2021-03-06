const { expect, window, spyOn, test } = require('t-t');
const { c, styles } = require('./index');

window('document', {
    cssRules: [],
    'createElement.innerHTML': '',
    'createElement.appendChild': function (text) {
        this['createElement.innerHTML'] = this['createElement.innerHTML'] + text;

        return text;
    },
    body: {
        appendChild: function () {}
    },
    createElement: function () {
        const self = this;

        return {
            appendChild: this['createElement.appendChild'],
            get innerHTML() {
                return self['createElement.innerHTML'];
            }
        };
    },
    createTextNode: function (text) {
        return text;
    }
});

const stylesheet = {
    padding: '1rem',
    marginTop: '1rem',
    '> p': {
        ':hover': { padding: '1rem', margin: '1rem' }
    },
    '+ p': {
        padding: '1rem',
        margin: '1rem'
    },
    '~ p': {
        padding: '1rem'
    },
    '.class-name': {
        padding: '1rem'
    },
    ':hover': { padding: '1rem', margin: '1rem' },
    '::after': { content: '"»"', color: 'red' },
    '@media (min-width: 1px)': {
        padding: '1rem',
        margin: '1rem',
        ':hover': { padding: '1rem' },
        ':focus': { margin: '1rem' }
    }
};

const css =
    '.c4218071375{padding:1rem}.c3162900569{margin-top:1rem}.c551628051>p:hover{padding:1rem}.c932719810>p:hover{margin:1rem}.c1563729502+p{padding:1rem}.c953425557+p{margin:1rem}.c1563737885~p{padding:1rem}.c1197747141.class-name{padding:1rem}.c3507439765:hover{padding:1rem}.c484032348:hover{margin:1rem}.c2340731367::after{content:"»"}.c867070755::after{color:red}@media (min-width: 1px){.c4195542496{padding:1rem}}@media (min-width: 1px){.c4274158499{margin:1rem}}@media (min-width: 1px){.c1333516654:hover{padding:1rem}}@media (min-width: 1px){.c2249472333:focus{margin:1rem}}';

const className =
    'c4218071375 c3162900569 c551628051 c932719810 c1563729502 c953425557 c1563737885 c1197747141 c3507439765 c484032348 c2340731367 c867070755 c4195542496 c4274158499 c1333516654 c2249472333';

const spy = spyOn(global.document, 'createElement.appendChild');

test('should return classes names', () => {
    expect(c(stylesheet)).toBe(className);
});

test('should set rules to the stylesheet', () => {
    expect(spy.args.join('')).toBe(css);
});

test('should return only new styles', () => {
    // reset args
    spy.args = [];

    c({ ...stylesheet, padding: '2rem' });

    expect(spy.args[0]).toBe('.c4219101676{padding:2rem}');
});

// Should be the last test
test('should extract the styles', () => {
    window('document', undefined); // is Node.js
    c({ padding: '3rem' });

    expect(styles()).toBe('.c4220131977{padding:3rem}');
});
