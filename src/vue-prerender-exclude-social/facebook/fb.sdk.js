export default function (appId) {
  /* eslint-disable */
  window.fbAsyncInit = function() {
    FB.init({
      appId: appId,
      cookie: true,
      xfbml: true,
      version: 'v2.10',
    });
  };
  (function(d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = '//connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
  })(document, 'script', 'facebook-jssdk');
  /* eslint-enable */
}
