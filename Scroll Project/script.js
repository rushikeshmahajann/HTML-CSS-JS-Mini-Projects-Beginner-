const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  /* linksContainer.classList.toggle("show-links") */
/*   const containerHeight = linksContainer.getBoundingClientRect();
  const linksHeight = links.getBoundingClientRect().height; */
  linksContainer.classList.toggle("links-hamburger");
});
const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if(scrollHeight > navHeight){
    navbar.classList.add("fixed-nav")
  }
  else{
    navbar.classList.remove("fixed-nav")
  }
});
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(){
        linksContainer.classList.toggle("links-hamburger");
    })
})