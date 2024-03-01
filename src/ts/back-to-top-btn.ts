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

  constructor(targetId: string = BackToTopBtn._defaultTag()) {
    super()
    this.targetId = `#${targetId}`
    this.template = document.createElement('template')
    this.template.innerHTML = this._template(targetId)
  } //.

  connectedCallback() {
    this.appendChild(this.template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    const tag = this.getAttribute('tag')
    a.href = tag ? `#${tag}` : this.targetId ? this.targetId : BackToTopBtn._defaultTag()

    document.addEventListener('toggleBackToTopButton', (ev: Event) => {
      a.classList.toggle('show', (ev as CustomEvent).detail.showing)
    })
  }
  _getElementPosition():string {
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
    const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <path style=";fill-rule:evenodd;stroke-width:.661781;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.452.5.019 4.309a.502.502 44.874 0 0 .502.5h4.262a.5.5 135 0 0 .5-.5V.523a.502.502 45.127 0 0-.5-.502L26.95.002a.496.496 135 0 0-.498.498z" transform="matrix(1.15717 0 0 1.15261 -30.226 .379)"/>
    <path style="fill:none;fill-rule:evenodd;stroke-width:.79375;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1" d="m27.8 4.515 2.105-2.145 2.09 2.138" transform="translate(-26.458)"/>
    </svg>`
    const buttonCss = `<style>@import "./css/back-to-top-btn.css";</style>`
    return buttonCss + `<a href="${targetId}" class="back-to-top">${svg}</a>`
  }

  static _defaultTag() {
    return 'top'
  }
} //. BackToTopBtn
