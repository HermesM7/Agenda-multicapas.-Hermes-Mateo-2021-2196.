const Nombre = document.querySelector(".Nombre")
const Apellido = document.querySelector(".Apellido")
const Telefono = document.querySelector(".Telefono")
const btnAgregarContacto = document.querySelector(".btn-Agregar-Contacto")

const listadoTareas = document.querySelector(".listado-tareas")

const db = window.localStorage

btnAgregarContacto.onclick = () =>{
    let Contacto = {
        id: Math.random(1,100)
       ,Nombre: Nombre.value
       ,Apellido: Apellido.value
       ,Telefono: Telefono.value
    }
    guardarContacto(db, Contacto)
}

cargarContactos(db, listadoTareas)