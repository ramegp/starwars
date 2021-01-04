
let btnMostrarPersonaje = document.getElementById('mostrarPersonaje');
var contenedorTitulo = document.getElementById("cargarTitulo");
var contenedorNombre = document.getElementById("cargarNombre");
var contenedorNacimiento = document.getElementById("cargarNacimiento");


function previewFile() {
    const preview = document.querySelector('#customFotoPersonaje');
    const file = document.querySelector('input[type=file]').files[0];

    console.log(document.querySelector('input[type=file]').files[0]);
    console.log(file);
    console.log('preview '+ preview);

    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}


btnMostrarPersonaje.addEventListener('click',function () {
    contenedorTitulo.innerHTML= document.rellenar.tituloPersonaje.value;
    contenedorNombre.innerHTML= " " + document.rellenar.nombrePersonaje.value;
    contenedorNacimiento.innerHTML= document.rellenar.nacimientoPersonaje.value;

    //alert('Hola '+ document.rellenar.nombrePersonaje.value +" sos una traga leche")
})

function cambiarFondo(parametroSelect) {
    var sableLuz = document.getElementById("contenedor-luz");
    sableLuz.style.boxShadow = '0 0 10px '+parametroSelect.value+', 0 0 20px '+parametroSelect.value+', 0 0 30px '+parametroSelect.value;
    sableLuz.style.display = 'block';
}

function cambiarFoto(choiceMango) {
    var contenedorMango = document.getElementById("contenedor-mango");
    contenedorMango.innerHTML='<img id="mangoSable" src="'+choiceMango.value+'" />';
    var imgMango=document.getElementById("mangoSable");
    imgMango.style.width="38px";
    imgMango.style.height = "auto";
    imgMango.style.position = "absolute";
    imgMango.style.top = "40px";    
    
}


let sableCustom = document.getElementById('contenedor-luz');
let mangoCustom = document.getElementById('contenedor-mango');
var flagCustom = false;


var vCustom = document.getElementsByTagName("audio")[0];
var soundCustom = false; // boolean por cada sable que haga ruido

//voy a necesitar un boolean por cada sable
function sonarCustom() {
    if (!soundCustom) {
        vCustom.play();
        soundCustom = true;
    } else {
        vCustom.pause();
        vCustom.currentTime = 0;
        soundCustom = false;
    }
}

mangoCustom.addEventListener('click', function () {
    sonarCustom();
    if (!flagCustom) {
        sableCustom.style.transform = 'scaleY(1)';
        flagCustom = true;
    } else {
        sableCustom.style.transform = 'scaleY(0)';
        flagCustom = false;
    }
})



   