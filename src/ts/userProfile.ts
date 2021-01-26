import { StickyProfileGuideAnimations } from "./animations";

window.addEventListener("scroll", () => { StickyProfileGuideAnimations(); }); 

var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id'));