let e,n={css:"",classesNames:{}};function t(t){return function t({obj:s,children:c="",media:o}){return Object.keys(s).map(r=>{const d=s[r];if(null===d)return"";if("object"==typeof d){const e=/^@m/.test(r);return t({obj:d,children:e?c:(c+r).replace(" ",""),media:e?r:o})}const u=r+d+c+(o||"");if(n.classesNames[u])return n.classesNames[u];const a="c"+u.split("").reduce((e,n)=>101*e+n.charCodeAt(0)>>>0,11);return function(t){"undefined"!=typeof document&&(e||(e=document.createElement("style"),document.body.appendChild(e)),e.appendChild(document.createTextNode(t))),"undefined"==typeof document&&-1===n.css.indexOf(t)&&(n.css=n.css+t)}(function(e,n,t,s,c){const o="."+e+s+"{"+n.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+t+"}";return c?c+"{"+o+"}":o}(a,r,d,c,o)),n.classesNames[u]=a,a}).join(" ")}({obj:t})}function s(){return n.css}export{t as c,s as styles};
//# sourceMappingURL=c-c.modern.js.map
