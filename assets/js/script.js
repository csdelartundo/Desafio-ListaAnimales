let formulario = document.querySelector('form');

let agregar = (event) => {
    event.preventDefault();
    let propietario = document.getElementById('propietario').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;

    let mascota;
    switch (tipo) {
        case 'perro':
        case 'gato':
        case 'conejo':
            mascota = new Mascota(propietario, direccion, telefono, tipo, nombreMascota, enfermedad);
            mostrarDatos(mascota);
            break;
        default:
            break;
    }
}

let mostrarDatos = (mascota) => {
    let resultado = document.querySelector("#resultado ul");

    let liPropietario = document.createElement('li');
    let liMascota = document.createElement('li');

    let mensajePropietario = `${mascota.datosPropietario()}`;
    let mensajeMascota = `El tipo de animal es un: ${mascota._tipo}. El nombre de la mascota es: ${mascota._nombreMascota} y la enfermedad es: ${mascota._enfermedad}.`;

    liPropietario.textContent = mensajePropietario;
    liMascota.textContent = mensajeMascota;

    resultado.appendChild(liPropietario);
    resultado.appendChild(liMascota);
}

formulario.addEventListener('submit', agregar);

class Propietario {
    constructor(nombrePropietario, direccion, telefono) {
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    datosPropietario() {
        return `El Nombre del dueño es: ${this.nombrePropietario}. El domicilio es: ${this.direccion}, y el número telefónico de contacto es ${this.telefono}.`;
    }
}

class Animal extends Propietario {
    constructor(nombrePropietario, direccion, telefono, tipo) {
        super(nombrePropietario, direccion, telefono);
        this._tipo = tipo;
    }

    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

class Mascota extends Animal {
    constructor(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombrePropietario, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set nombreMascota(nombreMascotaRecibido) {
        this._nombreMascota = nombreMascotaRecibido;
    }

    set enfermedad(enfermedadRecibida) {
        this._enfermedad = enfermedadRecibida;
    }
}
