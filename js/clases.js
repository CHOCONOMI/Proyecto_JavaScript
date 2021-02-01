alert("CLiquea sobre cualquier cosa, y...  ¿diviertete? ¡Si! Eso :D");

var titulo = document.getElementById('saludo');
var box = document.getElementById('cajita');
var btn = document.getElementById('boton');


function ccolor() {
    
    titulo.classList.remove("saludo");
    
    titulo.classList.add("nuevosaludo");
    
    box.classList.remove("cajita");
    
    box.classList.add("nuevacajita");

}

function letras() {
    
    titulo.classList.remove("saludo");
    
    titulo.classList.add("nuevosaludo");
}

function bigbox() {
    
    box.classList.remove("cajita");
    
    box.classList.add("nuevacajita");
    
}


btn.addEventListener('click',ccolor);

saludo.addEventListener('click',letras);

box.addEventListener('click',bigbox);


