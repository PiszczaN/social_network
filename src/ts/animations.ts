export const StickyProfileGuideAnimations = () => {
    const guide = document.querySelector(".guide");
    const guideList = document.querySelector(".guide__list");
    const elementTopEdge = guide.getBoundingClientRect().top;
    
    
    if(elementTopEdge === 56) {
        guideList.classList.add("guide__list--stuck");
    }else {
        guideList.classList.remove("guide__list--stuck");
    }

}
