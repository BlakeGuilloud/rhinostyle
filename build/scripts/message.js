webpackJsonp([5],{0:function(e,a,t){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var l=t(3),n=s(l),m=t(18),r=s(m),c=t(26),d=t(29),u=s(d),o=t(439),f={React:n["default"],ReactDOM:r["default"],Message:c.Message},i=function(){return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"site-headline"},"Messages"),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Message Types"),n["default"].createElement("div",{className:"site-example-messages u-bg-gray-lighter u-p-a"},n["default"].createElement("div",{className:"msg msg--default"},"Default message. ",n["default"].createElement("a",{href:"#"},"www.rhinogram.com")),n["default"].createElement("div",{className:"msg msg--primary"},"Primary message. ",n["default"].createElement("a",{href:"#"},"www.rhinogram.com")),n["default"].createElement("div",{className:"msg msg--secondary"},"Secondary message. ",n["default"].createElement("a",{href:"#"},"www.rhinogram.com")),n["default"].createElement("div",{className:"msg msg--note"},"Note message. ",n["default"].createElement("a",{href:"#"},"www.rhinogram.com")))),n["default"].createElement("section",null,n["default"].createElement("h3",{className:"site-subheadline"},"Playground"),n["default"].createElement(u["default"],{codeText:o,scope:f,noRender:!1})))};r["default"].render(n["default"].createElement(i,null),document.getElementById("js-app"))},439:function(e,a){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-messages">\n        <Message type="default" message="hello" />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});