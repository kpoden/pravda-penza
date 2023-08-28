function cropText() {

    const elementsToCrop = document.querySelectorAll('[data-crop]');
    
    elementsToCrop.forEach(element => {
      const text = element.textContent,
            length = element.dataset.crop;
  
      if (text.length > length) {
        const croppedText = text.substring(0, length).trim() + '...';
        element.textContent = croppedText;
      }
    });
  }
  
  cropText()


  function slidersInit() {
    const swiper = new Swiper(".news__slider", {
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          }
      });
  }

  slidersInit()

  function filtersInit() {
    const swiper = new Swiper(".news__filters", {
        slidesPerView: 4.5,
        spaceBetween: 15,
        freeMode: true
      });
  }

  filtersInit()