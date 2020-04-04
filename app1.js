function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.akj',
    triggerHook: 0.012
  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller);

}

splitScroll();
