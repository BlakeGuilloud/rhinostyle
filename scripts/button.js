webpackJsonp([3],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var n=a(15),u=l(n),c=a(63),o=l(c),s=a(73),r=a(74),i=l(r),d=a(415),m={React:u["default"],ReactDOM:o["default"],Button:s.Button,Icon:s.Icon},f=u["default"].createClass({displayName:"Rhinostyle Button Example",render:function(){return u["default"].createElement("div",null,u["default"].createElement("h1",{className:"site-headline"},"Buttons"),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Types"),u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,{type:"primary"},"Primary"),u["default"].createElement(s.Button,{type:"secondary"},"Secondary"),u["default"].createElement(s.Button,{outline:!0},"Default Outline"),u["default"].createElement(s.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(s.Button,{type:"link"},"Link")),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Sizes"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{size:"large"},"Large"),u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,{size:"small"},"Small")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{size:"large"},"Large"),u["default"].createElement(s.Button,{size:"large"},u["default"].createElement(s.Icon,{icon:"cog"})," Large"),u["default"].createElement(s.Button,{size:"large",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"}))),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,null,u["default"].createElement(s.Icon,{icon:"cog"})," Default"),u["default"].createElement(s.Button,{iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"}))),u["default"].createElement("div",null,u["default"].createElement(s.Button,{size:"small"},"Small"),u["default"].createElement(s.Button,{size:"small"},u["default"].createElement(s.Icon,{icon:"cog"})," Small"),u["default"].createElement(s.Button,{size:"small",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"})))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Modifiers"),u["default"].createElement("div",{className:"u-m-b-md"},u["default"].createElement("h5",{className:"site-miniheadline"},"Block Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"block=","{true}")," to create a block level button."),u["default"].createElement(s.Button,{block:!0},"Block Button")),u["default"].createElement("div",null,u["default"].createElement("h5",{className:"site-miniheadline"},"Icon-Only Buttons"),u["default"].createElement("p",{className:"site-copy"},"Add ",u["default"].createElement("code",null,"iconOnly=","{true}")," when you have a button with an icon but no text. This modifier adjusts the padding to give a more square appearance."),u["default"].createElement(s.Button,{iconOnly:!0},u["default"].createElement(s.Icon,{icon:"sms"})),u["default"].createElement(s.Button,{type:"primary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"email"})),u["default"].createElement(s.Button,{type:"secondary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"cog"})),u["default"].createElement(s.Button,{outline:!0,iconOnly:!0},u["default"].createElement(s.Icon,{icon:"clock"})),u["default"].createElement(s.Button,{outline:!0,type:"primary",iconOnly:!0},u["default"].createElement(s.Icon,{icon:"pencil"})))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button States"),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,null,"Default"),u["default"].createElement(s.Button,{classes:"active"},"Default Active"),u["default"].createElement(s.Button,{classes:"disabled"},"Default Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{type:"primary"},"Primary"),u["default"].createElement(s.Button,{type:"primary",classes:"active"},"Primary Active"),u["default"].createElement(s.Button,{type:"primary",classes:"disabled"},"Primary Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{type:"secondary"},"Secondary"),u["default"].createElement(s.Button,{type:"secondary",classes:"active"},"Secondary Active"),u["default"].createElement(s.Button,{type:"secondary",classes:"disabled"},"Secondary Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{outline:!0},"Default Outline"),u["default"].createElement(s.Button,{outline:!0,classes:"active"},"Default Outline Active"),u["default"].createElement(s.Button,{outline:!0,classes:"disabled"},"Default Outline Disabled")),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,{type:"primary",outline:!0},"Primary Outline"),u["default"].createElement(s.Button,{type:"primary",outline:!0,classes:"active"},"Primary Outline Active"),u["default"].createElement(s.Button,{type:"primary",outline:!0,classes:"disabled"},"Primary Outline Disabled"))),u["default"].createElement("section",{className:"site-section"},u["default"].createElement("h3",{className:"site-subheadline"},"Button Ellipsis"),u["default"].createElement("h5",{className:"site-miniheadline"},"Buttons with Long Text"),u["default"].createElement("p",null,"Wrap button's text in ",u["default"].createElement("code",null,"btn__text")," class n order to allow ellipsis. This rule applies to dropdowns as well."),u["default"].createElement("div",{className:"u-m-b"},u["default"].createElement(s.Button,null,u["default"].createElement("span",{className:"btn__text"},"Wow! This button has a lot of text!")),u["default"].createElement("br",null),u["default"].createElement("br",null),u["default"].createElement(s.Button,null,u["default"].createElement(s.Icon,{icon:"lock"})," ",u["default"].createElement("span",{className:"btn__text"},"Wow! This button has a lot of text and an icon!")))),u["default"].createElement("section",null,u["default"].createElement("h3",{className:"site-subheadline"},"Playground"),u["default"].createElement(i["default"],{codeText:d,scope:m,noRender:!1})))}});o["default"].render(u["default"].createElement(f,null),document.getElementById("js-app"))},415:function(e,t){e.exports='var ComponentExample = React.createClass({\n  render() {\n    return (\n      <div>\n        <Button>Default</Button>\n        <Button type="primary">Primary</Button>\n        <Button type="secondary" iconOnly={true}><Icon icon="cog" /></Button>\n      </div>\n    );\n  }\n});\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});