document.querySelectorAll('nav .open')
    .forEach(open => open.addEventListener('click', (ev) => {
        document.body.classList.add(`show-${open.dataset.for}`);
    }));
document.querySelectorAll('nav .close')
    .forEach(close => close.addEventListener('click', (ev) => {
        document.body.classList.remove(`show-${close.dataset.for}`);
    }));
const scrollHandler = (ev) => {
    if (ev.deltaY > 0) {
        document.body.classList.add("collapse-main-navigation");
    } else if (ev.deltaY < 0) {
        document.body.classList.remove("collapse-main-navigation");
    }
};
window.addEventListener('scroll', scrollHandler);
window.addEventListener('wheel', scrollHandler);