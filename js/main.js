const Personas = []

function generarUsuario(){
function Persona(name, age, email){
    this.nombre = name;
    this.edad = age;
    this.correo = email;
}


let preguntarNombre = document.getElementById("nombre").value
let preguntarEdad = document.getElementById("edad").value
let preguntarCorreo = document.getElementById("email").value

let persona = new Persona(preguntarNombre, preguntarEdad, preguntarCorreo)
Personas.push(persona)
localStorage.setItem("Personas", JSON.stringify(Personas))
console.log(Personas)
agregarUsuario(persona.nombre, persona.edad, persona.correo)
}

// DOM Code
function agregarUsuario(user, age, email){
let display = document.getElementById("users")
display.innerHTML = "<p> User: " + user + "<br> Age: " + age + "<br> E-mail: " + email + "</p>"
}



let button = document.querySelector("#boton")
button.addEventListener('keyup', generarUsuario)

