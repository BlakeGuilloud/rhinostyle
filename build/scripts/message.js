webpackJsonp([14],{0:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var s=a(3),l=n(s),d=a(10),i=n(d),c=a(11),u=a(16),o=n(u),r=a(614),m={className:"[Optional] - Include additional class name(s)",type:"[Optional] - Message type -  [primary | note]",direction:"[Optional] - Message direction -  [inbound | outbound]"},f={React:l["default"],ReactDOM:i["default"],Message:c.Message},p=function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Messages"),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Message Types"),l["default"].createElement("p",{className:"site-copy"},l["default"].createElement("code",null,'type="default | primary | note"')),l["default"].createElement("div",{className:"site-example-messages"},l["default"].createElement(c.Message,null,"Default Message ",l["default"].createElement("a",{href:"#"},"www.linktosomething.com")),l["default"].createElement(c.Message,{type:"primary"},"Primary Message ",l["default"].createElement("a",{href:"#"},"www.linktosomething.com")),l["default"].createElement(c.Message,{type:"note"},"Note Message ",l["default"].createElement("a",{href:"#"},"www.linktosomething.com")))),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Message Direction"),l["default"].createElement("div",{className:"u-m-b-md"},l["default"].createElement("h5",{className:"site-miniheadline"},"Inbound Message"),l["default"].createElement("p",{className:"site-copy"},l["default"].createElement("code",null,'direction="inbound"')),l["default"].createElement("div",null,l["default"].createElement(c.Message,{direction:"inbound"},"Default Message"),l["default"].createElement(c.Message,{direction:"inbound",type:"primary"},"Primary Message"),l["default"].createElement(c.Message,{direction:"inbound",type:"note"},"Note Message"))),l["default"].createElement("div",{className:"u-m-b-md"},l["default"].createElement("h5",{className:"site-miniheadline"},"Outbound Message"),l["default"].createElement("p",{className:"site-copy"},l["default"].createElement("code",null,'direction="outbound"')),l["default"].createElement("div",null,l["default"].createElement(c.Message,{direction:"outbound"},"Default Message"),l["default"].createElement(c.Message,{direction:"outbound",type:"primary"},"Primary Message"),l["default"].createElement(c.Message,{direction:"outbound",type:"note"},"Note Message")))),l["default"].createElement("section",null,l["default"].createElement("h3",{className:"site-subheadline"},"Playground"),l["default"].createElement(o["default"],{docClass:c.Message,propDescriptionMap:m,codeText:r,scope:f,noRender:!1})))};i["default"].render(l["default"].createElement(p,null),document.getElementById("js-app"))},614:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div>\n        <Message direction="outbound" type="note">\n          This is a note.\n        </Message>\n        <Message direction="inbound">\n          This is a default message.\n        </Message>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});