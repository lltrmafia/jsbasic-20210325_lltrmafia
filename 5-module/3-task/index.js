function initCarousel() {
  // ваш код...
 // let carousel = document.querySelector('.carousel');

  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselInner = document.querySelector('.carousel__inner');
  let slide = document.querySelectorAll('.carousel__slide');
  arrowLeft.style.display = 'none';
  let slideWidth = slide[0].offsetWidth;
  let slideCount = slideWidth * slide.length;
  let step = 0;
  
 
  let carousel = {
   right(){
      arrowLeft.style.display = '';
      carouselInner.style.transform = `translateX(-${step += slideWidth}px)`;
      if(step > slideCount - slideWidth*2) arrowRight.style.display = 'none';
        
    },

    left(){
      arrowRight.style.display = '';
      carouselInner.style.transform = `translateX(-${step -= slideWidth}px)`;
      if(step === 0) arrowLeft.style.display = 'none';
    },
  
  }

/* carousel.addEventListener('click', event =>{
  let target = event.target.parentElement.classList;
  if(!target.contains('carousel__arrow')) return;


  if(target.contains('carousel__arrow_right')){
    arrowLeft.style.display = '';
    carouselInner.style.transform = `translateX(-${step += slideWidth}px)`;
    if(step > slideCount - slideWidth*2) arrowRight.style.display = 'none';
  }else{
    arrowRight.style.display = '';
    carouselInner.style.transform = `translateX(-${step -= slideWidth}px)`;
    if(step === 0) arrowLeft.style.display = 'none';
  }

});*/
  arrowRight.addEventListener('click', carousel.right);
  arrowLeft.addEventListener('click', carousel.left);
  

}
