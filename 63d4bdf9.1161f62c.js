(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));a(210),a(211),a(207),a(212),a(213),a(214);var n=a(208);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={id:"getting-started",title:"Overview",onPageNav:"none"},i=[{value:"Installation",id:"installation",children:[]},{value:"API Changes Notice",id:"api-changes-notice",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:i},c="wrapper";function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Draft.js is a framework for building rich text editors in React, powered by an immutable model and abstracting over cross-browser differences."),Object(n.b)("p",null,"Draft.js allows you to build any type of rich text input, whether you're only looking to support a few inline text styles or building a complex text editor for composing long-form articles."),Object(n.b)("p",null,"Draft.js was introduced at ",Object(n.b)("a",r({parentName:"p"},{href:"https://conf2016.reactjs.org/schedule#rich-text-editing-with-react"}),"React.js Conf")," in February 2016."),Object(n.b)("iframe",{width:"100%",height:"365",src:"https://www.youtube.com/embed/feUYwoLhE_4",frameBorder:"0",allowFullScreen:!0}),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)("p",null,"Draft.js is distributed via npm. It depends on React and React DOM which must also be installed."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm install draft-js react react-dom\n# or alternately\nyarn add draft-js react react-dom\n")),Object(n.b)("p",null,"Draft.js uses some modern ECMAScript features which are not available to IE11 and not part of create-react-app's default babel config. If you're running into problems out-of-the-box try installing a shim or polyfill alongside Draft."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-sh"}),"npm install draft-js react react-dom babel-polyfill\n# or\nyarn add draft-js react react-dom es6-shim\n")),Object(n.b)("p",null,"Learn more about ",Object(n.b)("a",r({parentName:"p"},{href:"/docs/advanced-topics-issues-and-pitfalls#polyfills"}),"using a shim with Draft"),"."),Object(n.b)("h2",{id:"api-changes-notice"},"API Changes Notice"),Object(n.b)("p",null,"Before getting started, please be aware that we recently changed the API of\nEntity storage in Draft. The latest version, ",Object(n.b)("inlineCode",{parentName:"p"},"v0.10.0"),", supports both the old\nand new API. Following that up will be ",Object(n.b)("inlineCode",{parentName:"p"},"v0.11.0")," which will remove the old API.\nIf you are interested in helping out, or tracking the progress, please follow\n",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/facebook/draft-js/issues/839"}),"issue 839"),"."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {Editor, EditorState} from 'draft-js';\nimport 'draft-js/dist/Draft.css';\n\nclass MyEditor extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {editorState: EditorState.createEmpty()};\n    this.onChange = editorState => this.setState({editorState});\n  }\n\n  render() {\n    return (\n      <Editor editorState={this.state.editorState} onChange={this.onChange} />\n    );\n  }\n}\n\nReactDOM.render(<MyEditor />, document.getElementById('container'));\n")),Object(n.b)("p",null,"Since the release of React 16.8, you can use ",Object(n.b)("a",r({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),"Hooks")," as a way to work with ",Object(n.b)("inlineCode",{parentName:"p"},"EditorState")," without using a class."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-js"}),"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport {Editor, EditorState} from 'draft-js';\nimport 'draft-js/dist/Draft.css';\n\nfunction MyEditor() {\n  const [editorState, setEditorState] = React.useState(\n    () => EditorState.createEmpty(),\n  );\n\n  return <Editor editorState={editorState} onChange={setEditorState} />;\n}\n\nReactDOM.render(<MyEditor />, document.getElementById('container'));\n")),Object(n.b)("p",null,"Because Draft.js supports unicode, you must have the following meta tag in the ",Object(n.b)("inlineCode",{parentName:"p"},"<head></head>")," block of your HTML file:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-html"}),'<meta charset="utf-8" />\n')),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"Draft.css")," should be included when rendering the editor. Learn more about ",Object(n.b)("a",r({parentName:"p"},{href:"/docs/advanced-topics-issues-and-pitfalls#missing-draftcss"}),"why"),"."),Object(n.b)("p",null,"Next, let's go into the basics of the API and learn what else you can do with Draft.js."))}l.isMDXComponent=!0}}]);