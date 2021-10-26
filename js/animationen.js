const transDelay = document.querySelectorAll('.transition');

window.addEventListener('load', function () {
  transDelay.forEach((e,i)=>{
      anime({
          targets: e,
          opacity: [0,1],
          translateY: [50, 0],
          duration: 1000,
          easing: 'easeInOutBack',
          delay: 100 * i
        });
  })
})

document.addEventListener('click', function(e){
  const image = e.target;
  const imageClicked = e.target.parentElement;
  const imageLarge = document.querySelector('.image-large img');

  console.log(imageClicked);

  document.querySelector('.image-large').appendChild(image);
  imageClicked.appendChild(imageLarge)  
})