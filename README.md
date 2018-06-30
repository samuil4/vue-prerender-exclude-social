# vue-prerender-exclude-social

> A components that excludes social and tracking codes from pre-rendering using the prerender-spa-plugin (https://www.npmjs.com/package/prerender-spa-plugin)

> Example end page result can be found here http://vue-prerender-exclude-social.surge.sh/#/

## Usage

1.  Setup webpack in production mode

> add the following to the prerender-spa-plugin

```
renderer: new Renderer({
  headless: false, // your choice
  captureAfterDocumentEvent: 'render-event', // your choice
  injectProperty: '$PRERENDER_INJECTED', // This is important
  inject: {
    disableNonSPAScripts: true, // Set this to true/false
  },
}),
```

>

2.  Use the plugin

```
  import PreRenderExcludeSocial from 'vue-prerender-exclude-social';

  /**
  * Configure the pre-render plugin
  * @property gtm: {} | optional - google tag manager
  *    @property enable: true, false - enable or disable gmt
  *    @property gid: String - GMT Id like GTM-NHN7KZT
  *    @property use: Function | optional - custom function to overwrite the this plugins code injector
  * @property fbPixel: {} | optional - facebook pixel
  *    @property enable: true, false - enable or disable facebook pixel
  *    @property appId: String - fb App Id
  *    @property use: Function | optional - custom function to overwrite the this plugins code injector
  * @property fbSdk: {} - | optional facebook sdk
  *    @property enable: true, false - enable or disable facebook SDK
  *    @property appId: String - fb App Id
  *    @property use: Function | optional - custom function to overwrite the this plugins code injector
  * @property zenDesk: {} | optional - zenDesk chat
  *    @property enable: true, false - enable or disable zen desk
  *    @property key: String - Zen desk widget key
  *    @property use: Function | optional - custom function to overwrite the this plugins code injector
  */

  const config = {
    gtm: {
      enable: true,
      gid: 'GTM-NHN7KZT',
    },
    fbPixel: {
      enable: false,
      appId: 'Your App ID',
    },
    fbSdk: {
      enable: false,
      appId: 'Your App ID',
    },
    zenDesk: {
      enable: false,
      key: 'Your Key Id',
    },
  };

  Vue.use(PreRenderExcludeSocial, config);
```

## Build Setup

```bash
# Get to test page project
cd test-page

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
