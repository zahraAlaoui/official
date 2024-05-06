document.addEventListener('DOMContentLoaded', function() {
    // Inicialización de Swiper (asegúrate de que se inicialice correctamente)
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Interactividad para el título "FATIMA ZAHRA"
    const headerTitle = document.querySelector('header h1');

    headerTitle.addEventListener('mouseover', () => {
        headerTitle.classList.add('highlight'); // Usamos una clase para el estilo
    });

    headerTitle.addEventListener('mouseout', () => {
        headerTitle.classList.remove('highlight'); // Removemos la clase al quitar el cursor
    });

    // Inicialización de Typed.js si existe un elemento con la clase 'typed'
    if ($('.typed').length) {
        let typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    // Mostrar/ocultar texto al hacer clic en un botón
    $(document).ready(function() {
        $('#show-more-btn').click(function() {
            $('.bio-container').toggleClass('expanded');
            $(this).text(function(i, text) {
                return text === 'Leer más' ? 'Leer menos' : 'Leer más';
            });
        });
    });
});
