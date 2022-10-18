const guardarContacto = (db, contacto)=>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargarContactos  = (db, parentNode ) =>{
    let claves = Object.keys(db)
    console.log(claves)
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto (parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, Contacto, db) =>{
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let numeroContacto = document.createElement('p')
    let direccionContacto = document.createElement('p')

    nombreContacto.innerHTML = contacto.nombre
    ApellidoContacto.innerHTML = contacto.apellido
    telefonoContacto.innerHTML = contacto.telefono

    divContacto.classList.add = ('listado-tarea')

    divContacto.appendChild (nombreContacto)
    divContacto.appendChild (apellidoContacto)
    divContacto.appendChild (telefonoContacto)

    parentNode.appendChild(divContacto)
    

}