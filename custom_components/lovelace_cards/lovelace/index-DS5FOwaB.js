const e=Object.getPrototypeOf(customElements.get("home-assistant-main")),{html:t,css:i}=e.prototype;var a=i`:host{display:block}.lc-gauge{filter:none;position:relative}.lc-gauge .gauge{position:relative;z-index:1}.lc-gauge .gauge.animated{animation-duration:.8s;animation-name:flicker;animation-timing-function:linear}.lc-gauge .value{left:0;position:absolute;right:0;text-align:center;transform:translateY(-100%);z-index:2}.lc-gauge .label{font-size:16px;margin-top:10px;position:relative;text-align:center;width:100%;z-index:3}.lc-gauge.disabled .gauge{filter:grayscale(1) brightness(.6)}@keyframes flicker{0%,19.999%,22%,62.999%,64%,64.999%,70%,to{filter:grayscale(1) brightness(.6)}20%,21.999%,63%,63.999%,65%,69.999%{filter:none}}`;async function s(e,t,i=!1){return new Promise((async(a,s)=>{if(!e)return s(new Error("Target element not provided"));let r;return r=i?await async function(e){if(e.shadowRoot)return e.shadowRoot;return new Promise((t=>{const i=e.attachShadow;e.attachShadow=a=>(setTimeout((()=>t(e.shadowRoot))),i.call(e,a))}))}(e):e,a(r.querySelector(t))}))}function r(e,t){const i=Number(t);if(!isNaN(i))return i.toLocaleString(function(e){switch(e.locale.number_format){case"comma_decimal":return["en-US","en"];case"decimal_comma":return["de","es","it"];case"space_comma":return["fr","sv","cs"];case"system":return;default:return e.locale.language}}(e))}let n;class o extends e{constructor(){super(...arguments),this.label="",this.unit="",this.min=0,this.max=100,this.disabled=!1,this._value=0,this._disabled=!1,this._animated=!1}firstUpdated(e){super.firstUpdated(e),async function(e){return n||(n=window.loadCardHelpers().then((t=>{const i=Object.keys(e.entities).find((t=>t.startsWith("sensor.")&&!isNaN(Number(e.states[t].state))));t.createCardElement({type:"gauge",entity:i})}))),n}(this.hass).catch(console.error),s(this,"ha-gauge",!0).then((e=>s(e,"svg.text",!0))).then((e=>{e&&(e.style.visibility="hidden")})).catch(console.error)}willUpdate(e){var t;super.willUpdate(e),e.has("disabled")&&(this.disabled?(this._animated=!1,this._animationTimeout&&clearTimeout(this._animationTimeout)):this._disabled!==this.disabled&&(this._animated=!0,this._value=this.max,this._animationTimeout=setTimeout((()=>{this._value=this.min,this._animationTimeout=setTimeout((()=>{var e;this._value=null!==(e=this.value)&&void 0!==e?e:0,this._animated=!1,this._animationTimeout=void 0}),1100)}),1100)),this._disabled=this.disabled),!e.has("value")&&!e.has("disabled")||this.disabled||this._animated||this._value===this.value||(this._value=null!==(t=this.value)&&void 0!==t?t:0),(e.has("min")||e.has("disabled"))&&this.disabled&&!this._animated&&this._value!==this.min&&(this._value=this.min)}render(){const e=this.disabled||void 0===this.value;return t`
      <div class="${"lc-gauge "+(e?"disabled":"")}">
        <div class="${"gauge "+(this._animated?"animated":"")}">
          <ha-gauge .min="${this.min}" .max="${this.max}" .value="${this._value}" .needle="${!0}" .levels="${this.levels}" .locale="${this.hass.locale}"></ha-gauge>
        </div>
        <div class="value">${this._formatValue()}</div>
        <div class="label">${this.label}</div>
      </div>
    `}_formatValue(){return this.disabled||this._animated||void 0===this._value||isNaN(this._value)?`--${this.unit}`:`${r(this.hass,this.value)}${this.unit}`}}o.properties={hass:{attribute:!0},label:{attribute:!0,type:String},unit:{attribute:!0,type:String},min:{attribute:!0,type:Number},max:{attribute:!0,type:Number},levels:{attribute:!0},value:{attribute:!0,type:Number},disabled:{attribute:"disabled",reflect:!0,type:Boolean},_value:{state:!0,type:Number},_animated:{state:!0,type:Boolean}},o.styles=a,window.customElements.define("lc-gauge",o);var l=i`:host{color:var(--button-icon-color,var(--disabled-text-color,#6f6f6f));--ha-icon-display:block;--mdc-icon-button-size:40px;--mdc-icon-size:24px;--mdc-theme-primary:var(--button-icon-color,var(--disabled-text-color,#6f6f6f));font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height);position:relative}:host:before{background-color:currentcolor;border-radius:50%;content:" ";height:var(--mdc-icon-button-size);left:0;opacity:.15;position:absolute;right:0;width:var(--mdc-icon-button-size)}`;class d extends e{constructor(){super(...arguments),this.loading=!1,this.disabled=!1}render(){return t`
      <mwc-icon-button class="circle-button" .disabled=${this.disabled} .title=${this.title}>
        ${this.loading&&!this.disabled?t` <mwc-circular-progress indeterminate density=${-6}></mwc-circular-progress> `:t` <ha-icon icon=${this.icon} class="icon"></ha-icon> `}
      </mwc-icon-button>
    `}}d.properties={hass:{attribute:!0},icon:{attribute:!0,type:String},label:{attribute:!0,type:String},loading:{attribute:"loading",reflect:!0,type:Boolean},disabled:{attribute:"disabled",reflect:!0,type:Boolean}},d.styles=l,window.customElements.define("lc-circle-button",d);var c=i`:host{display:block}`;let h;class u extends e{firstUpdated(e){super.firstUpdated(e),async function(e){return h||(h=window.loadCardHelpers().then((t=>{const i=Object.keys(e.entities).find((e=>e.startsWith("climate.")));console.log(i),t.createCardElement({type:"thermostat",entity:i})}))),h}(this.hass).catch(console.error)}willUpdate(e){super.willUpdate(e)}render(){return this.hass?t` <round-slider .value="${this.value}" .min="${this.min}" .max="${this.max}" .disabled="${this.disabled}"></round-slider> `:t``}}u.properties={hass:{attribute:!0},value:{attribute:!0,type:Number},min:{attribute:!0,type:Number},max:{attribute:!0,type:Number},disabled:{attribute:"disabled",reflect:!0,type:Boolean}},u.styles=c,window.customElements.define("lc-round-slider",u);var m=i`:host{--slider-height:var(--ls-slider-height,120px);--slider-width:var(--ls-slider-width,4px);--slider-thumb-size:var(--ls-slider-thumb-size,14px);--slider-track-color:var(--ls-slider-track-color,var(--accent-color,#2196f3));--slider-bg-color:var(--ls-slider-bg-color,hsla(0,0%,76%,.2));--slider-disabled-color:var(--ls-slider-disabled-color,var(--secondary-text-color));--slider-thumb-color:var(--ls-slider-thumb-color,var(--slider-track-color));--slider-thumb-min-color:var(--ls-slider-thumb-min-color,var(--secondary-text-color));display:block;height:var(--slider-height);text-align:center;width:calc(var(--slider-width) + 16px)}input[type=range]{--range:calc(var(--max) - var(--min));--ratio:calc((var(--value) - var(--min))/var(--range));--sx:calc(var(--slider-thumb-size)*0.5 + var(--ratio)*(100% - var(--slider-thumb-size)));--track-gradient:linear-gradient(var(--slider-track-color),var(--slider-track-color)) 0/var(--sx) 100% no-repeat,var(--slider-bg-color);-webkit-appearance:none;height:var(--slider-width);margin:2px 0;transform:rotate(270deg) translate(calc(var(--slider-height)*-1 + 16px - var(--slider-width)),8px);transform-origin:left top;width:var(--slider-height)}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{-webkit-appearance:none;background:var(--slider-track-color);background:var(--ls-slider-full-color,var(--track-gradient));border-radius:var(--slider-width);height:var(--slider-width);transition:filter .1s ease-in-out;width:var(--slider-height)}input[type=range]::-moz-range-track{background:var(--slider-track-color);background:var(--ls-slider-full-color,var(--track-gradient));border-radius:var(--slider-width);height:var(--slider-width);transition:filter .1s ease-in-out;width:var(--slider-height)}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background:var(--thumb-color);border-radius:1em;height:var(--slider-thumb-size);margin-top:calc(var(--slider-width)*.5 - var(--slider-thumb-size)*.5);transition:all .1s ease-in-out;width:var(--slider-thumb-size)}input[type=range]::-webkit-slider-thumb:active{transform:scale(1.5)}input[type=range]::-moz-range-thumb{background:var(--thumb-color);border-radius:1em;height:var(--slider-thumb-size);margin-top:calc(var(--slider-width)*.5 - var(--slider-thumb-size)*.5);transition:all .1s ease-in-out;width:var(--slider-thumb-size)}input[type=range]::-moz-range-thumb:active{transform:scale(1.5)}input[type=range]:disabled::-webkit-slider-runnable-track{filter:grayscale(100%)}input[type=range]:disabled::-moz-range-track{filter:grayscale(100%)}input[type=range]:disabled::-webkit-slider-thumb{background:var(--slider-disabled-color)}input[type=range]:disabled::-webkit-slider-thumb:active{transform:unset}input[type=range]:disabled::-moz-range-thumb{background:var(--slider-disabled-color)}input[type=range]:disabled::-moz-range-thumb:active{transform:unset}`;class p extends e{constructor(){super(...arguments),this.value=50,this.min=0,this.max=100,this.step=1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this._input||(this._input=document.createElement("input"),this._input.type="range",this.shadowRoot.append(this._input)),this._input.addEventListener("change",this._handleChange.bind(this)),this._input.addEventListener("input",this._handleInput.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this._input.removeEventListener("change",this._handleChange),this._input.removeEventListener("input",this._handleInput)}shouldUpdate(e){if(e.has("min")||e.has("max"))if(this.min>=this.max)console.warn("wrong MIN MAX values");else{const e=Number(this._input.value);e<this.min?this._input.value=this.min.toString():e>this.max&&(this._input.value=this.max.toString()),this._input.min=this.min.toString(),this._input.max=this.max.toString(),this._input.style.setProperty("--min",this.min.toString()),this._input.style.setProperty("--max",this.max.toString())}return e.has("step")&&(this._input.step=this.step.toString()),e.has("value")&&(this._input.value=this.value.toString(),this._input.style.setProperty("--value",this.value.toString()),this._input.style.setProperty("--thumb-color",this.value>this.min?"var(--slider-thumb-color)":"var(--slider-thumb-min-color)")),e.has("disabled")&&(this._input.disabled=this.disabled),!1}_handleChange(e){const t=e.target,i=Number(t.value),a=t.parentNode;if(!a||!a.host)return;const s={detail:{value:i},bubbles:!0,composed:!0};a.host.dispatchEvent(new CustomEvent("change",s))}_handleInput(e){const t=e.target;t.style.setProperty("--value",t.value),t.style.setProperty("--thumb-color",t.value&&Number(t.value)>this.min?"var(--slider-thumb-color)":"var(--slider-thumb-min-color)")}}p.properties={value:{attribute:!0,type:Number},min:{attribute:!0,type:Number},max:{attribute:!0,type:Number},step:{attribute:!0,type:Number},disabled:{attribute:"disabled",reflect:!0,type:Boolean}},p.styles=m,window.customElements.define("lc-vertical-slider",p);var b=i`:host{font-family:var(--paper-font-body1_-_font-family);-webkit-font-smoothing:var(--paper-font-body1_-_-webkit-font-smoothing);color:var(--primary-text-color);font-size:var(--paper-font-body1_-_font-size);font-weight:var(--paper-font-body1_-_font-weight);line-height:var(--paper-font-body1_-_line-height)}.area-card{overflow:hidden;position:relative}.area-card .card-header{padding:12px 16px 16px}.area-card .card-header .name{color:inherit;font-family:inherit;font-size:var(--ha-card-header-font-size,24px);line-height:1.2;margin-bottom:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.area-card .card-header .climate{display:flex;margin:0 -8px}.area-card .card-content{align-items:center;display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -10px}.area-card .card-content .item{box-sizing:border-box;margin:0;padding:10px}`,g={version:"Version",cpu:"CPU",ram:"RAM",yes:"Yes",cancel:"Cancel",are_you_sure:"Are you sure?"},v={name:"Area Card",description:"Custom area card. Displays supported entities.",config:{name:{label:"Card or area name",helper:"Name of the card or the area"},area:{label:"Area",helper:"Select the zone to be displayed"}}},_={name:"MariaDB Card",description:"Shows the status of the database. It also allows you to stop/start, restart and start cleaning.",db_size:"DB Size",purge:{tooltip:"Clean up the database",dialog:"The database cleanup process will be started."},reload:{tooltip:"Restart the database server",dialog:"The database server will be restarted."},stop:{tooltip:"Stopping the DB server",dialog:"The database server will be stopped."},start:{tooltip:"Start the database server",dialog:"The database server will be started."},error_db_stopped:"The database server now is stopped."},f={common:g,area:v,mariadb:_},y={version:"Версия:",cpu:"CPU",ram:"RAM",yes:"Да",cancel:"Отмена",are_you_sure:"Вы уверены?"},w={name:"Пространство",description:"Пользовательская карточка пространства. Отображает поддерживаемые сущности.",config:{name:{label:"Card or area name",helper:"Name of the card or the area"},area:{label:"Area",helper:"Select the zone to be displayed"}}},x={name:"Карточка MariaDB",description:"Показывает состояние базы данных. Так же позволяет останавливать/запускать, перезапускать и запускать очистку.",db_size:"Занимаемое место на диске",purge:{tooltip:"Запуск отчистки БД",dialog:"Будет запущен процесс очистки БД."},reload:{tooltip:"Перезапуск сервера БД",dialog:"Сервер баз данных будет перезапущен."},stop:{tooltip:"Остановка сервера БД",dialog:"Сервер баз данных будет остановлен."},start:{tooltip:"Запустить сервер БД",dialog:"Сервер баз данных будет запущен."},error_db_stopped:"Сервер баз данных сейчас остановлен."},k={common:y,area:w,mariadb:x};const E={en:Object.freeze({__proto__:null,area:v,common:g,default:f,mariadb:_}),ru:Object.freeze({__proto__:null,area:w,common:y,default:k,mariadb:x})};function C(e,t){if("string"==typeof t)return t;const i=e.split("."),[a,...s]=i,r=t[a];return r&&"string"!=typeof r?C(s&&s.length>0?s.join("."):"",r):r}function T(e,t="",i=""){const a=function(){var e;let t=null===(e=localStorage.getItem("selectedLanguage"))||void 0===e?void 0:e.replace(/['"]+/g,"").replace("-","_");return"null"===t&&(t=void 0),t||(t=localStorage.getItem("i18nextLng")),t&&"null"!==t||(t="en"),t}();let s;try{s=Object.assign({},E[a])}catch(e){s=Object.assign({},E.en)}let r=C(e,s);return void 0===r&&(r=C(e,Object.assign({},E.en))),r&&""!==t&&""!==i&&(r=r.replace(`{${t}}`,i)),null!=r?r:""}var $=i`:host{--mdc-icon-size:20px;color:var(--secondary-text-color);cursor:pointer;display:block;font-size:14px;line-height:1;margin:0 4px}:host .icon{position:relative;top:-2px}`;class S extends e{willUpdate(e){if(super.willUpdate(e),e.has("entity")||e.has("hass"))if(this.hass&&this.entity&&this.entity in this.hass.states){const e=this.hass.states[this.entity];this._icon=e.attributes.icon||this._getDefaultIcon(e.attributes.device_class),this._value=r(this.hass,e.state),this._unit=e.attributes.unit_of_measurement}else this._icon=void 0,this._value=void 0,this._unit=void 0}render(){return this._icon&&this._value?t`
      <ha-icon .icon="${this._icon}" class="icon"></ha-icon>
      <span>${this._value}${this._value&&this._unit?" "+this._unit:""}</span>
    `:t``}_getDefaultIcon(e){switch(e){case"temperature":return"mdi:thermometer";case"humidity":return"mdi:water-percent";case"pressure":return"mdi:gauge";default:return}}}S.properties={hass:{attribute:!0},entity:{attribute:!0,type:String},_icon:{state:!0},_value:{state:!0},_unit:{state:!0}},S.styles=$,window.customElements.define("lc-area-card-sensor",S);var N,z,O,B,I,R,U=i`.area-card-light{display:flex;height:100%;position:relative;width:100%}.area-card-light .slider-block{align-items:flex-end;display:flex;margin-right:12px}.area-card-light .slider-block .slider.brightness{--ls-slider-track-color:var(--blue-color)}.area-card-light .slider-block .slider.color-temp{--ls-slider-full-color:linear-gradient(90deg,#d18847,#d1d0cd)}.area-card-light .slider-block .icon{--mdc-icon-size:20px}`;!function(e){e.GET="GET",e.POST="POST",e.PUT="PUT",e.DELETE="DELETE"}(N||(N={})),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(z||(z={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(O||(O={})),function(e){e.language="language",e.monday="monday",e.tuesday="tuesday",e.wednesday="wednesday",e.thursday="thursday",e.friday="friday",e.saturday="saturday",e.sunday="sunday"}(B||(B={})),function(e){e.CONFIG="config",e.DIAGNOSTIC="diagnostic"}(I||(I={})),function(e){e.UNKNOWN="unknown",e.ONOFF="onoff",e.BRIGHTNESS="brightness",e.COLOR_TEMP="color_temp",e.HS="hs",e.XY="xy",e.RGB="rgb",e.RGBW="rgbw",e.RGBWW="rgbww",e.WHITE="white"}(R||(R={}));const L=[...[R.HS,R.XY,R.RGB,R.RGBW,R.RGBWW],R.COLOR_TEMP,R.BRIGHTNESS,R.WHITE];class P extends e{willUpdate(e){var t,i,a,s;if(super.willUpdate(e),e.has("entity")||e.has("hass")){const e=this._getLightState();if(e){if(this._state!==e.state&&(this._state=e.state),(null===(t=e.attributes.supported_color_modes)||void 0===t?void 0:t.some((e=>L.includes(e))))&&(this._brightnessBound||(this._brightnessBound=[0,255]),this._brightness!==e.attributes.brightness&&(this._brightness=e.attributes.brightness)),e.attributes.color_mode&&e.attributes.color_mode===R.COLOR_TEMP||(null===(i=e.attributes.supported_color_modes)||void 0===i?void 0:i.includes(R.COLOR_TEMP))){this._colorTempBound||(this._colorTempBound=[null!==(a=e.attributes.min_color_temp_kelvin)&&void 0!==a?a:2e3,null!==(s=e.attributes.max_color_temp_kelvin)&&void 0!==s?s:6500]);const t=e.attributes.color_temp_kelvin||2e3;this._colorTemp!==t&&(this._colorTemp=t)}const r=e.attributes.rgb_color?`color: rgb(${e.attributes.rgb_color.join(",")});`:"";r!==this._rgbColor&&(this._rgbColor=r)}else this._state=void 0,this._brightness=void 0,this._brightnessBound=void 0,this._colorTemp=void 0,this._colorTempBound=void 0,this._rgbColor=void 0}}render(){if(!this._getLightState())return t``;const e=!("on"!==this._state||this._brightnessBound&&!this._brightness);return t`
      <div class="area-card-light">
        ${this._brightnessBound?t`
              <div class="slider-block">
                <lc-vertical-slider
                  class="slider brightness"
                  .value="${this._brightness}"
                  .min="${this._brightnessBound[0]}"
                  .max="${this._brightnessBound[1]}"
                  @change="${this._brightnessChange}"
                ></lc-vertical-slider>
                <ha-icon
                  class="icon"
                  .icon=${e?"mdi:lightbulb":"mdi:lightbulb-off"}
                  .style="${e?`filter: brightness(${(this._brightness+245)/5}%);`:"color: var(--secondary-text-color)"}"
                ></ha-icon>
              </div>
            `:null}
        ${this._colorTempBound?t`
              <div class="slider-block">
                <lc-vertical-slider
                  class="slider color-temp"
                  .min="${this._colorTempBound[0]}"
                  .max="${this._colorTempBound[1]}"
                  .value="${this._colorTemp}"
                  .disabled="${!e}"
                  @change="${this._colorTempChange}"
                ></lc-vertical-slider>
                <ha-icon class="icon" icon="mdi:temperature-kelvin" .style="${this._rgbColor&&e?this._rgbColor:"color: var(--secondary-text-color)"}"></ha-icon>
              </div>
            `:null}
      </div>
    `}_getLightState(){const e=Object.assign({},this.hass.states);return this.hass&&this.entity&&this.entity in e?e[this.entity]:void 0}_brightnessChange(e){const t=e.detail.value;this.hass.callService("light","turn_on",{brightness:t},{entity_id:this.entity}).catch(console.error)}_colorTempChange(e){var t;const i=Math.floor(Number(null===(t=e.detail)||void 0===t?void 0:t.value)||0);this.hass.callService("light","turn_on",{color_temp_kelvin:i},{entity_id:this.entity}).catch(console.error)}_onoffChange(){const e=this._state?"turn_off":"turn_on";this.hass.callService("light",e,{},{entity_id:this.entity}).catch(console.error)}}P.properties={hass:{attribute:!0},entity:{attribute:!0,type:String},_state:{state:!0},_brightness:{state:!0,type:Number},_brightnessBound:{state:!0},_colorTemp:{state:!0,type:Number},_colorTempBound:{state:!0},_rgbColor:{state:!0,type:String}},P.styles=U,window.customElements.define("lc-area-card-light",P);var j,D=i``;class G extends e{willUpdate(e){super.willUpdate(e)}render(){return t``}}function W(e,t,i,a){a=a||{},i=null==i?{}:i;const s=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return s.detail=i,e.dispatchEvent(s),s}G.properties={hass:{attribute:!0},entity:{attribute:!0,type:String}},G.styles=D,window.customElements.define("lc-area-card-conditioner",G),function(e){e[e.LIGHT=0]="LIGHT",e[e.CONDITIONER=1]="CONDITIONER"}(j||(j={}));class M extends e{constructor(){super(...arguments),this._headerEntities=[],this._remoteEntities=[]}static async getConfigElement(){return await import("./area-config-BeDruqtR.js"),document.createElement("lc-area-config")}static async getStubConfig(e){var t;const i=Object.values(e.areas)[0];return{type:"custom:lc-area-card",name:"",area:null!==(t=null==i?void 0:i.area_id)&&void 0!==t?t:""}}setConfig(e){this._config=e}getCardSize(){return 3}willUpdate(e){super.willUpdate(e),e.has("_config")&&this._updateEntities()}render(){var e;if(!this.hass||!this._config.area)return t``;const i=this._config.name||(null===(e=this.hass.areas[this._config.area])||void 0===e?void 0:e.name);return t`
      <ha-card class="area-card">
        <div class="card-header">
          <div class="name">${i}</div>
          <div class="climate">
            ${this._headerEntities.map((e=>e?t` <lc-area-card-sensor .hass="${this.hass}" .entity="${e}" @click="${()=>this._showMoreInfo(e)}"></lc-area-card-sensor>`:void 0))}
          </div>
        </div>
        <div class="card-content">
          ${this._remoteEntities.map(((e,i)=>e&&i===j.LIGHT?t` <div class="item">
                <lc-area-card-light .hass="${this.hass}" .entity="${e}"></lc-area-card-light>
              </div>`:e&&i===j.CONDITIONER?t` <div class="item">
                <lc-area-card-conditioner .hass="${this.hass}" .entity="${e}"></lc-area-card-conditioner>
              </div>`:""))}
        </div>
        <div class="card-footer"></div>
      </ha-card>
    `}_updateEntities(){if(!this._config.area)return void(this._headerEntities=[]);const e=Object.keys(this.hass.devices).filter((e=>this.hass.devices[e].area_id===this._config.area));this._headerEntities=new Array(M.headerEntitiesDeviceClasses.length),this._headerEntities.fill(void 0),this._remoteEntities=new Array(1),this._remoteEntities.fill(void 0);const t=Object.assign({},this.hass.entities),i=Object.assign({},this.hass.states);for(const a in t){const s=t[a];if(s.area_id&&s.area_id===this._config.area||s.device_id&&e.includes(s.device_id)){const e=i[s.entity_id];if(s.entity_id.startsWith("sensor.")&&e.attributes.device_class&&M.headerEntitiesDeviceClasses.includes(e.attributes.device_class)){const t=M.headerEntitiesDeviceClasses.indexOf(e.attributes.device_class);this._headerEntities[t]=s.entity_id;continue}s.entity_id.startsWith("light.")&&(this._remoteEntities[j.LIGHT]=s.entity_id),s.entity_id.startsWith("climate.")&&(this._remoteEntities[j.CONDITIONER]=s.entity_id)}}}_showMoreInfo(e){W(this,"hass-more-info",{entityId:e})}}M.headerEntitiesDeviceClasses=["temperature","humidity"],M.styles=b,M.properties={hass:{attribute:!1},_config:{state:!0},_climaticSensors:{state:!0}},window.customElements.define("lc-area-card",M),window.customCards=window.customCards||[],window.customCards.push({type:"lc-area-card",name:T("area.name"),preview:!1,description:T("area.description")}),(async()=>{await async function(){var e,t;const{conn:i}=await window.hassConnection;if(!("_srv"in i))return null;const a=null===(e=i._srv)||void 0===e?void 0:e.subscribe;if("function"!=typeof a)return null;await new Promise((e=>a(e)));const s=null===(t=document.body.querySelector("home-assistant"))||void 0===t?void 0:t.__hass;return s&&s.services&&s.services.hassio?Object.keys(s.services.hassio):null}()&&await import("./admin-CrdkKhd6.js")})();export{M as A,e as L,W as a,o as b,i as c,d,u as e,r as f,p as g,t as h,T as t};