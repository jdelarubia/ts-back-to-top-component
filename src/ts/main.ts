import { BackToTop } from "./backToTop";

const body = <HTMLElement>document.querySelector("body");
body?.appendChild(new BackToTop());
