/**
 * instagram-btn.ts
 * <instagram-btn> web component.
 * It reads the following parameters or chooses some defaults:
 * - position ("top", "bottom" & "left", "right")
 * - color (primary color)
 * - background (icon background color)
 *
 * define component in main:
 * window.customElements.define('instagram-btn', InstagramBtn)
 */

export class InstagramBtn extends HTMLElement {
  private targetUrl: string
  private template
  // defaults
  static TAG = 'top'
  static COLOR = '#9c6d01'
  static BACKGROUND = '#fff'
  static OPACITY = 0.8

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
    a.href = tag ? tag : this.targetUrl ? this.targetUrl : InstagramBtn.TAG
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

  _getElementColors(): Array<string> {
    const color = this.getAttribute('color')
    const background = this.getAttribute('background')
    return [color ? color : InstagramBtn.COLOR, background ? background : InstagramBtn.BACKGROUND]
  }

  _template(targetUrl: string) {
    /**
     * Return the web component to be rendered.
     */

    const positionCss = this._getElementPosition()
    const [color, background] = this._getElementColors()
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.35.259c.147 0 .265.118.265.264v5.821a.264.264 0 0 1-.265.265H.53a.264.264 0 0 1-.265-.265V.524c0-.147.118-.265.264-.265z" 
    style="stroke:${color};fill:${background};fill-rule:evenodd;stroke-width:.8;stroke-linecap:round"/> 
    <g transform="translate(-34.925)">
    <circle style="stroke:${color};fill:${background};fill-rule:evenodd;stroke-width:.8;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="38.365" cy="3.44" r="1.701"/>
    <circle style="stroke:${color};fill:${color};fill-rule:evenodd;stroke-width:.113393;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="40.349" cy="1.455" r=".34"/>
    </g>
    </svg>`
    const buttonCss = `<style>@import "./css/instagram-btn.css";</style>`
    const html = `<a href="${targetUrl}" class="instagram-btn ${positionCss}" target="_blank">${svg}</a>`

    return buttonCss + html
  }
} //. InstagramBtn
