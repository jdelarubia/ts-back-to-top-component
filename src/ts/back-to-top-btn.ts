/**
 * back-to-top-btn.ts
 * <back-to-top-btn> button component.
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
