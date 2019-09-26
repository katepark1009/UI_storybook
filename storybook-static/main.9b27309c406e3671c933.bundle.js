(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_emotion_styled__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(32),_emotion_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6);function _templateObject4(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  all: unset;\n  display: block;\n  margin: 5px;\n  width: 95%;\n  min-height:200px;\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  cursor: pointer;\n  align-items: center;\n  background-color: white;\n  border: 1px solid #c0c0c0;\n  box-sizing: border-box;\n  color: black;\n  display: flex;\n  height: 40px;\n  letter-spacing: 2px;\n  padding: .8em 1em;\n  margin: 10px 10px 12px 10px;\n  transition: all .3s ease;\n  &:hover {\n    background-color: #0799f8;\n    border-color: #0799f8;\n    color: white;\n  }\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin-left: 5px;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  background-color: #e6f5fe;\n  max-width: 900px;\n  border: 1px solid lightgray;\n  margin: 20px;\n  border-radius: 5px;\n  display: relative;\n"]);return _templateObject=function _templateObject(){return data},data}var Code=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.div(_templateObject()),copyBtn=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.css)(_templateObject2()),StyledButton=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.button(_templateObject3()),CodeText=_emotion_styled__WEBPACK_IMPORTED_MODULE_2__.default.textarea(_templateObject4()),CopySVG=function CopySVG(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:props.width,height:"100%",viewBox:"0 0 1792 1792",xmlns:"http://www.w3.org/2000/svg"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"}))},copyToClipboard=function copyToClipboard(){var copyText=document.getElementById("codeText");copyText.select(),copyText.setSelectionRange(0,99999),document.execCommand("copy")};__webpack_exports__.a=function(props){return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(Code,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(StyledButton,{id:"copy",onClick:copyToClipboard},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(CopySVG,{width:"20px"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{css:copyBtn},"COPY CODE")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__.jsx)(CodeText,{id:"codeText",value:props.code})))}},371:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Colors\r\nKBB.com’s color palette is based on the Kelley Blue Book corporate style guide, but translated for the digital experiences.\r\nThe intent of the palette is to convey the authoritative, supportive and candid essence of the Kelley Blue Book brand, with rich saturated tints of blue and gold, grounded in the deeper shades of cool blues and grays. This color system establishes brand consistency among all of Kelley Blue Book’s digital products and services. Colors are designed to clearly communicate actions, status, and direction within the interface. Rather than being used as decoration, colors should always be used meaningfully to support the purpose of the content and help guide users through their tasks.\r\n\r\n```javascript\r\n  import { colors } from '@argo/colors';\r\n\r\n    const ColorTile = styled.div`\r\n    background-color: ${colors.blue.babyBlue};\r\n    color: ${colors.primary.black};\r\n    `;\r\n\r\n```\r\n\r\n### Primary Colors\r\nThe palette’s primary colors are blue, gray and white. These colors set the foundation that the KBB.com experience is built upon.\r\n\r\n### Shades of Neutrals\r\nDifferent shades of neutrals may be used within a component or illustrations in order to maintain a family feel while allowing for variation.\r\n\r\n### Shades of Blues\r\nDifferent shades of blues may be used within an illustration or graphic in order to maintain a family feel while allowing for variation.\r\n\r\n### Stoplight Colors\r\nStoplight colors are for indicating error conditions, warnings, and successes.\r\n\r\n### Action Colors\r\nAction colors are for clickable items, such as buttons and links.\r\n\r\n\r\n"},372:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Typography\r\n\r\nTypography is used to create clear hierarchies and useful organizations. These help guide users through the product experience. Kelley Blue Book utilizes Montserrat for heading styles and Open Sans for body styles.\r\n\r\n```javascript\r\n  import { fonts } from '@argo/principles';\r\n\r\n    const StyledText = styled.p`\r\n      font-size: ${fonts.size.large};\r\n      font-family: ${fonts.family.montserrat};\r\n      font-weight: ${fonts.weight.semiBold};\r\n    `;\r\n```\r\n\r\n## Montserrat\r\nUsed for Heading / Titles / Labels / Buttons / Highlight Text.\r\n\r\nAvailable Font weight : Medium(500), Semi Bold(600), Extra Bold(800)\r\n\r\nFont color Black #000000.\r\n\r\n## Open Sans\r\nUsed for body and paragraph styles.\r\n\r\nAvailable Font weight : Regular(600), Semi Bold(400)\r\n\r\nFont color Charcoal #505050\r\n\r\nOpen Sans type may use any of the following treatments:\r\nRegular, __Underline__ , _italic_ , *Bold*, **_Bold italic_**\r\n"},373:function(module,__webpack_exports__,__webpack_require__){"use strict";var colors_namespaceObject={};__webpack_require__.r(colors_namespaceObject),__webpack_require__.d(colors_namespaceObject,"primary",(function(){return primary})),__webpack_require__.d(colors_namespaceObject,"green",(function(){return green})),__webpack_require__.d(colors_namespaceObject,"orange",(function(){return orange})),__webpack_require__.d(colors_namespaceObject,"magenta",(function(){return magenta})),__webpack_require__.d(colors_namespaceObject,"purple",(function(){return purple})),__webpack_require__.d(colors_namespaceObject,"gold",(function(){return gold})),__webpack_require__.d(colors_namespaceObject,"red",(function(){return red})),__webpack_require__.d(colors_namespaceObject,"neutral",(function(){return neutral})),__webpack_require__.d(colors_namespaceObject,"action",(function(){return action})),__webpack_require__.d(colors_namespaceObject,"blue",(function(){return blue}));var slicedToArray=__webpack_require__(234),taggedTemplateLiteral=__webpack_require__(30),react=__webpack_require__(0),primary={black:"#000000",charcoal:"#505050",offWhite:"#f8f8f8",white:"#ffffff",tag:"Primary"},green={light:"#81f44a",base:"#379302",tag:"Green"},orange={base:"#f48036",tag:"Orange"},magenta={base:"#ba1d4c",tag:"Magenta"},purple={base:"#681f74",tag:"Purple"},gold={base:"#f3bc2a",tag:"Gold"},red={light:"#ff6e6b",base:"#f43a36",dark:"#9e0300",tag:"Red"},neutral={black:primary.black,charcoal:"#505050",darkGray:"#939393",trueGray:"#c0c0c0",stoneGray:"#dcdcdc",doveGray:"#ebebeb",offWhite:"#f8f8f8",white:primary.white,tag:"Neutral"},action={gold:gold.base,brightBlue:"#0799f8",lightBlue:"#e6f5fe",tag:"Action"},blue={navy:"#162d5b",marineBlue:"#1f3e74",airForceBlue:"#2b5195",mutedBlue:"#406cb4",riverBlue:"#5586d4",babyBlue:action.lightBlue,tag:"Blue"},styled_browser_esm=__webpack_require__(32),core_browser_esm=__webpack_require__(6),CodeExample=__webpack_require__(100);function _templateObject9(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 100px;\n"]);return _templateObject9=function _templateObject9(){return data},data}function _templateObject8(){var data=Object(taggedTemplateLiteral.a)(['\n  font-size: 12px;\n  visibility: hidden;\n  width: 60px;\n  background-color: #666666;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 28px;\n  left: -40px;\n  margin-left: -60px;\n  opacity: 0;\n  transition: opacity 0.3s;\n  &:after{\n    content: "";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #666666 transparent transparent transparent;\n  }\n']);return _templateObject8=function _templateObject8(){return data},data}function _templateObject7(){var data=Object(taggedTemplateLiteral.a)(["\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  padding-bottom: 2px;\n"]);return _templateObject7=function _templateObject7(){return data},data}function _templateObject6(){var data=Object(taggedTemplateLiteral.a)(["\n  position: absolute;\n  left: -9999px;\n"]);return _templateObject6=function _templateObject6(){return data},data}function _templateObject5(){var data=Object(taggedTemplateLiteral.a)(["\n  align-items: center;\n  background: ",";\n  box-sizing: border-box;\n  border: 1px solid #e2e2e3;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  width: 160px;\n  height: 50px;\n  > p {\n    color: ",";\n    font-size: 14px;\n  }\n  span {\n    display: none;\n  }\n  &:hover {\n    span {\n      display: block;\n      opacity: .6;\n      color: white;\n      text-align: center;\n      padding: 5px 0;\n      border-radius: 4px;\n      position: absolute;\n      visibility: visible;\n      opacity: 1;\n    }\n  }\n"]);return _templateObject5=function _templateObject5(){return data},data}function _templateObject4(){var data=Object(taggedTemplateLiteral.a)(["\n  cursor: pointer;\n  margin-right: 15px;\n"]);return _templateObject4=function _templateObject4(){return data},data}function _templateObject3(){var data=Object(taggedTemplateLiteral.a)(["\n  align-items: start;\n  display: flex;\n  margin: 0 20px;\n"]);return _templateObject3=function _templateObject3(){return data},data}function _templateObject2(){var data=Object(taggedTemplateLiteral.a)(["\n  text-align: center;\n  font-weight: bold;\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  font-size: 15px;\n  font-family: 'Open Sans', sans-serif;\n"]);return _templateObject=function _templateObject(){return data},data}var Container=styled_browser_esm.default.div(_templateObject()),TitleText=styled_browser_esm.default.p(_templateObject2()),StyledRow=styled_browser_esm.default.div(_templateObject3()),StyledCell=styled_browser_esm.default.div(_templateObject4()),ColorTile=styled_browser_esm.default.div(_templateObject5(),(function(props){return props.color}),(function(props){return isDark(props.color)?colors_namespaceObject.primary.white:colors_namespaceObject.primary.black})),InvisibleInput=styled_browser_esm.default.input(_templateObject6()),Tooltip=styled_browser_esm.default.div(_templateObject7()),TooltipText=styled_browser_esm.default.span(_templateObject8()),colorStyle=Object(core_browser_esm.css)(_templateObject9()),isDark=function isDark(colorName){switch(colorName){case"#505050":case"#000000":case"#939393":case"#406cb4":case"#2b5195":case"#1f3e74":case"#162d5b":case"#9e0300":case"#ba1d4c":case"#681f74":case"#5586d4":case"#f43a36":return!0}return!1};__webpack_exports__.a=function(){var _useState=Object(react.useState)(""),_useState2=Object(slicedToArray.a)(_useState,2),initialColor=_useState2[0],setClickToCopy=_useState2[1],_useState3=Object(react.useState)(""),_useState4=Object(slicedToArray.a)(_useState3,2),initialColorName=_useState4[0],setColorName=_useState4[1],example="  import { colors } from '@argo/colors';\n\n    const ColorTile = styled.div`\n    background-color: ${colors.".concat(initialColorName||"primary.black","};\n    color: ${colors.").concat(initialColorName||"primary.black","};\n  `;\n  "),makeTile=function makeTile(colorName){var _onClick=function onClick(e,key,color){setClickToCopy(key),setColorName(color),function clickToCopyColorName(e){var clickedDiv=e.currentTarget.textContent,index=clickedDiv.indexOf("#"),colorCode=clickedDiv.slice(index).slice(0,7),copyText=document.getElementById(colorCode);copyText.focus(),copyText.select(),copyText.setSelectionRange(0,99999),document.execCommand("copy")}(e)};return Object.keys(colorName).map((function(key){if("tag"!==key){var copyVal="color: ${colors.".concat(colorName.tag.toLowerCase(),".").concat(key,"};");return Object(core_browser_esm.jsx)(ColorTile,{color:colorName[key],key:key,onClick:function onClick(e){return _onClick(e,colorName[key],colorName.tag.toLowerCase()+"."+key)}},"Green"===colorName.tag||"Red"===colorName.tag?Object(core_browser_esm.jsx)("p",{css:colorStyle,color:key},"base"===key?colorName.tag.toLowerCase():key+colorName.tag):Object(core_browser_esm.jsx)("p",{css:colorStyle,color:key},"base"===key?colorName.tag.toLowerCase():key),Object(core_browser_esm.jsx)("p",{color:key},colorName[key]),Object(core_browser_esm.jsx)(InvisibleInput,{id:colorName[key],value:copyVal}),Object(core_browser_esm.jsx)(Tooltip,null,Object(core_browser_esm.jsx)(TooltipText,null,initialColor!==colorName[key]?"copy":"copied✨")))}}))};return Object(core_browser_esm.jsx)(Container,null,Object(core_browser_esm.jsx)(StyledRow,null,Object(core_browser_esm.jsx)(StyledCell,null,Object(core_browser_esm.jsx)(TitleText,null,"Primary"),makeTile(colors_namespaceObject.primary)),Object(core_browser_esm.jsx)(StyledCell,null,Object(core_browser_esm.jsx)(TitleText,null,"Neutral"),makeTile(colors_namespaceObject.neutral)),Object(core_browser_esm.jsx)(StyledCell,null,Object(core_browser_esm.jsx)(TitleText,null,"Blue"),makeTile(colors_namespaceObject.blue)),Object(core_browser_esm.jsx)(StyledCell,null,Object(core_browser_esm.jsx)(TitleText,null,"Spotlight"),makeTile(colors_namespaceObject.green),makeTile(colors_namespaceObject.orange),makeTile(colors_namespaceObject.red),makeTile(colors_namespaceObject.magenta),makeTile(colors_namespaceObject.purple)),Object(core_browser_esm.jsx)(StyledCell,null,Object(core_browser_esm.jsx)(TitleText,null,"Action (link, button..)"),makeTile(colors_namespaceObject.action))),Object(core_browser_esm.jsx)(CodeExample.a,{code:example}))}},374:function(module,exports,__webpack_require__){__webpack_require__(375),__webpack_require__(484),module.exports=__webpack_require__(485)},396:function(module,exports){},485:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(101),storybook_readme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(365);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.withKnobs),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(storybook_readme__WEBPACK_IMPORTED_MODULE_2__.addReadme),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(743),module)}.call(this,__webpack_require__(117)(module))},743:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":744,"./1-Button.stories.js":745,"./2-color.stories.js":889,"./3-font.stories.js":890};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=743},744:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Welcome",module).add("to Storybook",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null," Welcome to UI storybook"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is a UI component dev environment for your app."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Storybook is a user interface development environment and playground for UI components."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"The tool enables developers to create components independently and showcase components interactively in an isolated development environment."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"About storybook"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"A story is a single state of one or more UI components. You can have as many stories as you want."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"(Basically a story is like a visual test case.)"))}))}.call(this,__webpack_require__(117)(module))},745:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(50),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(173),_components_CodeExample__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(100);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Code Example",module).addDecorator((function(story,context){return Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo)("Code picker")(story)(context)})).add("Code picker",(function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CodeExample__WEBPACK_IMPORTED_MODULE_3__.a,{code:"  import { fonts } from '@argo/principles';\n\n  const StyledText = styled.p`\n    font-size: ${fonts.size.Small};\n    font-family: ${fonts.family.OpenSans};\n    font-weight: ${fonts.weight.ExtraBold};\n  `;"}))}))}.call(this,__webpack_require__(117)(module))},748:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":335,"./nestedObjectAssign.js":335};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=748},889:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(50),_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(173),_emotion_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32),_components_Colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(373),_src_Colors_md__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(371);function _templateObject(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  text-align: left;\n  font-size: 16px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: bold;\n  color: #2b5195;\n  padding-left: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}var Title=_emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.p(_templateObject());Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Color Picker",module).addDecorator((function(story,context){return Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_3__.withInfo)("ColorPalette")(story)(context)})).addParameters({readme:{sidebar:_src_Colors_md__WEBPACK_IMPORTED_MODULE_6__.a}}).add("Color Palette",(function(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title,null," ✔️Click the palette to copy the colors!"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Colors__WEBPACK_IMPORTED_MODULE_5__.a,null))}))}.call(this,__webpack_require__(117)(module))},890:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(50),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(101),_emotion_styled__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(32),_components_CodeExample__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(100),_src_font__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(92),_src_Typography_md__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(372);function _templateObject2(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  font-family: ",";\n  font-size: ",";\n"]);return _templateObject2=function _templateObject2(){return data},data}function _templateObject(){var data=Object(C_Users_USER_lfz_ui_storybook_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.a)(["\n  margin: 20px;\n  ~p {\n    margin: 20px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var StyledText=function StyledText(props){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{style:{fontFamily:_src_font__WEBPACK_IMPORTED_MODULE_6__.a.family["".concat(props.fontFamily)],fontSize:_src_font__WEBPACK_IMPORTED_MODULE_6__.a.size["".concat(props.fontSize)],fontWeight:_src_font__WEBPACK_IMPORTED_MODULE_6__.a.weight["".concat(props.fontWeight)]}},"Kelley Blue Book")},Title=_emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.div(_templateObject()),FontWeightText=_emotion_styled__WEBPACK_IMPORTED_MODULE_4__.default.p(_templateObject2(),_src_font__WEBPACK_IMPORTED_MODULE_6__.a.family.montserrat,_src_font__WEBPACK_IMPORTED_MODULE_6__.a.size["2XS"]),makeExample=function makeExample(familyExample,sizeExample,weightExample){return"XL"===sizeExample||"large"===sizeExample||"medium"===sizeExample||"small"===sizeExample||"XS"===sizeExample?"  import { fonts } from '@argo/principles';\n\n    const StyledText = styled.p`\n      font-size: ${fonts.size.".concat(sizeExample,"};\n      font-family: ${fonts.family.").concat(familyExample,"};\n      font-weight: ${fonts.weight.").concat(weightExample,"};\n    `;"):"  import { fonts } from '@argo/principles';\n\n    const StyledText = styled.p`\n      font-size: ${fonts.size['".concat(sizeExample,"']};\n      font-family: ${fonts.family.").concat(familyExample,"};\n      font-weight: ${fonts.weight.").concat(weightExample,"};\n    `;")};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("Typography",module).addParameters({readme:{sidebar:_src_Typography_md__WEBPACK_IMPORTED_MODULE_7__.a}}).add("Typography",(function(){var family=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Family",["opensans","montserrat"],"montserrat"),size=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Size",["3XL","2XL","XL","large","medium","small","XS","2XS","3XS"],"large"),weight=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select)("Weight",["light (400)","regular (500)","semiBold (600)","bold (700)","extraBold (800)"],"semiBold (600)");return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title,{style:{fontFamily:_src_font__WEBPACK_IMPORTED_MODULE_6__.a.family.montserrat}},"Example Text: "),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledText,{fontFamily:family,fontSize:size,fontWeight:weight.slice(0,-6)}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FontWeightText,null,"Available Font weight : Open Sans(400, 600), Montserrat(500, 600, 800)"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CodeExample__WEBPACK_IMPORTED_MODULE_5__.a,{code:makeExample(family,size,weight.slice(0,-6))}))}))}.call(this,__webpack_require__(117)(module))},92:function(module,__webpack_exports__,__webpack_require__){"use strict";var fonts_namespaceObject={};__webpack_require__.r(fonts_namespaceObject),__webpack_require__.d(fonts_namespaceObject,"family",(function(){return family})),__webpack_require__.d(fonts_namespaceObject,"size",(function(){return size})),__webpack_require__.d(fonts_namespaceObject,"weight",(function(){return weight}));var family={opensans:'"Open Sans", sans-serif, Tahoma, Arial',montserrat:"Montserrat, sans-serif"},size={"3XL":"72px","2XL":"60px",XL:"46px",large:"36px",medium:"24px",small:"18px",XS:"16px","2XS":"14px","3XS":"10px"},weight={extraBold:"800",bold:"700",semiBold:"600",regular:"500",light:"400"};__webpack_require__.d(__webpack_exports__,"a",(function(){return fonts_namespaceObject}))}},[[374,1,2]]]);
//# sourceMappingURL=main.9b27309c406e3671c933.bundle.js.map