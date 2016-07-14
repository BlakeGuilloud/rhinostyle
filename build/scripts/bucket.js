webpackJsonp([17],{0:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var u=a(4),n=l(u),c=a(13),s=l(c),i=a(15),m=a(18),r=l(m),d=a(667),o={className:"[Optional] - Include additional class name(s)",size:"[Optional] - Bucket size -  [small]",type:"[Optional] - Bucket type -  [default | primary]"},f={React:n["default"],ReactDOM:s["default"],Bucket:i.Bucket,BucketBody:i.BucketBody,BucketHeader:i.BucketHeader,Icon:i.Icon},E=function(){return n["default"].createElement("div",null,n["default"].createElement("h1",{className:"site-headline"},"Buckets"),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"About Buckets"),n["default"].createElement("p",{className:"site-text-lead"},"Buckets are used to contain and separate portions of content. Buckets must contain a ",n["default"].createElement("span",{className:"u-text-accent"},"BucketBody")," child component. Optionally include ",n["default"].createElement("span",{className:"u-text-accent"},"BucketHeader")," child component.")),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Bucket Types"),n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'type="default | primary"')),n["default"].createElement("div",{className:"site-example-buckets"},n["default"].createElement(i.Bucket,null,n["default"].createElement(i.BucketHeader,{title:"Bucket Header",icon:"pencil"}),n["default"].createElement(i.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),n["default"].createElement(i.Bucket,{type:"primary"},n["default"].createElement(i.BucketHeader,{title:"Bucket Header",icon:"sms"}),n["default"].createElement(i.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")))),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Bucket Sizes"),n["default"].createElement("div",null,n["default"].createElement("p",{className:"site-copy"},n["default"].createElement("code",null,'size="small"')),n["default"].createElement("div",{className:"site-example-buckets"},n["default"].createElement(i.Bucket,{size:"small"},n["default"].createElement(i.BucketHeader,{title:"Bucket Header",icon:"pencil"}),n["default"].createElement(i.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros."))))),n["default"].createElement("section",{className:"site-section"},n["default"].createElement("h3",{className:"site-subheadline"},"Bucket Examples"),n["default"].createElement("div",{className:"site-example-buckets"},n["default"].createElement(i.Bucket,null,n["default"].createElement(i.BucketHeader,{className:"u-flex-justify-between",title:"Bucket Header That is Really Super Long",icon:"pencil"},n["default"].createElement("div",null,n["default"].createElement("a",{href:"",className:"u-text-underline"},"Edit")," | ",n["default"].createElement("a",{href:"",className:"u-text-underline"},"Delete"))),n["default"].createElement(i.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),n["default"].createElement(i.Bucket,null,n["default"].createElement(i.BucketHeader,{title:"Bucket Header",icon:"pencil",className:"u-bg-gray-lightest"}),n["default"].createElement(i.BucketBody,{className:"u-bg-gray-lightest"},"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),n["default"].createElement(i.Bucket,null,n["default"].createElement(i.BucketBody,{className:"u-bg-gray-lightest"},"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")),n["default"].createElement(i.Bucket,null,n["default"].createElement(i.BucketHeader,{className:"u-bg-gray-lightest"},"Bucket Header without Title"),n["default"].createElement(i.BucketBody,null,"Bucket body. Etiam eu condimentum sem. Etiam a blandit erat. Nullam a sem at leo finibus rutrum pulvinar vel mauris. Nam purus velit, laoreet in mattis congue, consectetur in eros.")))),n["default"].createElement("section",null,n["default"].createElement("h3",{className:"site-subheadline"},"Playground"),n["default"].createElement(r["default"],{docClass:i.Bucket,propDescriptionMap:o,codeText:d,scope:f,noRender:!1})))};s["default"].render(n["default"].createElement(E,null),document.getElementById("js-app"))},667:function(e,t){e.exports='class ComponentExample extends React.Component {\n  render() {\n    return (\n      <div className="site-example-buckets">\n        <Bucket>Bucket son!</Bucket>\n      </div>\n    );\n  }\n}\n\nReactDOM.render(<ComponentExample />, mountNode);\n'}});