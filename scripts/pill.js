webpackJsonp([13],{0:function(e,l,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=t(3),i=n(a),s=t(9),c=n(s),d=t(12),o=t(16),u=n(o),r=t(623),m={className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Pill is disabled",onClick:"[Required] - Include click function for Pill",label:"[Required] - Include label for Pill"},f={React:i["default"],ReactDOM:c["default"],Pill:d.Pill},p=function(){return i["default"].createElement("div",null,i["default"].createElement("h1",{className:"site-headline"},"Pills"),i["default"].createElement("section",{className:"site-section"},i["default"].createElement("h3",{className:"site-subheadline"},"Pills"),i["default"].createElement("p",{className:"site-text-lead"},"The Pill component is used to display current filters or selections.")),i["default"].createElement("section",null,i["default"].createElement("h3",{className:"site-subheadline"},"Playground"),i["default"].createElement(u["default"],{docClass:d.Pill,propDescriptionMap:m,codeText:r,scope:f,noRender:!1})))};c["default"].render(i["default"].createElement(p,null),document.getElementById("js-app"))},623:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Ben" />\n        <Pill label="Click Me" onClick={() => alert(\'clicked!\')} />\n        <Pill label="Disabled Pill" disabled />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});