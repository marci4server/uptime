function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function l(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function c(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:m(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function R(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,s=!1){R(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function O(e,t,n){return k(e,t,n,w)}function C(e,t,n){return k(e,t,n,y)}function U(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function H(e){return U(e," ")}function D(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e,t){const n=D(e,"HTML_TAG_START",0),r=D(e,"HTML_TAG_END",n);if(n===r)return new W(void 0,t);R(e);const s=e.splice(n,r-n+1);$(s[0]),$(s[s.length-1]);const o=s.slice(1,s.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new W(o,t)}function j(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function B(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function z(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=z();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function V(e,t){const n=[];let r=0;for(const s of t.childNodes)if(8===s.nodeType){const t=s.textContent.trim();t===`HEAD_${e}_END`?(r-=1,n.push(s)):t===`HEAD_${e}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class K{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}class W extends K{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function J(e,t){return new e(t)}function F(e){h=e}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(e){Y().$$.on_mount.push(e)}function Q(e){Y().$$.after_update.push(e)}function Z(e){Y().$$.on_destroy.push(e)}const ee=[],te=[],ne=[],re=[],se=Promise.resolve();let oe=!1;function ie(e){ne.push(e)}const ae=new Set;let le=0;function ce(){if(0!==le)return;const e=h;do{try{for(;le<ee.length;){const e=ee[le];le++,F(e),ue(e.$$)}}catch(e){throw ee.length=0,le=0,e}for(F(null),ee.length=0,le=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ae.has(t)||(ae.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();oe=!1,ae.clear(),F(e)}function ue(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}const de=new Set;let fe;function he(){fe={r:0,c:[],p:fe}}function pe(){fe.r||s(fe.c),fe=fe.p}function me(e,t){e&&e.i&&(de.delete(e),e.i(t))}function ge(e,t,n,r){if(e&&e.o){if(de.has(e))return;de.add(e),fe.c.push((()=>{de.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function be(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ve(e){return"object"==typeof e&&null!==e?e:{}}function $e(e){e&&e.c()}function _e(e,t){e&&e.l(t)}function we(e,t,r,i){const{fragment:a,after_update:l}=e.$$;a&&a.m(t,r),i||ie((()=>{const t=e.$$.on_mount.map(n).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):s(t),e.$$.on_mount=[]})),l.forEach(ie)}function ye(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){-1===e.$$.dirty[0]&&(ee.push(e),oe||(oe=!0,se.then(ce)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,o,i,a,l,c,u=[-1]){const d=h;F(t);const f=t.$$={fragment:null,ctx:[],props:l,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=s)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](s),m&&Ee(t,e)),n})):[],f.update(),m=!0,s(f.before_update),f.fragment=!!i&&i(f.ctx),n.target){if(n.hydrate){p=!0;const e=I(n.target);f.fragment&&f.fragment.l(e),e.forEach($)}else f.fragment&&f.fragment.c();n.intro&&me(t.$$.fragment),we(t,n.target,n.anchor,n.customElement),p=!1,ce()}F(d)}class Se{$destroy(){ye(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Ae(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!Te.length;for(const e of s)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const l=[i,a];return s.add(l),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(l),0===s.size&&(r(),r=null)}}}}const Ne={};var Pe={owner:"marci4server",repo:"uptime",sites:[{name:"marci4.de",url:"https://marci4.de"},{name:"VirtualMin",url:"$VIRTUALMIN"},{name:"Nextcloud",url:"$NEXTCLOUD"},{name:"Webmail",url:"$WEBMAIL"},{name:"Portainer",url:"$PORTAINER"},{name:"Rspamd",url:"$RSPAMD",expectedStatusCodes:[401]},{name:"Addons",url:"$ADDONS"},{name:"feuerwehr-lauben.de",url:"https://feuerwehr-lauben.de"},{name:"kljb-lauben.de",url:"https://kljb-lauben.de"},{name:"elektro-oppold.de",url:"https://elektro-oppold.de"},{name:"faschingsverein-oy.de",url:"https://faschingsverein-oy.de"},{name:"saegesucht.de",url:"https://saegesucht.de"},{name:"sw-vt.de",url:"https://sw-vt.de/"},{name:"prinzessin-gugelhupf.de",url:"https://prinzessin-gugelhupf.de/"},{name:"mg-naturgartenbau.de",url:"http://mg-naturgartenbau.de"},{name:"feueroase-allgäu.de",url:"https://feueroase-allgäu.de"},{name:"feueroase-allgaeu.de",url:"https://feueroase-allgaeu.de"},{name:"Birkenmoos.de",url:"https://preview.birkenmoos.de"}],"status-website":{baseUrl:"/uptime",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Uptime","user-agent":"marci4server",robotsText:"User-agent: * \nDisallow: /",introTitle:"Status page",navbar:[{title:"Status",href:"https://marci4server.github.io/uptime"}]},path:"https://marci4server.github.io/uptime",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Ie(e,t,n){const r=e.slice();return r[1]=t[n],r}function Re(t){let n,r,s,o=Pe["status-website"]&&!Pe["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),l(n.src,r=Pe["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}(),i=Pe["status-website"]&&!Pe["status-website"].hideNavTitle&&function(t){let n,r,s=Pe["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(e){n=O(e,"DIV",{});var t=I(n);r=U(t,s),t.forEach($)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=I(n);r=O(t,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=H(a),i&&i.l(a),a.forEach($),t.forEach($),this.h()},h(){N(r,"href",Pe["status-website"].logoHref||Pe.path),N(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Pe["status-website"]&&!Pe["status-website"].hideNavLogo&&o.p(e,t),Pe["status-website"]&&!Pe["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&$(n),o&&o.d(),i&&i.d()}}}function Le(e){let t,n,r,s,o,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),r=E(i),o=x(),this.h()},l(e){t=O(e,"LI",{});var s=I(t);n=O(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=I(n);r=U(a,i),a.forEach($),o=H(s),s.forEach($),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",e[1].href.replace("$OWNER",Pe.owner).replace("$REPO",Pe.repo)),N(n,"target",e[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,o)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&$(t)}}}function ke(t){let n,r,s,o,i,a=Pe["status-website"]&&Pe["status-website"].logoUrl&&Re(),l=Pe["status-website"]&&Pe["status-website"].navbar&&function(e){let t,n=Pe["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Le(Ie(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Pe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Ie(e,n,o);r[o]?r[o].p(i,s):(r[o]=Le(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),c=Pe["status-website"]&&Pe["status-website"].navbarGitHub&&!Pe["status-website"].navbar&&function(t){let n,r,s,o=Pe.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(e){n=O(e,"LI",{});var t=I(n);r=O(t,"A",{href:!0,class:!0});var i=I(r);s=U(i,o),i.forEach($),t.forEach($),this.h()},h(){N(r,"href",`https://github.com/${Pe.owner}/${Pe.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),l&&l.c(),i=x(),c&&c.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=I(n);r=O(t,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=H(u),o=O(u,"UL",{class:!0});var d=I(o);l&&l.l(d),i=H(d),c&&c.l(d),d.forEach($),u.forEach($),t.forEach($),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),l&&l.m(o,null),g(o,i),c&&c.m(o,null)},p(e,[t]){Pe["status-website"]&&Pe["status-website"].logoUrl&&a.p(e,t),Pe["status-website"]&&Pe["status-website"].navbar&&l.p(e,t),Pe["status-website"]&&Pe["status-website"].navbarGitHub&&!Pe["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&$(n),a&&a.d(),l&&l.d(),c&&c.d()}}}function Oe(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Ce extends Se{constructor(e){super(),xe(this,e,Oe,ke,i,{segment:0})}}var Ue={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function He(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function De(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Me(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},d=0;function f(e){var t=Ue[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=f(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(d,s.index),d=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+He(De(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Me(He(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+De(s[8])+'" alt="'+De(s[7])+'">':s[10]?(c=c.replace("<a>",'<a href="'+De(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Me(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+De(s[16])+"</code>":(s[17]||s[1])&&(n=f(s[17]||"--"))),c+=r,c+=n;return(c+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function je(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ge(e,t,n){const r=e.slice();return r[3]=t[n],r}function Be(e,t,n){const r=e.slice();return r[8]=t[n],r}function ze(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pe.path}/themes/${(Pe["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function qe(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Pe["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ve(t){let n,r;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),I(n).forEach($),this.h()},h(){l(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ke(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function We(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Je(t){let n,r,s,o,i,a,l,u,d,f,h,p,m,b,y,E,T,A,P=Me(Pe.i18n.footer.replace(/\$REPO/,`https://github.com/${Pe.owner}/${Pe.repo}`))+"",R=(Pe["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Pe["status-website"]||{}).customHeadHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();let L=((Pe["status-website"]||{}).themeUrl?qe:ze)(t),k=(Pe["status-website"]||{}).scripts&&function(e){let t,n=(Pe["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ve(Be(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Be(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ve(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),C=(Pe["status-website"]||{}).links&&function(e){let t,n=(Pe["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ke(Ge(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ge(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ke(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),U=(Pe["status-website"]||{}).metaTags&&function(e){let t,n=(Pe["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=We(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=je(e,n,o);r[o]?r[o].p(i,s):(r[o]=We(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),D=Pe["status-website"].css&&function(t){let n,r,s=`<style>${Pe["status-website"].css}</style>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),j=Pe["status-website"].js&&function(t){let n,r,s=`<script>${Pe["status-website"].js}<\/script>`;return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),G=(Pe["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Pe["status-website"]||{}).customBodyHtml+"";return{c(){n=new W(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();p=new Ce({props:{segment:t[0]}});const B=t[2].default,z=function(e,t,n,r){if(e){const s=c(e,t,n,r);return e[0](s)}}(B,t,t[1],null);return{c(){R&&R.c(),n=S(),L.c(),r=w("link"),s=w("link"),o=w("link"),k&&k.c(),i=S(),C&&C.c(),a=S(),U&&U.c(),l=S(),D&&D.c(),u=S(),j&&j.c(),d=S(),f=x(),G&&G.c(),h=x(),$e(p.$$.fragment),m=x(),b=w("main"),z&&z.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(e){const t=V("svelte-fmspuk",document.head);R&&R.l(t),n=S(),L.l(t),r=O(t,"LINK",{rel:!0,href:!0}),s=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),C&&C.l(t),a=S(),U&&U.l(t),l=S(),D&&D.l(t),u=S(),j&&j.l(t),d=S(),t.forEach($),f=H(e),G&&G.l(e),h=H(e),_e(p.$$.fragment,e),m=H(e),b=O(e,"MAIN",{class:!0});var c=I(b);z&&z.l(c),c.forEach($),y=H(e),E=O(e,"FOOTER",{class:!0});var g=I(E);T=O(g,"P",{}),I(T).forEach($),g.forEach($),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Pe.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Pe["status-website"]||{}).faviconSvg||(Pe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Pe["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){R&&R.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,a),U&&U.m(document.head,null),g(document.head,l),D&&D.m(document.head,null),g(document.head,u),j&&j.m(document.head,null),g(document.head,d),v(e,f,t),G&&G.m(e,t),v(e,h,t),we(p,e,t),v(e,m,t),v(e,b,t),z&&z.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=P,A=!0},p(e,[t]){(Pe["status-website"]||{}).customHeadHtml&&R.p(e,t),L.p(e,t),(Pe["status-website"]||{}).scripts&&k.p(e,t),(Pe["status-website"]||{}).links&&C.p(e,t),(Pe["status-website"]||{}).metaTags&&U.p(e,t),Pe["status-website"].css&&D.p(e,t),Pe["status-website"].js&&j.p(e,t),(Pe["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),z&&z.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=c(t,n,r,o);e.p(i,s)}}(z,B,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(B,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(me(p.$$.fragment,e),me(z,e),A=!0)},o(e){ge(p.$$.fragment,e),ge(z,e),A=!1},d(e){R&&R.d(e),$(n),L.d(e),$(r),$(s),$(o),k&&k.d(e),$(i),C&&C.d(e),$(a),U&&U.d(e),$(l),D&&D.d(e),$(u),j&&j.d(e),$(d),e&&$(f),G&&G.d(e),e&&$(h),ye(p,e),e&&$(m),e&&$(b),z&&z.d(e),e&&$(y),e&&$(E)}}}function Fe(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Ye extends Se{constructor(e){super(),xe(this,e,Fe,Je,i,{segment:0})}}function Xe(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=E(r)},l(e){t=O(e,"PRE",{});var s=I(t);n=U(s,r),s.forEach($)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&j(n,r)},d(e){e&&$(t)}}}function Qe(t){let n,r,s,o,i,a,l,c,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Xe(t);return{c(){r=x(),s=w("h1"),o=E(t[0]),i=x(),a=w("p"),l=E(d),c=x(),f&&f.c(),u=S(),this.h()},l(e){V("svelte-1moakz",document.head).forEach($),r=H(e),s=O(e,"H1",{class:!0});var n=I(s);o=U(n,t[0]),n.forEach($),i=H(e),a=O(e,"P",{class:!0});var h=I(a);l=U(h,d),h.forEach($),c=H(e),f&&f.l(e),u=S(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,l),v(e,c,t),f&&f.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&j(o,e[0]),2&t&&d!==(d=e[1].message+"")&&j(l,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Xe(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&$(r),e&&$(s),e&&$(i),e&&$(a),e&&$(c),f&&f.d(e),e&&$(u)}}}function Ze(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class et extends Se{constructor(e){super(),xe(this,e,Ze,Qe,i,{status:0,error:1})}}function tt(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=J(i,a())),{c(){n&&$e(n.$$.fragment),r=S()},l(e){n&&_e(n.$$.fragment,e),r=S()},m(e,t){n&&we(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?be(o,[ve(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){he();const e=n;ge(e.$$.fragment,1,0,(()=>{ye(e,1)})),pe()}i?(n=J(i,a()),$e(n.$$.fragment),me(n.$$.fragment,1),we(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&me(n.$$.fragment,e),s=!0)},o(e){n&&ge(n.$$.fragment,e),s=!1},d(e){e&&$(r),n&&ye(n,e)}}}function nt(e){let t,n;return t=new et({props:{error:e[0],status:e[1]}}),{c(){$e(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,r){we(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(me(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){ye(t,e)}}}function rt(e){let t,n,r,s;const o=[nt,tt],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let l=t;t=a(e),t===l?i[t].p(e,s):(he(),ge(i[l],1,1,(()=>{i[l]=null})),pe(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),me(n,1),n.m(r.parentNode,r))},i(e){s||(me(n),s=!0)},o(e){ge(n),s=!1},d(e){i[t].d(e),e&&$(r)}}}function st(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[rt]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Ye({props:o}),{c(){$e(n.$$.fragment)},l(e){_e(n.$$.fragment,e)},m(e,t){we(n,e,t),r=!0},p(e,[t]){const r=12&t?be(s,[4&t&&{segment:e[2][0]},8&t&&ve(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(me(n.$$.fragment,e),r=!0)},o(e){ge(n.$$.fragment,e),r=!1},d(e){ye(n,e)}}}function ot(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:l=null}=t,{notify:c}=t;var u,d;return Q(c),u=Ne,d=r,Y().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[s,o,i,a,l,r,c]}class it extends Se{constructor(e){super(),xe(this,e,ot,st,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const at=[],lt=[{js:()=>Promise.all([import("./index.0c4691d2.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.1ce82ee4.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.b8ce3101.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.59569fb6.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.54dfe110.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ct=(ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ut(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ut(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ut;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function dt(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))}function ft(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ht,pt=1;const mt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},gt={};let bt,vt;function $t(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function _t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(bt))return null;let t=e.pathname.slice(bt.length);if(""===t&&(t="/"),!at.some((e=>e.test(t))))for(let n=0;n<ct.length;n+=1){const r=ct[n],s=r.pattern.exec(t);if(s){const n=$t(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function wt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ft(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=_t(s);if(o){xt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),mt.pushState({id:ht},"",s.href)}}function yt(){return{x:pageXOffset,y:pageYOffset}}function Et(e){if(gt[ht]=yt(),e.state){const t=_t(new URL(location.href));t?xt(t,e.state.id):location.href=location.href}else!function(e){pt=e}(pt+1),function(e){ht=e}(pt),mt.replaceState({id:ht},"",location.href)}function xt(e,t,n,r){return dt(this,void 0,void 0,(function*(){const s=!!t;if(s)ht=t;else{const e=yt();gt[ht]=e,ht=t=++pt,gt[ht]=n?e:{x:0,y:0}}if(yield vt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=gt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),gt[ht]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function St(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Tt,At=null;function Nt(e){const t=ft(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=_t(new URL(e,St(document)));if(t)At&&e===At.href||(At={href:e,promise:Vt(t)}),At.promise}(t.href)}function Pt(e){clearTimeout(Tt),Tt=setTimeout((()=>{Nt(e)}),20)}function It(e,t={noscroll:!1,replaceState:!1}){const n=_t(new URL(e,St(document)));if(n){const r=xt(n,null,t.noscroll);return mt[t.replaceState?"replaceState":"pushState"]({id:ht},"",e),r}return location.href=e,new Promise((()=>{}))}const Rt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,kt,Ot,Ct=!1,Ut=[],Ht="{}";const Dt={page:function(e){const t=Ae(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ae(null),session:Ae(Rt&&Rt.session)};let Mt,jt,Gt;function Bt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function zt(e){return dt(this,void 0,void 0,(function*(){Lt&&Dt.preloading.set(!0);const t=function(e){return At&&At.href===e.href?At.promise:Vt(e)}(e),n=kt={},r=yield t,{redirect:s}=r;if(n===kt)if(s)yield It(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield qt(n,t,Bt(t,e.page))}}))}function qt(e,t,n){return dt(this,void 0,void 0,(function*(){Dt.page.set(n),Dt.preloading.set(!1),Lt?Lt.$set(t):(t.stores={page:{subscribe:Dt.page.subscribe},preloading:{subscribe:Dt.preloading.subscribe},session:Dt.session},t.level0={props:yield Ot},t.notify=Dt.page.notify,Lt=new it({target:Gt,props:t,hydrate:!0})),Ut=e,Ht=JSON.stringify(n.query),Ct=!0,jt=!1}))}function Vt(e){return dt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Ot){const e=()=>({});Ot=Rt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Mt)}let a,l=1;try{const s=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>dt(this,void 0,void 0,(function*(){const d=r[a];if(function(e,t,n,r){if(r!==Ht)return!0;const s=Ut[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,d,c,s)&&(u=!0),o.segments[l]=r[a+1],!t)return{segment:d};const f=l++;let h;if(jt||u||!Ut[a]||Ut[a].part!==t.i){u=!1;const{default:r,preload:s}=yield lt[t.i].js();let o;o=Ct||!Rt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Mt):{}:Rt.preloaded[a+1],h={component:r,props:o,segment:d,match:c,part:t.i}}else h=Ut[a];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Kt,Wt,Jt;Dt.session.subscribe((e=>dt(void 0,void 0,void 0,(function*(){if(Mt=e,!Ct)return;jt=!0;const t=_t(new URL(location.href)),n=kt={},{redirect:r,props:s,branch:o}=yield Vt(t);n===kt&&(r?yield It(r.location,{replaceState:!0}):yield qt(o,s,Bt(s,t.page)))})))),Kt={target:document.querySelector("#sapper")},Wt=Kt.target,Gt=Wt,Jt=Rt.baseUrl,bt=Jt,vt=zt,"scrollRestoration"in mt&&(mt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{mt.scrollRestoration="auto"})),addEventListener("load",(()=>{mt.scrollRestoration="manual"})),addEventListener("click",wt),addEventListener("popstate",Et),addEventListener("touchstart",Nt),addEventListener("mousemove",Pt),Rt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Rt;Ot||(Ot=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ot},level1:{props:{status:o,error:i},component:et},segments:s},l=$t(n);qt([],a,{host:e,path:t,query:l,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;mt.replaceState({id:pt},"",t);const n=_t(new URL(location.href));if(n)return xt(n,pt,!0,e)}));export{j as A,T as B,s as C,te as D,M as E,l as F,d as G,W as H,B as I,V as J,Me as K,y as L,C as M,It as N,G as O,A as P,t as Q,P as R,Se as S,be as T,Q as U,Z as V,u as W,ve as X,ie as Y,q as Z,x as a,O as b,H as c,I as d,w as e,$ as f,N as g,v as h,xe as i,he as j,pe as k,me as l,E as m,U as n,X as o,g as p,e as q,Pe as r,i as s,ge as t,S as u,_ as v,$e as w,_e as x,we as y,ye as z};

import __inject_styles from './inject_styles.803b7e80.js';