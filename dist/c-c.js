var e,t="";function n(e,t,n,r,s){var c="."+e+r+"{"+t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+n+"}";return s?s+"{"+c+"}":c}exports.c=function(r){var s=function t(r){var s=r.obj,c=r.children,o=void 0===c?"":c,a=r.atRule,u=[],i=[];for(var d in s){var l=s[d];if(null!=l){if(/^@/.test(d)){var p=t({obj:l,children:o,atRule:d}),f=p.className,h=p.css;f&&i.push(f),h&&u.push(h)}if("object"==typeof l&&!/^@/.test(d)){var m=t({obj:l,children:(o+d).replace(" ",""),atRule:a}),v=m.className,b=m.css;v&&i.push(v),b&&u.push(b)}if(/string|number/.test(typeof l)){var j="c"+(d+l+o+(a||"")).split("").reduce(function(e,t){return 101*e+t.charCodeAt(0)>>>0},11),y=e&&e.innerHTML.indexOf(j)>=0;i.push(j),!y&&u.push(n(j,d,l,o,a))}}}return{className:i.join(" "),css:u.join("")}}({obj:r}),c=s.className,o=s.css;return"undefined"!=typeof document&&o&&(e||(e=document.createElement("style"),document.body.appendChild(e)),e.appendChild(document.createTextNode(o))),"undefined"==typeof document&&o&&(t+=o),c},exports.extractCss=function(){return t};
//# sourceMappingURL=c-c.js.map
