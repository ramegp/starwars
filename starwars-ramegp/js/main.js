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

let titulo1 = document.getElementById('titulo1')
let titulo2 = document.getElementById('titulo2')
let titulo3 = document.getElementById('titulo3')



var tiempo = 3000;

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


// btnVader.addEventListener('click', function () {

//     if (!presionadoVader) {
//         dataInformacionVader.style.display = 'block';
//         presionadoVader = true
//     } else {
//         dataInformacionVader.style.display = 'none';
//         presionadoVader = false
//     }

// });

// closeVader.addEventListener('click', function () {
//     dataInformacionVader.style.display = 'none';
//     presionadoVader = false
// })
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



// window.addEventListener('click',function (e) {
//     if(e.target != menu ){
//         navContainer.classList.remove('pushed')
//         menuPresionado = false;
//     }
// })

// $(".toggle-icon").click(function() {
//     $('#nav-container').toggleClass("pushed");
//   });

// ===================================================== Sables Laser =====================================================================

function apagarTitulo(titulo) {
    titulo.style.opacity = '0';
    
}


mango1.addEventListener('click', function () {
     sonar();
     if (!flag1) {
         sable1.style.transform = 'scaleY(1)';
         titulo3.style.opacity = '1'
         flag1 = true;
        parar = setTimeout("apagarTitulo(titulo3)", tiempo);
     } else {
         sable1.style.transform = 'scaleY(0)';
         titulo3.style.opacity = '0'
         flag1 = false;
         clearTimeout(parar)
     }

})

mango2.addEventListener('click', function () {

    sonar();
    if (!flag2) {
        sable2.style.transform = 'scaleY(1)';
        titulo2.style.opacity = '1'
        flag2 = true;
        parar = setTimeout("apagarTitulo(titulo2)", tiempo);
    } else {
        sable2.style.transform = 'scaleY(0)';
        titulo2.style.opacity = '0'
        flag2 = false;
        clearTimeout(parar)
    }

})

mango3.addEventListener('click', function () {

    sonar();
    if (!flag3) {
        sable3.style.transform = 'scaleY(1)';
        flag3 = true;
    } else {
        sable3.style.transform = 'scaleY(0)';
        flag3 = false;
    }

})

mango4.addEventListener('click', function () {

    sonar();
    if (!flag4) {
        sable4.style.transform = 'scaleY(1)';
        flag4 = true;
    } else {
        sable4.style.transform = 'scaleY(0)';
        flag4 = false;
    }

})

mango5.addEventListener('click', function () {

    sonar();
    if (!flag5) {
        sable5.style.transform = 'scaleY(1)';

        flag5 = true;
    } else {
        sable5.style.transform = 'scaleY(0)';
        flag5 = false;
    }

})
var v = document.getElementsByTagName("audio")[0];
var sound = false; // boolean por cada sable que haga ruido

//voy a necesitar un boolean por cada sable
function sonar() {
    if (!sound) {
        v.play();
        sound = true;
    } else {
        v.pause();
        v.currentTime = 0;
        sound = false;
    }
}

mango6.addEventListener('click', function () {

    sonar();

    if (!flag6) {
        sable6.style.transform = 'scaleY(1)';
        titulo1.style.opacity = '1'
        flag6 = true;
        parar = setTimeout("apagarTitulo(titulo1)", tiempo); // guardamos en una variable para poder frenar el contador cuando se apaga//  
    } else {
        sable6.style.transform = 'scaleY(0)';
        titulo1.style.opacity = '0';
        flag6 = false;
        clearTimeout(parar); // apagamos el temporizador si ya no lo necesitamos estando apagado el sable
    }

})

// =================================================== Sonido Laser ============================================================================ 





