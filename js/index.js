/**
 * JS鍒濆鍖栧簱
**/

/**
 * 甯歌鍩虹鍙橀噺锛屼篃鏄郴缁熺敤鍒扮殑鍙橀噺
 */
var basefile = "lifo.php";
var ctrl_id = "c";
var func_id = "f";
var webroot = "";
var apifile = "";
var wwwfile = "lifo.php";
var phpok_site_id = "1";
var site_id = "1";
var session_name = 'PHPSESSION';
var session_id = '2k64estcdhfmoif70badq2vh87';

//鏄惁鍚敤鐢佃皟
var biz_status = '1';


/**
 * 甯歌鍩虹鍙橀噺缁撴潫
 */


/**
 * 鍔犺浇璇█鍖�
 */
var lang = new Array();


/**
 * 缁撴潫璇█鍖�
 */

/**
 * 寮€濮嬪姞杞絁query锛屾敞鎰忥紝绯荤粺浼氬皾寮忔櫤鑳芥娴嬪姞杞界殑jquery鐗堟湰
 */

/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});


;(function($) {
	$.browser = {};
	$.browser.mozilla = false;
	$.browser.webkit = false;
	$.browser.opera = false;
	$.browser.msie = false;

	var nAgt = navigator.userAgent;
	$.browser.name = navigator.appName;
	$.browser.fullVersion = '' + parseFloat(navigator.appVersion);
	$.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset = nAgt.indexOf("Opera")) != -1) {
		$.browser.opera = true;
		$.browser.name = "Opera";
		$.browser.fullVersion = nAgt.substring(verOffset + 6);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			$.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
		$.browser.msie = true;
		$.browser.name = "Microsoft Internet Explorer";
		$.browser.fullVersion = nAgt.substring(verOffset + 5);
	}
	// In Chrome, the true version is after "Chrome"
	else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
		$.browser.webkit = true;
		$.browser.name = "Chrome";
		$.browser.fullVersion = nAgt.substring(verOffset + 7);
	}
	// In Safari, the true version is after "Safari" or after "Version"
	else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
		$.browser.webkit = true;
		$.browser.name = "Safari";
		$.browser.fullVersion = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			$.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In Firefox, the true version is after "Firefox"
	else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
		$.browser.mozilla = true;
		$.browser.name = "Firefox";
		$.browser.fullVersion = nAgt.substring(verOffset + 8);
	}
	// In most other browsers, "name/version" is at the end of userAgent
	else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
		(verOffset = nAgt.lastIndexOf('/'))) {
		$.browser.name = nAgt.substring(nameOffset, verOffset);
		$.browser.fullVersion = nAgt.substring(verOffset + 1);
		if ($.browser.name.toLowerCase() == $.browser.name.toUpperCase()) {
			$.browser.name = navigator.appName;
		}
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix = $.browser.fullVersion.indexOf(";")) != -1)
		$.browser.fullVersion = $.browser.fullVersion.substring(0, ix);
	if ((ix = $.browser.fullVersion.indexOf(" ")) != -1)
		$.browser.fullVersion = $.browser.fullVersion.substring(0, ix);

	$.browser.majorVersion = parseInt('' + $.browser.fullVersion, 10);
	if (isNaN($.browser.majorVersion)) {
		$.browser.fullVersion = '' + parseFloat(navigator.appVersion);
		$.browser.majorVersion = parseInt(navigator.appVersion, 10);
	}
	$.browser.version = $.browser.majorVersion;
})(jQuery);
/**
 * 缁撴潫鍔犺浇Jquery
 */

;(function($){
	$.phpokurl = {
		base:function(ctrl,func,ext,file)
		{
			var url = webroot + "" +file;
			var is_wen = true;
			if(ctrl && ctrl != 'index'){
				url += "?"+ctrl_id+"="+ctrl;
				is_wen = false;
			}
			if(func && func != 'index'){
				if(is_wen){
					url += "?";
					is_wen = false;
				}else{
					url += "&";
				}
				url += func_id+"="+func;
			}
			if(ext){
				url += is_wen ? ("?"+ext) : ("&"+ext);
			}
			if(phpok_site_id && site_id && phpok_site_id != site_id){
				url += is_wen ? ("?siteId="+phpok_site_id) : ("&siteId="+phpok_site_id);
			}
			return url;
		},
		plugin:function(id,efunc,ext,file)
		{
			var url = webroot+""+file+"?"+ctrl_id+"=plugin&"+func_id+"=exec";
			if(id){
				url += "&_phpokid="+id;
			}
			if(efunc){
				url += "&exec="+efunc;
			}
			if(ext){
				url += "&"+ext;
			}
			if(phpok_site_id && site_id && phpok_site_id != site_id){
				url += "&siteId="+phpok_site_id;
			}
			return url;
		}
	}
})(jQuery);

function get_url(ctrl,func,ext)
{
	return $.phpokurl.base(ctrl,func,ext,basefile);
}

function get_plugin_url(id,efunc,ext)
{
	return $.phpokurl.plugin(id,efunc,ext,basefile);
}


function www_url(ctrl,func,ext)
{
	return $.phpokurl.base(ctrl,func,ext,wwwfile);
}

function www_plugin_url(id,efunc,ext)
{
	return $.phpokurl.plugin(id,efunc,ext,wwwfile);
}

function api_url(ctrl,func,ext)
{
	return $.phpokurl.base(ctrl,func,ext,apifile);
}

function api_plugin_url(id,efunc,ext)
{
	return $.phpokurl.plugin(id,efunc,ext,apifile);
}
/**
 * 鑷畾涔夎〃鍗曚腑娑夊強鍒扮殑JS鎿嶄綔
**/

function phpok_form_password(id,len)
{
	var list = new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
	if(!len || len == "undefined") len = 8;
	var rand = "";
	for(var i = 0;i<len;i++)
	{
		var num = Math.floor(Math.random()*36+0);
		rand = rand + list[num];
	}
	var htm = "闅忔満瀵嗙爜锛�"+rand;
	$("#"+id+"_html").html(htm);
	$("#"+id).val(rand);
}

//琛ㄥ崟鎵╁睍鎸夐挳
//btn锛岀被鍨�
function phpok_btn_action(btn,id)
{
	if(btn == "image")
	{
		if(!id || id == "undefined")
		{
			$.dialog.alert("鏈寚瀹欼D");
			return false;
		}
		var url = get_url("open","input") + "&ext="+$.str.encode("png,jpg,gif,jpeg,bmp")+"&id="+id;
		$.dialog.open(url,{
			title: "鍥剧墖绠＄悊鍣�",
			lock : true,
			width: "80%",
			height: "70%",
			resize: false
		});
	}
}

function phpok_btn_view(btn,id)
{
	if(btn == "image")
	{
		var url = $("#"+id).val();
		if(!url || url == "undefined")
		{
			$.dialog.alert("鍥剧墖涓嶅瓨鍦紝璇峰湪琛ㄥ崟涓～鍐欏浘鐗囧湴鍧€");
		}
		else
		{
			$.dialog({
				"title":"棰勮",
				"content": '<img src="'+url+'" border="0" />',
				"lock":true
			});
		}
	}
}

//娓呯┖
function phpok_btn_clear(btn,id)
{
	$("#"+id).val("");
}

function _phpok_form_opt(val,id,eid,etype)
{
	if(!val || val == "undefined"){
		$("#"+id).html("").hide();
		return false;
	}
	var url = get_url("form","config") + "&id="+$.str.encode(val);
	if(eid && eid != "undefined"){
		url += "&eid="+eid;
	}
	if(etype && etype != "undefined"){
		url += "&etype="+etype;
	}
	$.phpok.ajax(url,function(rs){
		if(rs && rs != 'exit'){
			$("#"+id).html(rs).show();
		}
	});
}

