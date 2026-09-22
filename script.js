const carta = document.getElementById("carta");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
const brillo = document.querySelector(".brillo");

let abierta = false;

carta.addEventListener("click", () => {
    abierta = !abierta;

    if (abierta) {
        carta.classList.add("abierta");
        boton.innerHTML = "💛 Cerrar carta";

        mensaje.innerHTML =
            "🌻 Si llegaste hasta aquí, espero que estas flores hayan conseguido regalarte aunque sea una pequeña sonrisa. ✨💛";
    } else {
        carta.classList.remove("abierta");
        boton.innerHTML = "💌 Abrir mi carta";
        mensaje.innerHTML = "";
    }
});

boton.addEventListener("click", () => {
    abierta = !abierta;

    if (abierta) {
        carta.classList.add("abierta");
        boton.innerHTML = "💛 Cerrar carta";

        mensaje.innerHTML =
            "🌻 Si llegaste hasta aquí, espero que estas flores hayan conseguido regalarte aunque sea una pequeña sonrisa. ✨💛";
    } else {
        carta.classList.remove("abierta");
        boton.innerHTML = "💌 Abrir mi carta";
        mensaje.innerHTML = "";
    }
});

document.addEventListener("mousemove", (e) => {
    brillo.style.left = e.clientX + "px";
    brillo.style.top = e.clientY + "px";

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    document.querySelector(".contenedor").style.transform =
        `rotateY(${x}deg) rotateX(${y}deg)`;
});
