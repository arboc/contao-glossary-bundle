var Glossary;(()=>{var e={647:(e,t,o)=>{"use strict";function r(){var e={},t=!1,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);for(var i=function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t&&"[object Object]"===Object.prototype.toString.call(o[n])?e[n]=r(!0,e[n],o[n]):e[n]=o[n])};o<n;o++){var s=arguments[o];i(s)}return e}function n(e,t){void 0===t&&(t=!1);var o=e.getBoundingClientRect();return{width:o.width/1,height:o.height/1,top:o.top/1,right:o.right/1,bottom:o.bottom/1,left:o.left/1,x:o.left/1,y:o.top/1}}function i(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function s(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof i(e).Element||e instanceof Element}function c(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function d(e){return"undefined"!=typeof ShadowRoot&&(e instanceof i(e).ShadowRoot||e instanceof ShadowRoot)}function p(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function l(e){return n(f(e)).left+s(e).scrollLeft}function u(e){return i(e).getComputedStyle(e)}function h(e){var t=u(e),o=t.overflow,r=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function m(e,t,o){void 0===o&&(o=!1);var r,a,d=c(t),u=c(t)&&function(e){var t=e.getBoundingClientRect(),o=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==o||1!==r}(t),m=f(t),v=n(e,u),g={scrollLeft:0,scrollTop:0},y={x:0,y:0};return(d||!d&&!o)&&(("body"!==p(t)||h(m))&&(g=(r=t)!==i(r)&&c(r)?{scrollLeft:(a=r).scrollLeft,scrollTop:a.scrollTop}:s(r)),c(t)?((y=n(t,!0)).x+=t.clientLeft,y.y+=t.clientTop):m&&(y.x=l(m))),{x:v.left+g.scrollLeft-y.x,y:v.top+g.scrollTop-y.y,width:v.width,height:v.height}}function v(e){var t=n(e),o=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:r}}function g(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||(d(e)?e.host:null)||f(e)}function y(e){return["html","body","#document"].indexOf(p(e))>=0?e.ownerDocument.body:c(e)&&h(e)?e:y(g(e))}function b(e,t){var o;void 0===t&&(t=[]);var r=y(e),n=r===(null==(o=e.ownerDocument)?void 0:o.body),s=i(r),a=n?[s].concat(s.visualViewport||[],h(r)?r:[]):r,c=t.concat(a);return n?c:c.concat(b(g(a)))}function w(e){return["table","td","th"].indexOf(p(e))>=0}function x(e){return c(e)&&"fixed"!==u(e).position?e.offsetParent:null}function O(e){for(var t=i(e),o=x(e);o&&w(o)&&"static"===u(o).position;)o=x(o);return o&&("html"===p(o)||"body"===p(o)&&"static"===u(o).position)?t:o||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&c(e)&&"fixed"===u(e).position)return null;for(var o=g(e);c(o)&&["html","body"].indexOf(p(o))<0;){var r=u(o);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return o;o=o.parentNode}return null}(e)||t}o.r(t),o.d(t,{Glossary:()=>le});var E="top",H="bottom",_="right",T="left",j="auto",C=[E,H,_,T],D="start",L="end",A="viewport",k="popper",S=C.reduce((function(e,t){return e.concat([t+"-"+D,t+"-"+L])}),[]),N=[].concat(C,[j]).reduce((function(e,t){return e.concat([t,t+"-"+D,t+"-"+L])}),[]),M=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function P(e){var t=new Map,o=new Set,r=[];function n(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var r=t.get(e);r&&n(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||n(e)})),r}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function B(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function I(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,r=void 0===o?[]:o,n=t.defaultOptions,i=void 0===n?W:n;return function(e,t,o){void 0===o&&(o=i);var n,s,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},d=[],p=!1,f={state:c,setOptions:function(o){var n="function"==typeof o?o(c.options):o;l(),c.options=Object.assign({},i,c.options,n),c.scrollParents={reference:a(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var s,p,u=function(e){var t=P(e);return M.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}((s=[].concat(r,c.options.modifiers),p=s.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{}),Object.keys(p).map((function(e){return p[e]}))));return c.orderedModifiers=u.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,r=void 0===o?{}:o,n=e.effect;if("function"==typeof n){var i=n({state:c,name:t,instance:f,options:r});d.push(i||function(){})}})),f.update()},forceUpdate:function(){if(!p){var e=c.elements,t=e.reference,o=e.popper;if(B(t,o)){c.rects={reference:m(t,O(o),"fixed"===c.options.strategy),popper:v(o)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var n=c.orderedModifiers[r],i=n.fn,s=n.options,a=void 0===s?{}:s,d=n.name;"function"==typeof i&&(c=i({state:c,options:a,name:d,instance:f})||c)}else c.reset=!1,r=-1}}},update:(n=function(){return new Promise((function(e){f.forceUpdate(),e(c)}))},function(){return s||(s=new Promise((function(e){Promise.resolve().then((function(){s=void 0,e(n())}))}))),s}),destroy:function(){l(),p=!0}};if(!B(e,t))return f;function l(){d.forEach((function(e){return e()})),d=[]}return f.setOptions(o).then((function(e){!p&&o.onFirstUpdate&&o.onFirstUpdate(e)})),f}}var R={passive:!0};const q={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,r=e.options,n=r.scroll,s=void 0===n||n,a=r.resize,c=void 0===a||a,d=i(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&p.forEach((function(e){e.addEventListener("scroll",o.update,R)})),c&&d.addEventListener("resize",o.update,R),function(){s&&p.forEach((function(e){e.removeEventListener("scroll",o.update,R)})),c&&d.removeEventListener("resize",o.update,R)}},data:{}};function V(e){return e.split("-")[0]}function F(e){return e.split("-")[1]}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function U(e){var t,o=e.reference,r=e.element,n=e.placement,i=n?V(n):null,s=n?F(n):null,a=o.x+o.width/2-r.width/2,c=o.y+o.height/2-r.height/2;switch(i){case E:t={x:a,y:o.y-r.height};break;case H:t={x:a,y:o.y+o.height};break;case _:t={x:o.x+o.width,y:c};break;case T:t={x:o.x-r.width,y:c};break;default:t={x:o.x,y:o.y}}var d=i?G(i):null;if(null!=d){var p="y"===d?"height":"width";switch(s){case D:t[d]=t[d]-(o[p]/2-r[p]/2);break;case L:t[d]=t[d]+(o[p]/2-r[p]/2)}}return t}const X={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=U({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var z=Math.max,J=Math.min,Y=Math.round,K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Q(e){var t,o=e.popper,r=e.popperRect,n=e.placement,s=e.variation,a=e.offsets,c=e.position,d=e.gpuAcceleration,p=e.adaptive,l=e.roundOffsets,h=!0===l?function(e){var t=e.x,o=e.y,r=window.devicePixelRatio||1;return{x:Y(Y(t*r)/r)||0,y:Y(Y(o*r)/r)||0}}(a):"function"==typeof l?l(a):a,m=h.x,v=void 0===m?0:m,g=h.y,y=void 0===g?0:g,b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=T,j=E,C=window;if(p){var D=O(o),A="clientHeight",k="clientWidth";D===i(o)&&"static"!==u(D=f(o)).position&&"absolute"===c&&(A="scrollHeight",k="scrollWidth"),D=D,n!==E&&(n!==T&&n!==_||s!==L)||(j=H,y-=D[A]-r.height,y*=d?1:-1),n!==T&&(n!==E&&n!==H||s!==L)||(x=_,v-=D[k]-r.width,v*=d?1:-1)}var S,N=Object.assign({position:c},p&&K);return d?Object.assign({},N,((S={})[j]=w?"0":"",S[x]=b?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+v+"px, "+y+"px)":"translate3d("+v+"px, "+y+"px, 0)",S)):Object.assign({},N,((t={})[j]=w?y+"px":"",t[x]=b?v+"px":"",t.transform="",t))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function $(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function oe(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&d(o)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ne(e,t){return t===A?re(function(e){var t=i(e),o=f(e),r=t.visualViewport,n=o.clientWidth,s=o.clientHeight,a=0,c=0;return r&&(n=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,c=r.offsetTop)),{width:n,height:s,x:a+l(e),y:c}}(e)):c(t)?function(e){var t=n(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):re(function(e){var t,o=f(e),r=s(e),n=null==(t=e.ownerDocument)?void 0:t.body,i=z(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),a=z(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),c=-r.scrollLeft+l(e),d=-r.scrollTop;return"rtl"===u(n||o).direction&&(c+=z(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:a,x:c,y:d}}(f(e)))}function ie(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function se(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function ae(e,t){void 0===t&&(t={});var o=t,r=o.placement,i=void 0===r?e.placement:r,s=o.boundary,d=void 0===s?"clippingParents":s,l=o.rootBoundary,h=void 0===l?A:l,m=o.elementContext,v=void 0===m?k:m,y=o.altBoundary,w=void 0!==y&&y,x=o.padding,T=void 0===x?0:x,j=ie("number"!=typeof T?T:se(T,C)),D=v===k?"reference":k,L=e.rects.popper,S=e.elements[w?D:v],N=function(e,t,o){var r="clippingParents"===t?function(e){var t=b(g(e)),o=["absolute","fixed"].indexOf(u(e).position)>=0&&c(e)?O(e):e;return a(o)?t.filter((function(e){return a(e)&&oe(e,o)&&"body"!==p(e)})):[]}(e):[].concat(t),n=[].concat(r,[o]),i=n[0],s=n.reduce((function(t,o){var r=ne(e,o);return t.top=z(r.top,t.top),t.right=J(r.right,t.right),t.bottom=J(r.bottom,t.bottom),t.left=z(r.left,t.left),t}),ne(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}(a(S)?S:S.contextElement||f(e.elements.popper),d,h),M=n(e.elements.reference),P=U({reference:M,element:L,strategy:"absolute",placement:i}),W=re(Object.assign({},L,P)),B=v===k?W:M,I={top:N.top-B.top+j.top,bottom:B.bottom-N.bottom+j.bottom,left:N.left-B.left+j.left,right:B.right-N.right+j.right},R=e.modifiersData.offset;if(v===k&&R){var q=R[i];Object.keys(I).forEach((function(e){var t=[_,H].indexOf(e)>=0?1:-1,o=[E,H].indexOf(e)>=0?"y":"x";I[e]+=q[o]*t}))}return I}function ce(e,t,o){return z(e,J(t,o))}function de(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function pe(e){return[E,_,H,T].some((function(t){return e[t]>=0}))}var fe=I({defaultModifiers:[q,X,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,r=o.gpuAcceleration,n=void 0===r||r,i=o.adaptive,s=void 0===i||i,a=o.roundOffsets,c=void 0===a||a,d={placement:V(t.placement),variation:F(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Q(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Q(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},r=t.attributes[e]||{},n=t.elements[e];c(n)&&p(n)&&(Object.assign(n.style,o),Object.keys(r).forEach((function(e){var t=r[e];!1===t?n.removeAttribute(e):n.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],n=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});c(r)&&p(r)&&(Object.assign(r.style,i),Object.keys(n).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.offset,i=void 0===n?[0,0]:n,s=N.reduce((function(e,o){return e[o]=function(e,t,o){var r=V(e),n=[T,E].indexOf(r)>=0?-1:1,i="function"==typeof o?o(Object.assign({},t,{placement:e})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[T,_].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}(o,t.rects,i),e}),{}),a=s[t.placement],c=a.x,d=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=d),t.modifiersData[r]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0===s||s,c=o.fallbackPlacements,d=o.padding,p=o.boundary,f=o.rootBoundary,l=o.altBoundary,u=o.flipVariations,h=void 0===u||u,m=o.allowedAutoPlacements,v=t.options.placement,g=V(v),y=c||(g!==v&&h?function(e){if(V(e)===j)return[];var t=$(e);return[te(e),t,te(t)]}(v):[$(v)]),b=[v].concat(y).reduce((function(e,o){return e.concat(V(o)===j?function(e,t){void 0===t&&(t={});var o=t,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,c=o.allowedAutoPlacements,d=void 0===c?N:c,p=F(r),f=p?a?S:S.filter((function(e){return F(e)===p})):C,l=f.filter((function(e){return d.indexOf(e)>=0}));0===l.length&&(l=f);var u=l.reduce((function(t,o){return t[o]=ae(e,{placement:o,boundary:n,rootBoundary:i,padding:s})[V(o)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:o,boundary:p,rootBoundary:f,padding:d,flipVariations:h,allowedAutoPlacements:m}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,L=!0,A=b[0],k=0;k<b.length;k++){var M=b[k],P=V(M),W=F(M)===D,B=[E,H].indexOf(P)>=0,I=B?"width":"height",R=ae(t,{placement:M,boundary:p,rootBoundary:f,altBoundary:l,padding:d}),q=B?W?_:T:W?H:E;w[I]>x[I]&&(q=$(q));var G=$(q),U=[];if(i&&U.push(R[P]<=0),a&&U.push(R[q]<=0,R[G]<=0),U.every((function(e){return e}))){A=M,L=!1;break}O.set(M,U)}if(L)for(var X=function(e){var t=b.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},z=h?3:1;z>0&&"break"!==X(z);z--);t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,r=e.name,n=o.mainAxis,i=void 0===n||n,s=o.altAxis,a=void 0!==s&&s,c=o.boundary,d=o.rootBoundary,p=o.altBoundary,f=o.padding,l=o.tether,u=void 0===l||l,h=o.tetherOffset,m=void 0===h?0:h,g=ae(t,{boundary:c,rootBoundary:d,padding:f,altBoundary:p}),y=V(t.placement),b=F(t.placement),w=!b,x=G(y),j="x"===x?"y":"x",C=t.modifiersData.popperOffsets,L=t.rects.reference,A=t.rects.popper,k="function"==typeof m?m(Object.assign({},t.rects,{placement:t.placement})):m,S={x:0,y:0};if(C){if(i||a){var N="y"===x?E:T,M="y"===x?H:_,P="y"===x?"height":"width",W=C[x],B=C[x]+g[N],I=C[x]-g[M],R=u?-A[P]/2:0,q=b===D?L[P]:A[P],U=b===D?-A[P]:-L[P],X=t.elements.arrow,Y=u&&X?v(X):{width:0,height:0},K=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Q=K[N],Z=K[M],$=ce(0,L[P],Y[P]),ee=w?L[P]/2-R-$-Q-k:q-$-Q-k,te=w?-L[P]/2+R+$+Z+k:U+$+Z+k,oe=t.elements.arrow&&O(t.elements.arrow),re=oe?"y"===x?oe.clientTop||0:oe.clientLeft||0:0,ne=t.modifiersData.offset?t.modifiersData.offset[t.placement][x]:0,ie=C[x]+ee-ne-re,se=C[x]+te-ne;if(i){var de=ce(u?J(B,ie):B,W,u?z(I,se):I);C[x]=de,S[x]=de-W}if(a){var pe="x"===x?E:T,fe="x"===x?H:_,le=C[j],ue=le+g[pe],he=le-g[fe],me=ce(u?J(ue,ie):ue,le,u?z(he,se):he);C[j]=me,S[j]=me-le}}t.modifiersData[r]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,r=e.name,n=e.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=V(o.placement),c=G(a),d=[T,_].indexOf(a)>=0?"height":"width";if(i&&s){var p=function(e,t){return ie("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:se(e,C))}(n.padding,o),f=v(i),l="y"===c?E:T,u="y"===c?H:_,h=o.rects.reference[d]+o.rects.reference[c]-s[c]-o.rects.popper[d],m=s[c]-o.rects.reference[c],g=O(i),y=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,b=h/2-m/2,w=p[l],x=y-f[d]-p[u],j=y/2-f[d]/2+b,D=ce(w,j,x),L=c;o.modifiersData[r]=((t={})[L]=D,t.centerOffset=D-j,t)}},effect:function(e){var t=e.state,o=e.options.element,r=void 0===o?"[data-popper-arrow]":o;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&oe(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,r=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,s=ae(t,{elementContext:"reference"}),a=ae(t,{altBoundary:!0}),c=de(s,r),d=de(a,n,i),p=pe(c),f=pe(d);t.modifiersData[o]={referenceClippingOffsets:c,popperEscapeOffsets:d,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]});class le{constructor(e){this.options=r(!0,{entrySelector:"#wrapper",markup:"a",markupAttr:null,hovercard:{active:!0,id:"gs-hovercard",interactive:!0,showLoadingAnimation:!0,maxWidth:380,showThreshold:300,leaveThreshold:200},popperOptions:{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}},{name:"preventOverflow",options:{padding:16}},{name:"arrow",options:{padding:5}}]},includes:["body","div,span,p","main,section,article","ol,ul,li","table,tr,th,tbody,thead,td","i,b,em,strong","mark,abbr","sub,sup"],route:{prefix:"/api/glossary/item/",suffix:"/html",cache:!0},hovercardBreakpoint:1024,config:null},e||{}),this.showEvent="pointerenter",this.hideEvent="pointerleave",this.showDelay=null,this.hideTimeout=null,this.isNewIE=this._isNewIE(),null!==this.options.config&&this._shouldParse()&&(this.contentNodes=document.querySelectorAll(this.options.entrySelector),this._parseNodes(this.contentNodes,0)),this.options.hovercard.active&&window.innerWidth>=this.options.hovercardBreakpoint&&this._bindEvents()}_isNewIE(){return/iPod|iPhone|iPad|Macintosh/.test(navigator.userAgent)}_shouldParse(){return!(window.innerWidth<this.options.hovercardBreakpoint)||"a"===this.options.markup.toLowerCase()}_parseNodes(e){const t=Array.from(e);for(const e of t)if(this._isValidNode(e))switch(e.nodeType){case Node.TEXT_NODE:this._replaceTerm(e);break;case Node.ELEMENT_NODE:this._parseNodes(e.childNodes)}}_isValidNode(e){return e.nodeType===Node.TEXT_NODE||e.nodeType===Node.ELEMENT_NODE&&!!e.matches(this.options.includes.join(","))}_replaceTerm(e){if(!e.textContent.trim())return;let t=[];for(const o of this.options.config){const r=new RegExp("(?:\\s|>|^|\\()("+o.keywords.join("|")+")\\b",o.cs?"gu":"giu"),n=e.textContent.matchAll(r);if(null!==n)for(let[r,i]of n){if(t.includes(i))continue;t.push(i);const r=this._createTermMarkup(i,o);if(this.isNewIE){const t=new RegExp("(?:>|^|\\()("+i+")\\b","gu");let o=[];for(let n of e.textContent.split(" "))n.match(t)?o.push(n.replace(i,r)):o.push(n);e.textContent=o.join(" ")}else{const t=new RegExp("(?<=\\s|>|^|\\()("+i+")\\b","gu");e.textContent=e.textContent.replace(t,r)}}}const o=document.createElement("span");o.innerHTML=e.textContent,e.replaceWith(o),o.outerHTML=o.innerHTML}_createTermMarkup(e,t){const o=document.createElement(this.options.markup);if(o.innerText=e,o.dataset.glossaryId=t.id,"a"===this.options.markup.toLowerCase()&&(o.title=e,o.href=t.url),null!==this.options.markupAttr)for(const e in this.options.markupAttr)o.setAttribute(e,this.options.markupAttr[e]);return o.outerHTML}_bindEvents(){const e=document.querySelectorAll("[data-glossary-id]");if(e)for(const t of e)t.addEventListener(this.showEvent,(e=>this._onShowHovercard(e))),t.addEventListener(this.hideEvent,(e=>this._onHideHovercard(e)))}_setItemCache(e,t){let o=sessionStorage.getItem("glossaryCache");sessionStorage.setItem("glossaryCache",JSON.stringify({...o?JSON.parse(o):{},[e]:t}))}_getItemCached(e){let t=sessionStorage.getItem("glossaryCache");return t=JSON.parse(t),t&&t[e]?t[e]:null}_onShowHovercard(e){this.currentElement=e.target;const t=this.currentElement.dataset.glossaryId;this.glossaryHovercard&&(this._clearHideTimeout(),this._destroyHovercard(),this._clearShowDelay()),this.showDelay=setTimeout((()=>{if(this.options.route.cache){const e=this._getItemCached(t);if(e)return this._buildHovercard(e),void this._updateHovercard(e)}this._fetchGlossaryItem(t)}),this.options.hovercard.showThreshold)}_onHideHovercard(e){this._clearHideTimeout(),this._clearShowDelay(),this.glossaryHovercard&&(this.options.hovercard.interactive?this.hideTimeout=setTimeout((()=>{this._abortFetch(),this._destroyHovercard()}),this.options.hovercard.leaveThreshold):(this._abortFetch(),this._destroyHovercard()))}async _fetchGlossaryItem(e){this.abortController=new AbortController,this.options.hovercard.showLoadingAnimation&&this._buildHovercard(),await fetch(this.options.route.prefix+e+this.options.route.suffix,{signal:this.abortController.signal}).then((t=>{if(t.status>=300)throw new Error(t.statusText);t.text().then((t=>{this.options.route.cache&&this._setItemCache(e,t),this.options.hovercard.showLoadingAnimation?this._updateHovercard(t):this._buildHovercard(t)}))})).catch((e=>{}))}_abortFetch(){this?.abortController&&this.abortController.abort()}_buildHovercard(e){if(this.glossaryHovercard=document.createElement("div"),this.glossaryHovercard.style.maxWidth=this.options.hovercard.maxWidth+"px",this.glossaryHovercardContent=document.createElement("div"),this.glossaryHovercardContent.classList.add("content"),this.glossaryHovercard.appendChild(this.glossaryHovercardContent),this.popperArrow=document.createElement("div"),this.popperArrow.setAttribute("data-popper-arrow",""),this.glossaryHovercard.appendChild(this.popperArrow),this.options.hovercard.interactive&&this.glossaryHovercard.addEventListener(this.showEvent,(()=>{this._clearHideTimeout(),this.glossaryHovercard?.addEventListener(this.hideEvent,(()=>{this._destroyHovercard(),this._abortFetch()}))})),this.glossaryHovercard.id=this.options.hovercard.id,this.options.hovercard.showLoadingAnimation){const e=document.createElement("span");e.classList.add("hovercard-loader"),this.glossaryHovercardContent.appendChild(e)}else this._updateHovercard(e);document.body.appendChild(this.glossaryHovercard),this.popper=fe(this.currentElement,this.glossaryHovercard,this.options.popperOptions)}_updateHovercard(e){this?.glossaryHovercard&&(this.glossaryHovercardContent.innerHTML=e,this.options.hovercard.showLoadingAnimation&&this.popper.update())}_destroyHovercard(){this.popper.destroy(),this.glossaryHovercard.parentNode.removeChild(this.glossaryHovercard),this.glossaryHovercard=null}_clearShowDelay(){this.showDelay&&(clearTimeout(this.showDelay),this.showDelay=null)}_clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}}},36:(e,t,o)=>{const{Glossary:r}=o(647);e.exports=r}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r=o(36);Glossary=r})();