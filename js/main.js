// botones
const botonPlaystation1 = document.getElementById("botonPlaystation1")
const botonPlaystation2 = document.getElementById("botonPlaystation2")
const botonPlaystation3 = document.getElementById("botonPlaystation3")
const botonPlaystation4 = document.getElementById("botonPlaystation4")

// contenido
const contenidoPlaystation1 = document.getElementById("contenidoPlaystation1")
const contenidoPlaystation2 = document.getElementById("contenidoPlaystation2")
const contenidoPlaystation3 = document.getElementById("contenidoPlaystation3")
const contenidoPlaystation4 = document.getElementById("contenidoPlaystation4")



botonPlaystation1.addEventListener("click", () => {
    contenidoPlaystation1.classList.toggle("oculto")
})

botonPlaystation2.addEventListener("click", () => {
    contenidoPlaystation2.classList.toggle("oculto")
})

botonPlaystation3.addEventListener("click", () => {
    contenidoPlaystation3.classList.toggle("oculto")
})

botonPlaystation4.addEventListener("click", () => {
    contenidoPlaystation4.classList.toggle("oculto")
})