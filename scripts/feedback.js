webpackJsonp([2],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(3),r=n(c),u=a(11),d=n(u),m=a(13),f=a(16),p=n(f),y=a(598),h={body:"[Required] - Callout body text",className:"[Optional] - Include additional class name(s)",heading:"[Required] - Callout heading text",type:"[Optional] - Callout type, as a string -  [danger | default | info]"},b=a(623),E={body:"[Required] - Toast body text",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Include icon name",onDismiss:"[Required] - Include dismiss function",type:"[Optional] - Callout type, as a string -  [danger | default | secondary]"},g=a(619),C={body:"[Required] - SystemAlert body text",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Include icon name",onDismiss:"[Required] - Include dismiss function",type:"[Optional] - SystemAlert type, as a string -  [danger | default | info | success]",url:"[Optional] - SystemAlert url, as a string"},N={React:r["default"],ReactDOM:d["default"],Callout:m.Callout},R={React:r["default"],ReactDOM:d["default"],Toast:m.Toast,Icon:m.Icon},x={React:r["default"],ReactDOM:d["default"],SystemAlert:m.SystemAlert,Icon:m.Icon},w=function(e){function t(){var e,a,n,s;l(this,t);for(var i=arguments.length,c=Array(i),r=0;r<i;r++)c[r]=arguments[r];return a=n=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.onClick=function(e){e.preventDefault(),m.NotificationActions.addNotification({body:"This is an alert in a toast notification",icon:"warning",type:"danger",onDismiss:function(){console.log("I run when the notification was dismissed")}})},s=a,o(n,s)}return s(t,e),i(t,[{key:"render",value:function(){return r["default"].createElement("div",null,r["default"].createElement("h1",{className:"site-headline"},"Feedback"),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Feedback"),r["default"].createElement("p",{className:"site-text-lead"},"Numberous components make up our feedback system: Callout, SystemAlert, and Toast.")),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Callout"),r["default"].createElement("div",{className:"u-m-b-lg"},r["default"].createElement("div",{className:"site-example-callouts"},r["default"].createElement(m.Callout,{type:"danger",heading:"Callout Danger",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(m.Callout,{type:"default",heading:"Callout Default",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}),r["default"].createElement(m.Callout,{type:"info",heading:"Callout Info",body:"Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool."}))),r["default"].createElement("h3",{className:"site-subheadline"},"Callout Playground"),r["default"].createElement(p["default"],{docClass:m.Callout,propDescriptionMap:h,codeText:y,scope:N,noRender:!1})),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"SystemAlert"),r["default"].createElement("div",{className:"u-m-b-lg"},r["default"].createElement("div",{className:"site-example-systemalerts"},r["default"].createElement(m.SystemAlert,{type:"danger",body:"Danger System Alert"}),r["default"].createElement(m.SystemAlert,{type:"default",body:"Default System Alert"}),r["default"].createElement(m.SystemAlert,{type:"info",body:"Info System Alert"}),r["default"].createElement(m.SystemAlert,{type:"success",body:"Success System Alert"}))),r["default"].createElement("h3",{className:"site-subheadline"},"SystemAlert Playground"),r["default"].createElement(p["default"],{docClass:m.SystemAlert,propDescriptionMap:C,codeText:g,scope:x,noRender:!1})),r["default"].createElement("section",null,r["default"].createElement("h3",{className:"site-subheadline"},"Toast"),r["default"].createElement("p",{className:"site-copy"},"To see a toast in action, ",r["default"].createElement("a",{href:"#",onClick:this.onClick},"click here"),"."),r["default"].createElement("div",{className:"site-example-toasts u-m-b-lg"},r["default"].createElement(m.Toast,{type:"default",body:"Default notification"}),r["default"].createElement(m.Toast,{type:"secondary",icon:"checkmark",body:"Default notification"}),r["default"].createElement(m.Toast,{type:"danger",body:"Danger notification"})),r["default"].createElement("h3",{className:"site-subheadline"},"Toast Playground"),r["default"].createElement(p["default"],{docClass:m.Toast,propDescriptionMap:E,codeText:b,scope:R,noRender:!1})))}}]),t}(r["default"].Component);w.displayName="Rhinostyle Feedback Examples",d["default"].render(r["default"].createElement(w,null),document.getElementById("js-app"))},598:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Callout heading="Default Callout" body="Rhinogram’s mission is to help you seamlessly communicate with your patients across all channels with one simple tool." />\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);'},619:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <div className="site-example-systemalerts">\n          <SystemAlert type="danger" icon="warning" body="Scheduled Maintenance Notification: Sunday August 15, 8:00 AM–10:00 EST." url="www.google.com" />\n          <SystemAlert body="Your are currently in offline mode." />\n        </div>\n      </div>\n    );\n  }\n}\nReactDOM.render(<ComponentExample />, mountNode);'},623:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Toast type="secondary" icon="checkmark" body="Default notification" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});