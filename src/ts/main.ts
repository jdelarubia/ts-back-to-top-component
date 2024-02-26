import { BackToTopBtn } from './back-to-top-btn'
import { FancyTextBlock } from './fancy-text-block'
import { InstagramBtn } from './instagram-btn'

window.customElements.define('back-to-top-btn', BackToTopBtn)
window.customElements.define('fancy-text-block', FancyTextBlock)
window.customElements.define('instagram-btn', InstagramBtn)

// Example of creating fancy text programmatically
// new FancyTextBlock()

// Example of creating instagram button programmatically
// new InstagramBtn('https://www.instagram.com')
// const body = document.querySelector('body')
// body?.appendChild(backToTopBtn)

// Example of creating back-to-top button programmatically
// const backToTopBtn = new BackToTopBtn('top')
// const body = document.querySelector('body')
// body?.appendChild(backToTopBtn)
