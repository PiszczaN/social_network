import { StickyProfileGuideAnimations } from "./animations";
import { Users } from "./users";

window.addEventListener("scroll", () => { StickyProfileGuideAnimations(); });
const xyz = Users.initUsers();
console.log(xyz[0]);
