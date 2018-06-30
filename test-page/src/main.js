// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import PreRenderExcludeSocial from '../../src/vue-prerender-exclude-social';

Vue.config.productionTip = false;
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
 *    @property id: String - Zen desk widget Id
 *    @property use: Function | optional - custom function to overwrite the this plugins code injector
 */
const config = {
  gtm: {
    enable: true,
    gid: 'GTM-NHN7KZT',
  },
  fbPixel: {
    enable: true,
    appId: 'Your App ID',
  },
  fbSdk: {
    enable: true,
    appId: 'Your App ID',
  },
  zenDesk: {
    enable: true,
    key: 'Your Key Id',
  },
};

Vue.use(PreRenderExcludeSocial, config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
