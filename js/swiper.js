const roomsSwiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        spaceBetween: 30,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

});

const featuresSwiper = new Swiper(".features-swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".features-swiper__pagination",
        clickable: true,
    },
});

const foodSwiper = new Swiper(".foods-swiper", {
    slidesPerView: 1,       // Solo mostramos un grupo vertical a la vez
    slidesPerGroup: 1,      // Avanzamos de a un grupo
    spaceBetween: 30,

    navigation: {
        nextEl: '.foods-swiper__button-next',
        prevEl: '.foods-swiper__button-prev',
    },
});