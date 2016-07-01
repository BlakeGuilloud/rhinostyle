webpackJsonp([5],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(3),l=a(o),c=n(15),m=a(c),d=n(21),p=n(22),b=a(p),f=n(568),v={React:l["default"],ReactDOM:m["default"],TabsContent:d.TabsContent,TabContentPane:d.TabContentPane,NavTabs:d.NavTabs,NavTabsItem:d.NavTabsItem},h=function(e){function t(){var e,n,a,s;i(this,t);for(var r=arguments.length,o=Array(r),l=0;r>l;l++)o[l]=arguments[l];return n=a=u(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.state={activeKey:1,activeAutoKey:1,activeEqualKey:1},a.updateActiveKey=function(e){a.setState({activeKey:e})},a.updateActiveAutoKey=function(e){a.setState({activeAutoKey:e})},a.updateActiveEqualKey=function(e){a.setState({activeEqualKey:e})},s=n,u(a,s)}return s(t,e),r(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("h1",{className:"site-headline"},"Tabs"),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"About Tabs"),l["default"].createElement("p",{className:"u-text-lead"},"This page demonstrates how to implement a tabbed system. It is important to note that we do not have a 'tabs' component.")),l["default"].createElement("section",{className:"site-section"},l["default"].createElement("h3",{className:"site-subheadline"},"Tabs Playground"),l["default"].createElement(b["default"],{codeText:f,scope:v,noRender:!1})))}}]),t}(l["default"].Component);m["default"].render(l["default"].createElement(h,null),document.getElementById("js-app"))},568:function(e,t){e.exports="class ComponentExample extends React.Component {\n  state = {\n    activeKey: 1,\n  };\n\n  updateActiveKey = (index) => {\n    this.setState({\n      activeKey: index,\n    });\n  };\n\n  render() {\n    return (\n    <div>\n      <NavTabs activeKey={this.state.activeKey} select={this.updateActiveKey}>\n        <NavTabsItem id={1}>Tab One</NavTabsItem>\n        <NavTabsItem id={2}>Tab Two</NavTabsItem>\n        <NavTabsItem id={3}>Tab Three</NavTabsItem>\n      </NavTabs>\n      <TabsContent activeKey={this.state.activeKey} >\n        <TabContentPane id={1}>\n          <h5>Tab One Content Pane</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor gravida sapien, sit amet bibendum sem iaculis ut. Pellentesque nec dui ullamcorper, pellentesque erat id, elementum eros. Cras pulvinar diam quis odio consequat, id fermentum dui tristique.</p>\n          <p>Quisque gravida iaculis velit, eget condimentum tellus pretium hendrerit. Phasellus et imperdiet dui. Sed eu mi mi. Suspendisse ipsum ipsum, molestie quis dictum at, pharetra sed nisi. Etiam faucibus pulvinar tellus eget faucibus.</p>\n        </TabContentPane>\n        <TabContentPane id={2}>\n          <h5>Tab Two Content Pane</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor gravida sapien, sit amet bibendum sem iaculis ut. Pellentesque nec dui ullamcorper, pellentesque erat id, elementum eros. Cras pulvinar diam quis odio consequat, id fermentum dui tristique.</p>\n          <p>Quisque gravida iaculis velit, eget condimentum tellus pretium hendrerit. Phasellus et imperdiet dui. Sed eu mi mi. Suspendisse ipsum ipsum, molestie quis dictum at, pharetra sed nisi. Etiam faucibus pulvinar tellus eget faucibus.</p>\n        </TabContentPane>\n        <TabContentPane id={3}>\n          <h5>Tab Three Content Pane</h5>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor gravida sapien, sit amet bibendum sem iaculis ut. Pellentesque nec dui ullamcorper, pellentesque erat id, elementum eros. Cras pulvinar diam quis odio consequat, id fermentum dui tristique.</p>\n          <p>Quisque gravida iaculis velit, eget condimentum tellus pretium hendrerit. Phasellus et imperdiet dui. Sed eu mi mi. Suspendisse ipsum ipsum, molestie quis dictum at, pharetra sed nisi. Etiam faucibus pulvinar tellus eget faucibus.</p>\n        </TabContentPane>\n      </TabsContent>\n    </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);"}});