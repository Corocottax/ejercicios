const select = document.querySelector("#selectDificultad");
const button = document.querySelector("#iniciarJuego");
const panel = document.querySelector("#panel");
const zonaJugable = document.querySelector("#zonaJugable");
const customAlert = document.querySelector("#customAlert");
const reiniciar = document.querySelector("#reiniciar");

const niveles = {
    facil: 2000,
    medio: 1000,
    dificil: 700,
    extremo: 500
}

let INTERVALO;
let PUNTUACION = 0;

const iniciarJuego = () => {

    panel.innerHTML = `<h3 id="puntuacion">Puntuación: ${PUNTUACION}</h3>`;
    zonaJugable.innerHTML = "";

    INTERVALO = setInterval(() => {
        nuevoEnemigo()
    }, niveles[select.value]);

}

const nuevoEnemigo = () => {

    const img = document.createElement("img");

    img.className = "bicho";
    img.draggable = false;
    img.src = "./assets/bicho.png";
    img.style.transform = `rotate(${Math.random() * 360}deg)`
    img.style.top = `${Math.random() * (zonaJugable.clientHeight - 50)}px`;
    img.style.left = `${Math.random() * (zonaJugable.clientWidth - 50)}px`;

    img.addEventListener("click", aplastar)

    zonaJugable.append(img);

    comprobar();

}

const aplastar = (e) => {

    if (e.target.className === "bicho") {
        actualizarPuntuacion();
        e.target.className = "mancha";
        e.target.src = "./assets/mancha.png"
    }

}

const actualizarPuntuacion = () => {

    const puntuacion = document.querySelector("#puntuacion");

    puntuacion.innerHTML = `Puntuación: ${++PUNTUACION}`

}

const comprobar = () => {

    const allBichos = document.querySelectorAll(".bicho");

    if (allBichos.length > 10) {
        clearInterval(INTERVALO);
        customAlert.classList.add("shown")
    }

}

const reiniciarFunction = () => {

    window.location.reload();

}

button.addEventListener("click", iniciarJuego);
reiniciar.addEventListener("click", reiniciarFunction);