const listaMascota = document.getElementById('lista-mascotas');

const selectTipo = document.getElementById('tipo');
const inputNombre = document.getElementById('input-nombre');
const inputPropietario = document.getElementById('input-propie');
const form = document.getElementById('form');
const btnGuardar = document.getElementById('guardar');
const indice = document.getElementById('indice');


let mascotas = [
    {
        tipo: "Gato",
        nombre:"Salem",
        propietario:"Jeremías"
    }
];

function listarMascotas () {
    const htmlMascotas = mascotas.map((mascota, index)=>`
        <tr>
            <th scope="row">${index}</th>
            <td>${mascota.tipo}</td>
            <td>${mascota.nombre}</td>
            <td>${mascota.propietario}</td>
            <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary editar"><i class="far fa-edit"></i></button>
                <button type="button" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </div>
            </td>
        </tr>
    `).join('');
    listaMascota.innerHTML = htmlMascotas;
    
    Array.from(document.getElementsByClassName('editar')).forEach((botonEditar, index)=>botonEditar.onclick = editar(index));
}

function enviarDatos(e) {
    e.preventDefault();
    const datos = {
        tipo: selectTipo.value,
        nombre: inputNombre.value,
        propietario: inputPropietario.value
    };
    mascotas.push(datos);
    listarMascotas();
}

function editar(indice) {
    return function handler() {
        console.log(indice);
    }
}

listarMascotas();

form.onsubmit = enviarDatos;
btnGuardar.onclick = enviarDatos;