function phpok_btn_editor_picture(id)
{
	var url = get_url("edit","picture") + "&input="+id;
	$.dialog.open(url,{
		"title" : "鍥剧墖搴�",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

function phpok_btn_editor_file(id)
{
	var url = get_url("edit","file") + "&input="+id+"&nopic=1";
	$.dialog.open(url,{
		"title" : "闄勪欢璧勬簮",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

function phpok_btn_editor_video(id)
{
	var url = get_url("edit","video") + "&input="+id+"&nopic=1";
	$.dialog.open(url,{
		"title" : "娣诲姞褰遍煶",
		"width" : "760px",
		"height" : "80%",
		"resize" : false,
		"lock" : true
	});
}

//鍒犻櫎鍗曚釜涓婚鍏宠仈
function phpok_title_delete_single(id)
{
	$("#"+id).val("");
	$("#title_"+id).hide();
	$("#layui-btn-"+id+"-delete").hide();
}

//鍒犻櫎澶氫釜涓婚鍏宠仈
function phpok_title_delete(id,val)
{
	if(val && val != "undefined")
	{
		//绉婚櫎DIV鍊�
		$("#"+id+"_div_"+val).remove();
		//绉婚櫎鍊�
		var c = $("#"+id).val();
		if(c == "" || c == "undefined")
		{
			$("#"+id+"_div").hide();
			$("#"+id+"_button_checkbox").hide();
			$("#"+id).val("");
			return true;
		}
		var clist = c.split(",");
		var n_list = new Array();
		var m = 0;
		for(var i=0;i<clist.length;i++)
		{
			if(clist[i] != val)
			{
				n_list[m] = clist[i];
				m++;
			}
		}
		if(n_list.length<1)
		{
			$("#"+id+"_div").hide();
			$("#"+id+"_button_checkbox").hide();
			$("#"+id).val("");
		}
		else
		{
			$("#"+id).val(n_list.join(","));
		}
		return true;
	}
	val = $.input.checkbox_join(id+"_div");
	if(!val || val == "undefined")
	{
		$.dialog.alert("璇烽€夋嫨瑕佸垹闄ょ殑淇℃伅");
		return false;
	}
	var lst = val.split(",");
	for(var i=0;i<lst.length;i++)
	{
		phpok_title_delete(id,lst[i]);
	}
	return true;
}

//閫夋嫨涓婚鍏宠仈
function phpok_title_select(project_id,is_multi,title,input)
{
	var url = get_url("inp","title","project_id="+$.str.encode(project_id));
	if(is_multi && is_multi != 'undefined'){
		url += "&multi=1";
		url += "&identifier="+$.str.encode(input);
		$.dialog.open(url,{
			"title" : title,
			"width" : "760px",
			"height" : "80%",
			"resize" : false,
			"lock" : true,
			"ok": function(){
				var data = $.dialog.data("title_data_"+input);
				if(data){
					$("#"+input).val(data);
					window.eval("action_"+input+"_show()");
				}
			}
		});
	}else{
		url += "&identifier="+$.str.encode(input);
		$.dialog.open(url,{
			"title" : title,
			"width" : "760px",
			"height" : "80%",
			"resize" : false,
			"lock" : true
		});
	}
}

function phpok_user_delete(id,val)
{
	//绉婚櫎DIV鍊�
	$("#"+id+"_div_"+val).remove();
	//绉婚櫎鍊�
	var c = $("#"+id).val();
	if(c == "" || c == "undefined")
	{
		$("#"+id+"_div").html("");
		$("#"+id).val("");
		return true;
	}
	var clist = c.split(",");
	var n_list = new Array();
	var m = 0;
	for(var i=0;i<clist.length;i++)
	{
		if(clist[i] != val)
		{
			n_list[m] = clist[i];
			m++;
		}
	}
	if(n_list.length<1)
	{
		$("#"+id+"_div").html("");
		$("#"+id).val("");
	}
	else
	{
		$("#"+id).val(n_list.join(","));
	}
	return true;
}

/* PHPOK缂栬緫鍣ㄦ墿灞曟寜閽睘鎬� */
function phpok_edit_type(id)
{
	var t = "#sMode_"+id;
	if($(t).val() == "鍙鍖�")
	{
		$(eval("pageInit_"+id+"()"));
		$(t).val("婧愪唬鐮�");
	}
	else
	{
		$("#"+id).xheditor(false);
		eval("CodeMirror_PHPOK_"+id+"()");
		$(t).val("鍙鍖�");
	}
}

function phpok_form_upload_attr_cate_id()
{
	var obj = $("select#cate_id").find("option:selected");
	var dataType = obj.attr('data-type');
	var name = $("#upload_name").val();
	var type = $("#upload_type").val();
	if(!dataType || dataType == 'undefined'){
		if(name == '' || name == 'undefined'){
			$("#upload_name").val('鍥剧墖');
		}
		if(type == '' || type == 'undefined'){
			$("#upload_type").val('jpg,png,gif');
		}
	}else{
		if(name == '' || name == 'undefined'){
			$("#upload_name").val(obj.text());
		}
		if(type == '' || type == 'undefined'){
			$("#upload_type").val(dataType);
		}
	}
	return true;
}

function go_to_page_action()
{
	var page = $("#go_to_page").val();
	if(!page){
		$.dialog.alert('璇疯緭鍏ヨ璺宠浆鐨勯〉鐮�');
		return false;
	}
	page = parseInt(page);
	if(page<1){
		page = 1;
	}
	var url = window.location.href;
	url = url.replace(/&pageid=\d+/g,"");
	url += "&pageid="+$.str.encode(page);
	$.phpok.go(url);
}

;(function($){

	var config = {
		'id':'phpok',
		'content':'',
		'url':'',
		'filetype':'jpg,png,gif'
	};
	var form = {
		init:function(opts)
		{
			config = $.extend({},config,opts);
			if(config.total<1){
				config.total = 10;
			}
			return form;
		}
	};
	$.phpokform = {
		upload_cate_create:function(id,name,filetypes){
			$.dialog.prompt(p_lang('璇疯緭鍏ュ垎绫诲悕绉�'),function(val){
				if(!val){
					$.dialog.alert(p_lang('鍒嗙被鍚嶇О涓嶈兘涓虹┖'));
					return false;
				}
				var url = config.url;
				var url = get_url('rescate','qcreate','title='+$.str.encode(val)+"&name="+$.str.encode(name)+"&filetypes="+$.str.encode(filetypes));
				$.phpok.json(url,function(data){
					if(data.status){
						var obj = $("select[name="+id+"_cateid]");
						obj.append("<option value='"+data.info+"'>"+val+"</option>");
						obj.find("option[value="+data.info+"]").attr("selected",true);
					}else{
						$.dialog.alert(data.info);
						return false;
					}
				});
			},'');
		},
		//鍥剧墖棰勮
		upload_preview:function(id)
		{
			$.dialog.open(get_url('upload','preview','id='+id),{
				'title':p_lang('棰勮闄勪欢淇℃伅'),
				'width':'700px',
				'height':'400px',
				'lock':true,
				'button': [{
					'name': p_lang('涓嬭浇鍘熸枃浠�'),
					'callback': function () {
						$.phpok.open(get_url('res','download','id='+id));
						return false;
					},
				}],
				'okVal':p_lang('鍏抽棴'),
				'ok':true
			});
		},
		upload_update:function(id)
		{
			$.dialog.open(get_url('upload','editopen','id='+id),{
				'title':p_lang('缂栬緫闄勪欢淇℃伅'),
				'width':'700px',
				'height':'400px',
				'lock':true,
				'okVal':p_lang('鎻愪氦'),
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert(p_lang('iframe杩樻病鍔犺浇瀹屾瘯鍛�'));
						return false;
					};
					iframe.save();
					return false;
				},
				'cancelVal':p_lang('鍙栨秷淇敼'),
				'cancel':function(){}
			});
		},
		upload_delete:function(identifier,id)
		{
			var fid = identifier;
			if(fid.substr(0,1) != '#' && fid.substr(0,1) != '.'){
				fid = '#'+fid;
			}
			var content = $(fid).val();
			if(!content || content == "undefined"){
				return true;
			}
			//鍒犻櫎鍗曚釜闄勪欢
			if(content == id){
				$(fid).val("");
				$(fid+"_list").fadeOut().html('');
				this.upload_remote_delete(identifier,id);
				return true;
			}
			var list = content.split(",");
			var newlist = new Array();
			var new_i = 0;
			for(var i=0;i<list.length;i++){
				if(list[i] != id){
					newlist[new_i] = list[i];
					new_i++;
				}
			}
			content = newlist.join(",");
			$(fid).val(content);
			this.upload_remote_delete(identifier,id);
			this.upload_showhtml(identifier,true);
		},
		upload_showhtml:function(identifier,multiple)
		{
			var self = this;
			var fid = identifier;
			if(fid.substr(0,1) != '#' && fid.substr(0,1) != '.'){
				fid = '#'+fid;
			}
			var id = $(fid).val();
			if(!id){
				$(fid+"_list").html('').fadeOut();
				return false;
			}
			var url = get_url('upload','thumbshow','id='+$.str.encode(id));
			$.phpok.json(url,function(rs){
				if(rs.status != 'ok'){
					$(fid).val('');
					$(fid+"_list").html('').fadeOut();
					return true;
				}
				var html = '';
				var index_i = 1;
				for(var i in rs.content){
					html += self.upload_html(identifier,rs.content[i],index_i,multiple);
					index_i++;
				}
				$(fid+"_list").html(html).show();
				if(!html){
					$(fid+"_list").html('').fadeOut();
					$(fid+"_sort").hide();
				}else{
					if(multiple){
						$(fid+"_sort").show();
					} else {
						$(fid+"_sort").hide();
					}
				}
				return true;
			});
		},
		upload_html:function(identifier,rs,i,multiple)
		{
			var fid = identifier;
			if(fid.substr(0,1) != '#' && fid.substr(0,1) != '.'){
				fid = '#'+fid;
			}
			var html = '<div class="'+identifier+'_thumb" name="_elist">';
			if(multiple){
				html += '<div class="sort"><input type="text" class="taxis" value="'+i+'" data="'+rs.id+'" title="'+rs.title+'" onclick="$(this).select()" tabindex="'+i+'" /></div>';
			}
			html += '<div style="text-align:center;"><img src="'+rs.ico+'" width="100" height="100" /></div>';
			html += '<div class="file-action" style="text-align:center;"><div class="button-group">';
			html += '	<input type="button" value="'+p_lang('淇敼')+'" class="phpok-btn" onclick="$.phpokform.upload_update(\''+rs.id+'\')" />';
			html += '	<input type="button" value="'+p_lang('棰勮')+'" class="phpok-btn" onclick="$.phpokform.upload_preview(\''+rs.id+'\')" />';
			html += '	<input type="button" value="'+p_lang('鍒犻櫎')+'" class="phpok-btn" onclick="$.phpokform.upload_delete(\''+identifier+'\',\''+rs.id+'\')" /></div>';
			html += '</div></div>';
			html += '</div>';
			return html;
		},
		upload_remote_delete:function(identifier,id)
		{
			var tmp = $.phpok.data('upload-'+identifier)
			if(!tmp || tmp == 'undefined'){
				return true;
			}
			var delete_status = false;
			if(tmp != id){
				var list = tmp.split(',');
				var newlist = new Array();
				var new_i = 0;
				for(var i=0;i<list.length;i++){
					if(list[i] != id){
						newlist[new_i] = list[i];
						new_i++;
					}else{
						delete_status = true;
					}
				}
				content = newlist.join(",");
				$.phpok.data('upload-'+identifier,content);
			} else {
				delete_status = true;
				$.phpok.undata('upload-'+identifier);
			}
			if(delete_status){
				var url = get_url('upload','delete','id='+id);
				$.phpok.json(url,function(){
					return true;
				});
			}
		},
		upload_select:function(identifier,cate_id,multiple)
		{
			var ml = (multiple && multiple != 'undefined' && multiple != 'false') ? 1 : 0;
			var url = get_url('open','upload','id='+identifier+"&multiple="+ml);
			if(cate_id && cate_id != 'undefined'){
				url += "&cate_id="+cate_id;
			}
			var t = "{$_rs.is_multiple ? 'true' : 'false'}";
			var old = $("#"+identifier).val();
			var doc_width = $(document).width();
			if(ml == 1){
				if(old){
					$.phpok.data('select-'+identifier,old);
				}
				$.dialog.open(url,{
					'title': p_lang('璧勬簮绠＄悊鍣�'),
					'lock' : true,
					'width': '64%',
					'height': '80%',
					'ok': true,
					'okVal':p_lang('鍏抽棴')
				});
				return true;
			}
			if(old){
				url += "&selected="+old;
			}
			$.dialog.open(url,{
				'title':p_lang('璧勬簮绠＄悊鍣�'),
				'width': '64%',
				'height': '80%',
				'lock' : true
			});
		},
		upload_sort:function(identifier,type)
		{
			var t = [];
			$("#"+identifier+"_list .taxis").each(function(i){
				if(type == 'title'){
					var val = $(this).attr('title');
				}else{
					var val = $(this).val();
				}
				var data = $(this).attr("data");
				t.push({"id":val,"data":data});
			});
			t = t.sort(function(a,b){
				return parseInt(a['id']) > parseInt(b['id']) ? 1 : -1
			});
			var list = new Array();
			for(var i in t){
				list[i] = t[i]['data'];
			}
			var val = list.join(",");
			$("#"+identifier).val(val);
			this.upload_showhtml(identifier,true);
		},
		param_type_setting:function(val,id){
			var old = $("#"+id).val();
			if(old){
				val = old+","+val;
			}
			$("#"+id).val(val);
		},
		param_type_set:function(v){
			if(v == 1){
				$("#p_name_type_html").show();
			}else{
				$("#p_name_type_html").hide();
			}
		},

		/**
		 * 鏂囨湰妗嗘梺杈圭殑鏃ユ湡鎸夐挳鎺т欢
		**/
		laydate_button:function(id,type)
		{
			layui.use('laydate',function(){
				var laydate = layui.laydate;
				laydate.render({
					elem:'#'+id,
					type:type,
					show: true,
					trigger: 'click',
					closeStop: '#btn_'+id+'_'+type
				});
			});
		},

		/**
		 * 鏍煎紡鍖栨棩鏈�
		**/
		laydate_format:function(id,type)
		{
			var info = $("#"+id).val();
			if(!info){
				return false;
			}
			info = info.replace("骞�",'-');
			info = info.replace("鏈�",'-');
			info = info.replace("鏃�",'');
			info = info.replace("鏃�",'-');
			info = info.replace("鍒�",'-');
			info = info.replace("绉�",'');
			if(type == 'date'){
				var tmp = info.replace('/','-');
				if(tmp != info){
					var list = info.split('/');
					if((list[0]).length != 4){
						info = list[2]+'-'+list[0]+'-'+list[1];
					}
				}
			}
			if(type == 'datetime'){
				info = info.replace('/','-');
			}
			$("#"+id).val(info);
			return true;
		},
		/**
		 * 娓呯┖鏂囨湰妗嗗唴瀹�
		**/
		clear:function(id){
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			return $(id).val('');
		},

		/**
		 * 鏂囦欢閫夋嫨鍣�
		**/
		text_button_file_select:function(id)
		{
			$.dialog.open(get_url("open","input","id="+id),{
				title: p_lang('闄勪欢绠＄悊鍣�'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 鏂囦欢涓嬭浇
		**/
		text_button_file_download:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('娌℃湁鍙笅杞界殑闄勪欢'));
				return false;
			}
			var url = get_url("res_action","download",'file='+$.str.encode(file));
			window.open(url);
		},

		/**
		 * 鍥剧墖閫夋嫨鍣�
		**/
		text_button_image_select:function(id)
		{
			$.dialog.open(get_url("open","input","id="+id+"&type=image"),{
				title: p_lang('鍥剧墖绠＄悊鍣�'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 鍥剧墖棰勮
		**/
		text_button_image_preview:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('娌℃湁鎸囧畾鍥剧墖'));
				return false;
			}
			var url = get_url("res_action","view",'file='+$.str.encode(file));
			$.dialog.open(url,{
				title: p_lang('棰勮鍥剧墖'),
				lock: true,
				width: '700px',
				height: '70%',
				resize: false,
				ok: true
			});
		},

		/**
		 * 瑙嗛閫夋嫨鍣�
		**/
		text_button_video_select:function(id)
		{
			var url = get_url("open","input","id="+id+"&type=video");
			$.dialog.open(url,{
				title: p_lang('瑙嗛绠＄悊鍣�'),
				lock : true,
				width: "700px",
				height: "70%"
			});
		},

		/**
		 * 瑙嗛棰勮
		**/
		text_button_video_preview:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var file = $(id).val();
			if(!file){
				$.dialog.alert(p_lang('娌℃湁鎸囧畾瑙嗛'));
				return false;
			}
			var url = get_url("res_action","video","file="+$.str.encode(file));
			$.dialog.open(url,{
				title: p_lang('瑙嗛棰勮'),
				lock: true,
				width: '670px',
				height: '510px',
				ok:true
			});
		},

		/**
		 * 缃戝潃閫夋嫨鍣�
		**/
		text_button_url_select:function(id)
		{
			var url = get_url("open","url","id="+id);
			$.dialog.open(url,{
				title: p_lang('缃戝潃绠＄悊鍣�'),
				lock : true,
				width: "700px",
				height: "70%"
			});
		},

		/**
		 * 缃戝潃棰勮
		**/
		text_button_url_open:function(id)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			var url = $(id).val();
			if(!url || url == "http://" || url == "https://"){
				$.dialog.alert(p_lang('鏈寚瀹氱綉鍧€'));
				return false;
			}
			window.open(url);
		},

		/**
		 * 浼氬憳閫夋嫨搴�
		**/
		text_button_user_select:function(id)
		{
			var url = get_url("open","user2","id="+id);
			$.dialog.open(url,{
				title: p_lang('鍠勫＋鍒楄〃'),
				lock : true,
				width: "700px",
				height: "70%",
				resize: false
			});
		},

		/**
		 * 蹇€熸彃鍏ユ枃鏈�
		**/
		text_button_quickwords:function(id,val,type)
		{
			if(id.substr(0,1) != '.' && id.substr(0,1) != '#'){
				id = '#'+id;
			}
			if(type && type == 'none'){
				$(id).val(val);
				return true;
			}
			var tmp = $(id).val();
			tmp = (tmp && tmp != 'undefined') ? (tmp+''+type+''+val) : val;
			$(id).val(tmp);
			return true;
		},

		/**
		 * 蹇€熸坊鍔犱富棰�
		 * @鍙傛暟 fid 瀛楁ID
		 * @鍙傛暟 input_id 琛ㄥ崟瀛楁鍚�
		 * @鍙傛暟 maxcount 鏈€澶ф暟閲忥紝榛樿涓�1
		**/
		extitle_quickadd:function(fid,input_id,maxcount)
		{
			if(!maxcount || maxcount == 'undefined'){
				maxcount = 1;
			}
			var str = $("input[name="+input_id+"]").val();
			if(str && str != 'undefined'){
				var list = str.split(",");
				var total = list.length;
				if(total >= maxcount){
					$.dialog.alert(p_lang('瓒呭嚭绯荤粺闄愬埗娣诲姞鐨勬暟閲�'));
					return false;
				}
			}
			var url = get_url('form','quickadd','id='+fid);
			$.dialog.open(url,{
				'title':p_lang('娣诲姞'),
				'width':'80%',
				'height':'70%',
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe杩樻病鍔犺浇瀹屾瘯鍛�');
						return false;
					};
					iframe.save();
					return false;
				},
				'lock':true,
				'okVal':p_lang('淇濆瓨'),
				'cancel':true
			});
		},

		/**
		 * 蹇€熺紪杈�
		**/
		extitle_quickedit:function(id,fid)
		{
			var url = get_url('form','quickadd','id='+fid+"&tid="+id);
			$.dialog.open(url,{
				'title':p_lang('缂栬緫 #'+id),
				'width':'80%',
				'height':'70%',
				'ok':function(){
					var iframe = this.iframe.contentWindow;
					if (!iframe.document.body) {
						alert('iframe杩樻病鍔犺浇瀹屾瘯鍛�');
						return false;
					};
					iframe.save();
					return false;
				},
				'lock':true,
				'okVal':p_lang('淇濆瓨'),
				'cancel':true
			});
		},

		extitle_list:function(fid,input_id,maxcount,ext)
		{
			if(!maxcount || maxcount == 'undefined'){
				maxcount = 1;
			}
			var str = $("input[name="+input_id+"]").val();
			if(str && str != 'undefined'){
				var list = str.split(",");
				var total = list.length;
				if(total >= maxcount){
					$.dialog.alert(p_lang('瓒呭嚭绯荤粺闄愬埗娣诲姞鐨勬暟閲�'));
					return false;
				}
			}
			var url = get_url('form','quicklist','id='+fid+"&maxcount="+maxcount);
			if(ext && ext != 'undefined'){
				var list = ext.split(',');
				var is_ok = true;
				for(var i in list){
					var val = $("#"+list[i]).val();
					if(val == ''){
						is_ok = false;
						var title = $("#form_html_"+list[i]+" .title").html();
						title = title.replace(/<span.+>.+<\/span>/g,'');
						title = title.replace("锛�",'');
						$.dialog.alert('璇峰厛閫夋嫨锛�'+title);
						break;
					}
					url += "&ext["+list[i]+"]="+$.str.encode(val);
				}
				if(!is_ok){
					return false;
				}
			}
			$.dialog.open(url,{
				'title':p_lang('閫夋嫨'),
				'width':'90%',
				'height':'80%',
				'ok':true,
				'lock':true,
				'okVal':p_lang('鍏抽棴')
			});
		},

		/**
		 * 閲嶈浇鎵╁睍瀛楁
		 * @鍙傛暟 id 妯″潡瀛楁ID
		 * @鍙傛暟 identifier 鏍囪瘑
		**/
		extitle_reload:function(id,identifier)
		{
			var url = get_url('form','redata','id='+id);
			var content = $("#"+identifier).val();
			if(content){
				url += "&content="+$.str.encode(content);
			}
			$.phpok.json(url,function(data){
				if(data.status){
					if(data.info){
						$("#"+identifier+"_edit_preview").html(data.info);
					}
					return true;
				}
				return true;
			})
		},

		/**
		 * 鍒犻櫎宸插瓨鍦ㄧ殑涓婚锛岄槻姝㈤噸澶嶇瓫閫�
		**/
		extitle_remove_selected:function(identifier)
		{
			var opener = $.dialog.opener;
			var content = opener.$("#"+identifier).val();
			if(content){
				var list = content.split(",");
				for(var i in list){
					$("#title_"+list[i]).remove();
				}
			}
		},

		/**
		 * 閫変腑宸插瓨鍦ㄤ富棰�
		 * @鍙傛暟 id 涓婚ID
		 * @鍙傛暟 pid 椤圭洰ID
		 * @鍙傛暟 identifier 瑕佹洿鏂扮殑鏍囪瘑鍐呭
		**/
		extitle_select_action:function(id,pid,identifier,maxcount)
		{
			if(!maxcount || maxcount == 'undefined'){
				maxcount = 9999;
			}
			maxcount = parseInt(maxcount);
			var opener = $.dialog.opener;
			var content = opener.$("#"+identifier).val();
			if(content){
				var tmp = content.split(",");
				if(tmp.length >= maxcount){
					$.dialog.alert(p_lang('瓒呭嚭绯荤粺闄愬埗娣诲姞鐨勬暟閲�'));
					return false;
				}
				content = content+","+id;
				var list = content.split(",");
				var rs = $.unique(list);
				content = rs.join(",");
				opener.$("#"+identifier).val(content);
			}else{
				opener.$("#"+identifier).val(id);
			}
			$("#title_"+id).remove();
			opener.$.phpokform.extitle_reload(pid,identifier);
			return true;
		},

		/**
		 * 鍚戝墠绉讳竴浣�
		**/
		extitle_sortup:function(obj,id,identifier)
		{
			var t = [];
			var old = $(obj).parent().parent().attr("data-id");
			var total = $(obj).parent().parent().attr('data-total');
			var string = "td[data-name=taxis-"+identifier+"-"+id+"]";
			var chk = $(string).eq(0).attr('data-id');
			$(string).each(function(i){
				var id = $(this).attr("data-id");
				if($(string).eq(i+1).attr('data-id') == old){
					var val = $(string).eq(i+1).attr("data-value");
				}else{
					if(id == old){
						var val = $(string).eq(i-1).attr('data-value');
					}else{
						var val = $(this).attr("data-value");
					}
				}
				t.push({"id":id,"sort":val});
			});
			t = t.sort(function(a,b){return parseInt(a['sort'])>parseInt(b['sort']) ? 1 : -1});
			var list = new Array();
			for(var i in t){
				list[i] = t[i]['id'];
			}
			var data = list.join(",");
			$("#"+identifier).val(data);
			this.extitle_reload(id,identifier);
		},

		/**
		 * 鍚戝悗绉讳竴浣�
		**/
		extitle_sortdown:function(obj,id,identifier)
		{
			var t = [];
			var old = $(obj).parent().parent().attr("data-id");
			var string = "td[data-name=taxis-"+identifier+"-"+id+"]";
			var chk = $(string).eq(0).attr('data-id');
			var num = 0;
			var old_value = 0;
			$(string).each(function(i){
				var id = $(this).attr("data-id");
				if(id == old){
					var val = $(string).eq(i+1).attr('data-value');
					num = i+1;
					old_value = $(this).attr('data-value');
				}else{
					if(id == $(string).eq(num).attr('data-id')){
						var val = old_value;
					}else{
						var val = $(this).attr('data-value');
					}
				}
				t.push({"id":id,"sort":val});
			});
			t = t.sort(function(a,b){return parseInt(a['sort'])>parseInt(b['sort']) ? 1 : -1});
			var list = new Array();
			for(var i in t){
				list[i] = t[i]['id'];
			}
			var data = list.join(",");
			$("#"+identifier).val(data);
			this.extitle_reload(id,identifier);
		},

		/**
		 * 鍒犻櫎鎿嶄綔
		**/
		extitle_delete:function(val,id,identifier)
		{
			var content = $("#"+identifier).val();
			if(!content || !val || val == '0' || content == '0' || val == 'undefined' || content == 'undefined'){
				return true;
			}
			if(content == val){
				$("#"+identifier).val('');
				this.extitle_reload(id,identifier);
				return true;
			}
			var list = content.split(',');
			var nlist = new Array();
			var m = 0;
			for(var i in list){
				if(list[i] != val){
					nlist[m] = list[i];
					m++;
				}
			}
			content = nlist.join(',');
			$("#"+identifier).val(content);
			var _self = this;
			$.phpok.json(get_url('form','quickdelete','fid='+id+"&id="+val),function(rs){
				if(rs.status){
					_self.extitle_reload(id,identifier);
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
		}
	};
})(jQuery);




/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function(t,e,i){t.noop=t.noop||function(){};var n,o,s,l,a=0,r=t(e),c=t(document),f=t("html"),u=document.documentElement,d=e.VBArray&&!e.XMLHttpRequest,h="createTouch"in document&&!("onmousemove"in u)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),p="artDialog"+ +new Date;var m=function(e,o,s){e=e||{};if(typeof e==="string"||e.nodeType===1){e={content:e,fixed:!h}}var l,r=m.defaults,c=e.follow=this.nodeType===1&&this||e.follow;for(var f in r){if(e[f]===i)e[f]=r[f]}t.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(t,n){e[t]=e[t]!==i?e[t]:e[n]});if(typeof c==="string")c=t(c)[0];e.id=c&&c[p+"follow"]||e.id||p+a;l=m.list[e.id];if(c&&l)return l.follow(c).zIndex().focus();if(l)return l.zIndex().focus();if(h)e.fixed=false;if(!t.isArray(e.button)){e.button=e.button?[e.button]:[]}if(o!==i)e.ok=o;if(s!==i)e.cancel=s;e.ok&&e.button.push({name:e.okVal,callback:e.ok,focus:true});e.cancel&&e.button.push({name:e.cancelVal,callback:e.cancel});m.defaults.zIndex=e.zIndex;a++;return m.list[e.id]=n?n._init(e):new m.fn._init(e)};m.fn=m.prototype={version:"4.1.7",closed:true,_init:function(t){var i=this,o,s=t.icon,l=s&&(d?{png:"icons/"+s+".png"}:{backgroundImage:"url('./images/warning.png')"});i.closed=false;i.config=t;i.DOM=o=i.DOM||i._getDOM();o.wrap.addClass(t.skin);o.close[t.cancel===false?"hide":"show"]();o.icon[0].style.display=s?"":"none";o.iconBg.css(l||{background:"none"});o.se.css("cursor",t.resize?"se-resize":"auto");o.title.css("cursor",t.drag?"move":"auto");o.content.css("padding",t.padding);i[t.show?"show":"hide"](true);i.button(t.button).title(t.title).content(t.content,true).size(t.width,t.height).time(t.time);t.follow?i.follow(t.follow):i.position(t.left,t.top);i.zIndex().focus();t.lock&&i.lock();i._addEvent();i._ie6PngFix();n=null;t.init&&t.init.call(i,e);return i},content:function(t){var e,n,o,s,l=this,a=l.DOM,r=a.wrap[0],c=r.offsetWidth,f=r.offsetHeight,u=parseInt(r.style.left),d=parseInt(r.style.top),h=r.style.width,p=a.content,m=p[0];l._elemBack&&l._elemBack();r.style.width="auto";if(t===i)return m;if(typeof t==="string"){p.html(t)}else if(t&&t.nodeType===1){s=t.style.display;e=t.previousSibling;n=t.nextSibling;o=t.parentNode;l._elemBack=function(){if(e&&e.parentNode){e.parentNode.insertBefore(t,e.nextSibling)}else if(n&&n.parentNode){n.parentNode.insertBefore(t,n)}else if(o){o.appendChild(t)}t.style.display=s;l._elemBack=null};p.html("");m.appendChild(t);t.style.display="block"}if(!arguments[1]){if(l.config.follow){l.follow(l.config.follow)}else{c=r.offsetWidth-c;f=r.offsetHeight-f;u=u-c/2;d=d-f/2;r.style.left=Math.max(u,0)+"px";r.style.top=Math.max(d,0)+"px"}if(h&&h!=="auto"){r.style.width=r.offsetWidth+"px"}l._autoPositionType()}l._ie6SelectFix();l._runScript(m);return l},title:function(t){var e=this.DOM,n=e.wrap,o=e.title,s="aui_state_noTitle";if(t===i)return o[0];if(t===false){o.hide().html("");n.addClass(s)}else{o.show().html(t||"");n.removeClass(s)}return this},position:function(t,e){var n=this,o=n.config,s=n.DOM.wrap[0],l=d?false:o.fixed,a=d&&n.config.fixed,f=c.scrollLeft(),u=c.scrollTop(),h=l?0:f,p=l?0:u,m=r.width(),g=r.height(),_=s.offsetWidth,v=s.offsetHeight,y=s.style;if(t||t===0){n._left=t.toString().indexOf("%")!==-1?t:null;t=n._toNumber(t,m-_);if(typeof t==="number"){t=a?t+=f:t+h;y.left=Math.max(t,h)+"px"}else if(typeof t==="string"){y.left=t}}if(e||e===0){n._top=e.toString().indexOf("%")!==-1?e:null;e=n._toNumber(e,g-v);if(typeof e==="number"){e=a?e+=u:e+p;y.top=Math.max(e,p)+"px"}else if(typeof e==="string"){y.top=e}}if(t!==i&&e!==i){n._follow=null;n._autoPositionType()}return n},size:function(t,e){var i,n,o,s,l=this,a=l.config,c=l.DOM,f=c.wrap,u=c.main,d=f[0].style,h=u[0].style;if(t){l._width=t.toString().indexOf("%")!==-1?t:null;i=r.width()-f[0].offsetWidth+u[0].offsetWidth;o=l._toNumber(t,i);t=o;if(typeof t==="number"){d.width="auto";h.width=Math.max(l.config.minWidth,t)+"px";d.width=f[0].offsetWidth+"px"}else if(typeof t==="string"){h.width=t;t==="auto"&&f.css("width","auto")}}if(e){l._height=e.toString().indexOf("%")!==-1?e:null;n=r.height()-f[0].offsetHeight+u[0].offsetHeight;s=l._toNumber(e,n);e=s;if(typeof e==="number"){h.height=Math.max(l.config.minHeight,e)+"px"}else if(typeof e==="string"){h.height=e}}l._ie6SelectFix();return l},follow:function(e){var i,n=this,o=n.config;if(typeof e==="string"||e&&e.nodeType===1){i=t(e);e=i[0]}if(!e||!e.offsetWidth&&!e.offsetHeight){return n.position(n._left,n._top)}var s=p+"follow",l=r.width(),a=r.height(),f=c.scrollLeft(),u=c.scrollTop(),h=i.offset(),m=e.offsetWidth,g=e.offsetHeight,_=d?false:o.fixed,v=_?h.left-f:h.left,y=_?h.top-u:h.top,x=n.DOM.wrap[0],b=x.style,w=x.offsetWidth,k=x.offsetHeight,M=v-(w-m)/2,D=y+g,T=_?0:f,O=_?0:u;M=M<T?v:M+w>l&&v-w>T?v-w+m:M;D=D+k>a+O&&y-k>O?y-k:D;b.left=M+"px";b.top=D+"px";n._follow&&n._follow.removeAttribute(s);n._follow=e;e[s]=o.id;n._autoPositionType();return n},button:function(){var e=this,n=arguments,o=e.DOM,s=o.buttons,l=s[0],a="aui_state_highlight",r=e._listeners=e._listeners||{},c=t.isArray(n[0])?n[0]:[].slice.call(n);if(n[0]===i)return l;t.each(c,function(i,n){var o=n.name,s=!r[o],c=!s?r[o].elem:document.createElement("button");if(!r[o])r[o]={};if(n.callback)r[o].callback=n.callback;if(n.className)c.className=n.className;if(n.focus){e._focus&&e._focus.removeClass(a);e._focus=t(c).addClass(a);e.focus()}c.setAttribute("type","button");c[p+"callback"]=o;c.disabled=!!n.disabled;if(s){c.innerHTML=o;r[o].elem=c;l.appendChild(c)}});s[0].style.display=c.length?"":"none";e._ie6SelectFix();return e},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this},close:function(){if(this.closed)return this;var t=this,i=t.DOM,o=i.wrap,s=m.list,l=t.config.close,a=t.config.follow;t.time();if(typeof l==="function"&&l.call(t,e)===false){return t}t.unlock();t._elemBack&&t._elemBack();o[0].className=o[0].style.cssText="";i.title.html("");i.content.html("");i.buttons.html("");if(m.focus===t)m.focus=null;if(a)a.removeAttribute(p+"follow");delete s[t.config.id];t._removeEvent();t.hide(true)._setAbsolute();for(var r in t){if(t.hasOwnProperty(r)&&r!=="DOM")delete t[r]}n?o.remove():n=t;return t},time:function(t){var e=this,i=e.config.cancelVal,n=e._timer;n&&clearTimeout(n);if(t){e._timer=setTimeout(function(){e._click(i)},1e3*t)}return e},focus:function(){try{if(this.config.focus){var t=this._focus&&this._focus[0]||this.DOM.close[0];t&&t.focus()}}catch(t){}return this},zIndex:function(){var t=this,e=t.DOM,i=e.wrap,n=m.focus,o=m.defaults.zIndex++;i.css("zIndex",o);t._lockMask&&t._lockMask.css("zIndex",o-1);n&&n.DOM.wrap.removeClass("aui_state_focus");m.focus=t;i.addClass("aui_state_focus");return t},setting:function(t,e){var i=this;if(t&&typeof t==="object"){for(var n in t){i.config[n]=t[n]}}if(t&&typeof t=="string"&&e&&typeof e!="undefined"){i.config[t]=e}return i},param:function(t,e){var i=this;if(t&&typeof t=="string"&&e&&typeof e!="undefined"){i.config[t]=e}return i},lock:function(){if(this._lock)return this;var e=this,i=m.defaults.zIndex-1,n=e.DOM.wrap,o=e.config,s=c.width(),l=c.height(),a=e._lockMaskWrap||t(document.body.appendChild(document.createElement("div"))),r=e._lockMask||t(a[0].appendChild(document.createElement("div"))),f="(document).documentElement",u=h?"width:"+s+"px;height:"+l+"px":"width:100%;height:100%",p=d?"position:absolute;left:expression("+f+".scrollLeft);top:expression("+f+".scrollTop);width:expression("+f+".clientWidth);height:expression("+f+".clientHeight)":"";e.zIndex();n.addClass("aui_state_lock");a[0].style.cssText=u+";position:fixed;z-index:"+i+";top:0;left:0;overflow:hidden;"+p;r[0].style.cssText="height:100%;background:"+o.background+";filter:alpha(opacity=0);opacity:0";if(d)r.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');r.stop();r.bind("click",function(){e._reset()}).bind("dblclick",function(){e._click(e.config.cancelVal)});if(o.duration===0){r.css({opacity:o.opacity})}else{r.animate({opacity:o.opacity},o.duration)}e._lockMaskWrap=a;e._lockMask=r;e._lock=true;return e},unlock:function(){var t=this,e=t._lockMaskWrap,i=t._lockMask;if(!t._lock)return t;var o=e[0].style;var s=function(){if(d){o.removeExpression("width");o.removeExpression("height");o.removeExpression("left");o.removeExpression("top")}o.cssText="display:none";n&&e.remove()};i.stop().unbind();t.DOM.wrap.removeClass("aui_state_lock");if(!t.config.duration){s()}else{i.animate({opacity:0},t.config.duration,s)}t._lock=false;return t},_getDOM:function(){var e=document.createElement("div"),i=document.body;e.style.cssText="position:absolute;left:0;top:0";e.innerHTML=m._templates;i.insertBefore(e,i.firstChild);var n,o=0,s={wrap:t(e)},l=e.getElementsByTagName("*"),a=l.length;for(;o<a;o++){n=l[o].className.split("aui_")[1];if(n)s[n]=t(l[o])}return s},_toNumber:function(t,e){if(!t&&t!==0||typeof t==="number"){return t}var i=t.length-1;if(t.lastIndexOf("px")===i){t=parseInt(t)}else if(t.lastIndexOf("%")===i){t=parseInt(e*t.split("%")[0]/100)}return t},_ie6PngFix:d?function(){var t=0,e,i,n,o,s=m.defaults.path+"/skins/",l=this.DOM.wrap[0].getElementsByTagName("*");for(;t<l.length;t++){e=l[t];i=e.currentStyle["png"];if(i){n=s+i;o=e.runtimeStyle;o.backgroundImage="none";o.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+n+"',sizingMethod='crop')"}}}:t.noop,_ie6SelectFix:d?function(){var t=this.DOM.wrap,e=t[0],i=p+"iframeMask",n=t[i],o=e.offsetWidth,s=e.offsetHeight;o=o+"px";s=s+"px";if(n){n.style.width=o;n.style.height=s}else{n=e.appendChild(document.createElement("iframe"));t[i]=n;n.src="about:blank";n.style.cssText="position:absolute;z-index:-1;left:0;top:0;"+"filter:alpha(opacity=0);width:"+o+";height:"+s}}:t.noop,_runScript:function(t){var e,i=0,n=0,o=t.getElementsByTagName("script"),s=o.length,l=[];for(;i<s;i++){if(o[i].type==="text/dialog"){l[n]=o[i].innerHTML;n++}}if(l.length){l=l.join("");e=new Function(l);e.call(this)}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(){d&&t(function(){var e="backgroundAttachment";if(f.css(e)!=="fixed"&&t("body").css(e)!=="fixed"){f.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}});return function(){var t=this.DOM.wrap,e=t[0].style;if(d){var i=parseInt(t.css("left")),n=parseInt(t.css("top")),o=c.scrollLeft(),s=c.scrollTop(),l="(document.documentElement)";this._setAbsolute();e.setExpression("left","eval("+l+".scrollLeft + "+(i-o)+') + "px"');e.setExpression("top","eval("+l+".scrollTop + "+(n-s)+') + "px"')}else{e.position="fixed"}}}(),_setAbsolute:function(){var t=this.DOM.wrap[0].style;if(d){t.removeExpression("left");t.removeExpression("top")}t.position="absolute"},_click:function(t){var i=this,n=i._listeners[t]&&i._listeners[t].callback;return typeof n!=="function"||n.call(i,e)!==false?i.close():i},_reset:function(t){var e,i=this,n=i._winSize||r.width()*r.height(),o=i._follow,s=i._width,l=i._height,a=i._left,c=i._top;if(t){e=i._winSize=r.width()*r.height();if(n===e)return}if(s||l)i.size(s,l);if(o){i.follow(o)}else if(a||c){i.position(a,c)}},_addEvent:function(){var t,i=this,n=i.config,o="CollectGarbage"in e,s=i.DOM;i._winResize=function(){t&&clearTimeout(t);t=setTimeout(function(){i._reset(o)},40)};r.bind("resize",i._winResize);s.wrap.bind("click",function(t){var e=t.target,o;if(e.disabled)return false;if(e===s.close[0]){i._click(n.cancelVal);return false}else{o=e[p+"callback"];o&&i._click(o)}i._ie6SelectFix()}).bind("mousedown",function(){i.zIndex()})},_removeEvent:function(){var t=this,e=t.DOM;e.wrap.unbind();r.unbind("resize",t._winResize)}};m.fn._init.prototype=m.fn;t.fn.dialog=t.fn.artDialog=function(){var t=arguments;this[this.live?"live":"bind"]("click",function(){m.apply(this,t);return false});return this};m.focus=null;m.get=function(t){return t===i?m.list:m.list[t]};m.list={};c.bind("keydown",function(t){var e=t.target,i=e.nodeName,n=/^INPUT|TEXTAREA$/,o=m.focus,s=t.keyCode;if(!o||!o.config.esc||n.test(i))return;s===27&&o._click(o.config.cancelVal)});l=e["_artDialog_path"]||function(t,e,i){for(e in t){if(t[e].src&&t[e].src.indexOf("artDialog")!==-1)i=t[e]}o=i||t[t.length-1];i=o.src.replace(/\\/g,"/");return i.lastIndexOf("/")<0?".":i.substring(0,i.lastIndexOf("/"))}(document.getElementsByTagName("script"));s=o.src.split("skin=")[1];if(s){var g=document.createElement("link");g.rel="stylesheet";g.href=l+"/skins/"+s+".css?"+m.fn.version;o.parentNode.insertBefore(g,o)}r.bind("load",function(){setTimeout(function(){if(a)return;m({left:"-9999em",time:9,fixed:false,lock:false,focus:false})},150)});try{document.execCommand("BackgroundImageCache",false,true)}catch(t){}m._templates='<div class="aui_outer">'+'<table class="aui_border">'+"<tbody>"+"<tr>"+'<td class="aui_nw"></td>'+'<td class="aui_n"></td>'+'<td class="aui_ne"></td>'+"</tr>"+"<tr>"+'<td class="aui_w"></td>'+'<td class="aui_c">'+'<div class="aui_inner">'+'<table class="aui_dialog">'+"<tbody>"+"<tr>"+'<td colspan="2" class="aui_header">'+'<div class="aui_titleBar">'+'<div class="aui_title"></div>'+'<a class="aui_close" href="javascript:/*artDialog*/;">'+"×"+"</a>"+"</div>"+"</td>"+"</tr>"+"<tr>"+'<td class="aui_icon">'+'<div class="aui_iconBg"></div>'+"</td>"+'<td class="aui_main">'+'<div class="aui_content"></div>'+"</td>"+"</tr>"+"<tr>"+'<td colspan="2" class="aui_footer">'+'<div class="aui_buttons"></div>'+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"+"</td>"+'<td class="aui_e"></td>'+"</tr>"+"<tr>"+'<td class="aui_sw"></td>'+'<td class="aui_s"></td>'+'<td class="aui_se"></td>'+"</tr>"+"</tbody>"+"</table>"+"</div>";m.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"消息",button:null,ok:null,cancel:null,init:null,close:null,okVal:"确定",cancelVal:"取消 ",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:l,lock:false,background:"#000",opacity:.7,duration:300,fixed:false,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};e.artDialog=t.dialog=t.artDialog=m})(this.art||this.jQuery&&(this.art=jQuery),this);(function(t){var e,i,n=t(window),o=t(document),s=document.documentElement,l=!("minWidth"in s.style),a="onlosecapture"in s,r="setCapture"in s;artDialog.dragEvent=function(){var t=this,e=function(e){var i=t[e];t[e]=function(){return i.apply(t,arguments)}};e("start");e("move");e("end")};artDialog.dragEvent.prototype={onstart:t.noop,start:function(t){o.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=t.clientX;this._sClientY=t.clientY;this.onstart(t.clientX,t.clientY);return false},onmove:t.noop,move:function(t){this._mClientX=t.clientX;this._mClientY=t.clientY;this.onmove(t.clientX-this._sClientX,t.clientY-this._sClientY);return false},onend:t.noop,end:function(t){o.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(t.clientX,t.clientY);return false}};i=function(t){var i,s,c,f,u,d,h=artDialog.focus,p=h.DOM,m=p.wrap,g=p.title,_=p.main;var v="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(t){}};e.onstart=function(t,i){if(d){s=_[0].offsetWidth;c=_[0].offsetHeight}else{f=m[0].offsetLeft;u=m[0].offsetTop}o.bind("dblclick",e.end);!l&&a?g.bind("losecapture",e.end):n.bind("blur",e.end);r&&g[0].setCapture();m.addClass("aui_state_drag");h.focus()};e.onmove=function(t,e){if(d){var n=m[0].style,o=_[0].style,l=t+s,a=e+c;n.width="auto";o.width=Math.max(0,l)+"px";n.width=m[0].offsetWidth+"px";o.height=Math.max(0,a)+"px"}else{var o=m[0].style,r=Math.max(i.minX,Math.min(i.maxX,t+f)),p=Math.max(i.minY,Math.min(i.maxY,e+u));o.left=r+"px";o.top=p+"px"}v();h._ie6SelectFix()};e.onend=function(t,i){o.unbind("dblclick",e.end);!l&&a?g.unbind("losecapture",e.end):n.unbind("blur",e.end);r&&g[0].releaseCapture();l&&!h.closed&&h._autoPositionType();m.removeClass("aui_state_drag")};d=t.target===p.se[0]?true:false;i=function(){var t,e,i=h.DOM.wrap[0],s=i.style.position==="fixed",l=i.offsetWidth,a=i.offsetHeight,r=n.width(),c=n.height(),f=s?0:o.scrollLeft(),u=s?0:o.scrollTop(),t=r-l+f;e=c-a+u;return{minX:f,minY:u,maxX:t,maxY:e}}();e.start(t)};o.bind("mousedown",function(t){var n=artDialog.focus;if(!n)return;var o=t.target,s=n.config,l=n.DOM;if(s.drag!==false&&o===l.title[0]||s.resize!==false&&o===l.se[0]){e=e||new artDialog.dragEvent;i(t);return false}})})(this.art||this.jQuery&&(this.art=jQuery));


/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(t,e,n,i){var o,a,r,c="@ARTDIALOG.DATA",l="@ARTDIALOG.OPEN",s="@ARTDIALOG.OPENER",f=e.name=e.name||"@ARTDIALOG.WINNAME"+ +new Date,u=e.VBArray&&!e.XMLHttpRequest;t(function(){!e.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"')});var d=n.top=function(){var t=e,n=function(t){try{var n=e[t].document;n.getElementsByTagName}catch(t){return false}return e[t].artDialog&&n.getElementsByTagName("frameset").length===0};if(n("top")){t=e.top}else if(n("parent")){t=e.parent}return t}();n.parent=d;o=d.artDialog;r=function(){return o.defaults.zIndex};n.data=function(t,e){var o=n.top,a=o[c]||{};o[c]=a;if(e!==i){a[t]=e}else{return a[t]}return a};n.removeData=function(t){var e=n.top[c];if(e&&e[t])delete e[t]};n.through=a=function(){var t=o.apply(this,arguments);if(d!==e)n.list[t.config.id]=t;return t};d!==e&&t(e).bind("unload",function(){var t=n.list,e;for(var i in t){if(t[i]){e=t[i].config;if(e)e.duration=0;t[i].close()}}});n.open=function(o,c,f){c=c||{};var d,p,m,h,v,y,g,x,w,b=n.top,D="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",k="width:100%;height:100%;border:none 0";if(f===false){var I=+new Date,T=o.replace(/([?&])_=[^&]*/,"$1_="+I);o=T+(T===o?(/\?/.test(o)?"&":"?")+"_="+I:"")}var A=function(){var e,n,i=p.content.find(".aui_loading"),o=d.config;m.addClass("aui_state_full");i&&i.hide();try{x=v.contentWindow;g=t(x.document);w=x.document.body}catch(t){v.style.cssText=k;o.follow?d.follow(o.follow):d.position(o.left,o.top);c.init&&c.init.call(d,x,b);c.init=null;return}e=o.width==="auto"?g.width()+(u?0:parseInt(t(w).css("marginLeft"))):o.width;n=o.height==="auto"?g.height():o.height;setTimeout(function(){v.style.cssText=k},0);d.size(e,n);o.follow?d.follow(o.follow):d.position(o.left,o.top);c.init&&c.init.call(d,x,b);c.init=null};var z={zIndex:r(),init:function(){d=this;p=d.DOM;h=p.main;m=p.content;v=d.iframe=b.document.createElement("iframe");v.src=o;v.name="Open"+d.config.id;v.style.cssText=D;v.setAttribute("frameborder",0,0);v.setAttribute("allowTransparency",true);y=t(v);d.content().appendChild(v);x=v.contentWindow;try{x.name=v.name;n.data(v.name+l,d);n.data(v.name+s,e)}catch(t){}y.bind("load",A)},close:function(){y.css("display","none").unbind("load",A);if(c.close&&c.close.call(this,v.contentWindow,b)===false){return false}m.removeClass("aui_state_full");y[0].src="about:blank";y.remove();try{n.removeData(v.name+l);n.removeData(v.name+s)}catch(t){}}};if(typeof c.ok==="function")z.ok=function(){return c.ok.call(d,v.contentWindow,b)};if(typeof c.cancel==="function")z.cancel=function(){return c.cancel.call(d,v.contentWindow,b)};delete c.content;for(var O in c){if(z[O]===i)z[O]=c[O]}return a(z)};n.open.api=n.data(f+l);n.opener=n.data(f+s)||e;n.open.origin=n.opener;n.close=function(){var t=n.data(f+l);t&&t.close();return false};d!=e&&t(document).bind("mousedown",function(){var t=n.open.api;t&&t.zIndex()});n.load=function(e,n,o){o=o||false;var c=n||{};var l={zIndex:r(),init:function(n){var i=this,a=i.config;t.ajax({url:e,success:function(t){i.content(t);c.init&&c.init.call(i,n)},cache:o})}};delete n.content;for(var s in c){if(l[s]===i)l[s]=c[s]}return a(l)};n.alert=function(t,e,n){if(typeof e==="string"){n=e;e=true}n=n||"warning";return a({id:"Alert",zIndex:r(),icon:n,fixed:true,lock:true,content:t,ok:true,close:e})};n.confirm=function(t,e,n){return a({id:"Confirm",zIndex:r(),icon:"question",fixed:true,lock:true,opacity:.1,content:t,ok:function(t){return e.call(this,t)},cancel:function(t){return n&&n.call(this,t)}})};n.prompt=function(t,e,n){n=n||"";var i;return a({id:"Prompt",zIndex:r(),icon:"question",fixed:true,lock:true,opacity:.1,content:['<div style="margin-bottom:5px;font-size:12px">',t,"</div>","<div>",'<input value="',n,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){i=this.DOM.content.find("input")[0];i.select();i.focus()},ok:function(t){return e&&e.call(this,i.value,t)},cancel:true})};n.tips=function(t,e,n){if(typeof e==="function"){n=e;e=1.5}return a({id:"Tips",zIndex:r(),title:false,cancel:false,fixed:true,lock:false,close:function(){return n&&n.call(this,n)}}).content('<div style="padding: 0 1em;">'+t+"</div>").time(e||1.5)};n.notice=function(e){var o=e||{},a,r,c,l,s,f=800;var u={id:"Notice",left:"100%",top:"100%",fixed:true,drag:false,resize:false,follow:null,lock:false,init:function(t){a=this;r=a.config;l=a.DOM.wrap;s=parseInt(l[0].style.top);c=s+l[0].offsetHeight;l.css("top",c+"px").animate({top:s+"px"},f,function(){o.init&&o.init.call(a,t)})},close:function(e){l.animate({top:c+"px"},f,function(){o.close&&o.close.call(this,e);r.close=t.noop;a.close()});return false}};for(var d in o){if(u[d]===i)u[d]=o[d]}return n(u)};t(function(){var i=n.dragEvent;if(!i)return;var o=t(e),a=t(document),r=u?"absolute":"fixed",c=i.prototype,l=document.createElement("div"),s=l.style;s.cssText="display:none;position:"+r+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(l);c._start=c.start;c._end=c.end;c.start=function(){var t=n.focus.DOM,e=t.main[0],i=t.content[0].getElementsByTagName("iframe")[0];c._start.apply(this,arguments);s.display="block";s.zIndex=n.defaults.zIndex+3;if(r==="absolute"){s.width=o.width()+"px";s.height=o.height()+"px";s.left=a.scrollLeft()+"px";s.top=a.scrollTop()+"px"}if(i&&e.offsetWidth*e.offsetHeight>307200){e.style.visibility="hidden"}};c.end=function(){var t=n.focus;c._end.apply(this,arguments);s.display="none";if(t)t.DOM.main[0].style.visibility="visible"}})})(this.art||this.jQuery,this,this.artDialog);


(function (config) {
	config["title"] = "消息";
	config["okVal"] = "确定";
	config["cancelVal"] = "取消";
})(art.dialog.defaults);


	
	/**
	 * jQuery MD5 hash algorithm function
	 * 
	 * 	<code>
	 * 		Calculate the md5 hash of a String 
	 * 		String $.md5 ( String str )
	 * 	</code>
	 * 
	 * Calculates the MD5 hash of str using the 禄 RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash. 
	 * MD5 (Message-Digest algorithm 5) is a widely-used cryptographic hash function with a 128-bit hash value. MD5 has been employed in a wide variety of security applications, and is also commonly used to check the integrity of data. The generated hash is also non-reversable. Data cannot be retrieved from the message digest, the digest uniquely identifies the data.
	 * MD5 was developed by Professor Ronald L. Rivest in 1994. Its 128 bit (16 byte) message digest makes it a faster implementation than SHA-1.
	 * This script is used to process a variable length message into a fixed-length output of 128 bits using the MD5 algorithm. It is fully compatible with UTF-8 encoding. It is very useful when u want to transfer encrypted passwords over the internet. If you plan using UTF-8 encoding in your project don't forget to set the page encoding to UTF-8 (Content-Type meta tag). 
	 * This function orginally get from the WebToolkit and rewrite for using as the jQuery plugin.
	 * 
	 * Example
	 * 	Code
	 * 		<code>
	 * 			$.md5("I'm Persian."); 
	 * 		</code>
	 * 	Result
	 * 		<code>
	 * 			"b8c901d0f02223f9761016cfff9d68df"
	 * 		</code>
	 * 
	 * @alias Muhammad Hussein Fattahizadeh < muhammad [AT] semnanweb [DOT] com >
	 * @link http://www.semnanweb.com/jquery-plugin/md5.html
	 * @see http://www.webtoolkit.info/
	 * @license http://www.gnu.org/licenses/gpl.html [GNU General Public License]
	 * @param {jQuery} {md5:function(string))
	 * @return string
	 */
	
	(function($){
		
		var rotateLeft = function(lValue, iShiftBits) {
			return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
		}
		
		var addUnsigned = function(lX, lY) {
			var lX4, lY4, lX8, lY8, lResult;
			lX8 = (lX & 0x80000000);
			lY8 = (lY & 0x80000000);
			lX4 = (lX & 0x40000000);
			lY4 = (lY & 0x40000000);
			lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
			if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
			if (lX4 | lY4) {
				if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
				else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ lX8 ^ lY8);
			}
		}
		
		var F = function(x, y, z) {
			return (x & y) | ((~ x) & z);
		}
		
		var G = function(x, y, z) {
			return (x & z) | (y & (~ z));
		}
		
		var H = function(x, y, z) {
			return (x ^ y ^ z);
		}
		
		var I = function(x, y, z) {
			return (y ^ (x | (~ z)));
		}
		
		var FF = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var GG = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var HH = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var II = function(a, b, c, d, x, s, ac) {
			a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
			return addUnsigned(rotateLeft(a, s), b);
		};
		
		var convertToWordArray = function(string) {
			var lWordCount;
			var lMessageLength = string.length;
			var lNumberOfWordsTempOne = lMessageLength + 8;
			var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
			var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
			var lWordArray = Array(lNumberOfWords - 1);
			var lBytePosition = 0;
			var lByteCount = 0;
			while (lByteCount < lMessageLength) {
				lWordCount = (lByteCount - (lByteCount % 4)) / 4;
				lBytePosition = (lByteCount % 4) * 8;
				lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
				lByteCount++;
			}
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
			lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
			lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
			return lWordArray;
		};
		
		var wordToHex = function(lValue) {
			var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
			for (lCount = 0; lCount <= 3; lCount++) {
				lByte = (lValue >>> (lCount * 8)) & 255;
				WordToHexValueTemp = "0" + lByte.toString(16);
				WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
			}
			return WordToHexValue;
		};
		
		var uTF8Encode = function(string) {
			string = string.replace(/\x0d\x0a/g, "\x0a");
			var output = "";
			for (var n = 0; n < string.length; n++) {
				var c = string.charCodeAt(n);
				if (c < 128) {
					output += String.fromCharCode(c);
				} else if ((c > 127) && (c < 2048)) {
					output += String.fromCharCode((c >> 6) | 192);
					output += String.fromCharCode((c & 63) | 128);
				} else {
					output += String.fromCharCode((c >> 12) | 224);
					output += String.fromCharCode(((c >> 6) & 63) | 128);
					output += String.fromCharCode((c & 63) | 128);
				}
			}
			return output;
		};
		
		$.extend({
			md5: function(string) {
				var x = Array();
				var k, AA, BB, CC, DD, a, b, c, d;
				var S11=7, S12=12, S13=17, S14=22;
				var S21=5, S22=9 , S23=14, S24=20;
				var S31=4, S32=11, S33=16, S34=23;
				var S41=6, S42=10, S43=15, S44=21;
				string = uTF8Encode(string);
				x = convertToWordArray(string);
				a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
				for (k = 0; k < x.length; k += 16) {
					AA = a; BB = b; CC = c; DD = d;
					a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
					d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
					c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
					b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
					a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
					d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
					c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
					b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
					a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
					d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
					c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
					b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
					a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
					d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
					c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
					b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
					a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
					d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
					c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
					b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
					a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
					d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
					c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
					b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
					a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
					d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
					c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
					b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
					a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
					d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
					c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
					b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
					a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
					d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
					c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
					b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
					a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
					d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
					c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
					b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
					a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
					d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
					c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
					b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
					a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
					d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
					c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
					b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
					a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
					d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
					c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
					b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
					a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
					d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
					c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
					b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
					a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
					d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
					c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
					b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
					a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
					d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
					c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
					b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
					a = addUnsigned(a, AA);
					b = addUnsigned(b, BB);
					c = addUnsigned(c, CC);
					d = addUnsigned(d, DD);
				}
				var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
				return tempValue.toLowerCase();
			}
		});
	})(jQuery);

/**
 * PHPOK绋嬪簭涓父鐢ㄥ埌鐨凧S锛屽皝瑁呭湪姝�
 * @浣滆€� qinggan <admin@phpok.com>
 * @鐗堟潈 娣卞湷甯傞敓閾荤鎶€鏈夐檺鍏徃
 * @缃戠珯 http://www.phpok.com
 * @鐗堟湰 4.x
 * @鎺堟潈 GNU Lesser General Public License (LGPL)
 * @鏃ユ湡 2017骞�04鏈�18鏃�
**/

;(function($){
	$.phpok = {

		/**
		 * 鍒锋柊褰撳墠椤甸潰锛屼娇鐢ㄦ柟娉曪細$.phpok.refresh();
		**/
		refresh: function()
		{
			window.location.reload(true);
		},

		/**
		 * 鍒锋柊椤甸潰鍒悕锛屼娇鐢ㄦ柟娉曪細$.phpok.reload();
		**/
		reload:function()
		{
			this.refresh();
		},

		/**
		 * 璺宠浆鍒扮洰鏍囩綉鍧€
		 * @鍙傛暟 url 瑕佽烦杞埌鐨勭綉鍧€
		 * @鍙傛暟 nocache 鏄惁绂佹缂撳瓨锛岃缃笖涓簍rue鏃讹紝绋嬪簭浼氬湪缃戝潃鍚庨潰琛ュ_noCache鍙傛暟
		**/
		go: function(url,nocache)
		{
			if(!url){
				return false;
			}
			if(nocache || nocache == 'undefined'){
				url = this.nocache(url);
			}
			window.location.href = url;
		},

		/**
		 * 寮瑰嚭绐楀彛
		 * @鍙傛暟 url 瑕佸脊鍑虹獥鍙ｇ殑缃戝潃
		 * @鍙傛暟 nocache 鏄惁绂佹缂撳瓨锛岃缃笖涓簍rue鏃讹紝绋嬪簭浼氬湪缃戝潃鍚庨潰琛ュ_noCache鍙傛暟
		**/
		open:function(url,nocache)
		{
			if(!url){
				return false;
			}
			if(nocache || nocache == 'undefined'){
				url = this.nocache(url);
			}
			window.open(url);
		},

		/**
		 * 璇诲彇Ajax鐨勫唴瀹癸紝璇诲嚭鏉ョ殑鍐呭涓篽tml
		 * @鍙傛暟 url 鐩爣缃戝潃
		 * @鍙傛暟 obj 鎵ц鏂规硶锛屼负绌烘垨鏈缃紝鍒欒繑鍥濰TML浠ｇ爜锛屾鏃朵负鍚屾璇锋眰
		**/
		ajax:function(url,obj,postData)
		{
			if(!url){
				return false;
			}
			var cls = {'url':url,'cache':false,'dataType':'html'};
			if(postData && postData != 'undefined'){
				cls.data = postData;
				cls.type = 'post';
			}
			cls.beforeSend = function(request){
				request.setRequestHeader("request_type","ajax");
				request.setRequestHeader("phpok_ajax",1);
				if(session_name && session_name != 'undefined'){
					request.setRequestHeader(session_name,$.cookie.get(session_name));
				}
			};
			if(!obj || obj == 'undefined'){
				cls.async = false;
				return $.ajax(cls).responseText;
			}
			cls.success = function(rs){(obj)(rs)};
			$.ajax(cls);
		},

		/**
		 * 璇诲彇 Ajax 鍐呭锛岃繑鍥濲SON鏁版嵁
		 * @鍙傛暟 url 鐩爣缃戝潃
		 * @鍙傛暟 obj 鎵ц鏂规硶锛屼负绌烘垨鏈缃紝鍒欒繑鍥濲SON瀵硅薄锛屾鏃朵负鍚屾璇锋眰
		**/
		json:function(url,obj,postData)
		{
			if(!url){
				return false;
			}
			var self = this;
			var cls = {'url':url,'cache':false,'dataType':'json'};
			if(postData && postData != 'undefined'){
				cls.data = postData;
				cls.type = 'post';
			}
			cls.beforeSend = function(request){
				request.setRequestHeader("request_type","ajax");
				request.setRequestHeader("phpok_ajax",1);
				if(!postData || postData == 'undefined'){
					request.setRequestHeader("content-type","application/json");
				}
				if(session_name && session_name != 'undefined'){
					request.setRequestHeader(session_name,$.cookie.get(session_name));
				}
			};
			if(!obj || obj == 'undefined'){
				cls.async = false;
				var info = $.ajax(cls).responseText;
				return self.json_decode(info);
			}
			if(typeof obj == 'boolean'){
				cls.success = function(rs){
					return true;
				}
			}else{
				cls.success = function(rs){
					(obj)(rs);
				};
			}
			$.ajax(cls);
		},

		/**
		 * 鏍煎紡鍖栫綉鍧€锛屽鍔燺noCache灏惧反锛屼互淇濊瘉涓嶄粠缂撳瓨涓鍙栨暟鎹�
		 * @鍙傛暟 url 瑕佹牸寮忓寲鐨勭綉鍧€
		**/
		nocache: function(url)
		{
			url = url.replace(/&amp;/g,'&');
			if(url.indexOf('_noCache') != -1){
				url = url.replace(/\_noCache=[0-9\.]+/,'_noCache='+Math.random());
			}else{
				url += url.indexOf('?') != -1 ? '&' : '?';
				url += '_noCache='+Math.random();
			}
			return url;
		},


		json_encode:function(obj)
		{
			if(!obj || obj == 'undefined'){
				return false;
			}
			return JSON.stringify(obj);
		},


		json_decode:function(str)
		{
			if(!str || str == 'undefined'){
				return false;
			}
			return $.parseJSON(str);
		},

		/**
		 * 鐢熸垚闅忔満鏁�
		 * @鍙傛暟 len 闀垮害锛岀暀绌轰娇鐢ㄩ暱搴�10
		 * @鍙傛暟 type 绫诲瀷锛屾敮鎸� letter,num,fixed,all锛屽叾涓� fixed 琛ㄧず瀛楁瘝鏁板瓧娣峰悎锛宎ll 琛ㄧず瀛楁瘝锛屾暟瀛楋紝鍙婄壒娈婄鍙凤紝letter 琛ㄧず瀛楁瘝锛宯um 琛ㄧず鏁板瓧
		**/
		rand:function(len,type)
		{
			len = len || 10;
			if(!type || type == 'undefined'){
				type = 'letter';
			}
			var types = {'letter':'abcdefhijkmnprstwxyz','num':'0123456789','fixed':'abcdefhijkmnprstwxyz0123456789','all':'abcdefhijkmnprstwxyz0123456789-,.*!@#$%=~'}
			if(type != 'letter' && type != 'num' && type != 'all' && type != 'fixed'){
				type = 'letter';
			}
			var string = types[type];
			var length = string.length;
			var val = '';
			for (i = 0; i < len; i++) {
				val += string.charAt(Math.floor(Math.random() * length));
			}
			return val;
		},
		/**
		 * 鍚戦《灞傚彂閫佹秷鎭�
		 * @鍙傛暟 info 瑕佸彂閫佺殑鏂囨湰娑堟伅锛屾敞鎰忥紝浠呴檺鏂囨湰
		**/
		message:function(info,url)
		{
			try{
				if(url && url != 'undefined'){

					$("iframe").each(function(i){
						var src = $(this).attr('src');
						if(typeof url == 'boolean'){
							var obj = $(this)[0].contentWindow;
							obj.postMessage(info,window.location.origin);
						}else{
							if(url.indexOf(src) != -1){
								var obj = $(this)[0].contentWindow;
								obj.postMessage(info,url)
							}
						}
					});
				}else{
					window.top.postMessage(info,top.window.location.origin);
				}
			} catch (error) {
				console.log(error);
				return false;
			}
		},
		data:function(id,val)
		{
			if(val && val != 'undefined'){
				localStorage.setItem(id,val);
				return true;
			}
			var info = localStorage.getItem(id);
			if(!info || info == 'undefined'){
				return false;
			}
			return info;
		},
		undata:function(id)
		{
			localStorage.removeItem(id);
		}
	};

	/**
	 * JSON瀛椾覆涓庡璞¤浆鎹㈡搷浣�
	**/
	$.json = {

		/**
		 * 瀛楃涓茶浆瀵硅薄
		 * @鍙傛暟 str 瑕佽浆鍖栫殑瀛楃涓�
		**/
		decode:function(str)
		{
			if(!str || str == 'undefined'){
				return false;
			}
			return JSON.parse(str);
		},

		/**
		 * 瀵硅薄杞垚瀛楃涓�
		 * @鍙傛暟 obj 瑕佽浆鍖栫殑瀵硅薄
		**/
		encode:function(obj)
		{
			if(!obj || obj == 'undefined'){
				return false;
			}
			return JSON.stringify(obj);
		}
	};

	$.checkbox = {
		_obj:function(id)
		{
			if(id && id != 'undefined' && typeof id == 'string'){
				if(id.match(/^[a-zA-Z0-9\-\_]{1,}$/)){
					if($("#"+id).is('input')){
						return $("#"+id);
					}
					return $("#"+id+" input[type=checkbox]");
				}
				if($(id).is('input')){
					return $(id);
				}
				return $(id+" input[type=checkbox]");
			}
			return $("input[type=checkbox]");
		},

		/**
		 * 鍏ㄩ€�
		 * @鍙傛暟 id 瑕佹搷浣滅殑ID
		**/
		all:function(id)
		{
			var obj = this._obj(id);
			obj.prop('checked',true);
            window.setTimeout("layui.form.render('checkbox')",100);
			return true;
		},

		/**
		 * 杩斿厛
		 * @鍙傛暟 id 瑕佹搷浣滅殑ID
		**/
		none:function(id)
		{
			var obj = this._obj(id);
			obj.removeAttr('checked');
            window.setTimeout("layui.form.render('checkbox')",100);
			return true;
		},

		/**
		 * 鏇村閫夋嫨锛岄粯璁ゅ彧閫�5涓紙count榛樿鍊间负5锛� $.checkbox.more(id,5);
		 * @鍙傛暟 id 瑕佹搷浣滅殑ID
		 * @鍙傛暟 count 姣忔娆℃渶澶氶€夊嚑涓�
		**/
		more: function(id,count){
			var obj = this._obj(id);
			var num = 0;
			if(!count || count == 'undefined' || parseInt(count)<5){
				count = 5;
			}
			obj.each(function(){
				if(!$(this).is(":checked") && num<count){
					$(this).prop("checked",true);
					num++;
				}
			});
            window.setTimeout("layui.form.render('checkbox')",100)
			return true;
		},

		/**
		 * 鍙嶉€夛紝璋冪敤鏂规硶锛�$.checkbox.anti(id);
		 * @鍙傛暟 id 瑕佹搷浣滅殑ID
		**/
		anti:function(id)
		{
			var t = this._obj(id);
			t.each(function(i){
				if($(this).is(":checked")){
					$(this).removeAttr('checked');
				}else{
					$(this).prop('checked',true);
				}
				window.setTimeout("layui.form.render('checkbox')",100)
			});
		},

		/**
		 * 鍚堝苟澶嶉€夋鍊间俊鎭�
		 * @鍙傛暟 id 瑕佹搷浣滅殑ID
		 * @鍙傛暟 type 瑕佹敮鎸佸悎鍏崇殑瀛楃
		 * @鍙傛暟 str 瑕佽繛鎺ョ殑瀛楃锛屼负绌烘垨鏈缃娇鐢ㄨ嫳鏂囬€楀彿闅斿紑
		**/
		join:function(id,type,str)
		{
			var cv = this._obj(id);
			var idarray = new Array();
			var m = 0;
			cv.each(function(){
				if(type == "all"){
					idarray[m] = $(this).val();
					m++;
				}else if(type == "unchecked" && !$(this).is(':checked')){
					idarray[m] = $(this).val();
					m++;
				}else{
					if($(this).is(':checked')){
						idarray[m] = $(this).val();
						m++;
					}
				}
			});
			var linkid = (str && str != 'undefined') ? str : ',';
			var tid = idarray.join(linkid);
			return tid;
		}
	}

	/**
	 * 瀛楃涓茬浉鍏虫搷浣�
	**/
	$.str = {

		/**
		 * 瀛楃涓插悎骞讹紝鐢ㄨ嫳鏂囬€楀彿闅斿紑
		 * @鍙傛暟 str1 瑕佸悎骞剁殑瀛楃涓�1
		 * @鍙傛暟 str2 瑕佸悎骞剁殑瀛楃涓�2
		**/
		join: function(str1,str2){
			var string = '';
			if(!str1 || str1 == 'undefined'){
				if(!str2 || str2 == 'undefined'){
					return false;
				}
				string = str2;
			}
			if(str1 && str1 != 'undefined'){
				if(!str2 || str2 == 'undefined'){
					string = str1;
				}else{
					string = str1 + "," + str2;
				}
			}
			if(string == ''){
				return false;
			}
			var array = string.split(",");
			array = $.unique(array);
			string = array.join(",");
			return string ? string : false;
		},

		/**
		 * 瀛楃涓叉爣璇嗙妫€娴�
		 * @鍙傛暟 str 瑕佹娴嬬殑瀛楃涓�
		 * @杩斿洖 true 鎴� false
		**/
		identifier: function(str){
			//楠岃瘉鏍囪瘑涓诧紝PHPOK绯荤粺涓紝澶ч噺浣跨敤鏍囪瘑涓诧紝灏嗘妫€娴嬪悎骞惰繘鏉�
			var chk = /^[A-Za-z]+[a-zA-Z0-9_\-]*$/;
			return chk.test(str);
		},

		/**
		 * 缃戝潃甯歌缂栫爜
		 * @鍙傛暟 str 瑕佺紪鐮佺殑瀛楃涓�
		**/
		encode: function(str){
			return encodeURIComponent(str);
		}
	};

	/**
	 * 鐢盤HPOK缂栧啓鐨勫熀浜巎Query鐨凜ookie鎿嶄綔
	 * 璇诲彇cookie淇℃伅 $.cookie.get("鍙橀噺鍚�");
	 * 璁剧疆cookie淇℃伅
	 * 鍒犻櫎Cookie淇℃伅 $.cookie.del("鍙橀噺鍚�");
	**/
	$.cookie = {

		/**
		 * 鍙栧緱 Cookie 淇℃伅 $.cookie.get('鍙橀噺鍚�')
		 * @鍙傛暟 name 瑕佽幏鍙栫殑 cookie 鍙橀噺涓殑鏍囪瘑
		**/
		get: function(name)
		{
			var cookieValue = "";
			var search = name + "=";
			if(document.cookie.length > 0){
				var offset = document.cookie.indexOf(search);
				if (offset != -1){
					offset += search.length;
					var end = document.cookie.indexOf(";", offset);
					if (end == -1){
						end = document.cookie.length;
					}
					cookieValue = unescape(document.cookie.substring(offset, end));
					end = null;
				}
				search = offset = null;
			}
			return cookieValue;
		},

		/**
		 * 璁剧疆 Cookie 淇℃伅 $.cookie.set("鍙橀噺鍚�","鍊�","杩囨湡鏃堕棿");
		 * @鍙傛暟 cookieName 鍙橀噺鍚�
		 * @鍙傛暟 cookieValue 鍙橀噺鍐呭
		 * @鍙傛暟 DayValue 杩囨湡鏃堕棿锛岄粯璁ゆ槸1澶╋紝鍗曚綅鏄ぉ
		 * @杩斿洖
		 * @鏇存柊鏃堕棿
		**/
		set: function(cookieName,cookieValue,DayValue)
		{
			var expire = "";
			var day_value=1;
			if(DayValue!=null){
				day_value=DayValue;
			}
			expire = new Date((new Date()).getTime() + day_value * 86400000);
			expire = "; expires=" + expire.toGMTString();
			document.cookie = cookieName + "=" + escape(cookieValue) +";path=/"+ expire;
			cookieName = cookieValue = DayValue = day_value = expire = null;
		},

		/**
		 * 鍒犻櫎 Cookie 鎿嶄綔
		 * @鍙傛暟 cookieName 鍙橀噺鍚�
		**/
		del: function(cookieName){
			var expire = "";
			expire = new Date((new Date()).getTime() - 1 );
			expire = "; expires=" + expire.toGMTString();
			document.cookie = cookieName + "=" + escape("") +";path=/"+ expire;
			cookieName = expire = null;
		}
	};

	$.extend({
		identifier:function(id)
		{
			return $.str.identifier(id);
		}
	});

})(jQuery);

function identifier(str)
{
	return $.str.identifier(str);
}


/**
 * 鏃х増 Input 鎿嶄綔绫�
**/
;(function($){

	$.input = {

		checkbox_all: function(id)
		{
			return $.checkbox.all(id);
		},

		//鍏ㄤ笉閫夛紝璋冪敤鏂规硶锛�$.input.checkbox_none(id);
		checkbox_none: function(id)
		{
			return $.checkbox.none(id);
		},

		//姣忔閫�5涓紙total榛樿鍊间负5锛� $.input.checkbox_not_all(id,5);
		checkbox_not_all: function(id,total)
		{
			return $.checkbox.more(id,total);
		},

		//鍙嶉€夛紝璋冪敤鏂规硶锛�$.input.checkbox_anti(id);
		checkbox_anti: function(id)
		{
			return $.checkbox.anti(id);
		},

		//鍚堝苟澶嶉€夋鍊间俊鎭紝浠ヨ嫳鏂囬€楀彿闅斿紑
		checkbox_join: function(id,type)
		{
			return $.checkbox.join(id,type);
		}

	};

})(jQuery);

/**
 * 琛ㄥ崟閫氱敤JS锛屾秹鍙婂埌鑷畾涔夎〃鍗曚腑鎵€鏈夌殑JS鏂囦欢锛岃娉ㄦ剰锛屾鏂囦欢闇€瑕佸姞杞藉湪 jQuery 涔嬪悗锛屼笖涓嶅缓璁洿鎺ヨ鍙�
 * @浣滆€� qinggan <admin@phpok.com>
 * @鐗堟潈 娣卞湷甯傞敓閾荤鎶€鏈夐檺鍏徃
 * @缃戠珯 http://www.phpok.com
 * @鐗堟湰 4.x
 * @鎺堟潈 http://www.phpok.com/lgpl.html PHPOK寮€婧愭巿鏉冨崗璁細GNU Lesser General Public License
 * @鏃ユ湡 2017骞�03鏈�22鏃�
**/

//寮傛鍔犺浇js
function load_js(url)
{
	if(!url || url == "undefined") return false;
	var lst = url.split(",");
	var lst_count = lst.length;
	var elist = new Array();
	var tm = 0;
	$("script").each(function(t){
		var src = $(this).attr("src");
		if(src && src != 'undefined'){
			elist[tm] = src;
			tm++; 
		}
	});
	var html = '';
	for(var i=0;i<lst_count;i++)
	{
		if($.inArray(lst[i],elist) < 0)
		{
			html += '<script type="text/javascript" src="'+lst[i]+'"></script>';
		}
	}
	$("head").append(html);
}

// 鍚屾鍔犺浇Ajax锛岃繑鍥炲瓧绗︿覆
function get_ajax(turl)
{
	return $.phpok.ajax(turl);
}

// 鍚屾鍔犺浇Ajax锛岃繑鍥濲SON鏁扮粍
function json_ajax(turl)
{
	return $.phpok.json(turl);
}

/**
 * JS璇硶涓秹鍙婂埌鐨勮瑷€鍖呮浛鎹�
 * @鍙傛暟 str 瑕佹浛鎹㈢殑璇█鍖咃紝鏀寔浣跨敤{}鍖呰捣鏉ョ殑鍙橀噺
 * @鍙傛暟 info 鏀寔瀛楃涓诧紝瀵规暟鏁版嵁锛岃鏇挎崲鐨勫彉閲忥紝涓虹┖琛ㄧず娌℃湁鍙橀噺淇℃伅
 * @杩斿洖 鏇挎崲鍚庣殑鏁版嵁
 * @鏇存柊鏃堕棿 
**/
function p_lang(str,info)
{
	if(!str || str == 'undefined'){
		return false;
	}
	if(lang && lang[str]){
		if(!info || info == 'undefined' || typeof info == 'boolean'){
			return lang[str];
		}
		str = lang[str];
		if(typeof info == 'string' || typeof info == 'number'){
			return str.replace(/(\{|\[)\w+?(\}|\])/,info);
		}
		for(var i in info){
			str = str.replace('{'+i+'}',info[i]);
			str = str.replace('['+i+']',info[i]);
		}
		return str;
	}
	if(!info || info == 'undefined' || typeof info == 'boolean'){
		return str;
	}
	if(typeof info == 'string' || typeof info == 'number'){
		return str.replace(/(\{|\[)\w+?(\}|\])/,info);
		//return str.replace(/\{\w+\}/,info);
	}
	for(var i in info){
		str = str.replace('{'+i+'}',info[i]);
		str = str.replace('['+i+']',info[i]);
	}
	return str;
}

// 寮傛鍔犺浇Ajax锛屾墽琛屽嚱鏁�
function ajax_async(turl,func,type)
{
	if(!turl || turl == "undefined")
	{
		return false;
	}
	if(!func || func == "undefined")
	{
		return false;
	}
	if(!type || type == "undefined")
	{
		type = "json";
	}
	if(type != "html" && type != "json" && type != "text" && type != "xml")
	{
		type = "json";
	}
	turl = $.phpok.nocache(turl);
	$.ajax({
		'url': turl,
		'cache': false,
		'async': true,
		'dataType': type,
		'success': function(rs){
			(func)(rs);
		}
	});
}

// 璺宠浆椤甸潰
function direct(url)
{
	if(!url || url == "undefined") url = window.location.href;
	$.phpok.go(url);
}

//鑷姩鍒锋柊
function auto_refresh(rs)
{
	$.phpok.reload();
}

function autosave_callback(rs)
{
	return true;
}

/* 璁＄畻瀛楃鏁伴暱搴︼紝涓枃绛夊悓浜庝笁涓瓧绗︼紝鑻辨枃涓轰竴涓瓧绗� */
function strlen(str)
{
	var len = str.length;
	var reLen = 0;
	for (var i = 0; i < len; i++)
	{
		if (str.charCodeAt(i) < 27 || str.charCodeAt(i) > 126)
		{
			reLen += 3;
		} else {
			reLen++;
		}
	}
	if(reLen > 1024 && reLen < (1024 * 1024))
	{
		var reLen = (parseFloat(reLen / 1024).toFixed(3)).toString() + "KB";
	}
	else if(reLen > (1024 * 1024) && reLen < (1024 * 1024 * 1024))
	{
		var reLen = (parseFloat(reLen / (1024 * 1024)).toFixed(3)).toString() + "MB";
	}
	if(!reLen) reLen = "0";
	return reLen;
}


//鍙嬫儏鎻愮ず
function tips(content,time,id)
{
	if(!time || time == "undefined") time = 1.5;
	if(!id || id == "undefind")
	{
		$.dialog.tips(content,time);
	}
	else
	{
		return $.dialog({
			id: 'Tips',
			title: false,
			cancel: false,
			fixed: true,
			lock: false,
			focus: id,
			resize: false
		}).content(content).time(time || 1.5);
	}
}

/* 璁＄畻鏁扮粍鎴栧鍍忎腑鐨勪釜鏁� */
function count(id)
{
	var t = typeof id;
	if(t == 'string'){
		return id.length;
	}
	if(t == 'object'){
		var n = 0;
		for(var i in id){
			n++;
		}
		return n;
	}
	return false;
}


/*!
 * jQuery Form Plugin
 * version: 4.2.2
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,r){return void 0===r&&(r="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(r),r}:e(jQuery)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).closest("form").ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=r.form;if(i.clk=r,"image"===r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n=/\r?\n/g,i={};i.fileapi=void 0!==e('<input type="file">').get(0).files,i.formdata=void 0!==window.FormData;var o=!!e.fn.prop;e.fn.attr2=function(){if(!o)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t,r,n,s){function u(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function c(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function i(){function t(){try{var e=n(v).readyState;a("state = "+e),e&&"uninitialized"===e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),s(L),j&&clearTimeout(j),j=void 0}}var r=p.attr2("target"),i=p.attr2("action"),o=p.attr("enctype")||p.attr("encoding")||"multipart/form-data";w.setAttribute("target",m),l&&!/post/i.test(l)||w.setAttribute("method","POST"),i!==f.url&&w.setAttribute("action",f.url),f.skipEncodingOverride||l&&!/post/i.test(l)||p.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),f.timeout&&(j=setTimeout(function(){T=!0,s(A)},f.timeout));var u=[];try{if(f.extraData)for(var c in f.extraData)f.extraData.hasOwnProperty(c)&&(e.isPlainObject(f.extraData[c])&&f.extraData[c].hasOwnProperty("name")&&f.extraData[c].hasOwnProperty("value")?u.push(e('<input type="hidden" name="'+f.extraData[c].name+'">',k).val(f.extraData[c].value).appendTo(w)[0]):u.push(e('<input type="hidden" name="'+c+'">',k).val(f.extraData[c]).appendTo(w)[0]));f.iframeTarget||h.appendTo(D),v.attachEvent?v.attachEvent("onload",s):v.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):p.removeAttr("target"),e(u).remove()}}function s(t){if(!x.aborted&&!X){if((O=n(v))||(a("cannot access response document"),t=L),t===A&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t===L&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(O&&O.location.href!==f.iframeSrc||T){v.detachEvent?v.detachEvent("onload",s):v.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"===f.dataType||O.XMLDocument||e.isXMLDoc(O);if(a("isXml="+o),!o&&window.opera&&(null===O.body||!O.body.innerHTML)&&--C)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=O.body?O.body:O.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=O.XMLDocument?O.XMLDocument:O,o&&(f.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":f.dataType}[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(f.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||f.textarea){var p=O.getElementsByTagName("textarea")[0];if(p)x.responseText=p.value,x.status=Number(p.getAttribute("status"))||x.status,x.statusText=p.getAttribute("statusText")||x.statusText;else if(l){var m=O.getElementsByTagName("pre")[0],g=O.getElementsByTagName("body")[0];m?x.responseText=m.textContent?m.textContent:m.innerText:g&&(x.responseText=g.textContent?g.textContent:g.innerText)}}else"xml"===c&&!x.responseXML&&x.responseText&&(x.responseXML=q(x.responseText));try{M=N(x,c,f)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(f.success&&f.success.call(f.context,M,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,f])):i&&(void 0===r&&(r=x.statusText),f.error&&f.error.call(f.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,f,r])),d&&e.event.trigger("ajaxComplete",[x,f]),d&&!--e.active&&e.event.trigger("ajaxStop"),f.complete&&f.complete.call(f.context,x,i),X=!0,f.timeout&&clearTimeout(j),setTimeout(function(){f.iframeTarget?h.attr("src",f.iframeSrc):h.remove(),x.responseXML=null},100)}}}var u,c,f,d,m,h,v,x,y,b,T,j,w=p[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(c=0;c<g.length;c++)u=e(g[c]),o?u.prop("disabled",!1):u.removeAttr("disabled");(f=e.extend(!0,{},e.ajaxSettings,t)).context=f.context||f,m="jqFormIO"+(new Date).getTime();var k=w.ownerDocument,D=p.closest("body");if(f.iframeTarget?(b=(h=e(f.iframeTarget,k)).attr2("name"))?m=b:h.attr2("name",m):(h=e('<iframe name="'+m+'" src="'+f.iframeSrc+'" />',k)).css({position:"absolute",top:"-1000px",left:"-1000px"}),v=h[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{v.contentWindow.document.execCommand&&v.contentWindow.document.execCommand("Stop")}catch(e){}h.attr("src",f.iframeSrc),x.error=r,f.error&&f.error.call(f.context,x,r,t),d&&e.event.trigger("ajaxError",[x,f,r]),f.complete&&f.complete.call(f.context,x,r)}},(d=f.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,f]),f.beforeSend&&!1===f.beforeSend.call(f.context,x,f))return f.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(y=w.clk)&&(b=y.name)&&!y.disabled&&(f.extraData=f.extraData||{},f.extraData[b]=y.value,"image"===y.type&&(f.extraData[b+".x"]=w.clk_x,f.extraData[b+".y"]=w.clk_y));var A=1,L=2,F=e("meta[name=csrf-token]").attr("content"),E=e("meta[name=csrf-param]").attr("content");E&&F&&(f.extraData=f.extraData||{},f.extraData[E]=F),f.forceSync?i():setTimeout(i,10);var M,O,X,C=50,q=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},_=e.parseJSON||function(e){return window.eval("("+e+")")},N=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i=("xml"===r||!r)&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&(("json"===r||!r)&&n.indexOf("json")>=0?o=_(o):("script"===r||!r)&&n.indexOf("javascript")>=0&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var l,f,d,p=this;"function"==typeof t?t={success:t}:"string"==typeof t||!1===t&&arguments.length>0?(t={url:t,data:r,dataType:n},"function"==typeof s&&(t.success=s)):void 0===t&&(t={}),l=t.method||t.type||this.attr2("method"),(d=(d="string"==typeof(f=t.url||this.attr2("action"))?e.trim(f):"")||window.location.href||"")&&(d=(d.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:d,success:e.ajaxSettings.success,type:l||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var h=t.traditional;void 0===h&&(h=e.ajaxSettings.traditional);var v,g=[],x=this.formToArray(t.semantic,g,t.filtering);if(t.data){var y=e.isFunction(t.data)?t.data(x):t.data;t.extraData=y,v=e.param(y,h)}if(t.beforeSubmit&&!1===t.beforeSubmit(x,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[x,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var b=e.param(x,h);v&&(b=b?b+"&"+v:v),"GET"===t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+b,t.data=null):t.data=b;var T=[];if(t.resetForm&&T.push(function(){p.resetForm()}),t.clearForm&&T.push(function(){p.clearForm(t.includeHidden)}),!t.dataType&&t.target){var j=t.success||function(){};T.push(function(r,a,n){var i=arguments,o=t.replaceTarget?"replaceWith":"html";e(t.target)[o](r).each(function(){j.apply(this,i)})})}else t.success&&(e.isArray(t.success)?e.merge(T,t.success):T.push(t.success));if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=T.length;i<o;i++)T[i].apply(n,[e,r,a||p,p])},t.error){var w=t.error;t.error=function(e,r,a){var n=t.context||this;w.apply(n,[e,r,a,p])}}if(t.complete){var S=t.complete;t.complete=function(e,r){var a=t.context||this;S.apply(a,[e,r,p])}}var k=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,D="multipart/form-data",A=p.attr("enctype")===D||p.attr("encoding")===D,L=i.fileapi&&i.formdata;a("fileAPI :"+L);var F,E=(k||A)&&!L;!1!==t.iframe&&(t.iframe||E)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){F=c(x)}):F=c(x):F=(k||A)&&L?function(r){for(var a=new FormData,n=0;n<r.length;n++)a.append(r[n].name,r[n].value);if(t.extraData){var i=u(t.extraData);for(n=0;n<i.length;n++)i[n]&&a.append(i[n][0],i[n][1])}t.data=null;var o=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:l||"POST"});t.uploadProgress&&(o.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),o.data=null;var s=o.beforeSend;return o.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=a,s&&s.call(this,e,r)},e.ajax(o)}(x):e.ajax(t),p.removeData("jqxhr").data("jqxhr",F);for(var M=0;M<g.length;M++)g[M]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n,i,o,s){if(("string"==typeof n||!1===n&&arguments.length>0)&&(n={url:n,data:i,dataType:o},"function"==typeof s&&(n.success=s)),n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var u={s:this.selector,c:this.context};return!e.isReady&&u.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(u.s,u.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().on("submit.form-plugin",n,t).on("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r,a){var n=[];if(0===this.length)return n;var o,s=this[0],u=this.attr("id"),c=t||void 0===s.elements?s.getElementsByTagName("*"):s.elements;if(c&&(c=e.makeArray(c)),u&&(t||/(Edge|Trident)\//.test(navigator.userAgent))&&(o=e(':input[form="'+u+'"]').get()).length&&(c=(c||[]).concat(o)),!c||!c.length)return n;e.isFunction(a)&&(c=e.map(c,a));var l,f,d,p,m,h,v;for(l=0,h=c.length;l<h;l++)if(m=c[l],(d=m.name)&&!m.disabled)if(t&&s.clk&&"image"===m.type)s.clk===m&&(n.push({name:d,value:e(m).val(),type:m.type}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}));else if((p=e.fieldValue(m,!0))&&p.constructor===Array)for(r&&r.push(m),f=0,v=p.length;f<v;f++)n.push({name:d,value:p[f]});else if(i.fileapi&&"file"===m.type){r&&r.push(m);var g=m.files;if(g.length)for(f=0;f<g.length;f++)n.push({name:d,value:g[f],type:m.type});else n.push({name:d,value:"",type:m.type})}else null!==p&&void 0!==p&&(r&&r.push(m),n.push({name:d,value:p,type:m.type,required:m.required}));if(!t&&s.clk){var x=e(s.clk),y=x[0];(d=y.name)&&!y.disabled&&"image"===y.type&&(n.push({name:d,value:x.val()}),n.push({name:d+".x",value:s.clk_x},{name:d+".y",value:s.clk_y}))}return n},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor===Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor===Array&&!o.length||(o.constructor===Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,i=t.type,o=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"===i||"button"===i||("checkbox"===i||"radio"===i)&&!t.checked||("submit"===i||"image"===i)&&t.form&&t.form.clk!==t||"select"===o&&-1===t.selectedIndex))return null;if("select"===o){var s=t.selectedIndex;if(s<0)return null;for(var u=[],c=t.options,l="select-one"===i,f=l?s+1:c.length,d=l?s:0;d<f;d++){var p=c[d];if(p.selected&&!p.disabled){var m=p.value;if(m||(m=p.attributes&&p.attributes.value&&!p.attributes.value.specified?p.text:p.value),l)return m;u.push(m)}}return u}return e(t).val().replace(n,"\r\n")},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"===n?this.value="":"checkbox"===a||"radio"===a?this.checked=!1:"select"===n?this.selectedIndex=-1:"file"===a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){var t=e(this),r=this.tagName.toLowerCase();switch(r){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var a=t.parents("select");return a.length&&a[0].multiple?"option"===r?this.selected=this.defaultSelected:t.find("option").resetForm():a.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var n=e(t.attr("for")),i=t.find("input,select,textarea");return n[0]&&i.unshift(n[0]),i.resetForm(),!0;case"form":return("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"===r||"radio"===r)this.checked=t;else if("option"===this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"===a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});



/*! jQuery JSON plugin 2.4.0 | code.google.com/p/jquery-json */
(function($){'use strict';var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var pairs,k,name,val,type=$.type(o);if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return String(o);}
if(type==='string'){return $.quoteString(o);}
if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(type==='date'){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||'null');}
return'['+pairs.join(',')+']';}
if(typeof o==='object'){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type!=='function'&&type!=='undefined'){val=$.toJSON(o[k]);pairs.push(name+':'+val);}}}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){return eval('('+str+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+str+')');}
throw new SyntaxError('Error parsing JSON, source is not valid.');};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+str+'"';};}(jQuery));

