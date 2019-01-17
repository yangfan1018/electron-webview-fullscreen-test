// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let webview = document.querySelectorAll('webview')[0]

webview.addEventListener('dom-ready', () => {
    webview.executeJavaScript(`
        alert(document.webkitFullscreenEnabled)
    `)
    webview.addEventListener('enter-html-full-screen', (e)=>{
        console.log(e)
    })
})
