/**
 * back-to-top-btn.ts
 * <back-to-top-btn> button component.
 * It reads the following parameters or chooses some defaults:
 * - position ("top", "bottom" & "left", "right")
 * - tag (destination tag)
 * - color (primary color)
 * - background (icon background color)
 * - opacity (float percent)
 *
 * define component in main:
 * window.customElements.define('back-to-top-btn', BackToTopBtn)
 */

document.addEventListener('scroll', (ev: Event) => {
  let showing: boolean = window.scrollY > window.innerHeight / 2 ? true : false
  const ToggleEvent = new CustomEvent('toggleBackToTopButton', {
    detail: { showing: showing },
  })
  document.dispatchEvent(ToggleEvent)
})

export class BackToTopBtn extends HTMLElement {
  private targetId: string
  private template
  // defaults
  static TAG = 'top'
  static COLOR = '#9c6d01'
  static BACKGROUND = '#fff'
  static OPACITY = 0.8
  static STROKEWIDTH = 0.7

  constructor(targetId: string = BackToTopBtn.TAG) {
    super()
    this.targetId = `#${targetId}`
    this.template = document.createElement('template')
    this.template.innerHTML = this._template(targetId)
  } //.

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    const tag = this.getAttribute('tag')
    a.href = tag ? `#${tag}` : this.targetId ? this.targetId : BackToTopBtn.TAG

    document.addEventListener('toggleBackToTopButton', (ev: Event) => {
      a.classList.toggle('show', (ev as CustomEvent).detail.showing)
    })
  }

  _getElementPosition(): string {
    /**
     * Return the element position as a string, or its defaults, "bottom right".
     * Positioning is resolved via CSS.
     */

    const positionCss: Array<string> = []
    const position = this.getAttribute('position')?.split(' ')

    position?.forEach((style) => {
      positionCss.push(style)
    })
    if (!positionCss.includes('top') && !positionCss.includes('bottom')) {
      positionCss.push('bottom')
    }
    if (!positionCss.includes('right') && !positionCss.includes('left')) {
      positionCss.push('right')
    }

    return positionCss.join(' ')
  }

  _getComponentColors(): Array<string> {
    /**
     * Return an array of color & background-color or its default values.
     */

    const color = this.getAttribute('color')
    const background = this.getAttribute('background')
    return [color ? color : BackToTopBtn.COLOR, background ? background : BackToTopBtn.BACKGROUND]
  }
  _getComponentOpacity(): string {
    /**
     * Return the component opacity or its default value.
     */

    const opacity = this.getAttribute('opacity')
    return opacity ? opacity : BackToTopBtn.OPACITY.toString()
  }

  _template(targetId: string) {
    /**
     * Return the web component to be rendered.
     */

    const strokeWidth = BackToTopBtn.STROKEWIDTH
    const positionCss = this._getElementPosition()
    const opacity = this._getComponentOpacity()
    const [color, background] = this._getComponentColors()
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <path 
    d="M6.35.259c.147 0 .265.118.265.264v5.821a.264.264 0 0 1-.265.265H.53a.264.264 0 0 1-.265-.265V.524c0-.147.118-.265.264-.265z" 
    style="stroke:${color};fill:${background};fill-opacity:${opacity};fill-rule:evenodd;stroke-width:${strokeWidth};stroke-linecap:round"/> 
    <path 
    style="stroke:${color};fill:none;fill-rule:evenodd;fill-stroke-width:${strokeWidth};stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1" 
    d="m27.8 4.515 2.105-2.145 2.09 2.138" transform="translate(-26.458)"/>
    </svg>`
    const buttonCss = `<style>@import "./css/back-to-top-btn.css";</style>`
    const html = `<a href="${targetId}" class="back-to-top-btn ${positionCss}">${svg}</a>`

    return buttonCss + html
  }
} //. BackToTopBtn
