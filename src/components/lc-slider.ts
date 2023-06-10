import { html, LitElement, PropertyValues, TemplateResult } from 'lit';
import styles from './lc-slider.scss';

declare global {
  interface HTMLElementTagNameMap {
    'lc-slider': LcSlider;
  }
}

export class LcSlider extends LitElement {
  /**
   * Slider input value
   */
  value = 50;

  min = 0;

  max = 100;

  step = 1;

  disabled = false;

  orient?: 'vertical';

  private _input!: HTMLInputElement;

  static properties = {
    value: { attribute: true, type: Number },
    min: { attribute: true, type: Number },
    max: { attribute: true, type: Number },
    step: { attribute: true, type: Number },
    disabled: { attribute: 'disabled', reflect: true, type: Boolean },
    orient: { attribute: 'orient', reflect: true, type: String },
  };

  static styles = styles;

  connectedCallback() {
    super.connectedCallback();

    if (!this._input) {
      this._input = document.createElement('input');
      this._input.type = 'range';

      this.shadowRoot!.append(this._input);
    }

    this._input.addEventListener('change', this._handleChange);
    this._input.addEventListener('input', this._handleInput);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this._input.removeEventListener('change', this._handleChange);
    this._input.removeEventListener('input', this._handleInput);
  }

  shouldUpdate(changed: PropertyValues): boolean {
    if (changed.has('min') || changed.has('max')) {
      if (this.min >= this.max) {
        console.warn(`wrong MIN MAX values`);
      } else {
        const value = Number(this._input.value);
        if (value < this.min) {
          this._input.value = this.min.toString();
        } else if (value > this.max) {
          this._input.value = this.max.toString();
        }

        this._input.min = this.min.toString();
        this._input.max = this.max.toString();

        this._input.style.setProperty('--min', this.min.toString());
        this._input.style.setProperty('--max', this.max.toString());
      }
    }

    if (changed.has('step')) {
      this._input.step = this.step.toString();
    }

    if (changed.has('value')) {
      this._input.value = this.value.toString();
      this._input.style.setProperty('--value', this.value.toString());
    }

    if (changed.has('orient')) {
      if (this.orient === 'vertical') {
        this.style.width = 'var(--ls-slider-longitude)';
        this.style.height = 'var(--ls-slider-latitude)';

        this._input.style.setProperty('--ls-slider-transform', 'rotate(270deg) translate(calc(-100% + 10px), 12px)');
      } else {
        this.style.width = 'var(--ls-slider-latitude)';
        this.style.height = 'var(--ls-slider-longitude)';

        this._input.style.setProperty('--ls-slider-transform', 'none');
      }
    }

    return false;
  }

  private _handleChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Number(input.value);
    const shadowRoot = input.parentNode as ShadowRoot | null;
    if (!shadowRoot || !shadowRoot.host) {
      return;
    }

    const options = {
      detail: { value },
      bubbles: true,
      composed: true,
    };
    shadowRoot.host.dispatchEvent(new CustomEvent('change', options));
  }

  private _handleInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.style.setProperty('--value', input.value);
  }
}

(window as any).customElements.define('lc-slider', LcSlider);
