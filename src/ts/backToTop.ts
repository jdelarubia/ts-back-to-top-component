/**
 * BackToTop.ts
 * BackToTop button component.
 */

const buttonCss = `<style>@import "./css/backtotop.css";</style>`;

const template = document.createElement("template");
template.innerHTML = buttonCss + `<a href="" class="back-to-top"></a>`;

class BackToTop extends HTMLElement {
  private shadow: ShadowRoot;
  private targetId: string;

  constructor(targetId: string = "top") {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.targetId = `#${targetId}`;
  } //.

  connectedCallback() {
    this.shadow.appendChild(template.content.cloneNode(true));
    const a = <HTMLAnchorElement>this.shadow.querySelector("a");
    a.href = this.targetId;
  }
} //. BackToTop

window.customElements.define("back-to-top", BackToTop);

export { BackToTop };
