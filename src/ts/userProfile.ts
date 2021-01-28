import { StickyProfileGuideAnimations } from "./animations";
import { UpdateHTML } from "./updateHTML";

window.addEventListener("scroll", () => { StickyProfileGuideAnimations(); }); 

var urlParams = new URLSearchParams(window.location.search);

UpdateHTML.completeUserProfile(urlParams.get('id') );
console.log(urlParams.get('id'));