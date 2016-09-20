webpackJsonp([3],{0:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var o=t(3),r=a(o),s=t(9),l=a(s),i=t(12),d=t(16),c=a(d),m=t(602),u=t(605),v=t(603),C=t(604),p={className:"[Optional] - Additional class to add to cover div"},f={icon:"[Optional] - Attaches an Icon to the Cover Header",iconClassName:"[Optional] - Adds a class to the Cover Header icon",title:"[Optional] - Cover Title -  String to represent the Cover Header"},h={size:"[Optional] - Container size -  [ sm | md | lg ] - defaults to a small sized cover body"},N={React:r["default"],ReactDOM:l["default"],Button:i.Button,Input:i.Input,Cover:i.Cover,CoverSystem:i.CoverSystem,CoverHeader:i.CoverHeader,CoverBody:i.CoverBody,CoverFooter:i.CoverFooter,Icon:i.Icon},E=function(){return r["default"].createElement("div",null,r["default"].createElement("h1",{className:"site-headline"},"Covers"),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"Cover Example"),r["default"].createElement("p",{className:"site-copy"},"You can inject a cover by calling ",r["default"].createElement("code",null,"CoverSystem.addCover(cover)"),", where ",r["default"].createElement("code",null,"cover")," can be ",r["default"].createElement("code",null,"Cover")," containing ",r["default"].createElement("code",null,"CoverHeader"),", ",r["default"].createElement("code",null,"CoverBody"),", ",r["default"].createElement("code",null,"CoverFooter"),"."),r["default"].createElement(c["default"],{docClass:i.Cover,propDescriptionMap:p,codeText:m,scope:N,noRender:!1})),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"CoverHeader"),r["default"].createElement(c["default"],{docClass:i.CoverHeader,propDescriptionMap:f,codeText:u,scope:N,noRender:!1})),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"CoverBody"),r["default"].createElement(c["default"],{docClass:i.CoverBody,propDescriptionMap:h,codeText:v,scope:N,noRender:!1})),r["default"].createElement("section",{className:"site-section"},r["default"].createElement("h3",{className:"site-subheadline"},"CoverFooter"),r["default"].createElement(c["default"],{docClass:i.CoverFooter,codeText:C,scope:N,noRender:!1})))};l["default"].render(r["default"].createElement(E,null),document.getElementById("js-app"))},602:function(e,n){e.exports='class ComponentExample extends React.Component {\n  state = {\n    firstName: \'\',\n    lastName: \'\',\n  }\n\n  onClick = (event) => {\n    event.preventDefault();\n    CoverSystem.addCover(this.renderContent());\n  };\n\n  closeCover = () => {\n    CoverSystem.removeCover();\n  }\n\n  handleChange = (name, value) => {\n    const newState = {};\n\n    newState[name] = value;\n    this.setState(newState);\n  }\n\n  saveChanges = () => {\n    const errors = {};\n\n    if (!this.state.firstName) {\n      errors.firstName = \'FirstName is required!\';\n    }\n\n    if (!this.state.lastName) {\n      errors.lastName = \'LastName is required!\';\n    }\n\n    const errorCount  = Object.keys(errors).length\n\n    if (errorCount > 0) {\n      CoverSystem.refreshCover(this.renderContent(errors));\n    } else {\n      alert(\'Changes were saved!\');\n      this.closeCover();\n    }\n  }\n\n  renderContent = (errors) => {\n    const errorList = errors || {};\n\n    return (\n      <Cover>\n        <CoverHeader icon="pencil" title="This is a sample Cover" />\n        <CoverBody>\n          <div className="form">\n            <div className="form__group">\n              <Input label="First Name" name="firstName" initialValue={this.state.firstName} validationMessage={errorList.firstName} required onChange={this.handleChange} />\n            </div>\n            <div>\n              <Input label="Last Name" name="lastName" initialValue={this.state.lastName} validationMessage={errorList.lastName} required onChange={this.handleChange} />\n            </div>\n          </div>\n        </CoverBody>\n        <CoverFooter>\n          <div className="u-text-right">\n            <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n            <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n          </div>\n        </CoverFooter>\n      </Cover>\n    );\n  }\n\n  render() {\n    return (\n      <div>\n        <Button type="primary" onClick={this.onClick}>Launch Cover</Button>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},603:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverBody>\n        <div className="form">\n          <div className="form__group">\n            <Input label="First Name" name="firstName" initialValue="First Name" validationMessage="" required />\n          </div>\n          <div>\n            <Input label="Last Name" name="lastName" initialValue="" validationMessage="LastName is required!" required />\n          </div>\n        </div>\n      </CoverBody>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},604:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverFooter>\n        <div className="u-text-right">\n          <Button type="default" onClick={this.closeCover}>Close</Button>&nbsp;\n          <Button type="secondary" onClick={this.saveChanges}>Save Changes</Button>\n        </div>\n      </CoverFooter>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'},605:function(e,n){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n    <div>\n      <CoverHeader icon="cog" title="This is a sample CoverHeader" />\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});