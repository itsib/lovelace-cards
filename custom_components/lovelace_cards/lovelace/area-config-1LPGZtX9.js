import{c as e,L as a,h as s,t,a as i}from"./lovelace-cards-UvauKniw.js";var o=e``;const r=[{name:"name",type:"string",required:!1},{name:"area",required:!0,selector:{area:{}}}];class l extends a{setConfig(e){this.config=e}shouldUpdate(e){return!this.config||!this.hass||e.has("config")}render(){return this.hass&&this.config?(console.log(this.hass.areas),s`
      <slot></slot>
      <div class="area-config">
        <ha-form
          .hass="${this.hass}"
          .data="${this.config}"
          .schema="${r}"
          .computeLabel="${this._computeLabel}"
          .computeHelper="${this._computeHelper}"
          .localizeValue="${this._localizeValue}"
          @value-changed="${this._valueChanged}"
        >
        </ha-form>
      </div>
    `):s``}_computeLabel(e){return t(`config.${e.name}.label`)}_computeHelper(e){return t(`area.config.${e.name}.helper`)}_localizeValue(e){return t(e)}_valueChanged(e){i(this,"config-changed",{config:e.detail.value})}}l.styles=o,l.properties={hass:{},config:{attribute:!1}},customElements.define("lc-area-config",l);export{l as AreaConfig};
