!function(t,i){for(var s in i)t[s]=i[s]}(window,webpackJsonp([23],{"./cms/static/js/factories/xblock_validation.js":function(t,i,s){"use strict";function e(t,i,s,e,a){var l,r;i&&!s&&(t.showSummaryOnly=!0),r=t,r.isUnit=e,l=new o(r,{parse:!0}),l.get("empty")||new n({el:a,model:l,root:s}).render()}Object.defineProperty(i,"__esModule",{value:!0}),i.default=e,s.d(i,"XBlockValidationFactory",function(){return e});var n=s("./cms/static/js/views/xblock_validation.js"),o=(s.n(n),s("./cms/static/js/models/xblock_validation.js"));s.n(o)},"./cms/static/js/models/xblock_validation.js":function(t,i,s){var e,n;e=[s(2),s(3),s(1)],void 0!==(n=function(t,i,s){return t.Model.extend({defaults:{summary:{},messages:[],empty:!0,xblock_id:null},WARNING:"warning",ERROR:"error",NOT_CONFIGURED:"not-configured",parse:function(t){if(!t.empty){var e="summary"in t?t.summary:{},n="messages"in t?t.messages:[];e.text||(t.isUnit?e.text=i("This unit has validation issues."):e.text=i("This component has validation issues.")),e.type||(e.type=this.WARNING,s.find(n,function(t){return t.type===this.ERROR&&(e.type=this.ERROR,!0)},this)),t.summary=e,t.showSummaryOnly&&(n=[]),t.messages=n}return t}})}.apply(i,e))&&(t.exports=n)},"./cms/static/js/views/xblock_validation.js":function(t,i,s){var e,n;e=[s(0),s(1),s("./cms/static/js/views/baseview.js"),s(3),s("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js")],void 0!==(n=function(t,i,s,e,n){"use strict";return s.extend({initialize:function(t){s.prototype.initialize.call(this),this.template=this.loadTemplate("xblock-validation-messages"),this.root=t.root},render:function(){var t={validation:this.model,additionalClasses:this.getAdditionalClasses(),getIcon:this.getIcon.bind(this),getDisplayName:this.getDisplayName.bind(this)};return this.$el.html(n.HTML(this.template(t)).toString()),this},getIcon:function(t){return t===this.model.ERROR?"fa-exclamation-circle":t===this.model.WARNING||t===this.model.NOT_CONFIGURED?"fa-exclamation-triangle":null},getDisplayName:function(t){return t===this.model.WARNING||t===this.model.NOT_CONFIGURED?e("Warning"):t===this.model.ERROR?e("Error"):null},getAdditionalClasses:function(){return this.root&&this.model.get("summary").type===this.model.NOT_CONFIGURED&&0===this.model.get("messages").length?"no-container-content":""}})}.apply(i,e))&&(t.exports=n)}},["./cms/static/js/factories/xblock_validation.js"]));