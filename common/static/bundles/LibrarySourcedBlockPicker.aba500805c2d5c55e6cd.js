!function(e,t){for(var r in t)e[r]=t[r]}(window,webpackJsonp([15],{"./common/lib/xmodule/xmodule/assets/library_source_block/LibrarySourcedBlockPicker.jsx":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(a,o){try{var s=t[a](o),i=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}return n("next")})}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}r.d(t,"LibrarySourcedBlockPicker",function(){return v});var i=r("./node_modules/whatwg-fetch/fetch.js"),c=(r.n(i),r("./node_modules/prop-types/index.js")),l=r.n(c),u=r("./node_modules/react/index.js"),d=r.n(u),f=r(1),p=r.n(f),b=r("./common/lib/xmodule/xmodule/assets/library_source_block/style.css"),h=r.n(b),m=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=function(t){function r(e){a(this,r);var t=o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={libraries:[],xblocks:[],searchedLibrary:"",libraryLoading:!1,xblocksLoading:!1,selectedLibrary:void 0,selectedXblocks:new Set(t.props.selectedXblocks)},t.onLibrarySearchInput=t.onLibrarySearchInput.bind(t),t.onXBlockSearchInput=t.onXBlockSearchInput.bind(t),t.onLibrarySelected=t.onLibrarySelected.bind(t),t.onXblockSelected=t.onXblockSelected.bind(t),t.onDeleteClick=t.onDeleteClick.bind(t),t}return s(r,t),m(r,[{key:"componentDidMount",value:function(){this.fetchLibraries()}},{key:"fetchLibraries",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.setState({libraries:a?this.state.libraries:[],libraryLoading:!0},n(regeneratorRuntime.mark(function n(){var a,o=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/libraries/v2/?pagination=true&page="+r+"&text_search="+t);case 3:return a=n.sent,n.next=6,a.json();case 6:a=n.sent,this.setState({libraries:this.state.libraries.concat(a.results),libraryLoading:!1},function(){a.next&&o.fetchLibraries(t,r+1,!0)}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),e("#library-sourced-block-picker").trigger("error",{title:"Could not fetch library",message:n.t0}),this.setState({libraries:[],libraryLoading:!1});case 14:case"end":return n.stop()}},n,this,[[0,10]])})))}},{key:"fetchXblocks",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.setState({xblocks:o?this.state.xblocks:[],xblocksLoading:!0},n(regeneratorRuntime.mark(function n(){var o,s=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("/api/libraries/v2/"+t+"/blocks/?pagination=true&page="+a+"&text_search="+r);case 3:return o=n.sent,n.next=6,o.json();case 6:o=n.sent,this.setState({xblocks:this.state.xblocks.concat(o.results),xblocksLoading:!1},function(){o.next&&s.fetchXblocks(t,r,a+1,!0)}),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),e("#library-sourced-block-picker").trigger("error",{title:"Could not fetch xblocks",message:n.t0}),this.setState({xblocks:[],xblocksLoading:!1});case 14:case"end":return n.stop()}},n,this,[[0,10]])})))}},{key:"onLibrarySearchInput",value:function(e){var t=this;e.persist(),this.setState({searchedLibrary:e.target.value}),this.debouncedFetchLibraries||(this.debouncedFetchLibraries=p.a.debounce(function(e){t.fetchLibraries(e)},300)),this.debouncedFetchLibraries(e.target.value)}},{key:"onXBlockSearchInput",value:function(e){var t=this;e.persist(),this.debouncedFetchXblocks||(this.debouncedFetchXblocks=p.a.debounce(function(e){t.fetchXblocks(t.state.selectedLibrary,e)},300)),this.debouncedFetchXblocks(e.target.value)}},{key:"onLibrarySelected",value:function(e){this.setState({selectedLibrary:e.target.value}),this.fetchXblocks(e.target.value)}},{key:"onXblockSelected",value:function(e){var t=new Set(this.state.selectedXblocks);e.target.checked?t.add(e.target.value):t.delete(e.target.value),this.setState({selectedXblocks:t},this.updateList)}},{key:"onDeleteClick",value:function(e){var t=void 0;t="SPAN"==e.target.tagName?e.target.parentElement.dataset.value:e.target.dataset.value;var r=new Set(this.state.selectedXblocks);r.delete(t),this.setState({selectedXblocks:r},this.updateList)}},{key:"updateList",value:function(t){e("#library-sourced-block-picker").trigger("selected-xblocks",{sourceBlockIds:Array.from(this.state.selectedXblocks)})}},{key:"render",value:function(){var e=this;return d.a.createElement("section",null,d.a.createElement("div",{className:"container-message wrapper-message"},d.a.createElement("div",{className:"message has-warnings",style:{margin:0,color:"white"}},d.a.createElement("p",{className:"warning"},d.a.createElement("span",{className:"icon fa fa-warning","aria-hidden":"true"}),"Hitting 'Save and Import' will import the latest versions of the selected blocks, overwriting any changes done to this block post-import."))),d.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},d.a.createElement("div",{className:h.a.column},d.a.createElement("input",{type:"text",className:[h.a.search],"aria-label":"Search for library",placeholder:"Search for library",label:"Search for library",name:"librarySearch",onChange:this.onLibrarySearchInput}),d.a.createElement("div",{className:h.a.elementList,onChange:this.onLibrarySelected},this.state.libraries.map(function(e){return d.a.createElement("div",{key:e.id,className:h.a.element},d.a.createElement("input",{id:"sourced-library-"+e.id,type:"radio",value:e.id,name:"library"}),d.a.createElement("label",{className:h.a.elementItem,htmlFor:"sourced-library-"+e.id},e.title))}),this.state.libraryLoading&&d.a.createElement("span",null,gettext("Loading...")))),d.a.createElement("div",{className:h.a.column},d.a.createElement("input",{type:"text",className:[h.a.search],"aria-label":"Search for XBlocks",placeholder:"Search for XBlocks",name:"xblockSearch",onChange:this.onXBlockSearchInput,disabled:!this.state.selectedLibrary||this.state.libraryLoading}),d.a.createElement("div",{className:h.a.elementList,onChange:this.onXblockSelected},this.state.xblocks.map(function(t){return d.a.createElement("div",{key:t.id,className:h.a.element},d.a.createElement("input",{id:"sourced-block-"+t.id,type:"checkbox",value:t.id,name:"block",checked:e.state.selectedXblocks.has(t.id),readOnly:!0}),d.a.createElement("label",{className:h.a.elementItem,htmlFor:"sourced-block-"+t.id},t.display_name," (",t.id,")"))}),this.state.xblocksLoading&&d.a.createElement("span",null,gettext("Loading...")))),d.a.createElement("div",{className:h.a.column},d.a.createElement("h4",{className:h.a.selectedBlocks},gettext("Selected blocks")),d.a.createElement("ul",null,Array.from(this.state.selectedXblocks).map(function(t){return d.a.createElement("li",{key:t,className:h.a.element,style:{display:"flex"}},d.a.createElement("label",{className:h.a.elementItem},t),d.a.createElement("button",{className:[h.a.remove],"data-value":t,onClick:e.onDeleteClick,"aria-label":"Remove block"},d.a.createElement("span",{"aria-hidden":"true",className:"icon fa fa-times"})))})))))}}]),r}(d.a.Component);v.propTypes={selectedXblocks:l.a.array},v.defaultProps={selectedXblocks:[]}}.call(t,r(0))},"./common/lib/xmodule/xmodule/assets/library_source_block/style.css":function(e,t,r){var n=r('./node_modules/css-loader/index.js?{"modules":true}!./common/lib/xmodule/xmodule/assets/library_source_block/style.css');"string"==typeof n&&(n=[[e.i,n,""]]);var a={};a.transform=void 0;r("./node_modules/style-loader/lib/addStyles.js")(n,a);n.locals&&(e.exports=n.locals)},'./node_modules/css-loader/index.js?{"modules":true}!./common/lib/xmodule/xmodule/assets/library_source_block/style.css':function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,"._7zTOU65j81biqF1exVAxw{display:flex;flex-direction:column;margin:10px;max-width:300px;flex-grow:1}.-rMxuYKo3Kx822cCzwWvP{margin-top:10px}input._2riMgfzRbLl3hqEsWBr4ag{width:100%!important;height:auto!important}._9d7ApsmgEtdazHxiGd_rF>input[type=checkbox],._9d7ApsmgEtdazHxiGd_rF>input[type=radio]{position:absolute;width:0!important;height:0!important;top:-9999px}._9d7ApsmgEtdazHxiGd_rF>._1UEEHHEZYxl9YNFmAai5MJ{display:flex;flex-grow:1;padding:.625rem 1.25rem;border:1px solid rgba(0,0,0,.25)}._9d7ApsmgEtdazHxiGd_rF+._9d7ApsmgEtdazHxiGd_rF>label{border-top:0}._9d7ApsmgEtdazHxiGd_rF>input:hover+label,._9d7ApsmgEtdazHxiGd_rF>input[type=checkbox]:focus+label,._9d7ApsmgEtdazHxiGd_rF>input[type=radio]:focus+label{background:#f6f6f7;cursor:pointer}._9d7ApsmgEtdazHxiGd_rF>input:checked+label{background:#23419f;color:#fff}._9d7ApsmgEtdazHxiGd_rF>input:checked:hover+label,._9d7ApsmgEtdazHxiGd_rF>input[type=checkbox]:checked:focus+label,._9d7ApsmgEtdazHxiGd_rF>input[type=radio]:checked:focus+label{background:#193787;cursor:pointer}._1sEfGi5PCH66T3SD3ff7IV{padding:12px 8px 20px}button.NOgjgz-cqvvw_nvDfmzqx{background:#e00;color:#fff;border:1px solid rgba(0,0,0,.25)}button.NOgjgz-cqvvw_nvDfmzqx:focus,button.NOgjgz-cqvvw_nvDfmzqx:hover{background:#d00}",""]),t.locals={column:"_7zTOU65j81biqF1exVAxw",elementList:"-rMxuYKo3Kx822cCzwWvP",search:"_2riMgfzRbLl3hqEsWBr4ag",element:"_9d7ApsmgEtdazHxiGd_rF",elementItem:"_1UEEHHEZYxl9YNFmAai5MJ",selectedBlocks:"_1sEfGi5PCH66T3SD3ff7IV",remove:"NOgjgz-cqvvw_nvDfmzqx"}},"./node_modules/css-loader/lib/css-base.js":function(e,t){function r(e,t){var r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var o=n(a);return[r].concat(a.sources.map(function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"})).concat([o]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(n[o]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&n[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="("+s[2]+") and ("+r+")"),t.push(s))}},t}},"./node_modules/style-loader/lib/addStyles.js":function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],a=b[n.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](n.parts[o]);for(;o<n.parts.length;o++)a.parts.push(u(n.parts[o],t))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(u(n.parts[o],t));b[n.id]={id:n.id,refs:1,parts:s}}}}function a(e,t){for(var r=[],n={},a=0;a<e.length;a++){var o=e[a],s=t.base?o[0]+t.base:o[0],i=o[1],c=o[2],l=o[3],u={css:i,media:c,sourceMap:l};n[s]?n[s].parts.push(u):r.push(n[s]={id:s,parts:[u]})}return r}function o(e,t){var r=m(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function s(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function i(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),o(e,t),t}function c(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),o(e,t),t}function l(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function u(e,t){var r,n,a,o;if(t.transform&&e.css){if(!(o=t.transform(e.css)))return function(){};e.css=o}if(t.singleton){var l=y++;r=v||(v=i(t)),n=d.bind(null,r,l,!1),a=d.bind(null,r,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(t),n=p.bind(null,r,t),a=function(){s(r),r.href&&URL.revokeObjectURL(r.href)}):(r=i(t),n=f.bind(null,r),a=function(){s(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else a()}}function d(e,t,r,n){var a=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var o=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function f(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t,r){var n=r.css,a=r.sourceMap,o=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||o)&&(n=x(n)),a&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var s=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(s),i&&URL.revokeObjectURL(i)}var b={},h=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e.call(this,r)),t[r]}}(function(e){return document.querySelector(e)}),v=null,y=0,g=[],x=r("./node_modules/style-loader/lib/urls.js");e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=h()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=a(e,t);return n(r,t),function(e){for(var o=[],s=0;s<r.length;s++){var i=r[s],c=b[i.id];c.refs--,o.push(c)}if(e){n(a(e,t),t)}for(var s=0;s<o.length;s++){var c=o[s];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete b[c.id]}}}};var k=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},"./node_modules/style-loader/lib/urls.js":function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(a))return e;var o;return o=0===a.indexOf("//")?a:0===a.indexOf("/")?r+a:n+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}}},["./common/lib/xmodule/xmodule/assets/library_source_block/LibrarySourcedBlockPicker.jsx"]));