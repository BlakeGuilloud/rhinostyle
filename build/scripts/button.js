webpackJsonp([1],{0:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var n=l(30),c=a(n),u=l(83),r=a(u),d=l(139),o=l(140),s=a(o),m=l(396),i={React:c["default"],ReactDOM:r["default"],Button:d.Button},f=c["default"].createClass({displayName:"Rhinostyle Button Example",render:function(){return c["default"].createElement("div",null,c["default"].createElement("h1",{className:"site-headline"},"Buttons"),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Button Tags"),c["default"].createElement(d.Button,{label:"Anchor"})),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Button Color Modifiers"),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Default",type:"default"}),c["default"].createElement(d.Button,{label:"Primary",type:"primary"}),c["default"].createElement(d.Button,{label:"Secondary",type:"secondary"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Default Outline",type:"default",outline:!0}),c["default"].createElement(d.Button,{label:"Primry Outline",type:"primary",outline:!0})),c["default"].createElement("div",null,c["default"].createElement(d.Button,{label:"Link",type:"link"}))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Button Size Modifiers"),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Large",size:"large"}),c["default"].createElement(d.Button,{label:"Default"}),c["default"].createElement(d.Button,{label:"Small",size:"small"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Large",size:"large"}),c["default"].createElement(d.Button,{label:c["default"].createElement("span",null,c["default"].createElement(d.Icon,{icon:"cog"})," Large"),size:"large"}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"cog"}),size:"large",iconOnly:!0})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Default"}),c["default"].createElement(d.Button,{label:c["default"].createElement("span",null,c["default"].createElement(d.Icon,{icon:"cog"})," Default")}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"cog"}),iconOnly:!0})),c["default"].createElement("div",null,c["default"].createElement(d.Button,{label:"Small",size:"small"}),c["default"].createElement(d.Button,{label:c["default"].createElement("span",null,c["default"].createElement(d.Icon,{icon:"cog"})," Small"),size:"small"}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"cog"}),size:"small",iconOnly:!0}))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Button Type Modifiers"),c["default"].createElement("div",{className:"u-m-b-md"},c["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),c["default"].createElement("p",{className:"site-copy"},"Add ",c["default"].createElement("code",null,"block=","{true}")," to create a block level button."),c["default"].createElement("div",{className:"row"},c["default"].createElement("div",{className:"col-sm-10"},c["default"].createElement(d.Button,{label:"Block Button",block:!0})))),c["default"].createElement("div",null,c["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),c["default"].createElement("p",{className:"site-copy"},"Add ",c["default"].createElement("code",null,"iconOnly=","{true}")," when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance. Be sure you pass your icon in as the label, ",c["default"].createElement("code",null,"label=",'{<Icon icon="cog" />}'),"."),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"sms"}),iconOnly:!0}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"email"}),type:"primary",iconOnly:!0}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"cog"}),type:"secondary",iconOnly:!0}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"clock"}),outline:!0,iconOnly:!0}),c["default"].createElement(d.Button,{label:c["default"].createElement(d.Icon,{icon:"pencil"}),outline:!0,type:"primary",iconOnly:!0}))),c["default"].createElement("section",{className:"site-section"},c["default"].createElement("h3",{className:"site-subheadline"},"Button States"),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Default"}),c["default"].createElement(d.Button,{label:"Default Active",classes:"active"}),c["default"].createElement(d.Button,{label:"Default Disabled",classes:"disabled"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Primary",type:"primary"}),c["default"].createElement(d.Button,{label:"Primary Active",type:"primary",classes:"active"}),c["default"].createElement(d.Button,{label:"Primary Disabled",type:"primary",classes:"disabled"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Secondary",type:"secondary"}),c["default"].createElement(d.Button,{label:"Secondary Active",type:"secondary",classes:"active"}),c["default"].createElement(d.Button,{label:"Secondary Disabled",type:"secondary",classes:"disabled"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Default Outline",outline:!0}),c["default"].createElement(d.Button,{label:"Default Outline Active",outline:!0,classes:"active"}),c["default"].createElement(d.Button,{label:"Default Outline Disabled",outline:!0,classes:"disabled"})),c["default"].createElement("div",{className:"u-m-b"},c["default"].createElement(d.Button,{label:"Primary Outline",type:"primary",outline:!0}),c["default"].createElement(d.Button,{label:"Primary Outline Active",type:"primary",outline:!0,classes:"active"}),c["default"].createElement(d.Button,{label:"Primary Outline Disabled",type:"primary",outline:!0,classes:"disabled"}))),c["default"].createElement("section",null,c["default"].createElement("h4",null,"Try it out!"),c["default"].createElement(s["default"],{codeText:m,scope:i,noRender:!1})))}});r["default"].render(c["default"].createElement(f,null),document.getElementById("js-app"))},396:function(e,t){e.exports='var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <h4>Button</h4>\n        <Button label="Default" />\n        <Button label="Primary" type="primary" />\n        <Button label="Secondary" type="secondary" />\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});