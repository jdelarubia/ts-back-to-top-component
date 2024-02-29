/**
 * instagram-btn.ts
 * <instagram-btn> web component.
 * It reads the following parameters or chooses some defaults:
 * - position ("top", "bottom" & "left", "right")
 * 
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
    const tag = this.getAttribute('tag')
    const a = <HTMLAnchorElement>this.querySelector('a')
    a.href = tag ? tag : this.targetUrl ? this.targetUrl : '#'
  }

  _getElementPosition(): string {
    /**
     * Return the element position as a string, or its defaults, "top right".
     * Positioning is resolved via CSS.
     */

    const positionCss: Array<string> = []
    const position = this.getAttribute('position')?.split(' ')

    position?.forEach((style) => {
      positionCss.push(style)
    })
    if (!positionCss.includes('top') && !positionCss.includes('bottom')) {
      positionCss.push('top')
    }
    if (!positionCss.includes('right') && !positionCss.includes('left')) {
      positionCss.push('right')
    }

    return positionCss.join(' ')
  }

  _template(targetUrl: string) {
    /**
     * Return the web component to be rendered.
     */
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-34.925)">
    <path style=";fill-rule:evenodd;;stroke-width:.661781;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.452.5.019 4.309a.502.502 44.874 0 0 .502.5h4.262a.5.5 135 0 0 .5-.5V.523a.502.502 45.127 0 0-.5-.502L26.95.002a.496.496 135 0 0-.498.498z" transform="matrix(1.15717 0 0 1.15261 4.699 .379)"/>
    <circle style="fill:none;fill-rule:evenodd;;stroke-width:.79375;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="38.365" cy="3.44" r="1.701"/>
    <circle style="fill-rule:evenodd;stroke-width:.113393;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="40.349" cy="1.455" r=".34"/>
    </g>
    </svg>`
    const positionCss = this._getElementPosition()
    const buttonCss = `<style>@import "./css/instagram-btn.css";</style>`
    const html = `<a href="${targetUrl}" class="instagram-btn ${positionCss}" target="_blank">${svg}</a>`

    return buttonCss + html
  }
} //. InstagramBtn
