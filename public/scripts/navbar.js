navbarLinks = document.querySelectorAll('nav a');
console.log(navbarLinks);

//add current class
docu;
navbarLinks.forEach((link) => {
  link.classList.add('current');
});
