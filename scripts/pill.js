webpackJsonp([8],{0:function(e,l,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=t(3),c=n(a),s=t(12),d=n(s),u=t(17),i=t(18),r=n(i),m=t(563),o={React:c["default"],ReactDOM:d["default"],Pill:u.Pill},f=function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Pills"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Pill Types"),c["default"].createElement("p",{className:"site-copy"},c["default"].createElement("code",null,'type="default"')),c["default"].createElement("div",{className:"site-example-pills"},c["default"].createElement(u.Pill,{label:"Ben Bruning"}),c["default"].createElement(u.Pill,{label:"Craig Anthony"}))),c["default"].createElement("section",null,c["default"].createElement("h3",{className:"site-subheadline"},"Playground"),c["default"].createElement(r["default"],{codeText:m,scope:o,noRender:!1})))};d["default"].render(c["default"].createElement(f,null),document.getElementById("js-app"))},563:function(e,l){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-pills">\n        <Pill label="Ben" />\n        <Pill label="Click Me" click={() => alert(\'clicked!\')} />\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});