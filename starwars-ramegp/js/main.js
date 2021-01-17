let sable1 = document.getElementById('sable1');
let mango1 = document.getElementById('mango1');
var flag1 = false;

let sable2 = document.getElementById('sable2');
let mango2 = document.getElementById('mango2');
var flag2 = false;

let sable3 = document.getElementById('sable3');
let mango3 = document.getElementById('mango3');
var flag3 = false;

let sable4 = document.getElementById('sable4');
let mango4 = document.getElementById('mango4');
var flag4 = false;

let sable5 = document.getElementById('sable5');
let mango5 = document.getElementById('mango5');
var flag5 = false;

let sable6 = document.getElementById('sable6');
let mango6 = document.getElementById('mango6');
var flag6 = false;

let titulo1 = document.getElementById('titulo1');
let titulo2 = document.getElementById('titulo2');
let titulo3 = document.getElementById('titulo3');
let titulo4 = document.getElementById('titulo4');
let titulo5 = document.getElementById('titulo5');
let titulo6 = document.getElementById('titulo6');


var tiempo = 1500;

let dataInformacion = document.getElementById('dataInformacionMaul')
let btnMaul = document.getElementById('btnMaul');
let closeMaul = document.getElementById('close');

let dataInformacionVader = document.getElementById('dataInformacionVader')
let btnVader = document.getElementById('btnVader');
let closeVader = document.getElementById('closeVader');

let overlay = document.getElementById('overlay');
let popup = document.getElementById('popup');
let btnCerrarPopup = document.getElementById('btn-cerrar-popup');

var presionadoMaul = false;
var presionadoVader = false;



//============================================== Ventana informacion ===========================================================

btnMaul.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
    // sonar()
});

btnCerrarPopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.remove('active');


});

/* ================= menu */
let iconMenu = document.getElementById('toggle-icon');
let navContainer = document.getElementById('nav-container');
var menuPresionado = false;

iconMenu.addEventListener('click', function () {

    if (!menuPresionado) {
        navContainer.classList.add('pushed')
        menuPresionado = true;
    } else {
        navContainer.classList.remove('pushed')
        menuPresionado = false;
    }
})

// ===================================================== Sables Laser =====================================================================

function apagarTitulo(titulo) {
    titulo.style.opacity = '0';
    
}


mango1.addEventListener('click', function () {

     if (!flag1) {
         sable1.style.transform = 'scaleY(1)';
         titulo3.style.opacity = '1';
         flag1 = true;
        parar = setTimeout("apagarTitulo(titulo3)", tiempo);
        sonar(v1,sound1);
     } else {
         sable1.style.transform = 'scaleY(0)';
         titulo3.style.opacity = '0'
         flag1 = false;
         clearTimeout(parar)
     }

})

mango2.addEventListener('click', function () {

    if (!flag2) {
        sable2.style.transform = 'scaleY(1)';
        titulo2.style.opacity = '1';
        flag2 = true;
        parar = setTimeout("apagarTitulo(titulo2)", tiempo);
        sonar(v2,sound2);
    } else {
        sable2.style.transform = 'scaleY(0)';
        titulo2.style.opacity = '0'
        flag2 = false;
        clearTimeout(parar)
    }

})

mango3.addEventListener('click', function () {

    
    if (!flag3) {
        sable3.style.transform = 'scaleY(1)';
        flag3 = true;
        titulo6.style.opacity = '1';
        parar = setTimeout("apagarTitulo(titulo6)", tiempo);
        sonar(v3,sound3);
    } else {
        sable3.style.transform = 'scaleY(0)';
        flag3 = false;
        titulo6.style.opacity = '0';
        clearTimeout(parar);
    }

})

mango4.addEventListener('click', function () {

 
    if (!flag4) {
        sable4.style.transform = 'scaleY(1)';
        flag4 = true;
        titulo5.style.opacity = '1';
        parar = setTimeout("apagarTitulo(titulo5)", tiempo);
        sonar(v4,sound4);
    } else {
        sable4.style.transform = 'scaleY(0)';
        flag4 = false;
        titulo5.style.opacity = '0';
        clearTimeout(parar);
    }

})

mango5.addEventListener('click', function () {

    if (!flag5) {
        sable5.style.transform = 'scaleY(1)';
        flag5 = true;
        titulo4.style.opacity = '1';
        parar = setTimeout("apagarTitulo(titulo4)", tiempo);
        sonar(v5,sound5);
    } else {
        sable5.style.transform = 'scaleY(0)';
        flag5 = false;
        titulo4.style.opacity = '0';
        clearTimeout(parar);
        
    }

})
var v1 = document.getElementsByTagName("audio")[0];
var v2 = document.getElementsByTagName("audio")[0];
var v3 = document.getElementsByTagName("audio")[0];
var v4 = document.getElementsByTagName("audio")[0];
var v5 = document.getElementsByTagName("audio")[0];
var v6 = document.getElementsByTagName("audio")[0];

var sound1 = false; // boolean por cada sable que haga ruido
var sound2 = false;
var sound3 = false;
var sound4 = false;
var sound5 = false;
var sound6 = false;

function sonar(audio,prendido) {
    if (!prendido) {
        audio.play();
        prendido = true;
    } else {
        audio.pause();
        audio.currentTime = 0;
        prendido = false;
    }
}

mango6.addEventListener('click', function () {


    if (!flag6) {
        sable6.style.transform = 'scaleY(1)';
        titulo1.style.opacity = '1'
        flag6 = true;
        parar = setTimeout("apagarTitulo(titulo1)", tiempo); // guardamos en una variable para poder frenar el contador cuando se apaga//  
        sonar(v6,sound6);
    } else {
        sable6.style.transform = 'scaleY(0)';
        titulo1.style.opacity = '0';
        flag6 = false;
        clearTimeout(parar); // apagamos el temporizador si ya no lo necesitamos estando apagado el sable
    }

})

// =================================================== Sonido Laser ============================================================================ 





