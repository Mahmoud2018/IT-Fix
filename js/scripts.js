/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    
});

     /* Hero type effect */
  
     new Typed('#typed',{
        strings : ['IT Technician Support','Designer','Junior Developer','IT Teacher'],
        typeSpeed : 100,
        delaySpeed : 150,
        loop : true
      });
      
  /* words type effect */

  new Typed('#typed2',{
    strings : ['أهلا وسهلا بك',' تُسعدنا زيارتك',':)',':)',],
    typeSpeed : 70,
    delaySpeed : 120,
    loop : true
  });




//   progress-bar

  const skillsSection = document.getElementById('skills-section');
const progressBars= document.querySelectorAll('.progress-bar');

function showProgress(){ 
    progressBars.forEach(progressBars=> {
        const value =  progressBars.dataset.progress;
        progressBars.style.opacity = 1;
        progressBars.style.width =`${value}%`;  
    });
}

function hideprogress() {
    progressBars.forEach(p => {
    p.style.opacity = 0;
    p.style.width = 0;
}); 
}

window.addEventListener('scroll',() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos){
        showProgress()
    }else{
        hideprogress()
    }


});

/* Darkmode 1 */

 function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


 
 var player
 var staticPlayer
 function onYouTubeIframeAPIReady() {
     console.log('onYouTubeIframeAPIReady')
     player = new YT.Player('player', {
         videoId: 'M7lc1UVf-VE',
         playerVars: {
             'playsinline': 1
         },
         events: {
             'onReady': onPlayerReady,
             'onStateChange': onPlayerStateChange
         }
     })
 }
 
 function onPlayerReady(event) {
     event.target.playVideo() // autostart
 }
 
 var done = false;
 function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
       // do other custom stuff here
       //setTimeout(stopVideo, 6000);
       //done = true;
     }
 }
 
 function stopVideo() {
     player.stopVideo()
 }
 
 function loadYouTubeVideo() {
     // 2. This code loads the IFrame Player API code asynchronously.
     var tag = document.createElement('script');
     tag.src = "https://www.youtube.com/watch?v=r2n5LA7zebk";
     var firstScriptTag = document.getElementsByTagName('script')[0];
     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 
 }
 
 var dynamicVideoModal = document.getElementById('dynamicVideoModal')
 dynamicVideoModal.addEventListener('show.bs.modal', function (event) {
     // dynamically create video inside modal
     // loadYouTubeVideo()
 })
 dynamicVideoModal.addEventListener('hidden.bs.modal', event => {
     player.stopVideo()
 })
 
 
 // manual controls outside YT
 const playBtn = document.getElementById('playBtn')
 playBtn.addEventListener('click', function (event) {
     player.playVideo()
 })
 
 const pauseBtn = document.getElementById('pauseBtn')
 pauseBtn.addEventListener('click', function (event) {
     console.log('pause')
     player.pauseVideo()
 })
 
 const myModalEl = document.getElementById('videoModal')
 myModalEl.addEventListener('show.bs.modal', event => {
     staticPlayer = new YT.Player('staticPlayer')
 })
 myModalEl.addEventListener('hidden.bs.modal', event => {
     staticPlayer.stopVideo()
 })
 