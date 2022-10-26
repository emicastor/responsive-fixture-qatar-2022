const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const startQatar = new Date('November 20 2022 13:00:00');

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = startQatar - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    day.innerHTML = d;
    hour.innerHTML = h < 10 ? '0' + h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    second.innerHTML = s < 10 ? '0' + s : s;
}

setInterval(updateCountdowntime, 1000);



let swiperFixture = new Swiper(".fixture", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 48,
        },
    }
});


let mixer = mixitup('.fixture', {
    selectors: {
        target: '.fixture__card'
    },
    animation: {
        duration: 300
    }
});


const linkFilters = document.querySelectorAll('.filters__item');

function active() {
    linkFilters.forEach(l => l.classList.remove('active'));  // es una función flecha escrita en una sola línea por eso obviamos las {}.
    this.classList.add('active'); 
}

linkFilters.forEach(l => l.addEventListener('click', active)); // es una función flecha escrita en una sola línea por eso obviamos las {}.


const typed = new Typed('.typed', {
	strings: [
		'<i>la ilusión</i>',
		'<i>la tercera</i>',
		'<i>Qatar <i class="ri-flight-takeoff-line"></i></i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: false, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});


const footerYear = document.getElementById('footer-year');
const year = new Date().getFullYear();
footerYear.innerHTML = year;