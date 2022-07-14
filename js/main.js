

function cap(){
    var agecap = document.getElementById("agecap")
    var inputcap = document.getElementById("inputcap").value
    inputcap < 18 ? agecap.innerHTML = "Eres menor!" : agecap.innerHTML = "Eres mayor"
}
//Array en donde se almacenan los objetos Persona
const Personas = []


//Funcion constructora
function generarUsuario() {
    function Persona(name, age, email) {
        this.nombre = name;
        this.edad = age;
        this.correo = email;
    }


    //Aquí declaro las variables que dentro tienen los input
    let preguntarNombre = document.getElementById("nombre").value
    let preguntarEdad = document.getElementById("edad").value
    let preguntarCorreo = document.getElementById("email").value

    let persona = new Persona(preguntarNombre, preguntarEdad, preguntarCorreo)

    //Pusheo el objeto al array
    Personas.push(persona)
    displayError = document.querySelector("#users")
    let name = document.getElementById("nombre")
    let age = document.getElementById("edad")
    let email = document.getElementById("email")
    //Condicional de los input

    if (persona.nombre === "") {
        console.error("Los datos son incorrectos, no se han registrado cambios en el localStorage.")
        name.classList.add("activaInput")
        Toastify({
            text: "Hubo un error en el nombre, inténtalo de nuevo!",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // 
            position: "left", // 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, #ff0000, #ff00aa)",
            },
            onClick: function(){} // 
          }).showToast();  
    }
    else if (persona.edad === "") {
        console.error("Los datos son incorrectos, no se han registrado cambios en el localStorage.")
        age.classList.add("activaInput")
        Toastify({
            text: "Hubo un error en la edad, inténtalo de nuevo!",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // 
            position: "left", // 
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff0000, #ff00aa)",
            },
            onClick: function () { } // 
        }).showToast();
    }
    else if (persona.correo === "") {
        Toastify({
            text: "Hubo un error en el e-mail, inténtalo de nuevo!",
            duration: 1000,
            newWindow: true,
            close: true,
            gravity: "top", // 
            position: "left", // 
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #ff0000, #ff00aa)",
            },
            onClick: function () { } // 
        }).showToast();
        console.error("Los datos son incorrectos, no se han registrado cambios en el localStorage.")
        email.classList.add("activaInput")
    }

    else {
        Swal.fire({
            title: '¿Seguro quieres proceder?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              name.classList.remove("activaInput")
              age.classList.remove("activaInput")
              email.classList.remove("activaInput")
              localStorage.setItem("Personas", JSON.stringify(Personas))
              console.info("Los datos se han guardado satisfactoriamente.")
              console.log(Personas)
              //Es ejecutada la función agregarUsuario *
      
              Toastify({
                  text: "Usuario registrado correctamente!",
                  duration: 1000,
                  newWindow: true,
                  close: true,
                  gravity: "top", // 
                  position: "left", // 
                  stopOnFocus: true,
                  style: {
                      background: "linear-gradient(to right, #AAaaaa, #aaaabb)",
                  },
                  onClick: function () { } // 
              }).showToast();
              agregarUsuario(persona.nombre, persona.edad, persona.correo)
            }
          })
        //Finalmente, si los datos son correctos son guardados en el localStorage

    }
}

// DOM Code
function agregarUsuario(user, age, email) {
    //Declaro la variable en donde será guardado el recuadro donde se visualizará el último usuario registrado
    let display = document.getElementById("users")
    saveLocal = JSON.parse(localStorage.getItem("Personas"))
    for (items in saveLocal) {
        console.log(items)
    }
    display.innerHTML = "<p> Usuario: " + user + "<br> Edad: " + age + "<br> Correo: " + email + "</p>"
}



let button = document.querySelector("#boton")
button.addEventListener('keyup', generarUsuario)
button.addEventListener('click', generarUsuario)


let namelog = document.querySelector("#namelog")
let agelog = document.querySelector("#agelog");


