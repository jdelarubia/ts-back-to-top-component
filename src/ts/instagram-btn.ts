/**
 * instagram-btn.ts
 * <instagram-btn> component.
 * define component in main:
 * window.customElements.define('instagram-btn', InstagramBtn)
 */

export class InstagramBtn extends HTMLElement {
  private targetUrl: string
  private template

  constructor(targetUrl: string) {
    super()
    this.targetUrl = targetUrl
    this.template = document.createElement('template')
    this.template.innerHTML = this._template(targetUrl)
  }

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    const tag = this.getAttribute('tag')
    a.href = tag ? `#${tag}` : this.targetUrl ? this.targetUrl : ''
  }

  _template(targetUrl: string) {
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-34.925)">
    <path style=";fill-rule:evenodd;;stroke-width:.661781;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.452.5.019 4.309a.502.502 44.874 0 0 .502.5h4.262a.5.5 135 0 0 .5-.5V.523a.502.502 45.127 0 0-.5-.502L26.95.002a.496.496 135 0 0-.498.498z" transform="matrix(1.15717 0 0 1.15261 4.699 .379)"/>
    <circle style="fill:none;fill-rule:evenodd;;stroke-width:.79375;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="38.365" cy="3.44" r="1.701"/>
    <circle style="fill-rule:evenodd;stroke-width:.113393;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="40.349" cy="1.455" r=".34"/>
    </g>
    </svg>`
    const buttonCss = `<style>@import "./css/instagram-btn.css";</style>`
    return buttonCss + `<a href="${targetUrl}" class="instagram-btn">${svg}</a>`
  }
} //. InstagramBtn
