class Usuario {
    constructor(nombre, correo, contraseña, id) {
        this.nombre = nombre 
        this.correo = correo 
        this.contraseña = contraseña 
        this.id = id
    }
}


function iniciarSesion(usuarios){
    let correo = prompt("Ingrese su correo: ").toUpperCase()
    let contraseña = prompt("Ingresar su contraseña: ")
    for (let i = 0;i < usuarios.length; i++){
        if (usuarios.some((el) => el.correo == correo) && usuarios.some((el) => el.contraseña == contraseña)){
            alert(`Iniciaste sesión con exito\nBienvenido ${usuarios[i].nombre}`)
            return i
        } 
    }
    alert(`Nombre de usuario invalido`)
    return false
}


function registrarse(usuarios){
    let nombre = prompt("Ingrese su nombre: ")
    let correo = prompt("Ingrese su correo: ").toUpperCase()
    let contraseña = prompt("Ingrese su contraseña: ")
    let id = usuarios.length
    usuarios.push(new Usuario(nombre, correo, contraseña, id))
    if (nombre.length == 0){
        alert("Debe ingresar el nombre")
        return
    }
    if (correo.length == 0){
        alert("Debe ingresar el correo")
        return
    } 
    if (contraseña.length == 0){
        alert("Debe ingresar la contraseña")
        return
    }
    alert(`Bienvenido ${nombre}`)
    return usuarios
}

function buscarUsuario(usuarios, busqueda){
    let resultado = usuarios.filter((el) => el.nombre.includes(busqueda))
    if (resultado == ""){
        alert("No se encontro a nadie con ese nombre :(")
    }else{
        resultado.forEach(element => {
            alert(`Se encontro a: \n${element.nombre}\n Su correo es: ${element.correo}`)
        });
        
    }
}


let usuarios = []
let id = NaN
let opciones = "Opcion 1: Iniciar sesion:\nOpcion 2: Registrarse:\nOpcion 3: Buscar usuario\nOpcion 4: Salir"
let op = 0
while (op != 4){
    op = parseInt(prompt(`Elija una opcion\n${opciones}`))
    switch(op){
        case 1:
            id = iniciarSesion(usuarios)
            break
        case 2:
            usuarios = registrarse(usuarios)
            break
        case 3:
            let buscar = prompt("Ingrese el nombre del usuario que desea buscar")
            buscarUsuario(usuarios, buscar)
            break
        case 4:
            alert("Adios :)")
            break
        default:
            alert("Ingrese una opcion valida :)")
    }
}
