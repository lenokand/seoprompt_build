(()=>{new Swiper(".result-slider",{speed:400,spaceBetween:100,navigation:{nextEl:".result-slider .swiper-next",prevEl:".result-slider .swiper-prev"},breakpoints:{}});var e,t=document.getElementsByClassName("faq-title");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");var e=this.nextElementSibling;"static"===e.style.position?(e.style.position="absolute",e.style.opacity="0",e.style.padding="0"):(e.style.position="static",e.style.opacity="1",e.style.padding=" 15px 0 0 0")}));var s=document.querySelectorAll(".burger"),i=document.querySelector(".menu"),l=document.querySelector("body");s.forEach((function(e){e.addEventListener("click",(function(t){e.classList.toggle("open"),i.classList.toggle("open"),l.classList.toggle("open")}))}))})();