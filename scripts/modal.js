webpackJsonp([13],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(4),i=a(s),c=n(13),u=a(c),m=n(15),f=n(18),p=a(f),y=n(683),h={body:"[Required] - Modal Body - Typically represented by a renderBody function that returns JSX",dismissable:"[Optional] - Gives an X icon in Modal Header to close Modal",footer:"[Required] - Modal Footer - Typically represented by a renderFooter function that returns JSX",icon:"[Optional] - Attaches an Icon to the Modal Header",size:"[Optional] - Modal size -  [ sm | lg ] - defaults to a normal sized modal",title:"[Required] - Modal Title -  String to represent the Modal Header"},E={React:i["default"],ReactDOM:u["default"],Button:m.Button,Input:m.Input,ModalSystem:m.ModalSystem},v=function(e){function t(){var e,n,a,r;l(this,t);for(var d=arguments.length,s=Array(d),c=0;d>c;c++)s[c]=arguments[c];return n=a=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),a.onClick=function(e){e.preventDefault(),m.ModalSystem.addModal({body:a.renderBody(),dismissable:!0,footer:a.renderFooter(),icon:"cog",size:"lg",title:"This is a Demo Modal"})},a.closeModal=function(){m.ModalSystem.removeModal()},a.saveChanges=function(){alert("the changes have been saved"),a.closeModal()},a.renderBody=function(){return i["default"].createElement("div",{className:"form"},i["default"].createElement("div",{className:"form__group"},i["default"].createElement(m.Input,{label:"First Name"})),i["default"].createElement("div",null,i["default"].createElement(m.Input,{label:"Last Name",className:"u-m-b-0"})))},a.renderFooter=function(){return i["default"].createElement("div",null,i["default"].createElement(m.Button,{type:"default",onClick:a.closeModal},"Close"),i["default"].createElement(m.Button,{type:"primary",onClick:a.saveChanges},"Save Changes"))},r=n,o(a,r)}return r(t,e),d(t,[{key:"render",value:function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Modals"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Modal Example"),i["default"].createElement("p",{className:"site-copy"},"To see a modal in action, ",i["default"].createElement("a",{href:"#",onClick:this.onClick},"click here"),"."),i["default"].createElement("div",{className:"site-modal"},i["default"].createElement(m.Modal,{isOpen:!0,transitionName:"modal-anim"},i["default"].createElement(m.ModalContent,null,i["default"].createElement(m.ModalHeader,{dismissable:!0,icon:"calendar",title:"This is a normal, non-dismissable modal with an Icon"}),i["default"].createElement(m.ModalBody,null,i["default"].createElement("div",{className:"form"},i["default"].createElement(m.Input,{label:"First Name"}),i["default"].createElement(m.Input,{label:"Last Name",className:"u-m-b-0"}))),i["default"].createElement(m.ModalFooter,null,i["default"].createElement(m.Button,{type:"default"},"Close"),i["default"].createElement(m.Button,{type:"primary"},"Save Changes")))))),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Modal Sizes"),i["default"].createElement("p",null,"Add the ",i["default"].createElement("code",null,"modal__container--sm")," modifier to ",i["default"].createElement("code",null,"modal__container")," for a smaller modal."),i["default"].createElement("p",null,"Add the ",i["default"].createElement("code",null,"modal__container--lg")," modifier to ",i["default"].createElement("code",null,"modal__container")," for a larger modal.")),i["default"].createElement("section",null,i["default"].createElement("h3",{className:"site-subheadline"},"Playground"),i["default"].createElement(p["default"],{docClass:m.ModalContainer["default"],propDescriptionMap:h,codeText:y,scope:E,noRender:!1})))}}]),t}(i["default"].Component);u["default"].render(i["default"].createElement(v,null),document.getElementById("js-app"))},683:function(e,t){e.exports='class ComponentExample extends React.Component {\n  onClick = (event) => {\n    event.preventDefault();\n    ModalSystem.addModal({\n      body:         this.renderBody(),\n      footer:       this.renderFooter(),\n      title:        \'This is a sample Modal\',\n    });\n  };\n\n  closeModal = () => {\n    ModalSystem.removeModal();\n  }\n\n  saveChanges = () => {\n    alert(\'the changes have been saved\');\n    this.closeModal();\n  }\n\n  renderBody = () => {\n    return (\n      <div className="form">\n        <div className="form__group">\n          <Input label="First Name" />\n        </div>\n        <div>\n          <Input label="Last Name" className="u-m-b-0" />\n        </div>\n      </div>\n    );\n  }\n\n  renderFooter = () => {\n    return (\n      <div>\n        <Button type="default" onClick={this.closeModal}>Close</Button>\n        <Button type="primary" onClick={this.saveChanges}>Save Changes</Button>\n      </div>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Playground Modal</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});