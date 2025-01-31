// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function inputAmigo() {
    // Obtener el valor del input
    let amigoSecreto = document.getElementById('amigo').value.trim();

    // Validar que el campo no esté vacío
    if (!amigoSecreto) {
        alert('Por favor, ingresa un nombre.');
        return;
    }


    //console.log(amigoSecreto);
    //console.log(listaAmigos);


    // Verificar si el amigo ya está en la lista
    if (listaAmigos.includes(amigoSecreto)) {
        alert('Este amigo ya está en la lista.');
        return;
    }

    // Agregar el amigo a la lista
    listaAmigos.push(amigoSecreto);

    // Mostrar la lista en el DOM
    mostrarLista();

    // Limpiar la caja de input
    limpiarCajaInput();
}

function mostrarLista() {
    // Seleccionar el elemento <ul>
    let listaHTML = document.getElementById('listaAmigos');

    // Limpiar la lista antes de agregar elementos
    listaHTML.innerHTML = '';

    // Recorrer el array y agregar cada amigo como <li>
    listaAmigos.forEach(amigo => {
        let li = document.createElement('li');
        console.log(amigo);
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}

function limpiarCajaInput() {
    // Limpiar el input
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    // Verificar si hay suficientes amigos para sortear
    if (listaAmigos.length < 2) {
        alert('Necesitas al menos 2 amigos para hacer un sorteo.');
        return;
    }

    // Seleccionar un amigo al azar
    let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Mostrar el resultado en el DOM
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}