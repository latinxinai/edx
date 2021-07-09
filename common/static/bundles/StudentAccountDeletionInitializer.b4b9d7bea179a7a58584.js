!function(e,t){for(var o in t)e[o]=t[o]}(window,webpackJsonp([12,21,49],{"./common/static/js/src/ReactRenderer.jsx":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"ReactRenderer",function(){return f});var i=o("./node_modules/react/index.js"),s=o.n(i),l=o("./node_modules/react-dom/index.js"),c=o.n(l),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),m=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"ReactRendererException: "+e));return Error.captureStackTrace(o,t),o}return r(t,e),t}(Error),f=function(){function e(t){var o=t.component,a=t.selector,r=t.componentName,i=t.props,s=void 0===i?{}:i;n(this,e),u(this,{component:o,selector:a,componentName:r,props:s}),this.handleArgumentErrors(),this.targetElement=this.getTargetElement(),this.renderComponent()}return p(e,[{key:"handleArgumentErrors",value:function(){if(null===this.component)throw new m("Component "+this.componentName+" is not defined. Make sure you're using a non-default export statement for the "+this.componentName+" class, that "+this.componentName+" has an entry point defined within the 'entry' section of webpack.common.config.js, and that the entry point is pointing at the correct file path.");if(!(this.props instanceof Object&&this.props.constructor===Object)){var e=d(this.props);throw Array.isArray(this.props)?e="array":null===this.props&&(e="null"),new m("Invalid props passed to component "+this.componentName+". Expected an object, but received a "+e+".")}}},{key:"getTargetElement",value:function(){var e=document.querySelectorAll(this.selector);if(1!==e.length)throw new m('Expected 1 element match for selector "'+this.selector+'" but received '+e.length+" matches.");return e[0]}},{key:"renderComponent",value:function(){c.a.render(s.a.createElement(this.component,this.props,null),this.targetElement)}}]),e}()},"./lms/static/js/student_account/AccountsClient.js":function(e,t,o){"use strict";o.d(t,"a",function(){return i});var n=o("./node_modules/whatwg-fetch/fetch.js"),a=(o.n(n),o("./node_modules/js-cookie/src/js.cookie.js")),r=o.n(a),i=function(e){return fetch("/api/user/v1/accounts/deactivate_logout/",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","X-CSRFToken":r.a.get("csrftoken")},body:"password="+encodeURIComponent(e)}).then(function(e){if(e.ok)return e;throw new Error(e.status)})}},"./lms/static/js/student_account/StudentAccountDeletionInitializer.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./common/static/js/src/ReactRenderer.jsx"),a=o("./lms/static/js/student_account/components/StudentAccountDeletion.jsx"),r=0,i=setInterval(function(){document.getElementById("account-deletion-container")&&(clearInterval(i),new n.ReactRenderer({component:a.StudentAccountDeletion,selector:"#account-deletion-container",componentName:"StudentAccountDeletion",props:{socialAccountLinks:window.auth,isActive:window.isActive,additionalSiteSpecificDeletionText:window.additionalSiteSpecificDeletionText,mktgRootLink:window.mktgRootLink,platformName:window.platformName,siteName:window.siteName}})),(r+=50)>=6e4&&clearInterval(i)},50)},"./lms/static/js/student_account/components/StudentAccountDeletion.jsx":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),o.d(t,"StudentAccountDeletion",function(){return h});var i=o("./node_modules/react/index.js"),s=o.n(i),l=o("./node_modules/prop-types/index.js"),c=o.n(l),d=o("./node_modules/@edx/paragon/static/index.js"),u=(o.n(d),o("./node_modules/edx-ui-toolkit/src/js/utils/string-utils.js")),p=o.n(u),m=o("./lms/static/js/student_account/components/StudentAccountDeletionModal.jsx"),f=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),h=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.closeDeletionModal=o.closeDeletionModal.bind(o),o.loadDeletionModal=o.loadDeletionModal.bind(o),o.state={deletionModalOpen:!1,isActive:e.isActive,socialAuthConnected:o.getConnectedSocialAuth()},o}return r(t,e),f(t,[{key:"getConnectedSocialAuth",value:function(){var e=this.props.socialAccountLinks;return!(!e||!e.providers)&&e.providers.reduce(function(e,t){return e||t.connected},!1)}},{key:"closeDeletionModal",value:function(){this.setState({deletionModalOpen:!1}),this.modalTrigger.focus()}},{key:"loadDeletionModal",value:function(){this.setState({deletionModalOpen:!0})}},{key:"render",value:function(){var e=this,t=this.state,o=t.deletionModalOpen,n=t.socialAuthConnected,a=t.isActive,r=p.a.interpolate(gettext("You may also lose access to verified certificates and other program credentials like MicroMasters certificates. If you want to make a copy of these for your records before proceeding with deletion, follow the instructions for {htmlStart}printing or downloading a certificate{htmlEnd}."),{htmlStart:'<a href="https://edx.readthedocs.io/projects/edx-guide-for-students/en/latest/SFD_certificates.html#printing-a-certificate" rel="noopener" target="_blank">',htmlEnd:"</a>"}),i=n||!a,l=p.a.interpolate(gettext("Before proceeding, please {htmlStart}unlink all social media accounts{htmlEnd}."),{htmlStart:'<a href="https://support.edx.org/hc/en-us/articles/207206067" rel="noopener" target="_blank">',htmlEnd:"</a>"}),c=p.a.interpolate(gettext("Before proceeding, please {htmlStart}activate your account{htmlEnd}."),{htmlStart:'<a href="https://support.edx.org/hc/en-us/articles/115000940568-How-do-I-activate-my-account-" rel="noopener" target="_blank">',htmlEnd:"</a>"}),u=p.a.interpolate(gettext("{htmlStart}Want to change your email, name, or password instead?{htmlEnd}"),{htmlStart:'<a href="https://support.edx.org/hc/en-us/sections/115004139268-Manage-Your-Account-Settings" rel="noopener" target="_blank">',htmlEnd:"</a>"}),f=p.a.interpolate(gettext("{strongStart}Warning: Account deletion is permanent.{strongEnd} Please read the above carefully before proceeding. This is an irreversible action, and {strongStart}you will no longer be able to use the same email on {platformName}.{strongEnd}"),{strongStart:"<strong>",strongEnd:"</strong>",platformName:this.props.platformName}),h=p.a.interpolate(gettext("Please note: Deletion of your account and personal data is permanent and cannot be undone. {platformName} will not be able to recover your account or the data that is deleted."),{platformName:this.props.platformName}),g=p.a.interpolate(gettext("Once your account is deleted, you cannot use it to take courses on the {platformName} app, {siteName}, or any other site hosted by {platformName}."),{platformName:this.props.platformName,siteName:this.props.siteName}),y=p.a.interpolate(gettext("This includes access to {siteName} from your employer’s or university’s system{additionalSiteSpecificDeletionText}."),{siteName:this.props.siteName,additionalSiteSpecificDeletionText:this.props.additionalSiteSpecificDeletionText});return s.a.createElement("div",{className:"account-deletion-details"},s.a.createElement("p",{className:"account-settings-header-subtitle"},gettext("We’re sorry to see you go!")),s.a.createElement("p",{className:"account-settings-header-subtitle"},h),s.a.createElement("p",{className:"account-settings-header-subtitle"},s.a.createElement("span",null,g," "),s.a.createElement("span",null,y)),s.a.createElement("p",{className:"account-settings-header-subtitle",dangerouslySetInnerHTML:{__html:r}}),s.a.createElement("p",{className:"account-settings-header-subtitle-warning",dangerouslySetInnerHTML:{__html:f}}),s.a.createElement("p",{className:"account-settings-header-subtitle",dangerouslySetInnerHTML:{__html:u}}),s.a.createElement(d.Button,{id:"delete-account-btn",className:["btn-outline-primary"],disabled:i,label:gettext("Delete My Account"),inputRef:function(t){e.modalTrigger=t},onClick:this.loadDeletionModal}),i&&s.a.createElement(d.StatusAlert,{dialog:s.a.createElement("div",{className:"modal-alert"},s.a.createElement("div",{className:"icon-wrapper"},s.a.createElement(d.Icon,{id:"delete-confirmation-body-error-icon",className:["fa","fa-exclamation-circle"]})),s.a.createElement("div",{className:"alert-content"},n&&a&&s.a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}),!a&&s.a.createElement("p",{dangerouslySetInnerHTML:{__html:c}}))),alertType:"danger",dismissible:!1,open:!0}),o&&s.a.createElement(m.a,{onClose:this.closeDeletionModal,additionalSiteSpecificDeletionText:this.props.additionalSiteSpecificDeletionText,mktgRootLink:this.props.mktgRootLink,platformName:this.props.platformName,siteName:this.props.siteName}))}}]),t}(s.a.Component);h.propTypes={isActive:c.a.bool.isRequired,socialAccountLinks:c.a.shape({providers:c.a.arrayOf(c.a.object)}).isRequired,additionalSiteSpecificDeletionText:c.a.string,mktgRootLink:c.a.string,platformName:c.a.string,siteName:c.a.string},h.defaultProps={additionalSiteSpecificDeletionText:"",mktgRootLink:"",platformName:"",siteName:""}},"./lms/static/js/student_account/components/StudentAccountDeletionModal.jsx":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=o("./node_modules/react/index.js"),s=o.n(i),l=o("./node_modules/prop-types/index.js"),c=o.n(l),d=o("./node_modules/@edx/paragon/static/index.js"),u=(o.n(d),o("./node_modules/edx-ui-toolkit/src/js/utils/string-utils.js")),p=o.n(u),m=o("./lms/static/js/student_account/AccountsClient.js"),f=o("./lms/static/js/student_account/components/removeLoggedInCookies.js"),h=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),g=function(e){function t(e){n(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.deleteAccount=o.deleteAccount.bind(o),o.handlePasswordInputChange=o.handlePasswordInputChange.bind(o),o.passwordFieldValidation=o.passwordFieldValidation.bind(o),o.handleConfirmationModalClose=o.handleConfirmationModalClose.bind(o),o.state={password:"",passwordSubmitted:!1,passwordValid:!0,validationMessage:"",validationErrorDetails:"",accountQueuedForDeletion:!1,responseError:!1},o}return r(t,e),h(t,[{key:"handleConfirmationModalClose",value:function(){this.props.onClose(),o.i(f.a)(),window.location.href=this.props.mktgRootLink}},{key:"deleteAccount",value:function(){var e=this;return this.setState({passwordSubmitted:!0},function(){return o.i(m.a)(e.state.password).then(function(){return e.setState({accountQueuedForDeletion:!0,responseError:!1,passwordSubmitted:!1,validationMessage:"",validationErrorDetails:""})}).catch(function(t){return e.failedSubmission(t)})})}},{key:"failedSubmission",value:function(e){var t="403"===e.message?gettext("Password is incorrect"):gettext("Unable to delete account"),o="403"===e.message?gettext("Please re-enter your password."):gettext("Sorry, there was an error trying to process your request. Please try again later.");this.setState({passwordSubmitted:!1,responseError:!0,passwordValid:!1,validationMessage:t,validationErrorDetails:o})}},{key:"handlePasswordInputChange",value:function(e){this.setState({password:e})}},{key:"passwordFieldValidation",value:function(e){var t={passwordValid:!0};e.length<1&&(t={passwordValid:!1,validationMessage:gettext("A Password is required"),validationErrorDetails:""}),this.setState(t)}},{key:"renderConfirmationModal",value:function(){var e=this.state,t=e.passwordValid,o=e.password,n=e.passwordSubmitted,a=e.responseError,r=e.validationErrorDetails,i=e.validationMessage,l=this.props.onClose,c=p.a.interpolate(gettext("You may also lose access to verified certificates and other program credentials like MicroMasters certificates. If you want to make a copy of these for your records before proceeding with deletion, follow the instructions for {htmlStart}printing or downloading a certificate{htmlEnd}."),{htmlStart:'<a href="https://edx.readthedocs.io/projects/edx-guide-for-students/en/latest/SFD_certificates.html#printing-a-certificate" rel="noopener" target="_blank">',htmlEnd:"</a>"}),u=p.a.interpolate(gettext("You have selected “Delete my account.” Deletion of your account and personal data is permanent and cannot be undone. {platformName} will not be able to recover your account or the data that is deleted."),{platformName:this.props.platformName}),m=p.a.interpolate(gettext("If you proceed, you will be unable to use this account to take courses on the {platformName} app, {siteName}, or any other site hosted by {platformName}."),{platformName:this.props.platformName,siteName:this.props.siteName}),f=p.a.interpolate(gettext("This includes access to {siteName} from your employer’s or university’s system{additionalSiteSpecificDeletionText}."),{siteName:this.props.siteName,additionalSiteSpecificDeletionText:this.props.additionalSiteSpecificDeletionText});return s.a.createElement("div",{className:"delete-confirmation-wrapper"},s.a.createElement(d.Modal,{title:gettext("Are you sure?"),renderHeaderCloseButton:!1,onClose:l,"aria-live":"polite",open:!0,body:s.a.createElement("div",null,a&&s.a.createElement(d.StatusAlert,{dialog:s.a.createElement("div",{className:"modal-alert"},s.a.createElement("div",{className:"icon-wrapper"},s.a.createElement(d.Icon,{id:"delete-confirmation-body-error-icon",className:["fa","fa-exclamation-circle"]})),s.a.createElement("div",{className:"alert-content"},s.a.createElement("h3",{className:"alert-title"},i),s.a.createElement("p",null,r))),alertType:"danger",dismissible:!1,open:!0}),s.a.createElement(d.StatusAlert,{dialog:s.a.createElement("div",{className:"modal-alert"},s.a.createElement("div",{className:"icon-wrapper"},s.a.createElement(d.Icon,{id:"delete-confirmation-body-warning-icon",className:["fa","fa-exclamation-triangle"]})),s.a.createElement("div",{className:"alert-content"},s.a.createElement("h3",{className:"alert-title"},u),s.a.createElement("p",null,s.a.createElement("span",null,m," "),s.a.createElement("span",null,f)),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:c}}))),dismissible:!1,open:!0}),s.a.createElement("p",{className:"next-steps"},gettext("If you still wish to continue and delete your account, please enter your account password:")),s.a.createElement(d.InputText,{name:"confirm-password",label:"Password",type:"password",className:["confirm-password-input"],onBlur:this.passwordFieldValidation,isValid:t,validationMessage:i,onChange:this.handlePasswordInputChange,autoComplete:"new-password",themes:["danger"]})),closeText:gettext("Cancel"),buttons:[s.a.createElement(d.Button,{label:gettext("Yes, Delete"),onClick:this.deleteAccount,disabled:0===o.length||n})]}))}},{key:"renderSuccessModal",value:function(){return s.a.createElement("div",{className:"delete-success-wrapper"},s.a.createElement(d.Modal,{title:gettext("We're sorry to see you go! Your account will be deleted shortly."),renderHeaderCloseButton:!1,body:gettext("Account deletion, including removal from email lists, may take a few weeks to fully process through our system. If you want to opt-out of emails before then, please unsubscribe from the footer of any email."),onClose:this.handleConfirmationModalClose,"aria-live":"polite",open:!0}))}},{key:"render",value:function(){return this.state.accountQueuedForDeletion?this.renderSuccessModal():this.renderConfirmationModal()}}]),t}(s.a.Component);g.propTypes={onClose:c.a.func,additionalSiteSpecificDeletionText:c.a.string,mktgRootLink:c.a.string,platformName:c.a.string,siteName:c.a.string},g.defaultProps={onClose:function(){},additionalSiteSpecificDeletionText:"",mktgRootLink:"",platformName:"",siteName:""},t.a=g},"./lms/static/js/student_account/components/removeLoggedInCookies.js":function(e,t,o){"use strict";var n=o("./node_modules/js-cookie/src/js.cookie.js"),a=o.n(n),r=function(){var e=window.location.hostname,t=e.indexOf("localhost")>=0,o=e.indexOf("stage")>=0,n=".edx.org";if(t?n="localhost":o&&(n=".stage.edx.org"),a.a.remove("edxloggedin",{domain:n}),t)a.a.remove("csrftoken",{domain:n}),a.a.remove("edx-user-info",{domain:n});else{var r=o?"stage":"prod";a.a.remove(r+"-edx-csrftoken",{domain:".edx.org"}),a.a.remove(r+"-edx-user-info",{domain:n})}};t.a=r}},["./lms/static/js/student_account/StudentAccountDeletionInitializer.js"]));