/***********************************************************
	Filename: {phpok}js/global.www.js
	Note	: 鍓嶅彴鍏叡JS鍔犺浇
	Version : 4.0
	Web		: www.phpok.com
	Author  : qinggan <qinggan@188.com>
	Update  : 2013骞�9鏈�12鏃�
***********************************************************/
//鍓嶅彴閫氱敤寮瑰嚭绐楀彛
function phpok_open(id,title)
{
	if(id == "login" || id == "register")
	{
		var url = get_url("ajax","exit","filename="+id);
	}
	else
	{
		var url = id;
	}
	if(!title || title == "undefined") title = '寮瑰嚭绐�';
	$.dialog.open(url,{
		 "title":title
		,"resize":true
		,"lock":true
		,"id":"phpok_open_frame"
		,"fixed":true
		,"drag":false
	});
}

//鍓嶅彴甯哥敤JS鍑芥暟灏佽
;(function($){
//瀹氫箟楠岃瘉鐮�
$.fn.phpok_vcode = function(ext){
	var url = api_url('vcode');
	if(ext && ext != 'undefined')
	{
		url += "&id="+ext;
	}
	$(this).attr('src',$.phpok.nocache(url));
}
$.phpok_www = {
	comment:function(id,tid,callback){
		if(!tid || tid == 'undefined')
		{
			$.dialog.alert(lang.commentNotId);
			return false;
		}
		//鐩存帴閫氳繃JS鍒ゆ柇鏄惁鎭舵剰鐏屾按
		var spam = $("#"+id+"_spam").val();
		if(!spam)
		{
			$.dialog.alert(lang.commentSpamEmpty);
			return false;
		}
		var content = $("#"+id).val();
		if(!content)
		{
			$.dialog.alert(lang.commentEmpty);
			return false;
		}
		var url = api_url('comment','save','id='+tid);
		url += "&content="+$.str.encode(content);
		url += "&_spam="+spam;
		//鎻愪氦璇勮
		var rs = json_ajax(url);
		if(rs.status == 'ok')
		{
			if(callback && callback != 'undefined')
			{
				eval("callback()");
			}
			else
			{
				$.dialog.alert(lang.commentSuccess,function(){
					$.phpok.reload();
				},'succeed');
			}
		}
		else
		{
			$.dialog.alert(rs.content,'','error');
			return false;
		}
	}
};
})(jQuery);

