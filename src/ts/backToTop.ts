/**
 * BackToTop.ts
 * BackToTop button component.
 */

document.addEventListener("scroll", (ev: Event) => {
  let showing: boolean = window.scrollY > window.innerHeight ? true : false;
  const ToggleEvent = new CustomEvent("toggleButton", {
    detail: { showing: showing },
  });
  document.dispatchEvent(ToggleEvent);
});

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

    document.addEventListener("toggleButton", (ev: Event) => {
      a.classList.toggle("show", (ev as CustomEvent).detail.showing);
    });
  }
} //. BackToTop

window.customElements.define("back-to-top", BackToTop);

export { BackToTop };
