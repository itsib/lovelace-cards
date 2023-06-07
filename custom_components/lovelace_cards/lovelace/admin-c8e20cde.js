import{c as a,t,L as o,h as e,f as r,a as i}from"./lovelace-cards-b2d9bc42.js";var s,l,d=a`[aria-label][data-tooltip-pos][data-tooltip-pos=left]:before,[aria-label][data-tooltip-pos][data-tooltip-pos=top]:before{border:var(--tooltip-arrow-size,6px) solid transparent;height:0;width:0}:host{-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);color:var(--primary-text-color);font-family:var(--paper-font-body1_-_font-family);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}[aria-label][data-tooltip-pos]{cursor:pointer;position:relative}[aria-label][data-tooltip-pos]:after{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--tooltip-bg-color,rgba(var(--rgb-secondary-background-color),.95));border:var(--tooltip-border-width,.5px) solid var(--tooltip-border-color,var(--divider-color));border-radius:var(--tooltip-border-radius,4px);box-shadow:0 0 .1875rem rgba(0,0,0,.3);color:var(--tooltip-text-color,var(--primary-text-color));content:attr(aria-label);font-family:var(--paper-font-body1_-_font-family);font-size:var(--tooltip-font-size,12px);font-style:normal;font-weight:400;padding:.5em 1em;text-indent:0;text-shadow:none;white-space:nowrap;z-index:10}[aria-label][data-tooltip-pos]:before{content:"";z-index:11}[aria-label][data-tooltip-pos]:after,[aria-label][data-tooltip-pos]:before{box-sizing:border-box;opacity:0;pointer-events:none;position:absolute;transition:all .12s ease-out .12s;transition-delay:var(--tooltip-delay-hide,0s)}[aria-label][data-tooltip-pos]:focus:after,[aria-label][data-tooltip-pos]:focus:before,[aria-label][data-tooltip-pos]:hover:after,[aria-label][data-tooltip-pos]:hover:before{opacity:1;transition-delay:var(--tooltip-delay-show,0s)}[aria-label][data-tooltip-pos][data-tooltip-pos=top]:after{margin-bottom:calc(var(--tooltip-arrow-size, 6px)*2)}[aria-label][data-tooltip-pos][data-tooltip-pos=top]:before{border-top-color:var(--tooltip-border-color,var(--divider-color));filter:drop-shadow(0 1px rgba(0,0,0,.3))}[aria-label][data-tooltip-pos][data-tooltip-pos=top]:after,[aria-label][data-tooltip-pos][data-tooltip-pos=top]:before{bottom:calc(100% - var(--tooltip-arrow-size, 6px)/2);left:50%;transform:translate(-50%,6px);transform-origin:top}[aria-label][data-tooltip-pos][data-tooltip-pos=top]:focus:after,[aria-label][data-tooltip-pos][data-tooltip-pos=top]:focus:before,[aria-label][data-tooltip-pos][data-tooltip-pos=top]:hover:after,[aria-label][data-tooltip-pos][data-tooltip-pos=top]:hover:before{transform:translate(-50%)}[aria-label][data-tooltip-pos][data-tooltip-pos=left]:after{margin-right:calc(var(--tooltip-arrow-size, 6px)*2)}[aria-label][data-tooltip-pos][data-tooltip-pos=left]:before{border-left-color:var(--tooltip-border-color,var(--divider-color));filter:drop-shadow(1px 0 rgba(0,0,0,.3))}[aria-label][data-tooltip-pos][data-tooltip-pos=left]:after,[aria-label][data-tooltip-pos][data-tooltip-pos=left]:before{right:calc(100% - var(--tooltip-arrow-size, 6px)/2);top:50%;transform:translate(6px,-50%);transform-origin:left}[aria-label][data-tooltip-pos][data-tooltip-pos=left]:focus:after,[aria-label][data-tooltip-pos][data-tooltip-pos=left]:focus:before,[aria-label][data-tooltip-pos][data-tooltip-pos=left]:hover:after,[aria-label][data-tooltip-pos][data-tooltip-pos=left]:hover:before{transform:translateY(-50%)}.mariadb-card .card-header{display:flex;padding:16px}.mariadb-card .card-header .logo{height:40px;width:auto}.mariadb-card .card-header .info{padding-left:16px}.mariadb-card .card-header .info .name{color:var(--ha-card-header-color,--primary-text-color);font-size:22px;line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mariadb-card .card-header .info .version{color:var(--secondary-text-color);font-size:14px;line-height:1;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mariadb-card .card-content{align-items:center;display:flex;justify-content:space-between;margin:0;padding:0 10px}.mariadb-card .card-content .gauge-wrap{cursor:pointer;margin:0 6px;width:132px}.mariadb-card .card-footer{border-top:1px solid var(--entities-divider-color,var(--divider-color));display:flex;justify-content:space-between;margin:16px;padding-top:16px}.mariadb-card .card-footer .database-size{align-items:center;display:flex}.mariadb-card .card-footer .database-size .icon{cursor:pointer}.mariadb-card .card-footer .database-size .icon img{height:36px;opacity:.7;transition:opacity .2s ease-in-out 0s;width:auto}.mariadb-card .card-footer .database-size .icon:hover img{opacity:.9}.mariadb-card .card-footer .database-size .value{cursor:pointer;font-size:16px;margin-left:14px}.mariadb-card .card-footer .actions{display:flex;margin-right:-8px}.mariadb-card .card-footer .actions .btn-wrap{padding:0 8px}.mariadb-card .card-footer .actions .btn-wrap.purge{--button-icon-color:var(--info-color)}.mariadb-card .card-footer .actions .btn-wrap.reload{--button-icon-color:var(--warning-color)}.mariadb-card .card-footer .actions .btn-wrap.stop{--button-icon-color:var(--error-color)}.mariadb-card .card-footer .actions .btn-wrap.start{--button-icon-color:var(--success-color)}`;!function(a){a.PURGE="purge",a.RELOAD="reload",a.STOP="stop",a.START="start"}(s||(s={})),function(a){a.STARTED="started",a.STOPPED="stopped",a.RUNNING="running",a.UNKNOWN="unknown"}(l||(l={}));class n extends o{constructor(){super(...arguments),this._ramLimit=400,this._isWorks=!1,this._isConnected=!1}setConfig(a={}){this.config=a}getCardSize(){return 3}firstUpdated(a){super.firstUpdated(a),this._refreshInfo()}willUpdate(a){var t;super.willUpdate(a),this.hass&&a.has("hass")&&(null===(t=this.hass.themes)||void 0===t?void 0:t.darkMode)!==this._isDark&&(this._isDark=this.hass.themes.darkMode)}async connectedCallback(){await super.connectedCallback(),this._isConnected=!0,this._addonStateUnsubscribe=await async function(a){const{conn:t}=await hassConnection;return await t.subscribeMessage((t=>{"addon"===t.event&&t.slug===n.dbAddonSlug&&a(t.state)}),{type:"supervisor/subscribe"})}((a=>this._isWorks=a===l.STARTED)).catch((a=>{console.error(a)})),this._startRefreshStats()}async disconnectedCallback(){var a;await super.disconnectedCallback(),this._isConnected=!1,null===(a=this._addonStateUnsubscribe)||void 0===a||a.call(this),this._stopRefreshStats()}render(){if(!this.hass)return e``;const a=`/lovelace-cards/mariadb-logo-${this._isDark?"white":"dark"}.svg`,o=void 0!==this._cpuPercent&&void 0!==this._ramPercent&&void 0!==this._ramUsage&&void 0!==this._ramLimit,r=this._bdSize();return e`<ha-card class="mariadb-card"><div class="card-header"><img .src="${a}" class="logo" alt="MariaDB"><div class="info"><div class="name">${this._name}</div>${this._version?e`<div class="version">${t("common.version")} ${this._version}</div>`:null}</div></div><div class="card-content"><div class="gauge-wrap" @click="${()=>this._showMoreInfo(n.cpuPercentSensor)}"><lc-gauge .hass="${this.hass}" .label="${"CPU"}" .unit="${"%"}" .min="${0}" .max="${10}" .levels="${[{level:0,stroke:"var(--success-color)"},{level:2,stroke:"var(--warning-color)"},{level:7,stroke:"var(--error-color)"}]}" .value="${this._cpuPercent}" .disabled="${!this._isWorks||!o}"></lc-gauge></div><div class="gauge-wrap" @click="${()=>this._showMoreInfo(n.ramPercentSensor)}"><lc-gauge .hass="${this.hass}" .label="${"RAM"}" .unit="${"%"}" .min="${0}" .max="${100}" .levels="${[{level:0,stroke:"var(--info-color)"}]}" .value="${this._ramPercent}" .loading="${!1}" .disabled="${!this._isWorks||!o}"></lc-gauge></div><div class="gauge-wrap" @click="${()=>this._showMoreInfo(n.ramPercentSensor)}"><lc-gauge .hass="${this.hass}" .label="${"RAM"}" .unit="${"Mb"}" .min="${0}" .max="${this._ramLimit}" .levels="${[{level:0,stroke:"var(--warning-color)"}]}" .value="${this._ramUsage}" .loading="${!1}" .disabled="${!this._isWorks||!o}"></lc-gauge></div></div><div class="card-footer"><div class="database-size">${r?e`<div class="icon" data-tooltip-pos="top" aria-label="${t("mariadb.db_size")}" @click="${()=>this._showMoreInfo(n.dbSizeSensor)}"><img src="/lovelace-cards/database-size.svg" alt="DB Size Icon"></div><div class="value" @click="${()=>this._showMoreInfo(n.dbSizeSensor)}">${this._bdSize()}</div>`:null}</div><div class="actions">${this._isWorks?e`<div class="btn-wrap purge" data-tooltip-pos="left" aria-label="${t("mariadb.purge.tooltip")}"><lc-circle-button icon="mdi:database-cog" @click="${this._progress?void 0:this._purge}" .loading="${this._progress===s.PURGE}"></lc-circle-button></div><div class="btn-wrap reload" data-tooltip-pos="left" aria-label="${t("mariadb.reload.tooltip")}"><lc-circle-button icon="mdi:restart" @click="${this._progress?void 0:this._reload}" .loading="${this._progress===s.RELOAD}"></lc-circle-button></div><div class="btn-wrap stop" data-tooltip-pos="left" aria-label="${t("mariadb.stop.tooltip")}"><lc-circle-button icon="mdi:stop" @click="${this._progress?void 0:this._stop}" .loading="${this._progress===s.STOP}"></lc-circle-button></div>`:e`<div class="btn-wrap start" data-tooltip-pos="left" aria-label="${t("mariadb.start.tooltip")}"><lc-circle-button icon="mdi:play" @click="${this._progress?void 0:this._start}" .loading="${this._progress===s.START}"></lc-circle-button></div>`}</div></div></ha-card>${this._dialog?e`<ha-dialog .open="${!0}" @closed="${this._cancel}" heading="${this._dialog.title}" class="dialog"><div><p>${this._dialog.message}</p></div><mwc-button slot="secondaryAction" @click="${this._cancel}">CANCEL</mwc-button><mwc-button slot="primaryAction" @click="${this._confirm}">OK</mwc-button></ha-dialog>`:null}`}_bdSize(){if(n.dbSizeSensor in this.hass.states){const a=r(this.hass,this.hass.states[n.dbSizeSensor].state);if(a)return`${a} MB`}}_confirm(){if(this._dialog)switch(this._progress=this._dialog.action,this._dialog=void 0,this._progress){case s.PURGE:this._callService("recorder","purge",{keep_days:10,apply_filter:!0,repack:!0});break;case s.START:this._callSupervisorWs("start");break;case s.STOP:this._callSupervisorWs("stop");break;case s.RELOAD:this._callSupervisorWs("restart")}}_callService(a,t,o={}){this.hass.callService(a,t,o).then((()=>{this._progress=void 0})).catch((a=>{this._progress=void 0,console.error(a)}))}_callSupervisorWs(a){const t={endpoint:`/addons/${n.dbAddonSlug}/${a}`,method:"post",timeout:null,type:"supervisor/api"};return this.hass.callWS(t).then((a=>(this._progress=void 0,a))).catch((a=>{this._progress=void 0,console.error(a)}))}_cancel(){this._dialog=void 0}_purge(){this._dialog={title:t("common.are_you_sure"),message:t("mariadb.purge.dialog"),action:s.PURGE}}_reload(){this._dialog={title:t("common.are_you_sure"),message:t("mariadb.reload.dialog"),action:s.RELOAD}}_stop(){this._dialog={title:t("common.are_you_sure"),message:t("mariadb.stop.dialog"),action:s.STOP}}_start(){this._dialog={title:t("common.are_you_sure"),message:t("mariadb.start.dialog"),action:s.START}}_showMoreInfo(a){i(this,"hass-more-info",{entityId:a})}_startRefreshStats(){this._stopRefreshStats(),this._refreshStats()}_stopRefreshStats(){void 0!==this._nextRefreshTimeout&&(clearTimeout(this._nextRefreshTimeout),this._nextRefreshTimeout=void 0)}_refreshStats(){const a={endpoint:"/addons/core_mariadb/stats",method:"get",type:"supervisor/api"};this.hass.callWS(a).then((a=>{const t=1048576;this._cpuPercent=a.cpu_percent,this._ramPercent=a.memory_percent,this._ramUsage=Math.round(a.memory_usage/t*10)/10,this._ramLimit=Math.round(a.memory_limit/t*10)/10,this._isConnected&&(this._nextRefreshTimeout=setTimeout((()=>this._refreshStats()),n.updateStatsInterval))})).catch((a=>{a.message&&(a.message.includes("not running")||a.message.includes("Can't read stats"))||console.error(a)}))}_refreshInfo(){const a={endpoint:`/addons/${n.dbAddonSlug}/info`,method:"get",type:"supervisor/api"};this.hass.callWS(a).then((a=>{this._name=a.name,this._version=a.version,this._isWorks=a.state===l.STARTED})).catch(console.error)}}n.styles=d,n.properties={hass:{attribute:!1},config:{attribute:!1},_name:{state:!0,type:String},_version:{state:!0,type:String},_cpuPercent:{state:!0,type:Number},_ramPercent:{state:!0,type:Number},_ramUsage:{state:!0,type:Number},_ramLimit:{state:!0,type:Number},_isDark:{state:!0,type:Boolean},_isWorks:{state:!0,type:Boolean},_progress:{state:!0,type:String},_dialog:{state:!0}},n.dbSizeSensor="sensor.mariadb_database_size",n.ramPercentSensor="sensor.mariadb_memory_percent",n.cpuPercentSensor="sensor.mariadb_cpu_percent",n.dbAddonSlug="core_mariadb",n.updateStatsInterval=2e3,customElements.define("lc-mariadb-card",n),window.customCards=window.customCards||[],window.customCards.push({type:"lc-mariadb-card",name:t("mariadb.name"),description:t("mariadb.description"),preview:!0,configurable:!1});
