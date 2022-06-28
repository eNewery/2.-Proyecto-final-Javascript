let title = document.getElementById("titulo")
let subtitle = document.getElementById("subtitulo")

title.innerText = "He sido modificado desde JavaScript"

let componentes = document.getElementsByClassName("componente")

subtitle.innerHTML = "<h2>Componentes:</h2>"

componentes[0].innerText = "Memoria RAM"
componentes[1].innerText = "Procesador"
componentes[2].innerText = "Placa madre"
componentes[3].innerText = "Placa de video"