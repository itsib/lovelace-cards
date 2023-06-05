function t(t){return new Promise((e=>setTimeout(e,t)))}function e(e,o=3,i=50){let n=!1;return new Promise((async(a,r)=>{for(;;){let s;try{s=await e(),n||(a(s),n=!0);break}catch(t){if(n)break;if(o<=0){r(t),n=!0;break}o--}await t(i)}}))}class o{static insert(t,e){if(!window||!document||!("MutationObserver"in window))return void console.warn("The runtime environment is not supported.");let i=o.INSTANCE;i||(i=new o,o.INSTANCE=i),i._watch(t,e)}static getShadowRoot(t){return t.shadowRoot?Promise.resolve(t.shadowRoot):e((()=>{if(t.shadowRoot)return t.shadowRoot;throw new Error("No shadow root found")}),10,50)}static getElement(t,o){return e((()=>{const e=t.querySelector(o);if(e)return e;throw new Error(`No "${o}" element found`)}),5,50)}static findNode(t,e){for(const o of t.values())if(o.nodeName===e)return o}constructor(){this._initialized=!1,this._watchedImages={}}_watch(t,e){this._watchedImages[t]=e,this._initialized?(this._handleIntegrationsSettingsPage(),this._handleIntegrationsSettingsPage()):this._init()}_init(){if(this._initialized)return;this._initialized=!0;const t=document.body.querySelector("home-assistant");if(!t||!t.shadowRoot)throw new Error("No <home-assistant /> element found");new MutationObserver(this._homeAssistantMutationCallback.bind(this)).observe(t.shadowRoot,{subtree:!0,childList:!0}),o.getElement(t.shadowRoot,"home-assistant-main").then((t=>{if(!t.shadowRoot)throw new Error("No shadow root in <home-assistant-main />");return o.getElement(t.shadowRoot,"ha-drawer")})).then((t=>{const e=t.querySelector("ha-config-integrations");e&&(this._configIntegrations=e,this._handleIntegrationsSettingsPage());new MutationObserver(this._drawerMutationCallback.bind(this)).observe(t,{subtree:!0,childList:!0})})).catch((t=>{console.error(t)}))}_drawerMutationCallback(t){for(let e=t.length-1;e>=0;e--){const i=t[e],n=o.findNode(i.addedNodes,"HA-CONFIG-INTEGRATIONS");n?(this._configIntegrations=n,this._handleIntegrationsSettingsPage()):o.findNode(i.removedNodes,"HA-CONFIG-INTEGRATIONS")&&(this._configIntegrations=void 0)}}_homeAssistantMutationCallback(t){for(let e=t.length-1;e>=0;e--){const i=t[e],n=o.findNode(i.addedNodes,"DIALOG-ADD-INTEGRATION");n?(this._dialogAddIntegration=n,this._handleDialogAddIntegration()):o.findNode(i.removedNodes,"DIALOG-ADD-INTEGRATION")&&(this._dialogAddIntegration=void 0,this._dialogIntegrationListObserver&&(this._dialogIntegrationListObserver.disconnect(),this._dialogIntegrationListObserver=void 0))}}_dialogIntegrationListMutationCallback(t){var e;for(let i=0;i<t.length;i++){const n=t[i],a=o.findNode(n.addedNodes,"HA-INTEGRATION-LIST-ITEM");a&&(null===(e=a.__integration)||void 0===e?void 0:e.domain)in this._watchedImages&&this._replaceImageDialogAddIntegration(a,a.__integration.domain)}}_handleIntegrationsSettingsPage(){this._configIntegrations&&o.getShadowRoot(this._configIntegrations).then((t=>o.getElement(t,"hass-tabs-subpage"))).then((t=>o.getElement(t,".container"))).then((t=>{if(t&&t.children.length)for(let e=0;e<t.children.length;e++){const o=t.children.item(e),i=o.domain;i in this._watchedImages&&this._replaceImageIntegrationCard(o,i)}else console.warn("Container is empty")})).catch((t=>{console.error(t)}))}_handleDialogAddIntegration(){this._dialogAddIntegration&&o.getShadowRoot(this._dialogAddIntegration).then((t=>o.getElement(t,"ha-dialog"))).then((t=>o.getElement(t,"mwc-list"))).then((t=>{this._dialogIntegrationListObserver=new MutationObserver(this._dialogIntegrationListMutationCallback.bind(this)),this._dialogIntegrationListObserver.observe(t,{subtree:!0,childList:!0})})).catch(console.error)}_replaceImageIntegrationCard(t,e){var o,i,n;const a=this._watchedImages[e],r=null===(o=t.shadowRoot)||void 0===o?void 0:o.querySelector("ha-card"),s=null==r?void 0:r.querySelector("ha-integration-header"),d=null===(n=null===(i=null==s?void 0:s.shadowRoot)||void 0===i?void 0:i.querySelector(".header"))||void 0===n?void 0:n.querySelector("img");d&&a&&(d.src=a)}_replaceImageDialogAddIntegration(t,e){const i=this._watchedImages[e];o.getShadowRoot(t).then((t=>o.getElement(t,"span > img"))).then((t=>{t.src=i})).catch(console.error)}}export{o as BrandReplacer};
