// Agregar usuario
document.getElementById('agregar-usuario-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    // Validar y agregar el usuario a la lista
    if (nombre && correo) {
        const listaUsuarios = document.getElementById('lista-usuarios');
        const nuevoUsuario = document.createElement('div');
        nuevoUsuario.textContent = `Nombre: ${nombre}, Correo: ${correo}`;
        listaUsuarios.appendChild(nuevoUsuario);

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('correo').value = '';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Eliminar usuario
document.getElementById('eliminar-usuario-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const idUsuario = document.getElementById('id-usuario').value;
    const listaUsuarios = document.getElementById('lista-usuarios');

    if (idUsuario) {
        // Eliminar el usuario por su ID
        const usuarioAEliminar = listaUsuarios.childNodes[idUsuario - 1];
        if (usuarioAEliminar) {
            listaUsuarios.removeChild(usuarioAEliminar);
            alert(`Usuario con ID ${idUsuario} eliminado.`);
        } else {
            alert(`No se encontró un usuario con ID ${idUsuario}.`);
        }
    } else {
        alert('Por favor, ingrese un ID de usuario.');
    }

    // Limpiar el campo del formulario
    document.getElementById('id-usuario').value = '';
});
