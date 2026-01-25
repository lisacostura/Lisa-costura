function mostrar(dia) {
  const info = document.getElementById("info");

  const datos = {
    lunes: `
    <h3>Lunes</h3>
    <p>🧵 Deco Hogar 09:00 a 11:30</p>
    <p>👜 Marroquinería 15:00 a 17:30</p>
    <p>✂️ Corte y confección 18:00 a 21:00</p>`,

    martes: `
    <h3>Martes</h3>
    <p>✂️ Corte y confección 09:00 a 12:00</p>
    <p>✂️ Corte y confección 14:30 a 17:30</p>
    <p>🧵 Deco Hogar 18:00 a 20:30</p>`,

    miercoles: `
    <h3>Miércoles</h3>
    <p>🧵 Deco Hogar 09:00 a 11:00</p>
    <p>👜 Marroquinería 15:00 a 17:30</p>
    <p>✂️ Corte y confección 18:00 a 21:00</p>`,

    jueves: `
    <h3>Jueves</h3>
    <p>✂️ Corte y confección 09:00 a 12:00</p>
    <p>✂️ Corte y confección 14:30 a 17:30</p>
    <p>🧵 Deco Hogar 18:00 a 20:30</p>`,

    viernes: `
    <h3>Viernes</h3>
    <p>🧶 Tejido crochet 08:00 a 10:00</p>
    <p>🧵 Deco Hogar 15:00 a 17:30</p>
    <p>👧 Costura niños y adolescentes 18:00 a 20:00</p>`
    <p>👧 Amigurumi 18:00 a 20:00</p>`,

    sabado: `
    <h3>Sábado</h3>
    <p>📌 Próximamente</p>`
  };

  info.innerHTML = datos[dia];
}

// CARRUSEL AUTOMÁTICO
let indice = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[indice].classList.remove("activa");
  indice = (indice + 1) % slides.length;
  slides[indice].classList.add("activa");
}, 3000);