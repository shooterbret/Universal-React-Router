//As stated in Redux server side rendering. Stringify's The Redux State and Parses the prerendered Component.

 function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\x3c')}
          //"It escapes the < characeter to &lt; So it parses OK internally" BTM
        </script>
      </body>
    </html>
    `
}
export default renderFullPage;