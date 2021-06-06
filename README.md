# c-c

Tiny CSS-in-JS atomic classes at run-time.

## Let's Play

Create your first styles. Each declaration will return a class name and inject them to a stylesheet with id "c-c".

```javascript
c({
    padding: '1rem', 
    marginTop: '1rem'
});
```

Returns:
```
c4218071375 c3162900569
```

You can use media queries.

```javascript
c({
    '@media (min-width: 1px)': {
        padding: '1rem',
        margin: '1rem'
    }
});
```

Even classes, pseudo-classes, pseudo-elements, child combinator, adjacent sibling combinator and general sibling combinator.

```javascript
c({
    '.class-name': {
        padding: '1rem'
    },
    '> p': {
        ':hover': { padding: '1rem' }
    },
    '+ p': {
        padding: '1rem'
    },
    '~ p': {
        padding: '1rem'
    },
    ':hover': { padding: '1rem' },
    '::after': { content: '"»"', color: 'red' },
});
```

## SSR

Using `styles()` you will get all the styles for your Server Side Rendering (SSR) or Static Site Generation (SSG) projects.

Returns:

```css
.c4218071375{padding:1rem}
```

Set to a style tag with id "c-c" the styles:

```html
<style id="c-c">styles()</style>
```

## Extra ball

The [styles.js](https://github.com/gc-victor/c-c/blob/master/styles.js) file is a modified version of TailwindCSS config file to copy to your project and modify it to fit your needs.

````javascript
import { color, fontSize, spacing } from './styles';

c({
    color: color.black,
    fontSize: fontSize.xl,
    margin: spacing.x4,
    paddingTop: spacing.x10
});
````

## Acknowledgments

### Inspiration

- [goober](https://github.com/cristianbote/goober) for the [hash generator](https://github.com/cristianbote/goober/blob/v1/src/core/to-hash.js#L10) and some other ideas
- [object-style](https://github.com/jxnblk/object-style/) is the main piece of c-c
- [cxs](https://github.com/cxs-css/cxs) for ideas to optimize object-style parse, and the benchmark
- [tailwindcss](https://github.com/tailwindcss/tailwindcss) for their [config file](https://github.com/tailwindcss/tailwindcss/blob/v1.4.6/stubs/defaultConfig.stub.js) that is used as a reference to create the [styles.js](https://github.com/gc-victor/c-c/blob/master/styles.js)

## Compatible Versioning

### Summary

Given a version number MAJOR.MINOR, increment the:

- MAJOR version when you make backwards-incompatible updates of any kind
- MINOR version when you make 100% backwards-compatible updates

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR format.

[![ComVer](https://img.shields.io/badge/ComVer-compliant-brightgreen.svg)](https://github.com/staltz/comver)

## Contribute

First off, thanks for taking the time to contribute!
Now, take a moment to be sure your contributions make sense to everyone else.

### Reporting Issues

Found a problem? Want a new feature? First of all, see if your issue or idea has [already been reported](../../issues).
If it hasn't, just open a [new clear and descriptive issue](../../issues/new).

### Commit message conventions

A specification for adding human and machine-readable meaning to commit messages.

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope and do avoid unrelated commits.

-   Fork it!
-   Clone your fork: `git clone http://github.com/<your-username>/c-c`
-   Navigate to the newly cloned directory: `cd c-c`
-   Create a new branch for the new feature: `git checkout -b my-new-feature`
-   Install the tools necessary for development: `npm install`
-   Make your changes.
-   `npm run build` to verify your change doesn't increase output size.
-   `npm test` to make sure your change doesn't break anything.
-   Commit your changes: `git commit -am 'Add some feature'`
-   Push to the branch: `git push origin my-new-feature`
-   Submit a pull request with full remarks documenting your changes.

## License

[MIT License](https://github.com/gc-victor/c-c/blob/master/LICENSE)

Copyright (c) 2021 Víctor García

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
