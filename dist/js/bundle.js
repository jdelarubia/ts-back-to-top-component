(function () {
    'use strict';

    /**
     * BackToTop.ts
     * BackToTop button component.
     */
    const buttonCss = `<style>@import "./css/backtotop.css";</style>`;
    const template = document.createElement("template");
    template.innerHTML = buttonCss + `<a href="" class="back-to-top"></a>`;
    class BackToTop extends HTMLElement {
        shadow;
        topId;
        constructor(topId = "top") {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
            this.topId = `#${topId}`;
        } //.
        connectedCallback() {
            this.shadow.appendChild(template.content.cloneNode(true));
            const a = this.shadow.querySelector("a");
            a.href = this.topId;
        }
    } //. BackToTop
    window.customElements.define("back-to-top", BackToTop);

    const body = document.querySelector("body");
    body?.appendChild(new BackToTop());
    // const p = document.createElement("p");
    // p.innerHTML = "texto de prueba";
    // body?.appendChild(p);
    // const observer = new IntersectionObserver((mutations) => {
    //   mutations.forEach((mutation) => {
    //     console.log(mutation);
    //   });
    // });
    // observer.observe(p);

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9zcmMvanMvYmFja1RvVG9wLmpzIiwiLi4vLi4vc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEJhY2tUb1RvcC50c1xyXG4gKiBCYWNrVG9Ub3AgYnV0dG9uIGNvbXBvbmVudC5cclxuICovXHJcbmNvbnN0IGJ1dHRvbkNzcyA9IGA8c3R5bGU+QGltcG9ydCBcIi4vY3NzL2JhY2t0b3RvcC5jc3NcIjs8L3N0eWxlPmA7XHJcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xyXG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBidXR0b25Dc3MgKyBgPGEgaHJlZj1cIlwiIGNsYXNzPVwiYmFjay10by10b3BcIj48L2E+YDtcclxuY2xhc3MgQmFja1RvVG9wIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xyXG4gICAgc2hhZG93O1xyXG4gICAgdG9wSWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcih0b3BJZCA9IFwidG9wXCIpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2hhZG93ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KTtcclxuICAgICAgICB0aGlzLnRvcElkID0gYCMke3RvcElkfWA7XHJcbiAgICB9IC8vLlxyXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgdGhpcy5zaGFkb3cuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xyXG4gICAgICAgIGNvbnN0IGEgPSB0aGlzLnNoYWRvdy5xdWVyeVNlbGVjdG9yKFwiYVwiKTtcclxuICAgICAgICBhLmhyZWYgPSB0aGlzLnRvcElkO1xyXG4gICAgfVxyXG59IC8vLiBCYWNrVG9Ub3Bcclxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJhY2stdG8tdG9wXCIsIEJhY2tUb1RvcCk7XHJcbmV4cG9ydCB7IEJhY2tUb1RvcCB9O1xyXG4iLCJpbXBvcnQgeyBCYWNrVG9Ub3AgfSBmcm9tIFwiLi9iYWNrVG9Ub3BcIjtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5ib2R5Py5hcHBlbmRDaGlsZChuZXcgQmFja1RvVG9wKCkpO1xyXG4vLyBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbi8vIHAuaW5uZXJIVE1MID0gXCJ0ZXh0byBkZSBwcnVlYmFcIjtcclxuLy8gYm9keT8uYXBwZW5kQ2hpbGQocCk7XHJcbi8vIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcclxuLy8gICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKG11dGF0aW9uKTtcclxuLy8gICB9KTtcclxuLy8gfSk7XHJcbi8vIG9ic2VydmVyLm9ic2VydmUocCk7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLE1BQU0sU0FBUyxHQUFHLENBQUMsNkNBQTZDLENBQUMsQ0FBQztJQUNsRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELFFBQVEsQ0FBQyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUN2RSxNQUFNLFNBQVMsU0FBUyxXQUFXLENBQUM7SUFDcEMsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLEtBQUssQ0FBQztJQUNWLElBQUksV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQUU7SUFDL0IsUUFBUSxLQUFLLEVBQUUsQ0FBQztJQUNoQixRQUFRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzFELFFBQVEsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLEtBQUs7SUFDTCxJQUFJLGlCQUFpQixHQUFHO0lBQ3hCLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxRQUFRLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELFFBQVEsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzVCLEtBQUs7SUFDTCxDQUFDO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQzs7SUNwQnRELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOzs7Ozs7In0=
