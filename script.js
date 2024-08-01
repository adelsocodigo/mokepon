const sectionBotonReiniciar = document.getElementById("reiniciar")
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const sectionSeleccionarMascota = document.getElementById("seleccion-mascota")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataqueDelJugador = document.getElementById("ataque-jugador")
const ataqueDelEnemigo = document.getElementById("ataque-enemigo")

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon ("hipodoge", "assets/img/mokepon_hipodoge.png", 5)
let capipepo = new Mokepon ("capipepo", "assets/img/mokepon_capipepo.png", 5)
let ratigueya = new Mokepon ("ratigueya", "assets/img/mokepon_ratigueya.png", 5)

mokepones.push(hipodoge,capipepo,ratigueya)
console.log(mokepones)



function iniciarJuego() {
    
    sectionBotonReiniciar.style.display = "none" //oculta el boton de reiniciar
    sectionSeleccionarAtaque.style.display = "none" //oculta la section de ataque
 
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
            
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
    }
    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
    }
    else if  (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
    }
    else {alert("Debes seleccionar una Mascota😜");
            return;
    }

    
    sectionSeleccionarMascota.style.display = "none" //Oculta la section de mascota

    sectionSeleccionarAtaque.style.display = "flex" //muestra la section de ataque
  
    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio (1,3)
    
    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    }
    else if (mascotaAleatoria == 2) { 
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else {
    spanMascotaEnemigo.innerHTML = "Ratigueya"
    }
    
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
       } else {
        ataqueEnemigo = "TIERRA"
       }
    
    combate()
}

function combate(){

    if(ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate")
    } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" || 
               ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ||
               ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
        crearMensaje("Ganaste")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo

        }
      else { crearMensaje("Perdiste")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
      } 
      
      revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("GANASTE 😁, Juego Terminado")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("PERDISTE 😢, Juego Terminado")
    }
}

function crearMensaje(resultado) {
        
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
    
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    sectionBotonReiniciar.style.display = "block" //Mostrar el boton de reiniciar
    
}

function reiniciarJuego(){
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)

