import{S as p,i as q,s as B,e as u,b as r,n as f,h as c,l as _,u as b,m as d,p as h,v as m,q as k,J as y,w as v,K as E}from"../chunks/index-34bbf319.js";function T(i){let t,a;return{c(){t=_("button"),a=b(i[0]),this.h()},l(l){t=d(l,"BUTTON",{class:!0});var e=h(t);a=m(e,i[0]),e.forEach(c),this.h()},h(){k(t,"class","buttonDiabled svelte-35t6q5")},m(l,e){r(l,t,e),y(t,a)},p(l,e){e&1&&v(a,l[0])},d(l){l&&c(t)}}}function w(i){let t,a,l,e;return{c(){t=_("button"),a=b(i[0]),this.h()},l(n){t=d(n,"BUTTON",{class:!0});var s=h(t);a=m(s,i[0]),s.forEach(c),this.h()},h(){k(t,"class","button-74 svelte-35t6q5")},m(n,s){r(n,t,s),y(t,a),l||(e=E(t,"click",i[2]),l=!0)},p(n,s){s&1&&v(a,n[0])},d(n){n&&c(t),l=!1,e()}}}function N(i){let t;function a(n,s){return n[1]?w:T}let l=a(i),e=l(i);return{c(){e.c(),t=u()},l(n){e.l(n),t=u()},m(n,s){e.m(n,s),r(n,t,s)},p(n,[s]){l===(l=a(n))&&e?e.p(n,s):(e.d(1),e=l(n),e&&(e.c(),e.m(t.parentNode,t)))},i:f,o:f,d(n){e.d(n),n&&c(t)}}}function O(i,t,a){let{label:l}=t,{link:e}=t,{enabled:n}=t;function s(){window.location=e}return i.$$set=o=>{"label"in o&&a(0,l=o.label),"link"in o&&a(3,e=o.link),"enabled"in o&&a(1,n=o.enabled)},[l,n,s,e]}class U extends p{constructor(t){super(),q(this,t,O,N,B,{label:0,link:3,enabled:1})}}export{U as default};