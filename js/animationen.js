const transDelay = document.querySelectorAll('.transition');

window.addEventListener('load', function () {
  transDelay.forEach((e,i)=>{
      anime({
          targets: e,
          opacity: [0,1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeInOutBack',
          delay: 50 * i
        });
  })
})