document.addEventListener("DOMContentLoaded", () => {
  questions();
  visible();
});

let user = {};

const textDialog = document.getElementById("text-dialog");
const modal = document.getElementById("modal");

const bienvenido = () => {
  return '<h1> Hola! <span class="bienvenido">  Bienvenido !! </span> </h1>';
};

const consulta = () => {
  return "<p> Como te llamas ?</p>";
};
function questions() {
  textDialog.innerHTML = `${bienvenido()} `;

  setTimeout(() => {
    textDialog.innerHTML = "...";
    setTimeout(() => {
      textDialog.innerHTML = " <p>Como te llamas ?</>";
    }, 1500);

    setTimeout(() => {
      textDialog.innerHTML = "";
      modal.classList.remove("d-none");

      /*  user = {
        nombre: prompt("Escribe tu nombre aqui "),
      }; */

      console.log(user);
    }, 2000);
  }, 2000);
}

function welcomeUser() {
  const nombre = document.getElementById("nombre");
  modal.classList.add("d-none");
  textDialog.innerHTML = `<p> <span class="bienvenido">${nombre.value} </span> <br> te invitamos a conocer nuestros servicios!! </p>  
  <a href="#servicios"> <button class="btn  animate__animated animate__backInUp  ">Ver más <i class="fa-solid fa-chevron-down"></i> </button></a>`;
}

let point = document.getElementById("point");

function visible() {
  window.addEventListener("scroll", () => {
    if (point.getBoundingClientRect().top < 500) {
      point.classList.remove("d-none");
      point.classList.add("visible");
    } else {
      point.classList.remove("visible");
      point.classList.add("d-none");
    }
  });
}
