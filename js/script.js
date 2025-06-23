$(document).ready(function () {
    $(".show-popup-infak").click(function () {
        $(".wrapper-popup").addClass("show");
    });

    $(".close-popup, .backdrop").click(function () {
        $(".wrapper-popup").removeClass("show");
    });

    $(".hamburger").click(function () {
        $(".top-menu").css("right", "0");
    });

    $(".close").click(function () {
        $(".top-menu").css("right", "-100vw");
    });

     window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 0,
        speed: 1500,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".swiper-klien", {
        loop: true,
    slidesPerView: "auto",  
    spaceBetween: 30,
    speed: 4000,              
    autoplay: {
      delay: 0,               
      disableOnInteraction: false,
    },
    freeMode: true,           
    freeModeMomentum: false,  
      breakpoints: {
            320: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 7,
                spaceBetween: 20,
            },
        },
    });
    var swiper = new Swiper(".swiper-artikel", {
      breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    var swiper = new Swiper(".swiper-galeri", {
      breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    const backToTopButton = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
