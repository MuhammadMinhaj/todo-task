(self.webpackChunkellty_assignment=self.webpackChunkellty_assignment||[]).push([[792],{"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),globals=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(globals.A,options);globals.A&&globals.A.locals&&globals.A.locals;const _storybook_preview={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");const importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb((async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}),(()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/nextjs/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./.storybook/preview.ts")])));window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/app/globals.css":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.left-0 {\n  left: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.flex {\n  display: flex;\n}\n.list-item {\n  display: list-item;\n}\n.h-\\[25px\\] {\n  height: 25px;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.max-h-\\[164px\\] {\n  max-height: 164px;\n}\n.min-h-\\[10px\\] {\n  min-height: 10px;\n}\n.min-h-\\[300px\\] {\n  min-height: 300px;\n}\n.w-\\[25px\\] {\n  width: 25px;\n}\n.w-\\[370px\\] {\n  width: 370px;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-\\[10px\\] {\n  min-width: 10px;\n}\n.min-w-\\[300px\\] {\n  min-width: 300px;\n}\n.min-w-\\[360px\\] {\n  min-width: 360px;\n}\n.min-w-\\[370px\\] {\n  min-width: 370px;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.list-none {\n  list-style-type: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.overflow-y-auto {\n  overflow-y: auto;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-\\[4px\\] {\n  border-radius: 4px;\n}\n.rounded-\\[6px\\] {\n  border-radius: 6px;\n}\n.border {\n  border-width: 1px;\n}\n.border-\\[1px\\] {\n  border-width: 1px;\n}\n.border-b-\\[1px\\] {\n  border-bottom-width: 1px;\n}\n.border-l-\\[1px\\] {\n  border-left-width: 1px;\n}\n.border-t-\\[1px\\] {\n  border-top-width: 1px;\n}\n.border-\\[\\#EEEEEE\\] {\n  --tw-border-opacity: 1;\n  border-color: rgb(238 238 238 / var(--tw-border-opacity));\n}\n.border-border-gray-main {\n  border-color: var(--border-gray-main);\n}\n.border-primary {\n  border-color: var(--primary);\n}\n.border-secondary {\n  border-color: var(--secondary);\n}\n.border-secondary-light {\n  border-color: var(--secondary-light);\n}\n.border-b-border-gray-main {\n  border-bottom-color: var(--border-gray-main);\n}\n.bg-primary {\n  background-color: var(--primary);\n}\n.bg-secondary {\n  background-color: var(--secondary);\n}\n.bg-secondary-light {\n  background-color: var(--secondary-light);\n}\n.px-\\[10px\\] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.px-\\[15px\\] {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.px-\\[20px\\] {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.px-\\[30px\\] {\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.py-\\[10px\\] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.py-\\[15px\\] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.py-\\[5px\\] {\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n.py-\\[8px\\] {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.pl-\\[16px\\] {\n  padding-left: 16px;\n}\n.pl-\\[22px\\] {\n  padding-left: 22px;\n}\n.pl-\\[25px\\] {\n  padding-left: 25px;\n}\n.pr-\\[10px\\] {\n  padding-right: 10px;\n}\n.pr-\\[15px\\] {\n  padding-right: 15px;\n}\n.pr-\\[18px\\] {\n  padding-right: 18px;\n}\n.text-\\[14px\\] {\n  font-size: 14px;\n}\n.font-normal {\n  font-weight: 400;\n}\n.text-primary {\n  color: var(--primary);\n}\n.text-secondary {\n  color: var(--secondary);\n}\n.text-secondary-light {\n  color: var(--secondary-light);\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-\\[0px_0px_4px_0px_rgba\\(20\\2c 20\\2c 20\\2c 0\\.10\\)\\2c 0px_8px_15px_0px_rgba\\(20\\2c 20\\2c 20\\2c 0\\.12\\)\\] {\n  --tw-shadow: 0px 0px 4px 0px rgba(20,20,20,0.10),0px 8px 15px 0px rgba(20,20,20,0.12);\n  --tw-shadow-colored: 0px 0px 4px 0px var(--tw-shadow-color), 0px 8px 15px 0px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.no-scrollbar::-webkit-scrollbar {\n    display: none;\n  }\n/* Hide scrollbar for IE, Edge and Firefox */\n.no-scrollbar {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n\n:root {\n  --primary: #1f2128;\n  --secondary: #ffce22;\n  --secondary-light: #ffd84d;\n  --accent: #2469f6;\n  --accent-light: #5087f8;\n  --border-gray-main: #cdcdcd;\n  --border-gray-deep: #bdbdbd;\n  --border-gray-light: #e3e3e3;\n  --text-gray: #878787;\n  --background: #ffffff;\n  --foreground: var(--primary);\n}\n\nbody {\n  color: var(--foreground);\n  background: var(--background);\n}\n\n.last\\:border-b-0:last-child {\n  border-bottom-width: 0px;\n}\n\n.hover\\:border-border-gray-deep:hover {\n  border-color: var(--border-gray-deep);\n}\n\n.hover\\:border-secondary:hover {\n  border-color: var(--secondary);\n}\n\n.hover\\:border-secondary-light:hover {\n  border-color: var(--secondary-light);\n}\n\n.hover\\:bg-secondary:hover {\n  background-color: var(--secondary);\n}\n\n.hover\\:bg-secondary-light:hover {\n  background-color: var(--secondary-light);\n}\n\n.hover\\:text-border-gray-light:hover {\n  color: var(--border-gray-light);\n}\n\n.hover\\:text-secondary:hover {\n  color: var(--secondary);\n}\n\n.hover\\:text-secondary-light:hover {\n  color: var(--secondary-light);\n}\n\n.active\\:border-secondary:active {\n  border-color: var(--secondary);\n}\n\n.active\\:border-secondary-light:active {\n  border-color: var(--secondary-light);\n}\n\n.active\\:bg-secondary:active {\n  background-color: var(--secondary);\n}\n\n.active\\:bg-secondary-light:active {\n  background-color: var(--secondary-light);\n}\n\n.active\\:text-secondary:active {\n  color: var(--secondary);\n}\n\n.active\\:text-secondary-light:active {\n  color: var(--secondary-light);\n}\n\n.group:hover .group-hover\\:border-border-gray-deep {\n  border-color: var(--border-gray-deep);\n}\n\n.group:hover .group-hover\\:text-border-gray-light {\n  color: var(--border-gray-light);\n}\n\n.group:active .group-active\\:border-border-gray-deep {\n  border-color: var(--border-gray-deep);\n}\n\n.group:active .group-active\\:text-text-gray {\n  color: var(--text-gray);\n}\n\n.group:active .group-active\\:shadow-\\[0px_0px_0px_3px_rgba\\(36\\2c 105\\2c 246\\2c 0\\.10\\)\\] {\n  --tw-shadow: 0px 0px 0px 3px rgba(36,105,246,0.10);\n  --tw-shadow-colored: 0px 0px 0px 3px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.\\[\\&\\:active\\+label\\>\\*\\]\\:opacity-100:active+label>* {\n  opacity: 1;\n}\n\n.\\[\\&\\:active\\+label\\]\\:border-border-gray-deep:active+label {\n  border-color: var(--border-gray-deep);\n}\n\n.\\[\\&\\:active\\+label\\]\\:text-text-gray:active+label {\n  color: var(--text-gray);\n}\n\n.\\[\\&\\:active\\+label\\]\\:shadow-\\[0px_0px_0px_3px_rgba\\(36\\2c 105\\2c 246\\2c 0\\.10\\)\\]:active+label {\n  --tw-shadow: 0px 0px 0px 3px rgba(36,105,246,0.10);\n  --tw-shadow-colored: 0px 0px 0px 3px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.\\[\\&\\:checked\\+label\\>\\*\\]\\:opacity-100:checked+label>* {\n  opacity: 1;\n}\n\n.\\[\\&\\:checked\\+label\\]\\:border-0:checked+label {\n  border-width: 0px;\n}\n\n.\\[\\&\\:checked\\+label\\]\\:bg-accent:checked+label {\n  background-color: var(--accent);\n}\n\n.\\[\\&\\:checked\\+label\\]\\:text-white:checked+label {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.\\[\\&\\:checked\\+label\\]\\:after\\:opacity-100:checked+label::after {\n  content: var(--tw-content);\n  opacity: 1;\n}\n\n.\\[\\&\\:checked\\:active\\+label\\]\\:\\!border-\\[1px\\]:checked:active+label {\n  border-width: 1px !important;\n}\n\n.\\[\\&\\:checked\\:active\\+label\\]\\:\\!bg-transparent:checked:active+label {\n  background-color: transparent !important;\n}\n\n.\\[\\&\\:checked\\:active\\+label\\]\\:\\!text-border-gray-light:checked:active+label {\n  color: var(--border-gray-light) !important;\n}\n\n.\\[\\&\\:checked\\:active\\+label\\]\\:\\!shadow-none:checked:active+label {\n  --tw-shadow: 0 0 #0000 !important;\n  --tw-shadow-colored: 0 0 #0000 !important;\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.\\[\\&\\:checked\\:hover\\+label\\]\\:bg-accent-light:checked:hover+label {\n  background-color: var(--accent-light);\n}\n\n.\\[\\&\\:checked\\:hover\\+label\\]\\:shadow-\\[0px_0px_0px_3px_rgba\\(36\\2c 105\\2c 246\\2c 0\\.10\\)\\]:checked:hover+label {\n  --tw-shadow: 0px 0px 0px 3px rgba(36,105,246,0.10);\n  --tw-shadow-colored: 0px 0px 0px 3px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.\\[\\&\\>\\*\\]\\:opacity-0>* {\n  opacity: 0;\n}\n\n.hover\\:\\[\\&\\>\\*\\]\\:\\!opacity-100>*:hover {\n  opacity: 1 !important;\n}\n\n.group:hover .group-hover\\:\\[\\&\\>\\*\\]\\:\\!opacity-100>* {\n  opacity: 1 !important;\n}\n\n.group:active .group-active\\:\\[\\&\\>\\*\\]\\:opacity-100>* {\n  opacity: 1;\n}\n\n.\\[\\&\\>li\\]\\:border-b-\\[1px\\]>li {\n  border-bottom-width: 1px;\n}\n\n.\\[\\&\\>li\\]\\:border-b-border-gray-deep>li {\n  border-bottom-color: var(--border-gray-deep);\n}\n\n.last\\:\\[\\&\\>li\\]\\:border-b-0>li:last-child {\n  border-bottom-width: 0px;\n}\n","",{version:3,sources:["webpack://./src/app/globals.css"],names:[],mappings:"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",sourcesContent:["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n  --primary: #1f2128;\n  --secondary: #ffce22;\n  --secondary-light: #ffd84d;\n  --accent: #2469f6;\n  --accent-light: #5087f8;\n  --border-gray-main: #cdcdcd;\n  --border-gray-deep: #bdbdbd;\n  --border-gray-light: #e3e3e3;\n  --text-gray: #878787;\n  --background: #ffffff;\n  --foreground: var(--primary);\n}\n\nbody {\n  color: var(--foreground);\n  background: var(--background);\n}\n\n@layer utilities {\n  .text-balance {\n    text-wrap: balance;\n  }\n  .no-scrollbar::-webkit-scrollbar {\n    display: none;\n  }\n  /* Hide scrollbar for IE, Edge and Firefox */\n  .no-scrollbar {\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$":module=>{function webpackEmptyAsyncContext(req){return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=()=>[],webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./components/core/button/Button.stories":["./src/components/core/button/Button.stories.tsx",503],"./components/core/button/Button.stories.tsx":["./src/components/core/button/Button.stories.tsx",503],"./components/core/checkbox/Checkbox.stories":["./src/components/core/checkbox/Checkbox.stories.tsx",717],"./components/core/checkbox/Checkbox.stories.tsx":["./src/components/core/checkbox/Checkbox.stories.tsx",717],"./components/core/divider/Divider.stories":["./src/components/core/divider/Divider.stories.tsx",773],"./components/core/divider/Divider.stories.tsx":["./src/components/core/divider/Divider.stories.tsx",773],"./components/core/list/List.stories":["./src/components/core/list/List.stories.tsx",91],"./components/core/list/List.stories.tsx":["./src/components/core/list/List.stories.tsx",91],"./components/core/list/list-item/ListItem.stories":["./src/components/core/list/list-item/ListItem.stories.tsx",159],"./components/core/list/list-item/ListItem.stories.tsx":["./src/components/core/list/list-item/ListItem.stories.tsx",159],"./components/features/task/Task.stories":["./src/components/features/task/Task.stories.tsx",436,270,117],"./components/features/task/Task.stories.tsx":["./src/components/features/task/Task.stories.tsx",436,270,117],"./components/features/task/task-field/TaskField.stories":["./src/components/features/task/task-field/TaskField.stories.tsx",436,580],"./components/features/task/task-field/TaskField.stories.tsx":["./src/components/features/task/task-field/TaskField.stories.tsx",436,580],"./components/templates/task-board/TaskBoard.stories":["./src/components/templates/task-board/TaskBoard.stories.tsx",436,270,28],"./components/templates/task-board/TaskBoard.stories.tsx":["./src/components/templates/task-board/TaskBoard.stories.tsx",436,270,28]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[340],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);