const btnAgregarCaja = document.getElementById("btnAgregar");
const contenedor = document.getElementById("contenedor");
const inputText = document.getElementById("texto");
const inputImagen = document.getElementById("Imagen");
const divGrande = document.getElementById("vistaGrande");
const imgGrande = document.getElementById("imgGrande");
const btnCerrar = document.getElementById("cerrarImagenGrande");

btnAgregarCaja.addEventListener("click", function(){
    const cajaNueva = document.createElement('div');
    cajaNueva.classList.add('caja');

    const nuevaImg = document.createElement('img');
    nuevaImg.classList.add('img');
    nuevaImg.src = inputImagen.value

    nuevaImg.addEventListener('click', function(){
        imgGrande.src = nuevaImg.src
        divGrande.classList.add('mostrarDiv');
    })

    const nuevoP = document.createElement('p');
    nuevoP.classList.add('titulo');
    nuevoP.textContent = inputText.value

    cajaNueva.appendChild(nuevaImg);
    cajaNueva.appendChild(nuevoP);
    contenedor.appendChild(cajaNueva);

    inputText.value ='';
    inputImagen.value ='';
})

btnCerrar.addEventListener("click", function() {
    divGrande.classList.remove('mostrarDiv');
})