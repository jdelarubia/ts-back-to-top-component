/**
 * back-to-top-btn.ts
 * <back-to-top-btn> button component.
 */

document.addEventListener('scroll', (ev: Event) => {
  let showing: boolean = window.scrollY > window.innerHeight / 2 ? true : false
  const ToggleEvent = new CustomEvent('toggleBackToTopButton', {
    detail: { showing: showing },
  })
  document.dispatchEvent(ToggleEvent)
})

const buttonCss = `<style>@import "./css/back-to-top.css";</style>`
const template = document.createElement('template')
template.innerHTML = buttonCss + `<a href="#top" class="back-to-top"></a>`

class BackToTopBtn extends HTMLElement {
  private targetId: string

  constructor(targetId: string = 'top') {
    super()
    this.targetId = `#${targetId}`
  } //.

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true))
    const a = <HTMLAnchorElement>this.querySelector('a')
    a.href = this.targetId

    document.addEventListener('toggleBackToTopButton', (ev: Event) => {
      const show = (ev as CustomEvent).detail.showing
      a.classList.toggle('show', (ev as CustomEvent).detail.showing)
    })
  }
} //. BackToTopBtn

window.customElements.define('back-to-top-btn', BackToTopBtn)

export { BackToTopBtn }
