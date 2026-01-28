document.addEventListener("DOMContentLoaded", function () {

  const info = document.getElementById("info"); // <div id="info"></div>

  // OBJETO CURSOS (NO PUEDE ESTAR VACÍO)
  const cursos = {
    lunes: `
    <strong>Lunes</strong><br><br>
    🧵 Deco hogar — 09:00 a 11:30<br>
    ✂️ Corte y confección — 18:00 a 21:00
  `,

  martes: `
    <strong>Martes</strong><br><br>
    ✂️ Corte y confección — 09:00 a 12:00<br>
    🧵 Deco hogar — 18:00 a 20:30
  `,

  miercoles: `
    <strong>Miércoles</strong><br><br>
    👜 Marroquinería — 09:00 a 11:30<br>
    🧵 Costura avanzada libre — 15:00 a 17:30<br>
    ✂️ Corte y confección — 18:00 a 21:00
  `,

  jueves: `
    <strong>Jueves</strong><br><br>
    ✂️ Corte y confección — 09:00 a 12:00<br>
    👜 Marroquinería — 18:00 a 20:30
  `,

  viernes: `
    <strong>Viernes</strong><br><br>
    🧶 Tejido — 08:00 a 10:00<br>
    👧 Costura niños y adolescentes — 18:00 a 20:00<br>
    🧸 Amigurumi — 18:00 a 20:00
  `,

  sabado: `
    <strong>Sábado</strong><br><br>
    ❌ Proximamente
  `
  };

  // BOTONES POR DÍA (id="lunes", etc.)
  document.getElementById("lunes")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.lunes;
  });

  document.getElementById("martes")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.martes;
  });

  document.getElementById("miercoles")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.miercoles;
  });

  document.getElementById("jueves")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.jueves;
  });

  document.getElementById("viernes")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.viernes;
  });

  document.getElementById("sabado")?.addEventListener("click", () => {
    if (info) info.innerHTML = cursos.sabado;
  });

  // SLIDER
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function cambiarSlide() {
    slides.forEach(slide => slide.classList.remove("activa"));
    slides[index].classList.add("activa");
    index = (index + 1) % slides.length;
  }

  if (slides.length > 0) {
    cambiarSlide();
    setInterval(cambiarSlide, 3000);
  }

});

// =====================
// WHATSAPP
// =====================
function enviarWhatsApp() {

  // INPUTS (usar IDs en el HTML)
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const dni = document.getElementById("dni").value;

  // SELECTS
  const experiencia = document.getElementById("experiencia").value;
  const maquina = document.getElementById("maquina").value;
  const tipoMaquina = document.getElementById("tipoMaquina").value;
  const curso = document.getElementById("curso").value;

  // VALIDACIÓN
  if (!nombre || !telefono || !email || !dni || !curso || !experiencia || !maquina) {
    alert("Por favor completá todos los campos obligatorios");
    return;
  }

  const mensaje = `Hola Lisa Costura 👋
Quiero inscribirme a un curso 🧵

📌 Nombre: ${nombre}
📞 Teléfono: ${telefono}
📧 Email: ${email}
🆔 DNI: ${dni}

🎯 Nivel: ${experiencia}
🪡 Máquina propia: ${maquina}
⚙️ Tipo de máquina: ${tipoMaquina}

📅 Curso elegido:
${curso}
`;

  const telefonoLisa = "5493624935639";
  const url = `https://wa.me/${telefonoLisa}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}