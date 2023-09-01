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

    // generar un nuevo enemigo cada x tiempo

}

const nuevoEnemigo = () => {

    // generar el nuevo enemigo

    /* comprobar si hemos perdido */
    comprobar();

}

const aplastar = (e) => {

    /* función que aplasta al enemigo */

    /* si hemos aplastado, actualizamos puntuación */

}

const actualizarPuntuacion = () => {

    // sumar y actualizar visualmente la puntuación

}

const comprobar = () => {

    /* comprobar si tenemos 10 bichos en pantalla para indicar que el usuario a perdido */

}

const reiniciarFunction = () => {

    window.location.reload();

}

button.addEventListener("click", iniciarJuego);
reiniciar.addEventListener("click", reiniciarFunction);