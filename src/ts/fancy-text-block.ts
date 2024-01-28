/**
 * fancy-text-block.ts
 * <fancy-text-block> paragraph component.
 */

class FancyTextBlock extends HTMLElement {
  // private shadow: ShadowRoot
  private currentColorIndex = 0
  private availableColors = ['red', 'blue', 'green', 'yellow', 'black']

  constructor() {
    super()
  }

  connectedCallback() {
    this.addEventListener('click', (event: Event) => {
      const currentColor = this.availableColors[this.currentColorIndex]

      console.log(`text block color is now ${currentColor}`)
      this.style.color = this.availableColors[this.currentColorIndex]
      this.currentColorIndex++
      if (this.currentColorIndex == this.availableColors.length) {
        this.currentColorIndex = 0
      }
    })
  }
} //. FancyTextBlock

window.customElements.define('fancy-text-block', FancyTextBlock)

export { FancyTextBlock }
