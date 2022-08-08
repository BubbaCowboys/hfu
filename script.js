function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");

}



var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup:4,
    watchSlideProgress:true,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
            slidesPerGroup:1,
        },
        550: {
            slidesPerView: 2,
            slidePerGroup:2,
        },
        950: {
            slidesPerView: 2,
            slidesPerGroup:2,
        },

        1000: {
            slidesPerView: 2,
            slidesPerGroup:2,
        },
        1200: {
            slidesPerView:4,
            slidesPerGroup:4,
        }
    },
  });

  const search = (event) =>{
    const storelist = document.getElementById("product-list")
    const individuals = Array.from(storelist.getElementsByClassName("product"))

    individuals.filter((item)=>{
        item.classList.add("is-hidden")
        const input = event.target.value.toLowerCase()
        const searchstring = item.innerText.toLowerCase()
        if(searchstring.includes(input) && input.length > 0){
            item.classList.remove("is-hidden")
        }
        return searchstring.includes(input)
    })
    
}