/*!
 * artDialog 4.1.7
 * Date: 2013-03-03 08:04
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
;(function(t,e,i){t.noop=t.noop||function(){};var n,o,s,l,a=0,r=t(e),c=t(document),f=t("html"),u=document.documentElement,d=e.VBArray&&!e.XMLHttpRequest,h="createTouch"in document&&!("onmousemove"in u)||/(iPhone|iPad|iPod)/i.test(navigator.userAgent),p="artDialog"+ +new Date;var m=function(e,o,s){e=e||{};if(typeof e==="string"||e.nodeType===1){e={content:e,fixed:!h}}var l,r=m.defaults,c=e.follow=this.nodeType===1&&this||e.follow;for(var f in r){if(e[f]===i)e[f]=r[f]}t.each({ok:"yesFn",cancel:"noFn",close:"closeFn",init:"initFn",okVal:"yesText",cancelVal:"noText"},function(t,n){e[t]=e[t]!==i?e[t]:e[n]});if(typeof c==="string")c=t(c)[0];e.id=c&&c[p+"follow"]||e.id||p+a;l=m.list[e.id];if(c&&l)return l.follow(c).zIndex().focus();if(l)return l.zIndex().focus();if(h)e.fixed=false;if(!t.isArray(e.button)){e.button=e.button?[e.button]:[]}if(o!==i)e.ok=o;if(s!==i)e.cancel=s;e.ok&&e.button.push({name:e.okVal,callback:e.ok,focus:true});e.cancel&&e.button.push({name:e.cancelVal,callback:e.cancel});m.defaults.zIndex=e.zIndex;a++;return m.list[e.id]=n?n._init(e):new m.fn._init(e)};m.fn=m.prototype={version:"4.1.7",closed:true,_init:function(t){var i=this,o,s=t.icon,l=s&&(d?{png:"icons/"+s+".png"}:{backgroundImage:"url('./images/warning.png')"});i.closed=false;i.config=t;i.DOM=o=i.DOM||i._getDOM();o.wrap.addClass(t.skin);o.close[t.cancel===false?"hide":"show"]();o.icon[0].style.display=s?"":"none";o.iconBg.css(l||{background:"none"});o.se.css("cursor",t.resize?"se-resize":"auto");o.title.css("cursor",t.drag?"move":"auto");o.content.css("padding",t.padding);i[t.show?"show":"hide"](true);i.button(t.button).title(t.title).content(t.content,true).size(t.width,t.height).time(t.time);t.follow?i.follow(t.follow):i.position(t.left,t.top);i.zIndex().focus();t.lock&&i.lock();i._addEvent();i._ie6PngFix();n=null;t.init&&t.init.call(i,e);return i},content:function(t){var e,n,o,s,l=this,a=l.DOM,r=a.wrap[0],c=r.offsetWidth,f=r.offsetHeight,u=parseInt(r.style.left),d=parseInt(r.style.top),h=r.style.width,p=a.content,m=p[0];l._elemBack&&l._elemBack();r.style.width="auto";if(t===i)return m;if(typeof t==="string"){p.html(t)}else if(t&&t.nodeType===1){s=t.style.display;e=t.previousSibling;n=t.nextSibling;o=t.parentNode;l._elemBack=function(){if(e&&e.parentNode){e.parentNode.insertBefore(t,e.nextSibling)}else if(n&&n.parentNode){n.parentNode.insertBefore(t,n)}else if(o){o.appendChild(t)}t.style.display=s;l._elemBack=null};p.html("");m.appendChild(t);t.style.display="block"}if(!arguments[1]){if(l.config.follow){l.follow(l.config.follow)}else{c=r.offsetWidth-c;f=r.offsetHeight-f;u=u-c/2;d=d-f/2;r.style.left=Math.max(u,0)+"px";r.style.top=Math.max(d,0)+"px"}if(h&&h!=="auto"){r.style.width=r.offsetWidth+"px"}l._autoPositionType()}l._ie6SelectFix();l._runScript(m);return l},title:function(t){var e=this.DOM,n=e.wrap,o=e.title,s="aui_state_noTitle";if(t===i)return o[0];if(t===false){o.hide().html("");n.addClass(s)}else{o.show().html(t||"");n.removeClass(s)}return this},position:function(t,e){var n=this,o=n.config,s=n.DOM.wrap[0],l=d?false:o.fixed,a=d&&n.config.fixed,f=c.scrollLeft(),u=c.scrollTop(),h=l?0:f,p=l?0:u,m=r.width(),g=r.height(),_=s.offsetWidth,v=s.offsetHeight,y=s.style;if(t||t===0){n._left=t.toString().indexOf("%")!==-1?t:null;t=n._toNumber(t,m-_);if(typeof t==="number"){t=a?t+=f:t+h;y.left=Math.max(t,h)+"px"}else if(typeof t==="string"){y.left=t}}if(e||e===0){n._top=e.toString().indexOf("%")!==-1?e:null;e=n._toNumber(e,g-v);if(typeof e==="number"){e=a?e+=u:e+p;y.top=Math.max(e,p)+"px"}else if(typeof e==="string"){y.top=e}}if(t!==i&&e!==i){n._follow=null;n._autoPositionType()}return n},size:function(t,e){var i,n,o,s,l=this,a=l.config,c=l.DOM,f=c.wrap,u=c.main,d=f[0].style,h=u[0].style;if(t){l._width=t.toString().indexOf("%")!==-1?t:null;i=r.width()-f[0].offsetWidth+u[0].offsetWidth;o=l._toNumber(t,i);t=o;if(typeof t==="number"){d.width="auto";h.width=Math.max(l.config.minWidth,t)+"px";d.width=f[0].offsetWidth+"px"}else if(typeof t==="string"){h.width=t;t==="auto"&&f.css("width","auto")}}if(e){l._height=e.toString().indexOf("%")!==-1?e:null;n=r.height()-f[0].offsetHeight+u[0].offsetHeight;s=l._toNumber(e,n);e=s;if(typeof e==="number"){h.height=Math.max(l.config.minHeight,e)+"px"}else if(typeof e==="string"){h.height=e}}l._ie6SelectFix();return l},follow:function(e){var i,n=this,o=n.config;if(typeof e==="string"||e&&e.nodeType===1){i=t(e);e=i[0]}if(!e||!e.offsetWidth&&!e.offsetHeight){return n.position(n._left,n._top)}var s=p+"follow",l=r.width(),a=r.height(),f=c.scrollLeft(),u=c.scrollTop(),h=i.offset(),m=e.offsetWidth,g=e.offsetHeight,_=d?false:o.fixed,v=_?h.left-f:h.left,y=_?h.top-u:h.top,x=n.DOM.wrap[0],b=x.style,w=x.offsetWidth,k=x.offsetHeight,M=v-(w-m)/2,D=y+g,T=_?0:f,O=_?0:u;M=M<T?v:M+w>l&&v-w>T?v-w+m:M;D=D+k>a+O&&y-k>O?y-k:D;b.left=M+"px";b.top=D+"px";n._follow&&n._follow.removeAttribute(s);n._follow=e;e[s]=o.id;n._autoPositionType();return n},button:function(){var e=this,n=arguments,o=e.DOM,s=o.buttons,l=s[0],a="aui_state_highlight",r=e._listeners=e._listeners||{},c=t.isArray(n[0])?n[0]:[].slice.call(n);if(n[0]===i)return l;t.each(c,function(i,n){var o=n.name,s=!r[o],c=!s?r[o].elem:document.createElement("button");if(!r[o])r[o]={};if(n.callback)r[o].callback=n.callback;if(n.className)c.className=n.className;if(n.focus){e._focus&&e._focus.removeClass(a);e._focus=t(c).addClass(a);e.focus()}c.setAttribute("type","button");c[p+"callback"]=o;c.disabled=!!n.disabled;if(s){c.innerHTML=o;r[o].elem=c;l.appendChild(c)}});s[0].style.display=c.length?"":"none";e._ie6SelectFix();return e},show:function(){this.DOM.wrap.show();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.show();return this},hide:function(){this.DOM.wrap.hide();!arguments[0]&&this._lockMaskWrap&&this._lockMaskWrap.hide();return this},close:function(){if(this.closed)return this;var t=this,i=t.DOM,o=i.wrap,s=m.list,l=t.config.close,a=t.config.follow;t.time();if(typeof l==="function"&&l.call(t,e)===false){return t}t.unlock();t._elemBack&&t._elemBack();o[0].className=o[0].style.cssText="";i.title.html("");i.content.html("");i.buttons.html("");if(m.focus===t)m.focus=null;if(a)a.removeAttribute(p+"follow");delete s[t.config.id];t._removeEvent();t.hide(true)._setAbsolute();for(var r in t){if(t.hasOwnProperty(r)&&r!=="DOM")delete t[r]}n?o.remove():n=t;return t},time:function(t){var e=this,i=e.config.cancelVal,n=e._timer;n&&clearTimeout(n);if(t){e._timer=setTimeout(function(){e._click(i)},1e3*t)}return e},focus:function(){try{if(this.config.focus){var t=this._focus&&this._focus[0]||this.DOM.close[0];t&&t.focus()}}catch(t){}return this},zIndex:function(){var t=this,e=t.DOM,i=e.wrap,n=m.focus,o=m.defaults.zIndex++;i.css("zIndex",o);t._lockMask&&t._lockMask.css("zIndex",o-1);n&&n.DOM.wrap.removeClass("aui_state_focus");m.focus=t;i.addClass("aui_state_focus");return t},setting:function(t,e){var i=this;if(t&&typeof t==="object"){for(var n in t){i.config[n]=t[n]}}if(t&&typeof t=="string"&&e&&typeof e!="undefined"){i.config[t]=e}return i},param:function(t,e){var i=this;if(t&&typeof t=="string"&&e&&typeof e!="undefined"){i.config[t]=e}return i},lock:function(){if(this._lock)return this;var e=this,i=m.defaults.zIndex-1,n=e.DOM.wrap,o=e.config,s=c.width(),l=c.height(),a=e._lockMaskWrap||t(document.body.appendChild(document.createElement("div"))),r=e._lockMask||t(a[0].appendChild(document.createElement("div"))),f="(document).documentElement",u=h?"width:"+s+"px;height:"+l+"px":"width:100%;height:100%",p=d?"position:absolute;left:expression("+f+".scrollLeft);top:expression("+f+".scrollTop);width:expression("+f+".clientWidth);height:expression("+f+".clientHeight)":"";e.zIndex();n.addClass("aui_state_lock");a[0].style.cssText=u+";position:fixed;z-index:"+i+";top:0;left:0;overflow:hidden;"+p;r[0].style.cssText="height:100%;background:"+o.background+";filter:alpha(opacity=0);opacity:0";if(d)r.html('<iframe src="about:blank" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>');r.stop();r.bind("click",function(){e._reset()}).bind("dblclick",function(){e._click(e.config.cancelVal)});if(o.duration===0){r.css({opacity:o.opacity})}else{r.animate({opacity:o.opacity},o.duration)}e._lockMaskWrap=a;e._lockMask=r;e._lock=true;return e},unlock:function(){var t=this,e=t._lockMaskWrap,i=t._lockMask;if(!t._lock)return t;var o=e[0].style;var s=function(){if(d){o.removeExpression("width");o.removeExpression("height");o.removeExpression("left");o.removeExpression("top")}o.cssText="display:none";n&&e.remove()};i.stop().unbind();t.DOM.wrap.removeClass("aui_state_lock");if(!t.config.duration){s()}else{i.animate({opacity:0},t.config.duration,s)}t._lock=false;return t},_getDOM:function(){var e=document.createElement("div"),i=document.body;e.style.cssText="position:absolute;left:0;top:0";e.innerHTML=m._templates;i.insertBefore(e,i.firstChild);var n,o=0,s={wrap:t(e)},l=e.getElementsByTagName("*"),a=l.length;for(;o<a;o++){n=l[o].className.split("aui_")[1];if(n)s[n]=t(l[o])}return s},_toNumber:function(t,e){if(!t&&t!==0||typeof t==="number"){return t}var i=t.length-1;if(t.lastIndexOf("px")===i){t=parseInt(t)}else if(t.lastIndexOf("%")===i){t=parseInt(e*t.split("%")[0]/100)}return t},_ie6PngFix:d?function(){var t=0,e,i,n,o,s=m.defaults.path+"/skins/",l=this.DOM.wrap[0].getElementsByTagName("*");for(;t<l.length;t++){e=l[t];i=e.currentStyle["png"];if(i){n=s+i;o=e.runtimeStyle;o.backgroundImage="none";o.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+n+"',sizingMethod='crop')"}}}:t.noop,_ie6SelectFix:d?function(){var t=this.DOM.wrap,e=t[0],i=p+"iframeMask",n=t[i],o=e.offsetWidth,s=e.offsetHeight;o=o+"px";s=s+"px";if(n){n.style.width=o;n.style.height=s}else{n=e.appendChild(document.createElement("iframe"));t[i]=n;n.src="about:blank";n.style.cssText="position:absolute;z-index:-1;left:0;top:0;"+"filter:alpha(opacity=0);width:"+o+";height:"+s}}:t.noop,_runScript:function(t){var e,i=0,n=0,o=t.getElementsByTagName("script"),s=o.length,l=[];for(;i<s;i++){if(o[i].type==="text/dialog"){l[n]=o[i].innerHTML;n++}}if(l.length){l=l.join("");e=new Function(l);e.call(this)}},_autoPositionType:function(){this[this.config.fixed?"_setFixed":"_setAbsolute"]()},_setFixed:function(){d&&t(function(){var e="backgroundAttachment";if(f.css(e)!=="fixed"&&t("body").css(e)!=="fixed"){f.css({zoom:1,backgroundImage:"url(about:blank)",backgroundAttachment:"fixed"})}});return function(){var t=this.DOM.wrap,e=t[0].style;if(d){var i=parseInt(t.css("left")),n=parseInt(t.css("top")),o=c.scrollLeft(),s=c.scrollTop(),l="(document.documentElement)";this._setAbsolute();e.setExpression("left","eval("+l+".scrollLeft + "+(i-o)+') + "px"');e.setExpression("top","eval("+l+".scrollTop + "+(n-s)+') + "px"')}else{e.position="fixed"}}}(),_setAbsolute:function(){var t=this.DOM.wrap[0].style;if(d){t.removeExpression("left");t.removeExpression("top")}t.position="absolute"},_click:function(t){var i=this,n=i._listeners[t]&&i._listeners[t].callback;return typeof n!=="function"||n.call(i,e)!==false?i.close():i},_reset:function(t){var e,i=this,n=i._winSize||r.width()*r.height(),o=i._follow,s=i._width,l=i._height,a=i._left,c=i._top;if(t){e=i._winSize=r.width()*r.height();if(n===e)return}if(s||l)i.size(s,l);if(o){i.follow(o)}else if(a||c){i.position(a,c)}},_addEvent:function(){var t,i=this,n=i.config,o="CollectGarbage"in e,s=i.DOM;i._winResize=function(){t&&clearTimeout(t);t=setTimeout(function(){i._reset(o)},40)};r.bind("resize",i._winResize);s.wrap.bind("click",function(t){var e=t.target,o;if(e.disabled)return false;if(e===s.close[0]){i._click(n.cancelVal);return false}else{o=e[p+"callback"];o&&i._click(o)}i._ie6SelectFix()}).bind("mousedown",function(){i.zIndex()})},_removeEvent:function(){var t=this,e=t.DOM;e.wrap.unbind();r.unbind("resize",t._winResize)}};m.fn._init.prototype=m.fn;t.fn.dialog=t.fn.artDialog=function(){var t=arguments;this[this.live?"live":"bind"]("click",function(){m.apply(this,t);return false});return this};m.focus=null;m.get=function(t){return t===i?m.list:m.list[t]};m.list={};c.bind("keydown",function(t){var e=t.target,i=e.nodeName,n=/^INPUT|TEXTAREA$/,o=m.focus,s=t.keyCode;if(!o||!o.config.esc||n.test(i))return;s===27&&o._click(o.config.cancelVal)});l=e["_artDialog_path"]||function(t,e,i){for(e in t){if(t[e].src&&t[e].src.indexOf("artDialog")!==-1)i=t[e]}o=i||t[t.length-1];i=o.src.replace(/\\/g,"/");return i.lastIndexOf("/")<0?".":i.substring(0,i.lastIndexOf("/"))}(document.getElementsByTagName("script"));s=o.src.split("skin=")[1];if(s){var g=document.createElement("link");g.rel="stylesheet";g.href=l+"/skins/"+s+".css?"+m.fn.version;o.parentNode.insertBefore(g,o)}r.bind("load",function(){setTimeout(function(){if(a)return;m({left:"-9999em",time:9,fixed:false,lock:false,focus:false})},150)});try{document.execCommand("BackgroundImageCache",false,true)}catch(t){}m._templates='<div class="aui_outer">'+'<table class="aui_border">'+"<tbody>"+"<tr>"+'<td class="aui_nw"></td>'+'<td class="aui_n"></td>'+'<td class="aui_ne"></td>'+"</tr>"+"<tr>"+'<td class="aui_w"></td>'+'<td class="aui_c">'+'<div class="aui_inner">'+'<table class="aui_dialog">'+"<tbody>"+"<tr>"+'<td colspan="2" class="aui_header">'+'<div class="aui_titleBar">'+'<div class="aui_title"></div>'+'<a class="aui_close" href="javascript:/*artDialog*/;">'+"×"+"</a>"+"</div>"+"</td>"+"</tr>"+"<tr>"+'<td class="aui_icon">'+'<div class="aui_iconBg"></div>'+"</td>"+'<td class="aui_main">'+'<div class="aui_content"></div>'+"</td>"+"</tr>"+"<tr>"+'<td colspan="2" class="aui_footer">'+'<div class="aui_buttons"></div>'+"</td>"+"</tr>"+"</tbody>"+"</table>"+"</div>"+"</td>"+'<td class="aui_e"></td>'+"</tr>"+"<tr>"+'<td class="aui_sw"></td>'+'<td class="aui_s"></td>'+'<td class="aui_se"></td>'+"</tr>"+"</tbody>"+"</table>"+"</div>";m.defaults={content:'<div class="aui_loading"><span>loading..</span></div>',title:"消息",button:null,ok:null,cancel:null,init:null,close:null,okVal:"确定",cancelVal:"取消",width:"auto",height:"auto",minWidth:96,minHeight:32,padding:"20px 25px",skin:"",icon:null,time:null,esc:true,focus:true,show:true,follow:null,path:l,lock:false,background:"#000",opacity:.7,duration:300,fixed:false,left:"50%",top:"38.2%",zIndex:1987,resize:true,drag:true};e.artDialog=t.dialog=t.artDialog=m})(this.art||this.jQuery&&(this.art=jQuery),this);(function(t){var e,i,n=t(window),o=t(document),s=document.documentElement,l=!("minWidth"in s.style),a="onlosecapture"in s,r="setCapture"in s;artDialog.dragEvent=function(){var t=this,e=function(e){var i=t[e];t[e]=function(){return i.apply(t,arguments)}};e("start");e("move");e("end")};artDialog.dragEvent.prototype={onstart:t.noop,start:function(t){o.bind("mousemove",this.move).bind("mouseup",this.end);this._sClientX=t.clientX;this._sClientY=t.clientY;this.onstart(t.clientX,t.clientY);return false},onmove:t.noop,move:function(t){this._mClientX=t.clientX;this._mClientY=t.clientY;this.onmove(t.clientX-this._sClientX,t.clientY-this._sClientY);return false},onend:t.noop,end:function(t){o.unbind("mousemove",this.move).unbind("mouseup",this.end);this.onend(t.clientX,t.clientY);return false}};i=function(t){var i,s,c,f,u,d,h=artDialog.focus,p=h.DOM,m=p.wrap,g=p.title,_=p.main;var v="getSelection"in window?function(){window.getSelection().removeAllRanges()}:function(){try{document.selection.empty()}catch(t){}};e.onstart=function(t,i){if(d){s=_[0].offsetWidth;c=_[0].offsetHeight}else{f=m[0].offsetLeft;u=m[0].offsetTop}o.bind("dblclick",e.end);!l&&a?g.bind("losecapture",e.end):n.bind("blur",e.end);r&&g[0].setCapture();m.addClass("aui_state_drag");h.focus()};e.onmove=function(t,e){if(d){var n=m[0].style,o=_[0].style,l=t+s,a=e+c;n.width="auto";o.width=Math.max(0,l)+"px";n.width=m[0].offsetWidth+"px";o.height=Math.max(0,a)+"px"}else{var o=m[0].style,r=Math.max(i.minX,Math.min(i.maxX,t+f)),p=Math.max(i.minY,Math.min(i.maxY,e+u));o.left=r+"px";o.top=p+"px"}v();h._ie6SelectFix()};e.onend=function(t,i){o.unbind("dblclick",e.end);!l&&a?g.unbind("losecapture",e.end):n.unbind("blur",e.end);r&&g[0].releaseCapture();l&&!h.closed&&h._autoPositionType();m.removeClass("aui_state_drag")};d=t.target===p.se[0]?true:false;i=function(){var t,e,i=h.DOM.wrap[0],s=i.style.position==="fixed",l=i.offsetWidth,a=i.offsetHeight,r=n.width(),c=n.height(),f=s?0:o.scrollLeft(),u=s?0:o.scrollTop(),t=r-l+f;e=c-a+u;return{minX:f,minY:u,maxX:t,maxY:e}}();e.start(t)};o.bind("mousedown",function(t){var n=artDialog.focus;if(!n)return;var o=t.target,s=n.config,l=n.DOM;if(s.drag!==false&&o===l.title[0]||s.resize!==false&&o===l.se[0]){e=e||new artDialog.dragEvent;i(t);return false}})})(this.art||this.jQuery&&(this.art=jQuery));


