/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
define(function(e){"use strict";function t(){var e=C.splice(0,C.length);for(Je=0;e.length;)e.shift().call(null,e.shift())}function n(e,t){for(var n=0,r=e.length;n<r;n++)h(e[n],t)}function r(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],S(t,le[l(t)])}function o(e){return function(t){_e(t)&&(h(t,e),ae.length&&n(t.querySelectorAll(ae),e))}}function l(e){var t=je.call(e,"is"),n=e.nodeName.toUpperCase(),r=ue.call(oe,t?te+t.toUpperCase():ee+n);return t&&-1<r&&!a(n,t)?-1:r}function a(e,t){return-1<ae.indexOf(e+'[is="'+t+'"]')}function i(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[$]||2,a=e[Q]||3;!lt||o&&o!==t||!t[Z]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[Z](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function u(e){var n=o(e);return function(e){C.push(n,e.target),Je&&clearTimeout(Je),Je=setTimeout(t,1)}}function c(e){ot&&(ot=!1,e.currentTarget.removeEventListener(Y,c)),ae.length&&n((e.target||g).querySelectorAll(ae),e.detail===q?q:k),Re&&f()}function s(e,t){var n=this;Ke.call(n,e,t),A.call(n,{target:n})}function m(e,t,n){var o=t.apply(e,n),a=l(o);return-1<a&&S(o,le[a]),n.pop()&&ae.length&&r(o.querySelectorAll(ae)),o}function d(e,t){Fe(e,t),D?D.observe(e,We):(rt&&(e.setAttribute=s,e[U]=N(e),e[_](J,A)),e[_](W,i)),e[K]&&lt&&(e.created=!0,e[K](),e.created=!1)}function f(){for(var e,t=0,n=ke.length;t<n;t++)e=ke[t],ie.contains(e)||(n--,ke.splice(t--,1),h(e,q))}function p(e){throw new Error("A "+e+" type is already registered")}function h(e,t){var n,r,o=l(e);-1<o&&!Be.call(e,"TEMPLATE")&&(F(e,le[o]),o=0,t!==k||e[k]?t!==q||e[q]||(e[k]=!1,e[q]=!0,r="disconnected",o=1):(e[q]=!1,e[k]=!0,r="connected",o=1,Re&&ue.call(ke,e)<0&&ke.push(e)),o&&(n=e[t+x]||e[r+x])&&n.call(e))}function T(){}function L(e,t,n){var r=n&&n[B]||"",o=t.prototype,l=Ie(o),a=t.observedAttributes||fe,i={prototype:l};Ue(l,K,{value:function(){if(Ce)Ce=!1;else if(!this[ve]){this[ve]=!0,new t(this),o[K]&&o[K].call(this);var e=Ae[Ne.get(t)];(!we||e.create.length>1)&&v(this)}}}),Ue(l,Z,{value:function(e){-1<ue.call(a,e)&&o[Z]&&o[Z].apply(this,arguments)}}),o[G]&&Ue(l,j,{value:o[G]}),o[z]&&Ue(l,X,{value:o[z]}),r&&(i[B]=r),e=e.toUpperCase(),Ae[e]={constructor:t,create:r?[r,De(e)]:[e]},Ne.set(t,e),g[P](e.toLowerCase(),i),H(e),Oe[e].r()}function M(e){var t=Ae[e.toUpperCase()];return t&&t.constructor}function E(e){return"string"==typeof e?e:e&&e.is||""}function v(e){for(var t,n=e[Z],r=n?e.attributes:fe,o=r.length;o--;)t=r[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function H(e){return e=e.toUpperCase(),e in Oe||(Oe[e]={},Oe[e].p=new ye(function(t){Oe[e].r=t})),Oe[e].p}function w(){He&&delete window.customElements,de(window,"customElements",{configurable:!0,value:new T}),de(window,"CustomElementRegistry",{configurable:!0,value:T});for(var e=y.get(/^HTML[A-Z]*[a-z]/),t=e.length;t--;function(e){var t=window[e];if(t){window[e]=function(e){var n,r;return e||(e=this),e[ve]||(Ce=!0,n=Ae[Ne.get(e.constructor)],r=we&&1===n.create.length,e=r?Reflect.construct(t,fe,n.constructor):g.createElement.apply(g,n.create),e[ve]=!0,Ce=!1,r||v(e)),e},window[e].prototype=t.prototype;try{t.prototype.constructor=window[e]}catch(n){Ee=!0,de(t,ve,{value:window[e]})}}}(e[t]));g.createElement=function(e,t){var n=E(t);return n?Qe.call(this,e,De(n)):Qe.call(this,e)},et||(nt=!0,g[P](""))}var g=window.document,b=window.Object,y=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n},i=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(b.create||b)(null),c={};for(n in e)for(o in e[n])for(r=e[n][o],u[o]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?u[e]||(l.test(e)?[]:""):a(e)},c.set=function(e,t){return l.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof e&&(e={type:e||"auto"});var C,A,O,N,D,I,F,S,V,P="registerElement",R=1e5*window.Math.random()>>0,U="__"+P+R,_="addEventListener",k="attached",x="Callback",q="detached",B="extends",Z="attributeChanged"+x,j=k+x,G="connected"+x,z="disconnected"+x,K="created"+x,X=q+x,$="ADDITION",Q="REMOVAL",W="DOMAttrModified",Y="DOMContentLoaded",J="DOMSubtreeModified",ee="<",te="=",ne=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,re=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],oe=[],le=[],ae="",ie=g.documentElement,ue=oe.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ce=b.prototype,se=ce.hasOwnProperty,me=ce.isPrototypeOf,de=b.defineProperty,fe=[],pe=b.getOwnPropertyDescriptor,he=b.getOwnPropertyNames,Te=b.getPrototypeOf,Le=b.setPrototypeOf,Me=!!b.__proto__,Ee=!1,ve="__dreCEv1",He=window.customElements,we=!/^force/.test(e.type)&&!!(He&&He.define&&He.get&&He.whenDefined),ge=b.create||b,be=window.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ue.call(t,e)]},set:function(r,o){e=ue.call(t,r),e<0?n[t.push(r)-1]=o:n[e]=o}}},ye=window.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={"catch":function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},Ce=!1,Ae=ge(null),Oe=ge(null),Ne=new be,De=function(e){return e.toLowerCase()},Ie=b.create||function ut(e){return e?(ut.prototype=e,new ut):this},Fe=Le||(Me?function(e,t){return e.__proto__=t,e}:he&&pe?function(){function e(e,t){for(var n,r=he(t),o=0,l=r.length;o<l;o++)n=r[o],se.call(e,n)||de(e,n,pe(t,n))}return function(t,n){do{e(t,n)}while((n=Te(n))&&!me.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Se=window.MutationObserver||window.WebKitMutationObserver,Ve=window.HTMLAnchorElement,Pe=(window.HTMLElement||window.Element||window.Node).prototype,Re=!me.call(Pe,ie),Ue=Re?function(e,t,n){return e[t]=n.value,e}:de,_e=Re?function(e){return 1===e.nodeType}:function(e){return me.call(Pe,e)},ke=Re&&[],xe=Pe.attachShadow,qe=Pe.cloneNode,Be=Pe.closest||function(e){for(var t=this;t&&t.nodeName!==e;)t=t.parentNode;return t},Ze=Pe.dispatchEvent,je=Pe.getAttribute,Ge=Pe.hasAttribute,ze=Pe.removeAttribute,Ke=Pe.setAttribute,Xe=g.createElement,$e=g.importNode,Qe=Xe,We=Se&&{attributes:!0,characterData:!0,attributeOldValue:!0},Ye=Se||function(e){rt=!1,ie.removeEventListener(W,Ye)},Je=0,et=P in g&&!/^force-all/.test(e.type),tt=!0,nt=!1,rt=!0,ot=!0,lt=!0;if(Se&&(V=g.createElement("div"),V.innerHTML="<div><div></div></div>",new Se(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){V=pe(Pe,"innerHTML");var n=V&&V.set;n&&de(Pe,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),V=null}).observe(V,{childList:!0,subtree:!0}),V.innerHTML=""),et||(Le||Me?(F=function(e,t){me.call(t,e)||d(e,t)},S=d):(F=function(e,t){e[U]||(e[U]=b(!0),d(e,t))},S=F),Re?(rt=!1,function(){var e=pe(Pe,_),t=e.value,n=function(e){var t=new CustomEvent(W,{bubbles:!0});t.attrName=e,t.prevValue=je.call(this,e),t.newValue=null,t[Q]=t.attrChange=2,ze.call(this,e),Ze.call(this,t)},r=function(e,t){var n=Ge.call(this,e),r=n&&je.call(this,e),o=new CustomEvent(W,{bubbles:!0});Ke.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[$]=o.attrChange=0,Ze.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[U],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],t=new CustomEvent(W,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[$]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,Ze.call(n,t))};e.value=function(e,l,a){e===W&&this[Z]&&this.setAttribute!==r&&(this[U]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},de(Pe,_,e)}()):Se||(ie[_](W,Ye),ie.setAttribute(U,1),ie.removeAttribute(U),rt&&(A=function(e){var t,n,r,o=this;if(o===e.target){t=o[U],o[U]=n=N(o);for(r in n){if(!(r in t))return O(0,o,r,t[r],n[r],$);if(n[r]!==t[r])return O(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return O(2,o,r,t[r],n[r],Q)}},O=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,i(a)},N=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)t=o[l],"setAttribute"!==(n=t.name)&&(r[n]=t.value);return r})),g[P]=function(e,t){if(r=e.toUpperCase(),tt&&(tt=!1,Se?(D=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Se(function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)o=r[i],"childList"===o.type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,lt&&l[Z]&&"style"!==o.attributeName&&(a=je.call(l,o.attributeName))!==o.oldValue&&l[Z](o.attributeName,o.oldValue,a))})}(o(k),o(q)),I=function(e){return D.observe(e,{childList:!0,subtree:!0}),e},I(g),xe&&(Pe.attachShadow=function(){return I(xe.apply(this,arguments))})):(C=[],g[_]("DOMNodeInserted",u(k)),g[_]("DOMNodeRemoved",u(q))),g[_](Y,c),g[_]("readystatechange",c),g.importNode=function(e,t){switch(e.nodeType){case 1:return m(g,$e,[e,!!t]);case 11:for(var n=g.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(g.importNode(r[l],!!t));return n;default:return qe.call(e,!!t)}},Pe.cloneNode=function(e){return m(this,qe,[!!e])}),nt)return nt=!1;if(-2<ue.call(oe,te+r)+ue.call(oe,ee+r)&&p(e),!ne.test(r)||-1<ue.call(re,r))throw new Error("The type "+e+" is invalid");var r,l,a=function(){return s?g.createElement(d,r):g.createElement(d)},i=t||ce,s=se.call(i,B),d=s?t[B].toUpperCase():r;return s&&-1<ue.call(oe,ee+d)&&p(d),l=oe.push((s?te:ee)+r)-1,ae=ae.concat(ae.length?",":"",s?d+'[is="'+e.toLowerCase()+'"]':d),a.prototype=le[l]=se.call(i,"prototype")?i.prototype:Ie(Pe),ae.length&&n(g.querySelectorAll(ae),k),a},g.createElement=Qe=function(e,t){var n=E(t),r=n?Xe.call(g,e,De(n)):Xe.call(g,e),o=""+e,l=ue.call(oe,(n?te:ee)+(n||o).toUpperCase()),i=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),i&&(i=a(o.toUpperCase(),n))),lt=!g.createElement.innerHTMLHelper,i&&S(r,le[l]),r}),addEventListener("beforeunload",function(){delete g.createElement,delete g.importNode,delete g[P]},!1),T.prototype={constructor:T,define:we?function(e,t,n){if(n)L(e,t,n);else{var r=e.toUpperCase();Ae[r]={constructor:t,create:[r]},Ne.set(t,r),He.define(e,t)}}:L,get:we?function(e){return He.get(e)||M(e)}:M,whenDefined:we?function(e){return ye.race([He.whenDefined(e),H(e)])}:H},!He||/^force/.test(e.type))w();else if(!e.noBuiltIn)try{!function(e,t,n){var r=new RegExp("^<a\\s+is=('|\")"+n+"\\1></a>$");if(t[B]="a",e.prototype=Ie(Ve.prototype),e.prototype.constructor=e,window.customElements.define(n,e,t),!r.test(g.createElement("a",{is:n}).outerHTML)||!r.test((new e).outerHTML))throw t}(function ct(){return Reflect.construct(Ve,[],ct)},{},"document-register-element-a"+R)}catch(at){w()}if(!e.noBuiltIn)try{if(Xe.call(g,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(it){De=function(e){return{is:e.toLowerCase()}}}});
