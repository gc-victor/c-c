// This file is not part of the library itself is a tool to use as a reference
export const color = {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray100: '#f7fafc',
    gray200: '#edf2f7',
    gray300: '#e2e8f0',
    gray400: '#cbd5e0',
    gray500: '#a0aec0',
    gray600: '#718096',
    gray700: '#4a5568',
    gray800: '#2d3748',
    gray900: '#1a202c',
    red100: '#fff5f5',
    red200: '#fed7d7',
    red300: '#feb2b2',
    red400: '#fc8181',
    red500: '#f56565',
    red600: '#e53e3e',
    red700: '#c53030',
    red800: '#9b2c2c',
    red900: '#742a2a',
    orange100: '#fffaf0',
    orange200: '#feebc8',
    orange300: '#fbd38d',
    orange400: '#f6ad55',
    orange500: '#ed8936',
    orange600: '#dd6b20',
    orange700: '#c05621',
    orange800: '#9c4221',
    orange900: '#7b341e',
    yellow100: '#fffff0',
    yellow200: '#fefcbf',
    yellow300: '#faf089',
    yellow400: '#f6e05e',
    yellow500: '#ecc94b',
    yellow600: '#d69e2e',
    yellow700: '#b7791f',
    yellow800: '#975a16',
    yellow900: '#744210',
    green100: '#f0fff4',
    green200: '#c6f6d5',
    green300: '#9ae6b4',
    green400: '#68d391',
    green500: '#48bb78',
    green600: '#38a169',
    green700: '#2f855a',
    green800: '#276749',
    green900: '#22543d',
    teal100: '#e6fffa',
    teal200: '#b2f5ea',
    teal300: '#81e6d9',
    teal400: '#4fd1c5',
    teal500: '#38b2ac',
    teal600: '#319795',
    teal700: '#2c7a7b',
    teal800: '#285e61',
    teal900: '#234e52',
    blue100: '#ebf8ff',
    blue200: '#bee3f8',
    blue300: '#90cdf4',
    blue400: '#63b3ed',
    blue500: '#4299e1',
    blue600: '#3182ce',
    blue700: '#2b6cb0',
    blue800: '#2c5282',
    blue900: '#2a4365',
    indigo100: '#ebf4ff',
    indigo200: '#c3dafe',
    indigo300: '#a3bffa',
    indigo400: '#7f9cf5',
    indigo500: '#667eea',
    indigo600: '#5a67d8',
    indigo700: '#4c51bf',
    indigo800: '#434190',
    indigo900: '#3c366b',
    purple100: '#faf5ff',
    purple200: '#e9d8fd',
    purple300: '#d6bcfa',
    purple400: '#b794f4',
    purple500: '#9f7aea',
    purple600: '#805ad5',
    purple700: '#6b46c1',
    purple800: '#553c9a',
    purple900: '#44337a',
    pink100: '#fff5f7',
    pink200: '#fed7e2',
    pink300: '#fbb6ce',
    pink400: '#f687b3',
    pink500: '#ed64a6',
    pink600: '#d53f8c',
    pink700: '#b83280',
    pink800: '#97266d',
    pink900: '#702459'
};
export const spacing = {
    px: '1px',
    x0: '0',
    x1: '0.25rem',
    x2: '0.5rem',
    x3: '0.75rem',
    x4: '1rem',
    x5: '1.25rem',
    x6: '1.5rem',
    x8: '2rem',
    x10: '2.5rem',
    x12: '3rem',
    x16: '4rem',
    x20: '5rem',
    x24: '6rem',
    x32: '8rem',
    x40: '10rem',
    x48: '12rem',
    x56: '14rem',
    x64: '16rem',
    nPx: '-1px',
    n1: '-0.25rem',
    n2: '-0.5rem',
    n3: '-0.75rem',
    n4: '-1rem',
    n5: '-1.25rem',
    n6: '-1.5rem',
    n8: '-2rem',
    n10: '-2.5rem',
    n12: '-3rem',
    n16: '-4rem',
    n20: '-5rem',
    n24: '-6rem',
    n32: '-8rem',
    n40: '-10rem',
    n48: '-12rem',
    n56: '-14rem',
    n64: '-16rem'
};
export const borderColor = { default: '#e2e8f0' };
export const borderRadius = {
    none: '0',
    sm: '.125rem',
    default: '.25rem',
    lg: '.5rem',
    full: '9999px'
};
export const borderWidth = { default: '1px', x0: '0', x2: '2px', x4: '4px', x8: '8px' };
export const boxShadow = {
    default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
    xl2: '0 25px 50px -12px rgba(0, 0, 0, .25)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(66,153,225,0.5)',
    none: 'none'
};
export const flex = { x1: '1 1 0%', auto: '1 1 auto', initial: '0 1 auto', none: 'none' };
export const fontFamily = {
    sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
    ].join(','),
    serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(','),
    mono: ['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(
        ','
    )
};
export const fontSize = {
    xs: '.75rem',
    sm: '.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xl2: '1.5rem',
    xl3: '1.875rem',
    xl4: '2.25rem',
    xl5: '3rem',
    xl6: '4rem'
};
export const fontWeight = {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
};
export const height = { auto: 'auto', full: '100%', screen: '100vh' };
export const letterSpacing = {
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em'
};
export const lineHeight = {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
};
export const maxHeight = { full: '100%', screen: '100vh' };
export const maxWidth = {
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    xl2: '42rem',
    xl3: '48rem',
    xl4: '56rem',
    xl5: '64rem',
    xl6: '72rem',
    full: '100%'
};
export const minHeight = { 0: '0', full: '100%', screen: '100vh' };
export const minWidth = { 0: '0', full: '100%' };
export const opacity = { x0: '0', x25: '.25', x50: '.5', x75: '.75', x100: '1' };
export const order = {
    first: '-9999',
    last: '9999',
    none: '0',
    x1: '1',
    x2: '2',
    x3: '3',
    x4: '4',
    x5: '5',
    x6: '6',
    x7: '7',
    x8: '8',
    x9: '9',
    x10: '10',
    x11: '11',
    x12: '12'
};
export const screens = { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' };
export const strokeWidth = {
    x0: '0',
    x1: '1',
    x2: '2'
};
export const width = {
    auto: 'auto',
    ...spacing,
    x1of2: '50%',
    x1of3: '33.33333%',
    x2of3: '66.66667%',
    x1of4: '25%',
    x3of4: '75%',
    x1of5: '20%',
    x2of5: '40%',
    x3of5: '60%',
    x4of5: '80%',
    x1of6: '16.66667%',
    x5of6: '83.33333%',
    full: '100%',
    screen: '100vw'
};
export const zIndex = { auto: 'auto', x0: 0, x10: 10, x20: 20, x30: 30, x40: 40, x50: 50 };
