(function () {
    'use strict';

    /**
     * BackToTop.ts
     * BackToTop button component.
     */
    const buttonCss = `<style>@import "./css/backtotop.css";</style>`;
    const template = document.createElement("template");
    template.innerHTML = buttonCss + `<a href="#" class="back-to-top"></a>`;
    class BackToTop extends HTMLElement {
        shadow;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
        } //.
        connectedCallback() {
            this.shadow.appendChild(template.content.cloneNode(true));
        }
    } //. BackToTop
    window.customElements.define("back-to-top", BackToTop);

    const body = document.querySelector("body");
    body?.appendChild(new BackToTop());

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvYmFja1RvVG9wLmpzIiwiLi4vLi4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhY2tUb1RvcC50c1xyXG4gKiBCYWNrVG9Ub3AgYnV0dG9uIGNvbXBvbmVudC5cclxuICovXHJcbmNvbnN0IGJ1dHRvbkNzcyA9IGA8c3R5bGU+QGltcG9ydCBcIi4vY3NzL2JhY2t0b3RvcC5jc3NcIjs8L3N0eWxlPmA7XHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBidXR0b25Dc3MgKyBgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJhY2stdG8tdG9wXCI+PC9hPmA7XHJcbmNsYXNzIEJhY2tUb1RvcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcclxuICAgIHNoYWRvdztcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6IFwib3BlblwiIH0pO1xyXG4gICAgfSAvLy5cclxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgICAgIHRoaXMuc2hhZG93LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcclxuICAgIH1cclxufSAvLy4gQmFja1RvVG9wXHJcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJiYWNrLXRvLXRvcFwiLCBCYWNrVG9Ub3ApO1xyXG5leHBvcnQgeyBCYWNrVG9Ub3AgfTtcclxuIiwiaW1wb3J0IHsgQmFja1RvVG9wIH0gZnJvbSBcIi4vYmFja1RvVG9wXCI7XHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuYm9keT8uYXBwZW5kQ2hpbGQobmV3IEJhY2tUb1RvcCgpKTtcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0EsTUFBTSxTQUFTLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEQsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sU0FBUyxTQUFTLFdBQVcsQ0FBQztJQUNwQyxJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksV0FBVyxHQUFHO0lBQ2xCLFFBQVEsS0FBSyxFQUFFLENBQUM7SUFDaEIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMxRCxLQUFLO0lBQ0wsSUFBSSxpQkFBaUIsR0FBRztJQUN4QixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEUsS0FBSztJQUNMLENBQUM7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDOztJQ2hCdEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksU0FBUyxFQUFFLENBQUM7Ozs7OzsifQ==
