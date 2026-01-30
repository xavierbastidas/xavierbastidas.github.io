/* Typing Effect */
const words = [
  "software robusto",
  "sistemas escalables",
  "arquitecturas modernas"
];

let i = 0, j = 0, deleting = false;
const target = document.getElementById("typing");

function type(){
  const word = words[i];
  target.textContent = deleting
    ? word.substring(0, j--)
    : word.substring(0, j++);

  if(!deleting && j === word.length + 1){
    deleting = true;
    setTimeout(type, 1200);
    return;
  }

  if(deleting && j === 0){
    deleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, deleting ? 50 : 90);
}
type();

/* Reveal Animation */
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("visible");
    }
  });
},{threshold:.15});

reveals.forEach(r=>observer.observe(r));

/* Active Nav */
const links = document.querySelectorAll(".navbar a");
window.addEventListener("scroll",()=>{
  let fromTop = window.scrollY + 120;
  links.forEach(link=>{
    const section = document.querySelector(link.getAttribute("href"));
    if(section &&
       section.offsetTop <= fromTop &&
       section.offsetTop + section.offsetHeight > fromTop){
      links.forEach(l=>l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});
