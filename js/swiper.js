let swiperInstance= null;

function initSwiper(){
    if(window.innerWidth < 880){
        if (!swiperInstance){
 swiperInstance= new Swiper('.mySwiper',{
    effect: "cards",
      grabCursor: true,
 });
        }
    } else{
        if(swiperInstance){
            swiperInstance.destroy(true, true);
            swiperInstance=null;
        }
    }
}

window.addEventListener('load', initSwiper);

window.addEventListener('resize', initSwiper);