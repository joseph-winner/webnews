const navBtn = document.querySelector('.hamburger');
const smallScreenMenu = document.querySelector('.nav-links-small-screen');
const navLinksSmall = smallScreenMenu.querySelectorAll('a');
const overlay = document.querySelector('.nav-overlay');

// const scrollRightBtn = document.querySelector('.scroll-left')
// const scrollLeftBtn = document.querySelector('.scroll-right')
// const slideShowContainer = document.querySelector('.services-slide-show')
// const mainDataContainer = document.querySelector('.user-data-section');

// const showCasevideo =  document.querySelector('.show-case-video')


//navigation menu toggle
navBtn.addEventListener('click', openAndCloseMenu)
function openAndCloseMenu(){  
if(navBtn.classList.contains('nav-open')){
    navBtn.classList.remove('nav-open');
    smallScreenMenu.style.transform = 'translateX(-100%)'
}
else{
    navBtn.classList.add('nav-open');
    smallScreenMenu.style.transform = 'translateX(0%)'
    overlay.style.display = "block"
}
}

    navLinksSmall.forEach(navLink=>{
        navLink.addEventListener('click',openAndCloseMenu)
    })

overlay.addEventListener('click', ()=>{
    overlay.style.display = "none"
    openAndCloseMenu();
})    



const txts = document.querySelector(".animate-text").children;
txtsLen = txts.length;
let index = 0;
const textInTimer = 3000,
      textOutTimer = 2800;

      function animateText(){
          for(let i=0; i<txtsLen; i++){
              txts[i].classList.remove("text-in","text-out");
          }
          txts[index].classList.add("text-in");
          setTimeout(function(){
              txts[index].classList.add("text-out");
          }, textOutTimer)
          setTimeout(function(){
              if(index == txtsLen-1){
                  index = 0;
              }
              else{
                  index++;
              }
              animateText();
          }, textInTimer);
      }
      window.onload = animateText;