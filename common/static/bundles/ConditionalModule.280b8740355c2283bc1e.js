!function(e,t){for(var o in t)e[o]=t[o]}(window,webpackJsonp([25],{"./common/static/xmodule/modules/js/001-2ddb2a4d0d40ddef6b42a9a0d21f9a7c.js":function(e,t,o){(function(e,t,o){(function(){(function(){this.Conditional=function(){function n(t,o){var n;this.el=e(t).find(".conditional-wrapper"),this.callerElId=o,void 0!==o&&"string"==typeof(n=this.el.data("depends"))&&n.length>0&&-1===n.indexOf(o)||(this.url=this.el.data("url"),this.url&&this.render(t))}return n.prototype.render=function(t){return e.postWithPrefix(this.url+"/conditional_get",function(o){return function(n){var s,r,d,i=[];for(o.el.html(""),fragments=n.fragments,s=0,r=fragments.length;s<r;s++)i.push(o.renderXBlockFragment(fragments[s])),console.log("Started fragment loading",fragments[s]);d=e(t).parent(),d.attr("id"),!1===n.message?d.hasClass("vert")?d.hide():e(t).hide():d.hasClass("vert")?d.show():e(t).show(),e.when.apply(null,i).done(function(){console.log("All fragments loaded, initializing blocks"),XBlock.initializeBlocks(o.el)})}}(this))},n.prototype.renderXBlockFragment=function(t){var o=t.content,n=t.resources||[],s=this.el;try{return this.addXBlockFragmentResources(n).done(function(){console.log("Fragment resources loaded, appending HTML"),s.append(o)})}catch(t){return console.error(t,t.stack),e.Deferred().resolve()}},n.prototype.addXBlockFragmentResources=function(o){var n,s,r,d=this,s=o.length,r=e.Deferred();return n=function(e){var i,l;if(e>=s)return void r.resolve();i=o[e],window.loadedXBlockResources=window.loadedXBlockResources||[],t.indexOf(loadedXBlockResources,i)<0?(l=d.loadResource(i),loadedXBlockResources.push(i),l.done(function(){n(e+1)}).fail(function(){r.reject()})):n(e+1)},n(0),r.promise()},n.prototype.loadResource=function(t){var n,s=e("head"),r=t.mimetype,d=t.kind,i=t.placement,l=t.data;if("text/css"===r)"text"===d?s.append("<style type='text/css'>"+l+"</style>"):"url"===d&&s.append("<link rel='stylesheet' href='"+l+"' type='text/css'>");else if("application/javascript"===r){if("text"===d)s.append("<script>"+l+"<\/script>");else if("url"===d)return n=e.Deferred(),o(l,l,function(){n.resolve()}),n.promise()}else"text/html"===r&&"head"===i&&s.append(l);return e.Deferred().resolve().promise()},n}()}).call(this)}).call(window)}).call(t,o(0),o(1),o("./node_modules/scriptjs/dist/script.js"))},10:function(e,t,o){o("./common/static/xmodule/modules/js/000-58032517f54c5c1a704a908d850cbe64.js"),o("./common/static/xmodule/modules/js/001-2ddb2a4d0d40ddef6b42a9a0d21f9a7c.js"),o("./common/static/xmodule/modules/js/002-3918b2d4f383c04fed8227cc9f523d6e.js"),e.exports=o("./common/static/xmodule/modules/js/003-d47e678753905042c21bbc110fb3f8d8.js")}},[10]));