document.querySelectorAll('nav .corner')
  .forEach(corner => corner.addEventListener('click', (ev) => {
    document.body.classList.toggle(`show-${corner.dataset.for}`);
  }));

const firstHero = document.querySelector('.hero:first-child');
if (firstHero) {
  let heroBottom;
  const scrollHandler = () => {
    if (window.scrollY > heroBottom) {
      document.body.classList.add("fixed-main-navigation");
    } else {
      document.body.classList.remove("fixed-main-navigation");
    }
  };

  const resizeHandler = () => {
    const { bottom } = firstHero.getBoundingClientRect();
    heroBottom = window.scrollY + bottom;
    scrollHandler();
  };
  resizeHandler();

  window.addEventListener('scroll', scrollHandler);
  window.addEventListener('wheel', scrollHandler);
  window.addEventListener('resize', resizeHandler);
} else {
  document.body.classList.add("fixed-main-navigation");
}
