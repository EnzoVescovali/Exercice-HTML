const menuHamburger = document.querySelector(".menuBtn");
const navLinks = document.querySelector(".navLinks");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
overlay.classList.toggle('active');
})

closeBtn.addEventListener('click',()=>{
    navLinks.classList.remove('mobile-menu');
    overlay.classList.remove('active');
    closeMobileMenuBtn.classList.remove('active');
  });
  
  closeMobileMenuBtn.addEventListener('click',()=>{
    navLinks.classList.remove('mobile-menu');
    overlay.classList.remove('active');
    closeMobileMenuBtn.classList.remove('active');
  });
