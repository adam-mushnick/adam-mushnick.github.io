//set initial scroll position
document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', () => {
  //negative or positive value determines up or down
  const direction =
    window.pageYOffset - document.lastScrollPosition > 0 ? 'down' : 'up';
  // console.log(
  //   direction,
  //   document.lastScrollPosition,
  //   document.lastCentered,
  //   document.onWayTO
  // );
  //[...] save as array instead of nodelist
  const sections = [...document.querySelectorAll('section')];

  if (document.onWayTo === null) {
    const destinationIndex =
      direction === 'up'
        ? document.lastCentered - 1
        : document.lastCentered + 1;
    console.log(destinationIndex, document.onWayTo);
    if (destinationIndex >= 0 && destinationIndex < sections.length) {
      document.onWayTo = destinationIndex;
      window.scroll(0, sections[destinationIndex].offsetTop);
      // document.onWayTo = null;
    }
  }
  sections.forEach((section, index) => {
    if (window.pageYOffset === section.offsetTop) {
      document.lastCentered = index;
      section.className = 'active';
      if (document.onWayTo === index) {
        document.onWayTo = null;
      }
    } else {
      section.className = '';
    }
  });

  //update every time scrolled
  document.lastScrollPosition = window.pageYOffset;
});