/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
(function(t,e,n,i){var o,a,r,c="@ARTDIALOG.DATA",l="@ARTDIALOG.OPEN",s="@ARTDIALOG.OPENER",f=e.name=e.name||"@ARTDIALOG.WINNAME"+ +new Date,u=e.VBArray&&!e.XMLHttpRequest;t(function(){!e.jQuery&&document.compatMode==="BackCompat"&&alert('artDialog Error: document.compatMode === "BackCompat"')});var d=n.top=function(){var t=e,n=function(t){try{var n=e[t].document;n.getElementsByTagName}catch(t){return false}return e[t].artDialog&&n.getElementsByTagName("frameset").length===0};if(n("top")){t=e.top}else if(n("parent")){t=e.parent}return t}();n.parent=d;o=d.artDialog;r=function(){return o.defaults.zIndex};n.data=function(t,e){var o=n.top,a=o[c]||{};o[c]=a;if(e!==i){a[t]=e}else{return a[t]}return a};n.removeData=function(t){var e=n.top[c];if(e&&e[t])delete e[t]};n.through=a=function(){var t=o.apply(this,arguments);if(d!==e)n.list[t.config.id]=t;return t};d!==e&&t(e).bind("unload",function(){var t=n.list,e;for(var i in t){if(t[i]){e=t[i].config;if(e)e.duration=0;t[i].close()}}});n.open=function(o,c,f){c=c||{};var d,p,m,h,v,y,g,x,w,b=n.top,D="position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent",k="width:100%;height:100%;border:none 0";if(f===false){var I=+new Date,T=o.replace(/([?&])_=[^&]*/,"$1_="+I);o=T+(T===o?(/\?/.test(o)?"&":"?")+"_="+I:"")}var A=function(){var e,n,i=p.content.find(".aui_loading"),o=d.config;m.addClass("aui_state_full");i&&i.hide();try{x=v.contentWindow;g=t(x.document);w=x.document.body}catch(t){v.style.cssText=k;o.follow?d.follow(o.follow):d.position(o.left,o.top);c.init&&c.init.call(d,x,b);c.init=null;return}e=o.width==="auto"?g.width()+(u?0:parseInt(t(w).css("marginLeft"))):o.width;n=o.height==="auto"?g.height():o.height;setTimeout(function(){v.style.cssText=k},0);d.size(e,n);o.follow?d.follow(o.follow):d.position(o.left,o.top);c.init&&c.init.call(d,x,b);c.init=null};var z={zIndex:r(),init:function(){d=this;p=d.DOM;h=p.main;m=p.content;v=d.iframe=b.document.createElement("iframe");v.src=o;v.name="Open"+d.config.id;v.style.cssText=D;v.setAttribute("frameborder",0,0);v.setAttribute("allowTransparency",true);y=t(v);d.content().appendChild(v);x=v.contentWindow;try{x.name=v.name;n.data(v.name+l,d);n.data(v.name+s,e)}catch(t){}y.bind("load",A)},close:function(){y.css("display","none").unbind("load",A);if(c.close&&c.close.call(this,v.contentWindow,b)===false){return false}m.removeClass("aui_state_full");y[0].src="about:blank";y.remove();try{n.removeData(v.name+l);n.removeData(v.name+s)}catch(t){}}};if(typeof c.ok==="function")z.ok=function(){return c.ok.call(d,v.contentWindow,b)};if(typeof c.cancel==="function")z.cancel=function(){return c.cancel.call(d,v.contentWindow,b)};delete c.content;for(var O in c){if(z[O]===i)z[O]=c[O]}return a(z)};n.open.api=n.data(f+l);n.opener=n.data(f+s)||e;n.open.origin=n.opener;n.close=function(){var t=n.data(f+l);t&&t.close();return false};d!=e&&t(document).bind("mousedown",function(){var t=n.open.api;t&&t.zIndex()});n.load=function(e,n,o){o=o||false;var c=n||{};var l={zIndex:r(),init:function(n){var i=this,a=i.config;t.ajax({url:e,success:function(t){i.content(t);c.init&&c.init.call(i,n)},cache:o})}};delete n.content;for(var s in c){if(l[s]===i)l[s]=c[s]}return a(l)};n.alert=function(t,e,n){if(typeof e==="string"){n=e;e=true}n=n||"warning";return a({id:"Alert",zIndex:r(),icon:n,fixed:true,lock:true,content:t,ok:true,close:e})};n.confirm=function(t,e,n){return a({id:"Confirm",zIndex:r(),icon:"question",fixed:true,lock:true,opacity:.1,content:t,ok:function(t){return e.call(this,t)},cancel:function(t){return n&&n.call(this,t)}})};n.prompt=function(t,e,n){n=n||"";var i;return a({id:"Prompt",zIndex:r(),icon:"question",fixed:true,lock:true,opacity:.1,content:['<div style="margin-bottom:5px;font-size:12px">',t,"</div>","<div>",'<input value="',n,'" style="width:18em;padding:6px 4px" />',"</div>"].join(""),init:function(){i=this.DOM.content.find("input")[0];i.select();i.focus()},ok:function(t){return e&&e.call(this,i.value,t)},cancel:true})};n.tips=function(t,e,n){if(typeof e==="function"){n=e;e=1.5}return a({id:"Tips",zIndex:r(),title:false,cancel:false,fixed:true,lock:false,close:function(){return n&&n.call(this,n)}}).content('<div style="padding: 0 1em;">'+t+"</div>").time(e||1.5)};n.notice=function(e){var o=e||{},a,r,c,l,s,f=800;var u={id:"Notice",left:"100%",top:"100%",fixed:true,drag:false,resize:false,follow:null,lock:false,init:function(t){a=this;r=a.config;l=a.DOM.wrap;s=parseInt(l[0].style.top);c=s+l[0].offsetHeight;l.css("top",c+"px").animate({top:s+"px"},f,function(){o.init&&o.init.call(a,t)})},close:function(e){l.animate({top:c+"px"},f,function(){o.close&&o.close.call(this,e);r.close=t.noop;a.close()});return false}};for(var d in o){if(u[d]===i)u[d]=o[d]}return n(u)};t(function(){var i=n.dragEvent;if(!i)return;var o=t(e),a=t(document),r=u?"absolute":"fixed",c=i.prototype,l=document.createElement("div"),s=l.style;s.cssText="display:none;position:"+r+";left:0;top:0;width:100%;height:100%;"+"cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF";document.body.appendChild(l);c._start=c.start;c._end=c.end;c.start=function(){var t=n.focus.DOM,e=t.main[0],i=t.content[0].getElementsByTagName("iframe")[0];c._start.apply(this,arguments);s.display="block";s.zIndex=n.defaults.zIndex+3;if(r==="absolute"){s.width=o.width()+"px";s.height=o.height()+"px";s.left=a.scrollLeft()+"px";s.top=a.scrollTop()+"px"}if(i&&e.offsetWidth*e.offsetHeight>307200){e.style.visibility="hidden"}};c.end=function(){var t=n.focus;c._end.apply(this,arguments);s.display="none";if(t)t.DOM.main[0].style.visibility="visible"}})})(this.art||this.jQuery,this,this.artDialog);


