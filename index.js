// ==UserScript==
// @name         Pixiv Collection Plus
// @namespace    niaier pixiv collection
// @version      0.1
// @description  pixiv收藏拓展
// @author       niaier
// @match        *://www.baidu.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_xmlhttpRequest
// @grant        GM_download
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @grant        window.close
// @grant        window.focus
// @grant        window.onurlchange
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js
// @resource css https://unpkg.com/element-ui/lib/theme-chalk/index.css
// @require      https://cdn.jsdelivr.net/npm/vue@2.6.14
// @require      https://unpkg.com/element-ui/lib/index.js
// @require      https://cdn.jsdelivr.net/npm/echarts@5.2.2/dist/echarts.min.js
// @connect      *
// ==/UserScript==

(async function () {
  // 替换element字体源
  const styleText = GM_getResourceText("css").replace('fonts/element-icons.woff', 'https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/fonts/element-icons.woff').replace('fonts/element-icons.ttf', 'https://unpkg.com/element-ui@2.13.0/lib/theme-chalk/fonts/element-icons.ttf')
  // GM_addStyle(GM_getResourceText("css"));
  GM_addStyle(styleText);

  const vueApp = `
<div id="app">
  <el-button type="primary">查看收藏</el-button>
</div>
  `

  $('body').append(vueApp)
  new Vue({
    el: '#app'
  })
})()