"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[212],{161:function(n,t,e){e.d(t,{Hg:function(){return u},Jh:function(){return a},_r:function(){return s},on:function(){return o},s_:function(){return i}});var c="https://api.themoviedb.org/3/",r="100715b38ecee48372fe7db22d34203d";function u(){return fetch("".concat(c,"trending/movie/day?api_key=").concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))}function o(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&language=en-US&page=1&include_adult=false&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function i(n){return fetch("".concat(c,"movie/").concat(n,"?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()}))}function a(n){return fetch("".concat(c,"movie/").concat(n,"/credits?api_key=").concat(r,"&language=en-US")).then((function(n){return n.json()})).then((function(n){return n.cast}))}function s(n){return fetch("".concat(c,"movie/").concat(n,"/reviews?api_key=").concat(r,"&language=en-US&page=1")).then((function(n){return n.json()})).then((function(n){return n.results}))}},155:function(n,t,e){e.d(t,{Z:function(){return i}});var c=e(87),r="MoviesList_list__0Owr9",u="MoviesList_li__JJxhZ",o=e(184),i=function(n){var t=n.movies;return(0,o.jsx)("ul",{className:r,children:t.map((function(n){return(0,o.jsx)("li",{className:u,children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},212:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var c=e(439),r=e(791),u=e(689),o=e(87),i=e(155),a="Form_form__e1yzW",s="Form_input__FTtTw",f="Form_button__8NOIT",l=e(184),h=function(n){var t=n.onSubmit,e=(0,r.useState)(""),u=(0,c.Z)(e,2),o=u[0],i=u[1];return(0,l.jsxs)("form",{className:a,onSubmit:function(n){n.preventDefault(),t(o.toLowerCase())},children:[(0,l.jsx)("input",{className:s,type:"text",value:o,onChange:function(n){i(n.target.value)}}),(0,l.jsx)("button",{className:f,type:"submit",children:"Search"})]})},m=e(161),_=e(883),v=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1],s=(0,r.useState)(!1),f=(0,c.Z)(s,2),v=f[0],d=f[1],p=(0,u.TH)(),g=(0,o.lr)(),j=(0,c.Z)(g,2),y=j[0],x=j[1];return(0,r.useEffect)((function(){var n=y.get("query");if(n){d(!0),(0,m.on)(n).then((function(n){a(n)})).catch((function(n){console.log(n)})).finally((function(){return d(!1)}))}}),[y]),(0,l.jsxs)("div",{children:[(0,l.jsx)(h,{onSubmit:function(n){x({query:n})}}),v&&(0,l.jsx)(_.Z,{}),e&&(0,l.jsx)(i.Z,{movies:e,location:p})]})}}}]);
//# sourceMappingURL=212.e4250a9f.chunk.js.map