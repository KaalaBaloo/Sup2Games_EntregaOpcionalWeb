$( "#closeNav" ).on( "click", function() {
    var element = document.getElementById("Nav");
     element.classList.toggle("ClosedNav");
     var element = document.getElementById("Base");
     element.classList.toggle("ClosedNav");
     var element = document.getElementById("Content");
     element.classList.toggle("ClosedContent");
     
     var elements = document.getElementsByClassName("next");
     Array.from(elements).forEach(el => {
         el.classList.toggle("ClosedNav"); // Aplica el cambio a cada elemento
     });
     

  } );

  document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const items = carousel.querySelector(".carousel-items");
        const prevBtn = carousel.querySelector(".prev");
        const nextBtn = carousel.querySelector(".next");

        let scrollAmount = 0;
        const itemWidth = 300; // El ancho de cada video + margen

        prevBtn.addEventListener("click", () => {
            scrollAmount -= itemWidth;
            if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            items.style.transform = `translateX(-${scrollAmount}px)`;
        });

        nextBtn.addEventListener("click", () => {
            scrollAmount += itemWidth;
            const maxScroll = items.scrollWidth - carousel.offsetWidth;
            if (scrollAmount > maxScroll) {
                scrollAmount = maxScroll;
            }
            items.style.transform = `translateX(-${scrollAmount}px)`;
        });
    });
});


