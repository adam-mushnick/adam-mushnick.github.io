//my attempt at scoll opacity
//intersection observer API
let callback = (entries, observer) => {
  entries.forEach((entry) => {
    //rounding edge cases
    if (entry.intersectionRatio >= 0 && entry.intersectionRatio < 0.1) {
      entry.target.style.opacity = 0;
    } else if (entry.intersectionRatio > 0.9 && entry.intersectionRatio <= 1) {
      entry.target.style.opacity = 1;
    } else {
      entry.target.style.opacity = entry.intersectionRatio;
    }
  });
};

let options = {
  root: null,
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
};
let observer = new IntersectionObserver(callback, options);

for (const target of document.querySelectorAll('.fakediv')) {
  observer.observe(target);
}
