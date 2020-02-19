!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function f(){return l(" ")}function d(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function h(t,e){e=""+e,t.data!==e&&(t.data=e)}function p(t,e){(null!=e||t.value)&&(t.value=e)}let g;function $(t){g=t}function m(){if(!g)throw new Error("Function called outside component initialization");return g}const y=[],x=[],b=[],v=[],_=Promise.resolve();let S=!1;function A(t){b.push(t)}function q(){const t=new Set;do{for(;y.length;){const t=y.shift();$(t),E(t.$$)}for(;x.length;)x.pop()();for(let e=0;e<b.length;e+=1){const n=b[e];t.has(n)||(n(),t.add(n))}b.length=0}while(y.length);for(;v.length;)v.pop()();S=!1}function E(t){t.fragment&&(t.update(t.dirty),r(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(A))}const k=new Set;function w(t,e){t.$$.dirty||(y.push(t),S||(S=!0,_.then(q)),t.$$.dirty=n()),t.$$.dirty[e]=!0}function C(u,i,c,s,a,l){const f=g;$(u);const d=i.props||{},h=u.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:null};let p=!1;var m,y,x;h.ctx=c?c(u,d,(t,e)=>{h.ctx&&a(h.ctx[t],h.ctx[t]=e)&&(h.bound[t]&&h.bound[t](e),p&&w(u,t))}):d,h.update(),p=!0,r(h.before_update),h.fragment=s(h.ctx),i.target&&(i.hydrate?h.fragment.l((x=i.target,Array.from(x.childNodes))):h.fragment.c(),i.intro&&((m=u.$$.fragment)&&m.i&&(k.delete(m),m.i(y))),function(t,n,u){const{fragment:i,on_mount:c,on_destroy:s,after_update:a}=t.$$;i.m(n,u),A(()=>{const n=c.map(e).filter(o);s?s.push(...n):r(n),t.$$.on_mount=[]}),a.forEach(A)}(u,i.target,i.anchor),q()),$(f)}let L;function T(t,e,n){const r=Object.create(t);return r.value=e[n].value,r}function M(t){var e,n,r,o=t.value+"";function u(){return t.click_handler(t)}return{c(){e=a("li"),n=l(o),r=d(e,"click",u)},m(t,r){c(t,e,r),i(e,n)},p(e,r){t=r,e.results&&o!==(o=t.value+"")&&h(n,o)},d(t){t&&s(e),r()}}}function R(e){for(var n,o,u,g,$,m,y,x,b=e.results,v=[],_=0;_<b.length;_+=1)v[_]=M(T(e,b,_));return{c(){n=a("input"),o=f(),u=a("button"),g=l("Search "),$=l(e.queryString),m=f(),y=a("ul");for(var r=0;r<v.length;r+=1)v[r].c();var i,c,s;this.c=t,i=n,c="placeholder",null==(s="Search...")?i.removeAttribute(c):i.setAttribute(c,s),x=[d(n,"input",e.input_input_handler),d(u,"click",e.search)]},m(t,r){c(t,n,r),p(n,e.queryString),c(t,o,r),c(t,u,r),i(u,g),i(u,$),c(t,m,r),c(t,y,r);for(var s=0;s<v.length;s+=1)v[s].m(y,null)},p(t,e){if(t.queryString&&n.value!==e.queryString&&p(n,e.queryString),t.queryString&&h($,e.queryString),t.results){b=e.results;for(var r=0;r<b.length;r+=1){const n=T(e,b,r);v[r]?v[r].p(t,n):(v[r]=M(n),v[r].c(),v[r].m(y,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=b.length}},i:t,o:t,d(t){t&&(s(n),s(o),s(u),s(m),s(y)),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(v,t),r(x)}}}function j(t,e,n){let r,{cxApi:o}=e,u="",i=[];var c;function s(t){t="string"==typeof t?t:u,o.routing.go({cxRoute:"search",params:{query:t}})}return c=(()=>{setTimeout(()=>{o&&(r=o.searchbox.getSuggestionResults().subscribe(t=>{n("results",i=t)}))})}),m().$$.on_mount.push(c),function(t){m().$$.on_destroy.push(t)}(()=>{r&&r.unsubscribe()}),t.$set=(t=>{"cxApi"in t&&n("cxApi",o=t.cxApi)}),t.$$.update=((t={queryString:1})=>{t.queryString&&function(t){o&&o.searchbox.searchSuggestions(t,{})}(u)}),{cxApi:o,queryString:u,results:i,search:s,input_input_handler:function(){u=this.value,n("queryString",u)},click_handler:function({value:t}){return s(t)}}}"undefined"!=typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){var e,n;n=1,(e=this).$$.fragment&&(r(e.$$.on_destroy),e.$$.fragment.d(n),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});customElements.define("svelte-search",class extends L{constructor(t){super(),this.shadowRoot.innerHTML="<style>ul{padding:0;margin:0;list-style:none;color:red;font-size:0.8rem;cursor:pointer}</style>",C(this,{target:this.shadowRoot},j,R,u,["cxApi"]),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),q()))}static get observedAttributes(){return["cxApi"]}get cxApi(){return this.$$.ctx.cxApi}set cxApi(t){this.$set({cxApi:t}),q()}})}();
//# sourceMappingURL=svelte-search-box.js.map
