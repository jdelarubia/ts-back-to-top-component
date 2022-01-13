/**
 * BackToTop.ts
 * BackToTop button component.
 */

const buttonCss = `<style>@import "./css/backtotop.css";</style>`;

const template = document.createElement("template");
template.innerHTML = buttonCss + `<a href="#" class="back-to-top"></a>`;

class BackToTop extends HTMLElement {
  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  } //.

  connectedCallback() {
    this.shadow.appendChild(template.content.cloneNode(true));
  }
} //. BackToTop

window.customElements.define("back-to-top", BackToTop);

export { BackToTop };