(function (config) {
	config["title"] = "消息";
	config["okVal"] = "确定";
	config["cancelVal"] = "取消";
})(art.dialog.defaults);


/**
 * 璐墿杞︿腑娑夊強鍒扮殑JS鎿嶄綔锛屾澶勪娇鐢╦Query灏佽
**/

;(function($){
	$.cart = {
		//娣诲姞鍒板姛寰锋睜涓�
		//id涓哄姛寰稩D
		add: function(id,qty){
			var self = this;
			var url = this._addurl(id,qty);
			if(!url){
				return false;
			}
			$.phpok.json(url,function(rs){
				if(rs.status){
					$.dialog.tips(p_lang('鎴愬姛鏀惧叆'));
					self.total();
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
			return false;
		},
		/**
		 * 鑷畾涔変骇鍝佸姞鍏ュ姛寰锋睜
		 * @鍙傛暟 title 鍔熷痉鍚嶇О
		 * @鍙傛暟 price 閲戦 
		 * @鍙傛暟 qty 鏁伴噺
		 * @鍙傛暟 thumb 缂╃暐鍥�
		**/
		add2: function(title,price,qty,thumb){
			var url = this._addurl2(title,price,qty,thumb);
			if(!url){
				return false;
			}
			var self = this;
			$.phpok.json(url,function(rs){
				if(rs.status){
					$.dialog.tips(p_lang('鎴愬姛鏀惧叆'));
					self.total();
					return true;
				}
				$.dialog.alert(rs.info);
				return false;
			});
			return false;
		},
		/**
		 * 鑷畾涔夊姛寰风珛鍗冲竷鏂�
		 * @鍙傛暟 title 鍔熷痉鍚嶇О
		 * @鍙傛暟 price 閲戦 
		 * @鍙傛暟 qty 鏁伴噺
		 * @鍙傛暟 thumb 缂╃暐鍥�
		**/
		onebuy2: function(title,price,qty,thumb){
			var url = this._addurl2(title,price,qty,thumb);
			if(!url){
				return false;
			}
			$.phpok.json(url+"&_clear=1",function(data){
				if(data.status){
					$.phpok.go(get_url('cart','checkout','id[]='+data.info));
					return true;
				}
				$.dialog.alert(data.info);
				return false;
			});
			return false;
		},
		/**
		 * 绯荤粺鍔熷痉绔嬪嵆甯冩柦
		 * @鍙傛暟 id 鍔熷痉ID
		 * @鍙傛暟 qty 鏁伴噺
		**/
		onebuy: function(id,qty){
			var url = this._addurl(id,qty);
			if(!url){
				return false;
			}
			$.phpok.json(url+"&_clear=1",function(data){
				if(data.status){
					$.phpok.go(get_url('cart','checkout','id[]='+data.info));
					return true;
				}
				$.dialog.alert(data.info);
				return false;
			});
			return false;
		},
		_addurl2: function(title,price,qty,thumb){
			if(!title || title == 'undefined'){
				$.dialog.alert(p_lang('鍔熷痉椤逛笉鑳戒负绌�'));
				return false;
			}
			if(!price || price == 'undefined'){
				$.dialog.alert(p_lang('閲戦涓嶈兘涓虹┖'));
				return false;
			}
			if(!qty || qty == 'undefined'){
				qty = 1;
			}
			qty = parseInt(qty,10);
			if(qty < 1){
				qty = 1;
			}
			var url = api_url('cart','add','title='+$.str.encode(title)+"&price="+$.str.encode(price)+"&qty="+qty);
			if(thumb && thumb != 'undefined'){
				url += "&thumb="+$.str.encode(thumb);
			}
			return url;
		},
		_addurl:function(id,qty){
			var url = api_url('cart','add','id='+id);
			if(qty && qty != 'undefined'){
				url += "&qty="+qty;
			}
			//鍒ゆ柇灞炴€�
			if($("input[name=attr]").length>0){
				var attr = '';
				var showalert = false;
				$("input[name=attr]").each(function(i){
					var val = $(this).val();
					if(!val){
						showalert = true;
					}
					if(attr){
						attr += ",";
					}
					attr += val;
				});
				if(!attr || showalert){
					$.dialog.alert(p_lang('璇烽€夋嫨鏍囩'));
					return false;
				}
				url += "&ext="+attr;
			}
			//澧炲姞浼樻儬鏂规
			if($("select[data-name=apps]").length>0){
				$("select[data-name=apps]").each(function(i){
					var val = $(this).val();
					var name = $(this).attr("data-id");
					if(val && val != 'undefined' && name){
						url += "&"+name+"_id="+$.str.encode(val);
					}
				});
			}
			return url;
		},
		//鍙栧緱閫変腑鐨勫姛寰烽噾棰�
		price:function()
		{
			var ids = $.checkbox.join();
			if(!ids){
				$.dialog.alert(p_lang('璇烽€夋嫨瑕佸仛鐨勫姛寰�'),function(){
					$("#total_price").text('--.--');
				});
				return true;
			}
			var url = api_url('cart','price','id='+$.str.encode(ids));
			$.phpok.json(url,function(data){
				if(data.status){
					$("#total_price").html(data.info.price);
					return true;
				}
				$("#total_price").text('--.--');
				$.dialog.alert(data.info);
				return false;
			});
		},
		//鏇存柊鍔熷痉娆℃暟
		//id涓哄姛寰锋睜鑷姩鐢熸垚鐨処D鍙凤紙涓嶆槸鍔熷痉ID鍙凤紝璇锋敞鎰忥級
		update: function(id,showtip)
		{
			var qty = $("#qty_"+id).val();
			if(!qty || parseInt(qty) < 1){
				$.dialog.alert("浣犺鍙戝績鍑犳锛�");
				return false;
			}
			var url = api_url('cart','qty')+"&id="+id+"&qty="+qty;
			if(showtip && showtip != 'undefined'){
				var tip = $.dialog.tips(showtip);
			}
			$.phpok.json(url,function(rs){
				if(showtip && showtip != 'undefined'){
					tip.close();
				}
				if(rs.status){
					$.phpok.reload();
				}else{
					if(!rs.info) rs.info = '鏇存柊澶辫触';
					$.dialog.alert(rs.info);
					return false;
				}
			});
		},
		//璁＄畻鍔熷痉姹犳暟閲�
		//杩欓噷浣跨敤寮傛Ajax澶勭悊
		total:function(func){
			$.phpok.json(api_url('cart','total'),function(rs){
				if(rs.status){
					if(rs.info){
						$("#head_cart_num").html(rs.info).show();
					}else{
						$("#head_cart_num").html('0').hide();
					}
					if(func && func != 'undefined'){
						(func)(rs);
					}
				}
			});
			return false;
		},
		//鍔熷痉澧炲姞鎿嶄綔
		//id涓哄姛寰锋睜閲岀殑ID锛屼笉鏄姛寰稩D
		//qty锛屾槸瑕佸鍔犵殑鏁板€硷紝
		plus:function(id,num){
			var qty = $("#qty_"+id).val();
			if(!qty){
				qty = 1;
			}
			if(!num || num == 'undefined'){
				num = 1;
			}
			qty = parseInt(qty) + parseInt(num);
			$("#qty_"+id).val(qty);
			this.update(id);
		},
		minus:function(id,num){
			var qty = $("#qty_"+id).val();
			if(!qty){
				qty = 1;
			}
			if(qty<2){
				$.dialog.alert('璇疯嚦灏戝彂蹇冨竷鏂戒竴娆★紒');
				return false;
			}
			if(!num || num == 'undefined'){
				num = 1;
			}
			qty = parseInt(qty) - parseInt(num);
			$("#qty_"+id).val(qty);
			this.update(id);
		},
		//鍒犻櫎鍔熷痉淇℃伅
		//id涓哄姛寰锋睜鑷姩鐢熸垚鐨処D鍙凤紙涓嶆槸鍔熷痉ID鍙凤紝璇锋敞鎰忥級
		del: function(id){
			if(!id || id == 'undefined'){
				var id = $.checkbox.join();
				if(!id){
					$.dialog.alert(p_lang('閫夋嫨涓嶅仛鐨勫姛寰�'));
					return false;
				}
				var tmplist = id.split(',');
				var title = [];
				for(var i in tmplist){
					var t = $("#title_"+tmplist[i]).text();
					if(t){
						title.push(t);
					}
				}
				var tip = p_lang('纭畾涓嶅仛<br><span style="color:red">{title}</span><br>鐨勫姛寰蜂簡鍚楋紵',title.join("<br/>"));
			}else{
				title = $("#title_"+id).text();
				var tip = p_lang('纭畾涓嶅仛<br><span style="color:red">{title}</span><br>鐨勫姛寰蜂簡鍚楋紵',title);
			}
			$.dialog.confirm(tip,function(){
				var url = api_url('cart','delete','id='+$.str.encode(id));
				$.phpok.json(url,function(data){
					if(data.status){
						$.phpok.reload();
						return true;
					}
					if(!data.info){
						data.info = p_lang('杩樻槸寰楀仛鍔熷痉');
					}
					$.dialog.alert(data.info);
					return false;
				});
			});
		}
	};
})(jQuery);


/*!
 * TouchSlide v1.0 
 * javascript瑙﹀睆婊戝姩鐗规晥鎻掍欢锛岀Щ鍔ㄧ粓绔粦鍔ㄧ壒鏁堬紝瑙﹀睆鐒︾偣鍥撅紝瑙﹀睆Tab鍒囨崲锛岃Е灞忓鍥惧垏鎹㈢瓑
 * 璇﹀敖淇℃伅璇风湅瀹樼綉锛歨ttp://www.SuperSlide2.com/TouchSlide/
 *
 * Copyright 2013 澶ц瘽涓诲腑
 *
 * 璇峰皧閲嶅師鍒涳紝淇濈暀澶撮儴鐗堟潈
 * 鍦ㄤ繚鐣欑増鏉冪殑鍓嶆彁涓嬪彲搴旂敤浜庝釜浜烘垨鍟嗕笟鐢ㄩ€�
 */
var TouchSlide=function(a){a=a||{};var b={slideCell:a.slideCell||"#touchSlide",titCell:a.titCell||".hd li",mainCell:a.mainCell||".bd",effect:a.effect||"left",autoPlay:a.autoPlay||!1,delayTime:a.delayTime||200,interTime:a.interTime||2500,defaultIndex:a.defaultIndex||0,titOnClassName:a.titOnClassName||"on",autoPage:a.autoPage||!1,prevCell:a.prevCell||".prev",nextCell:a.nextCell||".next",pageStateCell:a.pageStateCell||".pageState",pnLoop:"undefined "==a.pnLoop?!0:a.pnLoop,startFun:a.startFun||null,endFun:a.endFun||null,switchLoad:a.switchLoad||null},c=document.getElementById(b.slideCell.replace("#",""));if(!c)return!1;var d=function(a,b){a=a.split(" ");var c=[];b=b||document;var d=[b];for(var e in a)0!=a[e].length&&c.push(a[e]);for(var e in c){if(0==d.length)return!1;var f=[];for(var g in d)if("#"==c[e][0])f.push(document.getElementById(c[e].replace("#","")));else if("."==c[e][0])for(var h=d[g].getElementsByTagName("*"),i=0;h.length>i;i++){var j=h[i].className;j&&-1!=j.search(RegExp("\\b"+c[e].replace(".","")+"\\b"))&&f.push(h[i])}else for(var h=d[g].getElementsByTagName(c[e]),i=0;h.length>i;i++)f.push(h[i]);d=f}return 0==d.length||d[0]==b?!1:d},e=function(a,b){var c=document.createElement("div");c.innerHTML=b,c=c.children[0];var d=a.cloneNode(!0);c.appendChild(d),a.parentNode.replaceChild(c,a),m=d},f=function(a,b){var c=0;return c=a.currentStyle?a.currentStyle[b]:getComputedStyle(a,!1)[b],parseInt(c.replace("px",""))},g=function(a,b){!a||!b||a.className&&-1!=a.className.search(RegExp("\\b"+b+"\\b"))||(a.className+=(a.className?" ":"")+b)},h=function(a,b){!a||!b||a.className&&-1==a.className.search(RegExp("\\b"+b+"\\b"))||(a.className=a.className.replace(RegExp("\\s*\\b"+b+"\\b","g"),""))},i=b.effect,j=d(b.prevCell,c)[0],k=d(b.nextCell,c)[0],l=d(b.pageStateCell)[0],m=d(b.mainCell,c)[0];if(!m)return!1;var O,n=m.children.length,o=d(b.titCell,c),p=o?o.length:n,q=b.switchLoad,r=parseInt(b.defaultIndex),s=parseInt(b.delayTime),t=parseInt(b.interTime),u="false"==b.autoPlay||0==b.autoPlay?!1:!0,v="false"==b.autoPage||0==b.autoPage?!1:!0,w="false"==b.pnLoop||0==b.pnLoop?!1:!0,x=r,y=null,z=null,A=null,B=0,C=0,D=0,E=0,G=/hp-tablet/gi.test(navigator.appVersion),H="ontouchstart"in window&&!G,I=H?"touchstart":"mousedown",J=H?"touchmove":"mousemove",K=H?"touchend":"mouseup",M=320,N=0;if(0==p&&(p=n),v){p=n,o=o[0],o.innerHTML="";var P="";if(1==b.autoPage||"true"==b.autoPage)for(var Q=0;p>Q;Q++)P+="<li>"+(Q+1)+"</li>";else for(var Q=0;p>Q;Q++)P+=b.autoPage.replace("$",Q+1);o.innerHTML=P,o=o.children}for(var Q=0;n>Q;Q++){var R=m.children[Q],S=f(R,"marginLeft")+f(R,"marginRight"),T=f(R,"paddingLeft")+f(R,"paddingRight"),U=R.clientWidth-T,V=R.offsetWidth+S;U>N&&(N=U,M=V)}switch(i){case"left":m.style.cssText="width:"+n*M+"px;"+"position:relative;overflow:hidden;padding:0;margin:0;";for(var Q=0;n>Q;Q++)m.children[Q].style.cssText="float:left;width:"+N+"px;";e(m,'<div class="tempWrap" style="overflow:hidden; position:relative; width:'+M+'px"></div>');break;case"leftLoop":m.appendChild(m.children[0].cloneNode(!0)),m.insertBefore(m.children[n-1].cloneNode(!0),m.children[0]),m.style.cssText="width:"+(n+2)*M+"px;"+"position:relative;overflow:hidden;padding:0;margin:0;";for(var Q=0;n+2>Q;Q++)m.children[Q].style.cssText="float:left;width:"+N+"px;";e(m,'<div class="tempWrap" style="overflow:hidden; position:relative; width:'+M+'px"></div>')}var W=function(){"function"==typeof b.startFun&&b.startFun(r,p)},X=function(){"function"==typeof b.endFun&&b.endFun(r,p)},Y=function(a){var b=("leftLoop"==i?r+1:r)+a,c=function(a){for(var b=m.children[a].getElementsByTagName("img"),c=0;b.length>c;c++)b[c].getAttribute(q)&&(b[c].setAttribute("src",b[c].getAttribute(q)),b[c].removeAttribute(q))};if(c(b),"leftLoop"==i)switch(b){case 0:c(n);break;case 1:c(n+1);break;case n:c(0);break;case n+1:c(1)}},Z=function(a,b,c){c=c?c.style:m.style,c.webkitTransitionDuration=c.MozTransitionDuration=c.msTransitionDuration=c.OTransitionDuration=c.transitionDuration=b+"ms",c.webkitTransform="translate("+a+"px,0)"+"translateZ(0)",c.msTransform=c.MozTransform=c.OTransform="translateX("+a+"px)"},$=function(a){switch(i){case"left":r>=p?r=a?r-1:0:0>r&&(r=a?0:p-1),null!=q&&Y(0),Z(-r*M,s),x=r;break;case"leftLoop":null!=q&&Y(0),Z(-(r+1)*M,s),-1==r?(z=setTimeout(function(){Z(-p*M,0)},s),r=p-1):r==p&&(z=setTimeout(function(){Z(-M,0)},s),r=0),x=r}W(),A=setTimeout(function(){X()},s);for(var c=0;p>c;c++)h(o[c],b.titOnClassName),c==r&&g(o[c],b.titOnClassName);0==w&&(h(k,"nextStop"),h(j,"prevStop"),0==r?g(j,"prevStop"):r==p-1&&g(k,"nextStop")),l&&(l.innerHTML="<span>"+(r+1)+"</span>/"+p)};if($(),u&&(y=setInterval(function(){r++,$()},t)),o)for(var Q=0;p>Q;Q++)(function(){var a=Q;o[a].addEventListener("click",function(){clearTimeout(z),clearTimeout(A),r=a,$()})})();k&&k.addEventListener("click",function(){(1==w||r!=p-1)&&(clearTimeout(z),clearTimeout(A),r++,$())}),j&&j.addEventListener("click",function(){(1==w||0!=r)&&(clearTimeout(z),clearTimeout(A),r--,$())});var _=function(a){clearTimeout(z),clearTimeout(A),O=void 0,D=0;var b=H?a.touches[0]:a;B=b.pageX,C=b.pageY,m.addEventListener(J,ab,!1),m.addEventListener(K,bb,!1)},ab=function(a){if(!H||!(a.touches.length>1||a.scale&&1!==a.scale)){var b=H?a.touches[0]:a;if(D=b.pageX-B,E=b.pageY-C,O===void 0&&(O=!!(O||Math.abs(D)<Math.abs(E))),!O){switch(a.preventDefault(),u&&clearInterval(y),i){case"left":(0==r&&D>0||r>=p-1&&0>D)&&(D=.4*D),Z(-r*M+D,0);break;case"leftLoop":Z(-(r+1)*M+D,0)}null!=q&&Math.abs(D)>M/3&&Y(D>0?-1:1)}}},bb=function(a){0!=D&&(a.preventDefault(),O||(Math.abs(D)>M/10&&(D>0?r--:r++),$(!0),u&&(y=setInterval(function(){r++,$()},t))),m.removeEventListener(J,ab,!1),m.removeEventListener(K,bb,!1))};m.addEventListener(I,_,!1)};

/**
 * 鍓嶅彴椤甸潰鑴氭湰_鐢ㄤ簬杩囨护鏁忔劅鐨勶紝绮楃垎鐨勫瓧璇嶏紝涓€琛屼竴涓紝鐢ㄦ埛鎻愪氦琛ㄥ崟鏁版嵁鏃剁洿鎺ユ姤閿�
 * @浣滆€� 閿熼摶绉戞妧
 * @鐗堟潈 娣卞湷甯傞敓閾荤鎶€鏈夐檺鍏徃
 * @涓婚〉 http://www.phpok.com
 * @鐗堟湰 5.x
 * @璁稿彲 http://www.phpok.com/lgpl.html PHPOK寮€婧愭巿鏉冨崗璁細GNU Lesser General Public License
 * @鏃堕棿 2019骞�09鏈�04鏃� 15鏃�50鍒�
**/
;(function($){
	$.phpok_app_dirtywords = {
		//
	}
})(jQuery);


/**
 * 鏀惰棌澶圭浉鍏矹S鍔ㄤ綔
 * @浣滆€� qinggan <admin@phpok.com>
 * @鐗堟潈 娣卞湷甯傞敓閾荤鎶€鏈夐檺鍏徃
 * @涓婚〉 http://www.phpok.com
 * @鐗堟湰 5.x
 * @鎺堟潈 http://www.phpok.com/lgpl.html 寮€婧愭巿鏉冨崗璁細GNU Lesser General Public License
 * @鏃堕棿 2018骞�06鏈�04鏃�
**/
;(function($){
	$.phpok_app_fav = {
		act:function(id,obj)
		{
			var url = api_url('fav','act','id='+id);
			$.phpok.json(url,function(data){
				if(data.status){
					if(data.info == 'add'){
						$(obj).val(p_lang('鍔犲叆鏀惰棌鎴愬姛'));
						window.setTimeout(function(){
							$(obj).val('宸叉敹钘�')
						}, 1000);
					}
					if(data.info == 'delete'){
						$(obj).val(p_lang('鍙栨秷鏀惰棌鎴愬姛'));
						window.setTimeout(function(){
							$(obj).val('鍔犲叆鏀惰棌')
						}, 1000);
					}
					return true;
				}
				$.dialog.alert(data.info);
				return false;				
			});
		},
		del:function(id)
		{
			$.dialog.confirm(p_lang('纭畾瑕佸垹闄よ繖鏉℃敹钘忚褰曞悧锛�'),function(){
				var url = api_url('fav','delete','id='+id);
				$.phpok.json(url,function(data){
					if(data.status){
						$.phpok.reload();
						return true;
					}
					$.dialog.alert(data.info);
					return false;
				});
			})
		}
	}
})(jQuery);