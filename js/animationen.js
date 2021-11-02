const transDelay = document.querySelectorAll('.transition');
const transDelayTurn = document.querySelectorAll('.transition-turn');


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

  transDelayTurn.forEach((e,i)=>{
    anime({
        targets: e,
        opacity: [0,1],
        translateY: [50, 0],
        rotate: -5,
        duration: 1000,
        easing: 'easeInOutBack',
        delay: 100 * i
      });


})

document.body.querySelectorAll('.gallery')[0].addEventListener('click', function(e){
  const image = e.target;
  const imageClicked = e.target.parentElement;
  const imageLarge = document.querySelector('.image-large img');
  
  
  console.log(imageClicked);
  if(image === imageLarge){
    return;
  }else{
    document.querySelector('.image-large').appendChild(image);
    anime({
      targets: image,
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutSine'
    });
    imageClicked.appendChild(imageLarge)  
    anime({
      targets: imageLarge,
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutBack',
    });
  }
})