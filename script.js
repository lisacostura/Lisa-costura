function mostrarDia(dia) {
  const contenido = document.getElementById("contenido-dia");

  let cursos = {
    lunes: `
      <ul>
        <li>Deco – hogar | 09:00 a 11:00</li>
        <li>Marroquinería | 15:00 a 17:30</li>
        <li>Corte y confección | 18:00 a 21:00</li>
      </ul>
    `,
    martes: `
      <ul>
        <li>Corte y confección | 09:00 a 12:00</li>
        <li>Corte y confección | 14:30 a 17:30</li>
        <li>Deco – hogar | 18:00 a 20:30</li>
      </ul>
    `,
    miercoles: `
      <ul>
        <li>Deco – hogar | 09:00 a 11:00</li>
        <li>Marroquinería | 15:00 a 17:30</li>
        <li>Corte y confección | 18:00 a 21:00</li>
      </ul>
    `,
    jueves: `
      <ul>
        <li>Corte y confección | 09:00 a 12:00</li>
        <li>Corte y confección | 14:30 a 17:30</li>
        <li>Deco – hogar | 18:00 a 20:30</li>
      </ul>
    `,
    viernes: `
      <ul>
        <li>Tejido a crochet | 08:00 a 10:00</li>
        <li>Deco – hogar | 15:00 a 17:30</li>
        <li>Costura básica niños y adolescentes | 18:00 a 21:00</li>
      </ul>
    `,
    sabado: `
      <p>📌 Sábado libre por el momento</p>
    `
  };

  contenido.innerHTML = `
    <h3>${dia.toUpperCase()}</h3>
    ${cursos[dia]}
    <p class="abierto">🟢 Inscripciones abiertas</p>
    <a class="btn-inscribir" href="https://wa.me/5493624935639" target="_blank">
      Inscribirme por WhatsApp
    </a>
  `;
}