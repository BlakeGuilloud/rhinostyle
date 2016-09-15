webpackJsonp([3],{0:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var a=n(3),o=l(a),d=n(10),r=l(d),m=n(11),u=n(16),i=l(u),p=n(606),c=n(608),D=n(607),w={activeKey:"[Optional] - The id of the currently selected DropdownMenuItem",className:"[Optional] - Include additional class name(s)",hideCaret:"[Optional] - Hide Dropdown caret",icon:"[Optional] - Name of icon",label:"[Optional] - Text in dropdown when closed",lockLabel:"[Optional] - Do not change label text when selecting item",position:"[Optional] -  Position of Dropdown - [right | top | top-right]",size:"[Optional] - Size of Dropdown - [small | large]",onSelect:"[Optional] - Callback when a DropdownMenuItem is selected",type:"[Optional] - Type of Dropdown -  [default | input | primary | secondary | outline-default | outline-primary | outline-reversed | link]"},s={activeKey:"[Optional] - The id of the currently selected DropdownMenuItem",className:"[Optional] - Include additional class name(s)",icon:"[Optional] - Name of icon",label:"[Optional] - Text in dropdown when closed",position:"[Optional] -  Position of Dropdown - [right | top | top-right]",size:"[Optional] - Size of Dropdown - [small | large]",onSelect:"[Optional] - Callback when a DropdownMenuItem is selected"},f={active:"[Optional] - Active state",avatar:"[Optional] - Path to avatar image",blankWindow:"[Optional] - Open URL in blank browser window",className:"[Optional] - Include additional class name(s)",disabled:"[Optional] - Disabled state",icon:"[Optional] - Name of icon",id:"[Optional] - Identifies the selected item in Dropdown when you want to use as a Dropdown Select",label:"[Optional] - Label for item",onClick:"[Opational] - Click function",route:"[Optional] - React-router route to use for item",url:"[Optional] - URL for item"},I={React:o["default"],ReactDOM:r["default"],Dropdown:m.Dropdown,DropdownFilter:m.DropdownFilter,DropdownMenuDivider:m.DropdownMenuDivider,DropdownMenuHeader:m.DropdownMenuHeader,DropdownMenuItem:m.DropdownMenuItem,DropdownMenuScroll:m.DropdownMenuScroll,DropdownMultiSelect:m.DropdownMultiSelect,Icon:m.Icon},M=function(){return o["default"].createElement("div",null,o["default"].createElement("h1",{className:"site-headline"},"Dropdowns"),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdowns"),o["default"].createElement("p",{className:"site-text-lead"},"We have two main dropdown components: ",o["default"].createElement("span",{className:"u-text-accent"},"Dropdown")," and ",o["default"].createElement("span",{className:"u-text-accent"},"DropdownMultiSelect"),".")),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown Types"),o["default"].createElement("p",{className:"site-copy"},"Types are the same as the Button component with one exception - Dropdowns include an ",o["default"].createElement("code",null,"input")," type so that they mimic form controls."),o["default"].createElement("div",{className:"site-example-dropdowns"},o["default"].createElement(m.Dropdown,{label:"Default"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Input",type:"input"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Primary",type:"primary"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Secondary",type:"secondary"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Outline Default",type:"outline-default"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Outline Primary",type:"outline-primary"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Link",type:"link"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"link",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement("br",null),o["default"].createElement("br",null),o["default"].createElement(m.Dropdown,{type:"default",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"primary",icon:"lock"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"secondary",icon:"cog"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"outline-default",icon:"search"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{type:"outline-primary",icon:"lock"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})),o["default"].createElement(m.Dropdown,{label:"Link with Color Utility",type:"link",className:"u-text-body"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown Modifiers"),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Block"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"block")," property to create 100% width, block level dropdown."),o["default"].createElement(m.Dropdown,{label:"Dropdown Block",type:"default",icon:"cog",block:!0},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Right"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="right"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Right",type:"default",position:"right"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Top"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="top"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Top",type:"default",position:"top"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Top & Right"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,'position="top-right"')," property."),o["default"].createElement(m.Dropdown,{label:"Dropdown Top Right",type:"default",position:"top-right"},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"}))),o["default"].createElement("div",{className:"u-m-b-md"},o["default"].createElement("h5",{className:"site-miniheadline"},"Dropdown Wide"),o["default"].createElement("p",{className:"site-copy"},"Add ",o["default"].createElement("code",null,"wide")," property. This gives the dropdown menu a larger min-width value. Handy when you want to include an input filter."),o["default"].createElement(m.Dropdown,{label:"Dropdown Wide",type:"default",wide:!0},o["default"].createElement(m.DropdownMenuHeader,null,"Menu Header"),o["default"].createElement(m.DropdownMenuItem,{label:"Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"Another Item"}),o["default"].createElement(m.DropdownMenuItem,{label:"A third item"}),o["default"].createElement(m.DropdownMenuDivider,null),o["default"].createElement(m.DropdownMenuItem,{label:"Separated Item"})))),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown"),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,"Dropdown")," component to create a dropdown with selectable menu items. Selected menu items are reflected in the dropdown button's text when an ",o["default"].createElement("code",null,"id")," is used in ",o["default"].createElement("code",null,"DropdownMenuItem"),". To prevent this, use the ",o["default"].createElement("code",null,"lockLabel")," property."),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,'type="input"')," if you want dropdown to appear like a form input."),o["default"].createElement(i["default"],{docClass:m.Dropdown,propDescriptionMap:w,codeText:p,scope:I,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"Dropdown MultiSelect"),o["default"].createElement("p",{className:"site-copy"},"Use ",o["default"].createElement("code",null,"DropdownMultiSelect")," component to create a multi-select list of ",o["default"].createElement("code",null,"DropdownMenuItem(s)"),'. This dropdown and dropdown menu will always have 100% width and the appearance of a form input. Selected items are shown as "pills" below the dropdown.'),o["default"].createElement(i["default"],{docClass:m.DropdownMultiSelect,propDescriptionMap:s,codeText:c,scope:I,noRender:!1})),o["default"].createElement("section",{className:"site-section"},o["default"].createElement("h3",{className:"site-subheadline"},"DropdownMenuItem"),o["default"].createElement(i["default"],{docClass:m.DropdownMenuItem,propDescriptionMap:f,codeText:D,scope:I,noRender:!1})))};r["default"].render(o["default"].createElement(M,null),document.getElementById("js-app"))},606:function(e,t){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (index) => {\n    console.log(\'Run optional callback function\', index);\n  };\n\n  render() {\n    return (\n    <div>\n      <Dropdown label="Dropdown" type="outline-primary">\n        <DropdownMenuHeader>Menu Header</DropdownMenuHeader>\n        <DropdownMenuItem label="Custom click Item" onClick={() => alert(\'clicked!\')} />\n        <DropdownMenuItem label="Url Blank Window Item" url={\'http://www.rhinogram.com\'} blankWindow />\n        <DropdownMenuItem label="Url Item" url={\'http://www.rhinogram.com\'} />\n        <DropdownMenuDivider />\n        <DropdownMenuItem label="Separated Item" />\n      </Dropdown>\n      &nbsp;&nbsp;\n      <Dropdown label="Dropdown Select" type="input" onSelect={this.optionalCallbackFunction}>\n        <DropdownMenuHeader>Menu Header</DropdownMenuHeader>\n        <DropdownMenuItem id={1} label="Item" />\n        <DropdownMenuItem id={2} label="Another item" />\n        <DropdownMenuItem id={3} label="A third item" />\n        <DropdownMenuDivider />\n        <DropdownMenuItem id={4} label="A fourth item" />\n      </Dropdown>\n      &nbsp;&nbsp;\n      <Dropdown wide label="Dropdown Select w/ Filter" type="outline-primary">\n        <DropdownFilter placeholder="Filter Contact">\n            <DropdownMenuItem id={1} label="Item" />\n            <DropdownMenuItem id={2} label="Another item" />\n            <DropdownMenuItem id={3} label="A third item" />\n            <DropdownMenuItem id={4} label="A fourth item" />\n            <DropdownMenuItem id={5} label="A fifth item" />\n            <DropdownMenuItem id={6} label="A sixth item" />\n            <DropdownMenuItem id={7} label="A seventh item" />\n            <DropdownMenuItem id={8} label="An eighth item" />\n        </DropdownFilter>\n      </Dropdown>\n      &nbsp;&nbsp;\n      <Dropdown wide label="Dropdown Select w/ Filter & Avatar" type="outline-primary">\n        <DropdownFilter placeholder="Filter Member">\n          <DropdownMenuItem id={1} label="Ben Bruning With Really Long Name" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/24263_391743639328_3523852_n.jpg?oh=260c184e71abf5fdaff9eddb361b0139&oe=57E56868" />\n          <DropdownMenuItem id={2} label="Blake Guilloud" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1504523_437875089696117_7378541844854542050_n.jpg?oh=089a2d533f97e5a10f378291880c3dc8&oe=57CEA0AF" />\n          <DropdownMenuItem id={3} label="Craig Anthony" avatar="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />\n          <DropdownMenuItem id={4} label="Ian Greulich" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABECOyAoeLlhfOMzQEiC3ZjYXJkX3Bob3RvKig2ZWJmZWEwNjA3NDhkZTY0ZWRhOTczNDU3M2E5YzI0MDA2YmFhZWFhMAF_p4RL_jmWVcGIWRwQZgNrVdicmw?sz=128" />\n          <DropdownMenuItem id={5} label="Keaton Foster" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11377393_810816385765_6827778412867830242_n.jpg?oh=35b08f99b81268988c15eecbf9929e56&oe=57DFE90F" />\n          <DropdownMenuItem id={6} label="Lauren Farr" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n          <DropdownMenuItem id={7} label="Max Krause" avatar="//scontent-iad3-1.xx.fbcdn.net/t31.0-8/12977098_10207580224281040_1166679891101945990_o.jpg" />\n          <DropdownMenuItem id={8} label="Paul Drake" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10882107_701393473313574_7671196485562187669_n.jpg?oh=3100e182e75a87cfe3b236e32ca3686e&oe=57DA94B4" />\n          <DropdownMenuItem id={9} label="Paul Griffin" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n          <DropdownMenuItem id={10} label="Rob Whelan" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n          <DropdownMenuItem id={11} label="Terry Kennair" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10440915_10100238785384001_3941742026226262266_n.jpg?oh=e57e9df480a0326ee7d0bb46950b9c3f&oe=57CF342E" />\n        </DropdownFilter>\n      </Dropdown>\n      &nbsp;&nbsp;\n      <Dropdown wide label="Dropdown Select w/ Filter & Icon" type="outline-primary">\n        <DropdownFilter placeholder="Filter Icon">\n          <DropdownMenuItem id={1} label="Item One" icon="cog" />\n          <DropdownMenuItem id={2} label="Item Two" icon="warning" />\n          <DropdownMenuItem id={3} label="Item Three" icon="pencil" />\n          <DropdownMenuItem id={4} label="Item Four" icon="search" />\n        </DropdownFilter>\n      </Dropdown>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},607:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <DropdownMenuItem label="Custom click Item" onClick={() => alert(\'clicked!\')} />\n      <DropdownMenuItem label="Url Blank Window Item" url={\'http://www.rhinogram.com\'} blankWindow />\n      <DropdownMenuItem label="Url Item" url={\'http://www.rhinogram.com\'} />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Active Item" active />\n      <DropdownMenuItem label="Disabled Item" disabled />\n      <DropdownMenuDivider />\n      <DropdownMenuItem label="Ian Avatar" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABECOyAoeLlhfOMzQEiC3ZjYXJkX3Bob3RvKig2ZWJmZWEwNjA3NDhkZTY0ZWRhOTczNDU3M2E5YzI0MDA2YmFhZWFhMAF_p4RL_jmWVcGIWRwQZgNrVdicmw?sz=128" />\n      <DropdownMenuItem label="Paul Avatar" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n      <DropdownMenuItem label="Rob Avatar" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n      <DropdownMenuDivider />\n      <DropdownMenuItem icon="sms" label="Icon Item" />\n      <DropdownMenuItem icon="email" label="Icon Item" />\n      <DropdownMenuItem icon="lock" label="Icon Item" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},608:function(e,t){e.exports='class ComponentExample extends React.Component {\n  optionalCallbackFunction = (action, index, keys) => {\n    console.log(\'Run optional callback function\', action, index, keys);\n  };\n\n  render() {\n    return (\n    <div>\n      <DropdownMultiSelect placeholder="Select these people..." type="primary" onSelect={this.optionalCallbackFunction}>\n        <DropdownMenuItem id={1} label="Ben Bruning With Really Long Name" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/24263_391743639328_3523852_n.jpg?oh=260c184e71abf5fdaff9eddb361b0139&oe=57E56868" />\n        <DropdownMenuItem id={2} label="Blake Guilloud" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/1504523_437875089696117_7378541844854542050_n.jpg?oh=089a2d533f97e5a10f378291880c3dc8&oe=57CEA0AF" />\n        <DropdownMenuItem id={3} label="Craig Anthony" avatar="//pbs.twimg.com/profile_images/378800000504047619/e16493b0b7a4f578a3be767e3cc105ed_400x400.jpeg" />\n        <DropdownMenuItem id={4} label="Ian Greulich" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABECOyAoeLlhfOMzQEiC3ZjYXJkX3Bob3RvKig2ZWJmZWEwNjA3NDhkZTY0ZWRhOTczNDU3M2E5YzI0MDA2YmFhZWFhMAF_p4RL_jmWVcGIWRwQZgNrVdicmw?sz=128" />\n        <DropdownMenuItem id={5} label="Keaton Foster" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/11377393_810816385765_6827778412867830242_n.jpg?oh=35b08f99b81268988c15eecbf9929e56&oe=57DFE90F" />\n        <DropdownMenuItem id={6} label="Lauren Farr" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n        <DropdownMenuItem id={7} label="Max Krause" avatar="//scontent-iad3-1.xx.fbcdn.net/t31.0-8/12977098_10207580224281040_1166679891101945990_o.jpg" />\n        <DropdownMenuItem id={8} label="Paul Drake" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10882107_701393473313574_7671196485562187669_n.jpg?oh=3100e182e75a87cfe3b236e32ca3686e&oe=57DA94B4" />\n        <DropdownMenuItem id={9} label="Paul Griffin" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n        <DropdownMenuItem id={10} label="Rob Whelan" avatar="//plus.google.com/u/1/_/focus/photos/private/AIbEiAIAAABDCNuE-Zj_i4n2dCILdmNhcmRfcGhvdG8qKDcxMmRiMTQ3MmFiZmU4NTgzODE0NDk5ZDg5ZmNjMTY5NGI0NjI0ODAwAaWW6J75GIbWx96SLvOdg2LBY44Z?sz=128" />\n        <DropdownMenuItem id={11} label="Terry Kennair" avatar="//scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/10440915_10100238785384001_3941742026226262266_n.jpg?oh=e57e9df480a0326ee7d0bb46950b9c3f&oe=57CF342E" />\n      </DropdownMultiSelect>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});