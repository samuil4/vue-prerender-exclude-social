import GtmHeader from './google-tag-manager/gtm.header';
import GtmBody from './google-tag-manager/gmt.body';
import FbPixel from './facebook/fb.pixel';
import FbSdk from './facebook/fb.sdk';
import Zendesk from './zen-desk/zen-desk-widget';

const PreRenderExcludeSocial = {
  install(Vue, options) {
    const { gtm, fbPixel, fbSdk, zenDesk } = options;
    const injector = window.$PRERENDER_INJECTED;
    let disable = false;

    if (injector) {
      disable = injector.disableNonSPAScripts;
    }

    if (!disable) {
      // gtm
      if (gtm && gtm.enable) {
        if (typeof gtm.use === 'function') {
          gtm.use(gtm.gid);
        } else {
          GtmHeader(gtm.gid);
          GtmBody(gtm.gid);
        }
      }

      // Fb Sdk
      if (fbSdk && fbSdk.enable) {
        if (typeof fbSdk.use === 'function') {
          fbSdk.use(fbSdk.appId);
        } else {
          FbSdk(fbSdk.appId);
        }
      }

      // Fb pixel
      if (fbPixel && fbPixel.enable) {
        if (typeof fbPixel.use === 'function') {
          fbPixel.use(fbPixel.appId);
        } else {
          FbPixel(fbPixel.appId);
        }
      }

      // Zen desk
      if (zenDesk && zenDesk.enable) {
        if (typeof zenDesk.use === 'function') {
          zenDesk.use(zenDesk.key);
        } else {
          Zendesk(zenDesk.key);
        }
      }
    }
  },
};

export default PreRenderExcludeSocial;
