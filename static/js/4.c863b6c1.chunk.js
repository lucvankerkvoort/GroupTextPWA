(this.webpackJsonpviews=this.webpackJsonpviews||[]).push([[4],{38:function(e,t,n){"use strict";var r="https://grouptext-django.dreamstate-4-all.org/view_groups_members/",a="https://grouptext-django.dreamstate-4-all.org/add_group_member/",o="https://grouptext-django.dreamstate-4-all.org/TextGroups/",c="https://grouptext-django.dreamstate-4-all.org/TextGroupMember/";t.a={getGroups:function(){return fetch(r).then((function(e){return e.json()})).then((function(e){return e}))},addGroups:function(e){return fetch(o,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},removeGroup:function(e){return fetch(o+e+"/",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return console.log(e)}))},addMemberToGroup:function(e,t){return fetch(a+e+"/",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return e}))},removeMemberFromGroup:function(e){return fetch(c+e+"/",{method:"DELETE",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"})}}},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n(12);var u=n(15);function l(e){return function(e){if(Array.isArray(e))return Object(c.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(u.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=n(10),p=n(9),f=n(38),d=function(e){var t=e.close,n=Object(r.useContext)(p.b),c=n.dispatch,u=Object(r.useState)(""),i=Object(m.a)(u,2),d=i[0],b=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{name:"group_name",type:"name",placeholder:"Group name",onChange:function(e){return b(o({},e.target.name,e.target.value))}}),a.a.createElement("button",{onClick:function(e){e.preventDefault();var r=s({},d);l(n.state.groups).push(r),f.a.addGroups(r).then((function(e){c({type:"check",payload:!n.state.check}),console.log(e)})),t()}},"Submit"))},b=function(e){var t=e.close,n=Object(r.useContext)(p.b),c=n.dispatch,u=Object(r.useState)(""),l=Object(m.a)(u,2),i=l[0],d=l[1],b=Object(r.useState)(""),h=Object(m.a)(b,2),g=h[0],y=h[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{name:"member_name",type:"name",placeholder:"Member name",onChange:function(e){return d(o({},e.target.name,e.target.value))}}),a.a.createElement("input",{name:"member_phone",type:"tel",placeholder:"Phone number",onChange:function(e){return y(o({},e.target.name,e.target.value))}}),a.a.createElement("button",{onClick:function(e){e.preventDefault();var r=s(s({},i),g),a=n.state.cur_group_id;console.log(r),f.a.addMemberToGroup(a,r).then((function(e){c({type:"check",payload:!n.state.check}),console.log(e)})),t()}},"Submit"))},h=function(e){var t=e.close,n=Object(r.useContext)(p.b).dispatch,c=Object(r.useState)(""),u=Object(m.a)(c,2),l=u[0],i=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{name:"question",type:"text",placeholder:"Yes or no question",onChange:function(e){return i(o({},e.target.name,e.target.value))}}),a.a.createElement("button",{onClick:function(e){e.preventDefault();var r=s({},l);n({type:"question",payload:r}),t()}},"Submit"))},g=function(e){var t=e.close,n=Object(r.useContext)(p.b).dispatch,c=Object(r.useState)(""),u=Object(m.a)(c,2),l=u[0],i=u[1],f=Object(r.useState)(""),d=Object(m.a)(f,2),b=d[0],h=d[1],g=Object(r.useState)(""),y=Object(m.a)(g,2),j=y[0],O=y[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{name:"username",type:"name",placeholder:"Username",onChange:function(e){return i(o({},e.target.name,e.target.value))}}),a.a.createElement("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){return h(o({},e.target.name,e.target.value))}}),a.a.createElement("input",{name:"confirm_password",type:"password",placeholder:"Confirm Password",onChange:function(e){return O(o({},e.target.name,e.target.value))}}),a.a.createElement("button",{onClick:function(e){e.preventDefault();var r=s(s(s({},l),b),j);n({type:"registration",payload:r}),t()}},"Submit"))},y=function(e){var t=e.close,n=Object(r.useContext)(p.b).dispatch,c=Object(r.useState)(""),u=Object(m.a)(c,2),l=u[0],i=u[1],f=Object(r.useState)(""),d=Object(m.a)(f,2),b=d[0],h=d[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{name:"username",type:"name",placeholder:"Username",onChange:function(e){return i(o({},e.target.name,e.target.value))}}),a.a.createElement("input",{name:"password",type:"password",placeholder:"Password",onChange:function(e){return h(o({},e.target.name,e.target.value))}}),a.a.createElement("button",{onClick:function(e){e.preventDefault();var r=s(s({},l),b);n({type:"login",payload:r}),t()}},"Submit"))},j=function(e){var t=e.close,n=(e.info,e.element);return a.a.createElement("div",{className:"Questionaire"},a.a.createElement("h2",null,n),a.a.createElement("form",null,function(){switch(n){case"Login":return a.a.createElement(y,{close:t});case"Register":return a.a.createElement(g,{close:t});case"Groups":return a.a.createElement(d,{close:t});case"Member":return a.a.createElement(b,{close:t});case"Question":return a.a.createElement(h,{close:t});default:return}}()))};t.default=function(e){var t=e.close,n=e.data,o=Object(r.useContext)(p.b),c=o.dispatch;return a.a.createElement("div",{className:"wrapper"},a.a.createElement("h2",{className:"close",onClick:function(){return t()}},"X"),a.a.createElement("div",{className:"screen"},a.a.createElement(j,{close:function(){return t()},element:o.state.element,data:n,info:function(e){c({type:"setInfo",payload:e})}})))}}}]);
//# sourceMappingURL=4.c863b6c1.chunk.js.map