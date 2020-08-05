import Benchmark from 'benchmark';

// benchmark hates browser-env
require('browser-env')();

import { c } from '../index';
import cxs from 'cxs';
import { css } from 'goober';

const cssJSON = {
    opacity: Math.random().toFixed(1),
    '@media (min-width: 1px)': {
        rule: 'all'
    },
    fontFamily: 'inherit',
    fontSize: 'inherit',
    display: 'inline-block',
    margin: 0,
    padding: 16,
    border: 0,
    borderRadius: 4,
    color: 'white',
    appearance: 'none',
    ':hover': {
        backgroundColor: 'black'
    }
};

const suite = new Benchmark.Suite('styled');

suite
    .add(`cxs`, () => {
        cxs(cssJSON);
    })
    .add(`goober`, () => {
        css(cssJSON);
    })
    .add(`c-c`, () => {
        c(cssJSON);
    })
    .on('error', (e) => console.log(e))
    .on('cycle', (e) => {
        console.log(String(e.target));
    })
    .on('complete', function () {
        const top = this.filter('fastest').map('name');
        console.log(`Fastest is ${top}`);
    })
    .run({
        async: true
    });
