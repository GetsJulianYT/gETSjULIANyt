var sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
var sectionReiniciar = document.getElementById("reiniciar")
let botonMascotaJugador = document.getElementById("boton-mascota")
let botonFuego = document.getElementById("boton-fuego")
let botonAgua = document.getElementById("boton-agua")
let botonTierra = document.getElementById("boton-tierra")
var botonReiniciar = document.getElementById("boton-reiniciar")




let ataqueJugador
let ataqueEnemigo
var vidasJugador= 3
var vidasEnemigo = 3


const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")

function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "NONE"

    sectionReiniciar.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    
    botonFuego.addEventListener("click", ataqueFuego)
    
    botonAgua.addEventListener("click", ataqueAgua)
    
    botonTierra.addEventListener("click", ataqueTierra)
    
   botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){ 
    var sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    
    var sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")
        
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    }  else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }  else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }  else {
        alert("Todavía no seleccionaste a tu mascota")
    }

    seleccionarMascotaEnemigo()
    
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    } else {
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

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    crearMensaje()
}    


function crearMensaje() {
    var spanVidasJugador = document.getElementById("vidas-jugador")
    var spanVidasEnemigo = document.getElementById("vidas-enemigo")

    let resultado
    if (ataqueJugador == ataqueEnemigo) {
        resultado = "Empate 🤝"
    } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
        resultado = "Ganaste! 🎉"
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "AGUA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "FUEGO")) {
        resultado = "Perdiste! 😭"
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }


    let sectionMensajes = document.getElementById("resultado")
    let ataquesDelJugador = document.getElementById("ataques-del-jugador")
    let ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    let nuenoAtaqueDelJugador = document.createElement("p")
    let nuenoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuenoAtaqueDelJugador.innerHTML = ataqueJugador
    nuenoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuenoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuenoAtaqueDelEnemigo)

    RevisarVidas()
}



function crearMensajeFinal(resultadoFinal)
{
let sectionMensajes = document.getElementById("resultado")

sectionMensajes.innerHTML = resultadoFinal

let botonFuego = document.getElementById("boton-fuego")
botonFuego.disabled = true
let botonAgua = document.getElementById("boton-agua")
botonAgua.disabled = true
let botonTierra = document.getElementById("boton-tierra")
botonTierra.disabled = true
var sectionReiniciar = document.getElementById("reiniciar")
sectionReiniciar.style.display = "block"
}

function RevisarVidas()
{
    if(vidasEnemigo == 0)
    {
        crearMensajeFinal("<strong>MARAVILLOSO, GANASTE</strong>")
    }
    else if(vidasJugador == 0)
    {
        crearMensajeFinal("<strong>QUE MAL, PERDISTE :(</strong>")

    }
}

function reiniciarJuego()
{
    location.reload()
}




function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego) 
