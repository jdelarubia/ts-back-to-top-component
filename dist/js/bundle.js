(function () {
    'use strict';

    /**
     * back-to-top-btn.ts
     * <back-to-top-btn> button component.
     * define component in main:
     * window.customElements.define('back-to-top-btn', BackToTopBtn)
     */
    document.addEventListener('scroll', (ev) => {
        let showing = window.scrollY > window.innerHeight / 2 ? true : false;
        const ToggleEvent = new CustomEvent('toggleBackToTopButton', {
            detail: { showing: showing },
        });
        document.dispatchEvent(ToggleEvent);
    });
    class BackToTopBtn extends HTMLElement {
        targetId;
        template;
        constructor(targetId = BackToTopBtn._defaultTag()) {
            super();
            this.targetId = `#${targetId}`;
            this.template = document.createElement('template');
            this.template.innerHTML = this._template(targetId);
        } //.
        connectedCallback() {
            this.appendChild(this.template.content.cloneNode(true));
            const a = this.querySelector('a');
            const tag = this.getAttribute('tag');
            a.href = tag ? `#${tag}` : this.targetId ? this.targetId : BackToTopBtn._defaultTag();
            document.addEventListener('toggleBackToTopButton', (ev) => {
                a.classList.toggle('show', ev.detail.showing);
            });
        }
        _template(targetId) {
            const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <path style=";fill-rule:evenodd;stroke-width:.661781;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.452.5.019 4.309a.502.502 44.874 0 0 .502.5h4.262a.5.5 135 0 0 .5-.5V.523a.502.502 45.127 0 0-.5-.502L26.95.002a.496.496 135 0 0-.498.498z" transform="matrix(1.15717 0 0 1.15261 -30.226 .379)"/>
    <path style="fill:none;fill-rule:evenodd;stroke-width:.79375;stroke-linecap:square;stroke-dasharray:none;stroke-opacity:1" d="m27.8 4.515 2.105-2.145 2.09 2.138" transform="translate(-26.458)"/>
    </svg>`;
            const buttonCss = `<style>@import "./css/back-to-top-btn.css";</style>`;
            return buttonCss + `<a href="${targetId}" class="back-to-top">${svg}</a>`;
        }
        static _defaultTag() {
            return 'top';
        }
    } //. BackToTopBtn

    /**
     * fancy-text-block.ts
     * <fancy-text-block> paragraph component.
     * Very simple component that cycles through a list of predefined colors when clicked-on.
     * requires defining component in main:
     * window.customElements.define('fancy-text-block', FancyTextBlock)
     */
    class FancyTextBlock extends HTMLElement {
        currentColorIndex = 0;
        availableColors = ['red', 'blue', 'green', 'yellow', 'purple', 'black'];
        constructor() {
            super();
        }
        connectedCallback() {
            this.addEventListener('click', (event) => {
                const currentColor = this.availableColors[this.currentColorIndex];
                console.log(`text block color is now ${currentColor}`);
                this.style.color = this.availableColors[this.currentColorIndex];
                this.currentColorIndex++;
                if (this.currentColorIndex == this.availableColors.length) {
                    this.currentColorIndex = 0;
                }
            });
        }
    } //. FancyTextBlock

    /**
     * instagram-btn.ts
     * <instagram-btn> component.
     * define component in main:
     * window.customElements.define('instagram-btn', InstagramBtn)
     */
    class InstagramBtn extends HTMLElement {
        targetUrl;
        template;
        constructor(targetUrl) {
            super();
            this.targetUrl = targetUrl;
            this.template = document.createElement('template');
            this.template.innerHTML = this._template(targetUrl);
        }
        connectedCallback() {
            this.appendChild(this.template.content.cloneNode(true));
            const a = this.querySelector('a');
            const tag = this.getAttribute('tag');
            a.href = tag ? `#${tag}` : this.targetUrl ? this.targetUrl : '';
        }
        _template(targetUrl) {
            const svg = `<svg width="26" height="26" viewBox="0 0 6.879 6.879" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(-34.925)">
    <path style=";fill-rule:evenodd;;stroke-width:.661781;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none" d="m26.452.5.019 4.309a.502.502 44.874 0 0 .502.5h4.262a.5.5 135 0 0 .5-.5V.523a.502.502 45.127 0 0-.5-.502L26.95.002a.496.496 135 0 0-.498.498z" transform="matrix(1.15717 0 0 1.15261 4.699 .379)"/>
    <circle style="fill:none;fill-rule:evenodd;;stroke-width:.79375;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="38.365" cy="3.44" r="1.701"/>
    <circle style="fill-rule:evenodd;stroke-width:.113393;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:12.6;stroke-dasharray:none;stroke-opacity:1" cx="40.349" cy="1.455" r=".34"/>
    </g>
    </svg>`;
            const buttonCss = `<style>@import "./css/instagram-btn.css";</style>`;
            return buttonCss + `<a href="${targetUrl}" class="instagram-btn">${svg}</a>`;
        }
    } //. InstagramBtn

    window.customElements.define('back-to-top-btn', BackToTopBtn);
    window.customElements.define('fancy-text-block', FancyTextBlock);
    window.customElements.define('instagram-btn', InstagramBtn);
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

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvYmFjay10by10b3AtYnRuLmpzIiwiLi4vLi4vc3JjL2pzL2ZhbmN5LXRleHQtYmxvY2suanMiLCIuLi8uLi9zcmMvanMvaW5zdGFncmFtLWJ0bi5qcyIsIi4uLy4uL3NyYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogYmFjay10by10b3AtYnRuLnRzXG4gKiA8YmFjay10by10b3AtYnRuPiBidXR0b24gY29tcG9uZW50LlxuICogZGVmaW5lIGNvbXBvbmVudCBpbiBtYWluOlxuICogd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmFjay10by10b3AtYnRuJywgQmFja1RvVG9wQnRuKVxuICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZXYpID0+IHtcbiAgICBsZXQgc2hvd2luZyA9IHdpbmRvdy5zY3JvbGxZID4gd2luZG93LmlubmVySGVpZ2h0IC8gMiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBUb2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlQmFja1RvVG9wQnV0dG9uJywge1xuICAgICAgICBkZXRhaWw6IHsgc2hvd2luZzogc2hvd2luZyB9LFxuICAgIH0pO1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoVG9nZ2xlRXZlbnQpO1xufSk7XG5leHBvcnQgY2xhc3MgQmFja1RvVG9wQnRuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHRhcmdldElkO1xuICAgIHRlbXBsYXRlO1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldElkID0gQmFja1RvVG9wQnRuLl9kZWZhdWx0VGFnKCkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9IGAjJHt0YXJnZXRJZH1gO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZS5pbm5lckhUTUwgPSB0aGlzLl90ZW1wbGF0ZSh0YXJnZXRJZCk7XG4gICAgfSAvLy5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMucXVlcnlTZWxlY3RvcignYScpO1xuICAgICAgICBjb25zdCB0YWcgPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFnJyk7XG4gICAgICAgIGEuaHJlZiA9IHRhZyA/IGAjJHt0YWd9YCA6IHRoaXMudGFyZ2V0SWQgPyB0aGlzLnRhcmdldElkIDogQmFja1RvVG9wQnRuLl9kZWZhdWx0VGFnKCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZUJhY2tUb1RvcEJ1dHRvbicsIChldikgPT4ge1xuICAgICAgICAgICAgYS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93JywgZXYuZGV0YWlsLnNob3dpbmcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3RlbXBsYXRlKHRhcmdldElkKSB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgNi44NzkgNi44NzlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBzdHlsZT1cIjtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6LjY2MTc4MTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEyLjY7c3Ryb2tlLWRhc2hhcnJheTpub25lXCIgZD1cIm0yNi40NTIuNS4wMTkgNC4zMDlhLjUwMi41MDIgNDQuODc0IDAgMCAuNTAyLjVoNC4yNjJhLjUuNSAxMzUgMCAwIC41LS41Vi41MjNhLjUwMi41MDIgNDUuMTI3IDAgMC0uNS0uNTAyTDI2Ljk1LjAwMmEuNDk2LjQ5NiAxMzUgMCAwLS40OTguNDk4elwiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLjE1NzE3IDAgMCAxLjE1MjYxIC0zMC4yMjYgLjM3OSlcIi8+XHJcbiAgICA8cGF0aCBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6Ljc5Mzc1O3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MVwiIGQ9XCJtMjcuOCA0LjUxNSAyLjEwNS0yLjE0NSAyLjA5IDIuMTM4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNi40NTgpXCIvPlxyXG4gICAgPC9zdmc+YDtcbiAgICAgICAgY29uc3QgYnV0dG9uQ3NzID0gYDxzdHlsZT5AaW1wb3J0IFwiLi9jc3MvYmFjay10by10b3AtYnRuLmNzc1wiOzwvc3R5bGU+YDtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbkNzcyArIGA8YSBocmVmPVwiJHt0YXJnZXRJZH1cIiBjbGFzcz1cImJhY2stdG8tdG9wXCI+JHtzdmd9PC9hPmA7XG4gICAgfVxuICAgIHN0YXRpYyBfZGVmYXVsdFRhZygpIHtcbiAgICAgICAgcmV0dXJuICd0b3AnO1xuICAgIH1cbn0gLy8uIEJhY2tUb1RvcEJ0blxuIiwiLyoqXG4gKiBmYW5jeS10ZXh0LWJsb2NrLnRzXG4gKiA8ZmFuY3ktdGV4dC1ibG9jaz4gcGFyYWdyYXBoIGNvbXBvbmVudC5cbiAqIFZlcnkgc2ltcGxlIGNvbXBvbmVudCB0aGF0IGN5Y2xlcyB0aHJvdWdoIGEgbGlzdCBvZiBwcmVkZWZpbmVkIGNvbG9ycyB3aGVuIGNsaWNrZWQtb24uXG4gKiByZXF1aXJlcyBkZWZpbmluZyBjb21wb25lbnQgaW4gbWFpbjpcbiAqIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2ZhbmN5LXRleHQtYmxvY2snLCBGYW5jeVRleHRCbG9jaylcbiAqL1xuZXhwb3J0IGNsYXNzIEZhbmN5VGV4dEJsb2NrIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGN1cnJlbnRDb2xvckluZGV4ID0gMDtcbiAgICBhdmFpbGFibGVDb2xvcnMgPSBbJ3JlZCcsICdibHVlJywgJ2dyZWVuJywgJ3llbGxvdycsICdwdXJwbGUnLCAnYmxhY2snXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2xvciA9IHRoaXMuYXZhaWxhYmxlQ29sb3JzW3RoaXMuY3VycmVudENvbG9ySW5kZXhdO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHRleHQgYmxvY2sgY29sb3IgaXMgbm93ICR7Y3VycmVudENvbG9yfWApO1xuICAgICAgICAgICAgdGhpcy5zdHlsZS5jb2xvciA9IHRoaXMuYXZhaWxhYmxlQ29sb3JzW3RoaXMuY3VycmVudENvbG9ySW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3JJbmRleCsrO1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudENvbG9ySW5kZXggPT0gdGhpcy5hdmFpbGFibGVDb2xvcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29sb3JJbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0gLy8uIEZhbmN5VGV4dEJsb2NrXG4iLCIvKipcbiAqIGluc3RhZ3JhbS1idG4udHNcbiAqIDxpbnN0YWdyYW0tYnRuPiBjb21wb25lbnQuXG4gKiBkZWZpbmUgY29tcG9uZW50IGluIG1haW46XG4gKiB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbnN0YWdyYW0tYnRuJywgSW5zdGFncmFtQnRuKVxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtQnRuIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHRhcmdldFVybDtcbiAgICB0ZW1wbGF0ZTtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXRVcmwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50YXJnZXRVcmwgPSB0YXJnZXRVcmw7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgICAgICB0aGlzLnRlbXBsYXRlLmlubmVySFRNTCA9IHRoaXMuX3RlbXBsYXRlKHRhcmdldFVybCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMudGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBjb25zdCBhID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCd0YWcnKTtcbiAgICAgICAgYS5ocmVmID0gdGFnID8gYCMke3RhZ31gIDogdGhpcy50YXJnZXRVcmwgPyB0aGlzLnRhcmdldFVybCA6ICcnO1xuICAgIH1cbiAgICBfdGVtcGxhdGUodGFyZ2V0VXJsKSB7XG4gICAgICAgIGNvbnN0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiMjZcIiBoZWlnaHQ9XCIyNlwiIHZpZXdCb3g9XCIwIDAgNi44NzkgNi44NzlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM0LjkyNSlcIj5cclxuICAgIDxwYXRoIHN0eWxlPVwiO2ZpbGwtcnVsZTpldmVub2RkOztzdHJva2Utd2lkdGg6LjY2MTc4MTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEyLjY7c3Ryb2tlLWRhc2hhcnJheTpub25lXCIgZD1cIm0yNi40NTIuNS4wMTkgNC4zMDlhLjUwMi41MDIgNDQuODc0IDAgMCAuNTAyLjVoNC4yNjJhLjUuNSAxMzUgMCAwIC41LS41Vi41MjNhLjUwMi41MDIgNDUuMTI3IDAgMC0uNS0uNTAyTDI2Ljk1LjAwMmEuNDk2LjQ5NiAxMzUgMCAwLS40OTguNDk4elwiIHRyYW5zZm9ybT1cIm1hdHJpeCgxLjE1NzE3IDAgMCAxLjE1MjYxIDQuNjk5IC4zNzkpXCIvPlxyXG4gICAgPGNpcmNsZSBzdHlsZT1cImZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDs7c3Ryb2tlLXdpZHRoOi43OTM3NTtzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEyLjY7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjFcIiBjeD1cIjM4LjM2NVwiIGN5PVwiMy40NFwiIHI9XCIxLjcwMVwiLz5cclxuICAgIDxjaXJjbGUgc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6LjExMzM5MztzdHJva2UtbGluZWNhcDpzcXVhcmU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEyLjY7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjFcIiBjeD1cIjQwLjM0OVwiIGN5PVwiMS40NTVcIiByPVwiLjM0XCIvPlxyXG4gICAgPC9nPlxyXG4gICAgPC9zdmc+YDtcbiAgICAgICAgY29uc3QgYnV0dG9uQ3NzID0gYDxzdHlsZT5AaW1wb3J0IFwiLi9jc3MvaW5zdGFncmFtLWJ0bi5jc3NcIjs8L3N0eWxlPmA7XG4gICAgICAgIHJldHVybiBidXR0b25Dc3MgKyBgPGEgaHJlZj1cIiR7dGFyZ2V0VXJsfVwiIGNsYXNzPVwiaW5zdGFncmFtLWJ0blwiPiR7c3ZnfTwvYT5gO1xuICAgIH1cbn0gLy8uIEluc3RhZ3JhbUJ0blxuIiwiaW1wb3J0IHsgQmFja1RvVG9wQnRuIH0gZnJvbSAnLi9iYWNrLXRvLXRvcC1idG4nO1xuaW1wb3J0IHsgRmFuY3lUZXh0QmxvY2sgfSBmcm9tICcuL2ZhbmN5LXRleHQtYmxvY2snO1xuaW1wb3J0IHsgSW5zdGFncmFtQnRuIH0gZnJvbSAnLi9pbnN0YWdyYW0tYnRuJztcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2JhY2stdG8tdG9wLWJ0bicsIEJhY2tUb1RvcEJ0bik7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdmYW5jeS10ZXh0LWJsb2NrJywgRmFuY3lUZXh0QmxvY2spO1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaW5zdGFncmFtLWJ0bicsIEluc3RhZ3JhbUJ0bik7XG4vLyBFeGFtcGxlIG9mIGNyZWF0aW5nIGZhbmN5IHRleHQgcHJvZ3JhbW1hdGljYWxseVxuLy8gbmV3IEZhbmN5VGV4dEJsb2NrKClcbi8vIEV4YW1wbGUgb2YgY3JlYXRpbmcgaW5zdGFncmFtIGJ1dHRvbiBwcm9ncmFtbWF0aWNhbGx5XG4vLyBuZXcgSW5zdGFncmFtQnRuKCdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tJylcbi8vIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jylcbi8vIGJvZHk/LmFwcGVuZENoaWxkKGJhY2tUb1RvcEJ0bilcbi8vIEV4YW1wbGUgb2YgY3JlYXRpbmcgYmFjay10by10b3AgYnV0dG9uIHByb2dyYW1tYXRpY2FsbHlcbi8vIGNvbnN0IGJhY2tUb1RvcEJ0biA9IG5ldyBCYWNrVG9Ub3BCdG4oJ3RvcCcpXG4vLyBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4vLyBib2R5Py5hcHBlbmRDaGlsZChiYWNrVG9Ub3BCdG4pXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsS0FBSztJQUM1QyxJQUFJLElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN6RSxJQUFJLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLHVCQUF1QixFQUFFO0lBQ2pFLFFBQVEsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtJQUNwQyxLQUFLLENBQUMsQ0FBQztJQUNQLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNJLE1BQU0sWUFBWSxTQUFTLFdBQVcsQ0FBQztJQUM5QyxJQUFJLFFBQVEsQ0FBQztJQUNiLElBQUksUUFBUSxDQUFDO0lBQ2IsSUFBSSxXQUFXLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRTtJQUN2RCxRQUFRLEtBQUssRUFBRSxDQUFDO0lBQ2hCLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNELFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxLQUFLO0lBQ0wsSUFBSSxpQkFBaUIsR0FBRztJQUN4QixRQUFRLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsUUFBUSxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLFFBQVEsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QyxRQUFRLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM5RixRQUFRLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQUUsS0FBSztJQUNuRSxZQUFZLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFELFNBQVMsQ0FBQyxDQUFDO0lBQ1gsS0FBSztJQUNMLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtJQUN4QixRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDckI7QUFDQTtBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ1osUUFBUSxNQUFNLFNBQVMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7SUFDaEYsUUFBUSxPQUFPLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xGLEtBQUs7SUFDTCxJQUFJLE9BQU8sV0FBVyxHQUFHO0lBQ3pCLFFBQVEsT0FBTyxLQUFLLENBQUM7SUFDckIsS0FBSztJQUNMLENBQUM7O0lDMUNEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ08sTUFBTSxjQUFjLFNBQVMsV0FBVyxDQUFDO0lBQ2hELElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksZUFBZSxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RSxJQUFJLFdBQVcsR0FBRztJQUNsQixRQUFRLEtBQUssRUFBRSxDQUFDO0lBQ2hCLEtBQUs7SUFDTCxJQUFJLGlCQUFpQixHQUFHO0lBQ3hCLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSztJQUNsRCxZQUFZLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDOUUsWUFBWSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsd0JBQXdCLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLFlBQVksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1RSxZQUFZLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3JDLFlBQVksSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7SUFDdkUsZ0JBQWdCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFDM0MsYUFBYTtJQUNiLFNBQVMsQ0FBQyxDQUFDO0lBQ1gsS0FBSztJQUNMLENBQUM7O0lDeEJEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNPLE1BQU0sWUFBWSxTQUFTLFdBQVcsQ0FBQztJQUM5QyxJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUksUUFBUSxDQUFDO0lBQ2IsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO0lBQzNCLFFBQVEsS0FBSyxFQUFFLENBQUM7SUFDaEIsUUFBUSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUNuQyxRQUFRLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUQsS0FBSztJQUNMLElBQUksaUJBQWlCLEdBQUc7SUFDeEIsUUFBUSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLFFBQVEsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxRQUFRLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsUUFBUSxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEUsS0FBSztJQUNMLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtJQUN6QixRQUFRLE1BQU0sR0FBRyxHQUFHLENBQUM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsQ0FBQyxDQUFDO0lBQ1osUUFBUSxNQUFNLFNBQVMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFDOUUsUUFBUSxPQUFPLFNBQVMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JGLEtBQUs7SUFDTCxDQUFDOztJQzdCRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM5RCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNqRSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUQ7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Ozs7OzsifQ==
