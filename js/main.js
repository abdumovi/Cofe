let mBtn = document.querySelector('.header-main__btn');
let xBtn = document.querySelector('.header-main__close');
let list =  document.querySelector('.nav__list');
let nav = document.querySelector('.header-main__nav')
mBtn.addEventListener('click',function(){
  mBtn.classList.add('close');
  xBtn.classList.remove('close');
  list.style.transform = "translate(0)"; 
  list.style.opacity = "3"
  nav.style.zIndex = "3";
})
xBtn.addEventListener('click',function(){
  mBtn.classList.remove('close');
  xBtn.classList.add('close');
  list.style.transform = "translate(0,-33rem)"; 
  list.style.opacity = "0";
  nav.style.zIndex = "-1";
})