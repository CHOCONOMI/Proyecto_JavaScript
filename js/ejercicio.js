//IF dentro de otro IF

//var precio =prompt("Dime cual fue el precio final -3-")

//if (precio >= 100){
    
  //  var condescuento= precio - (precio*10/100);
    
    //alert("¡Sorpresa! Q" + precio + "Tiene un descuento del 10% uwu, total a pagar Q" + condescuento + ":D")
    
//} else{
//    alert ("Precio completo, sin descuento sowy :'D ")
//}


var user = prompt("Usuario:")


if(user == "nnzamoras"){
    
    var password = prompt("Contraseña")
    
    if(password == "gatitos123"){
        alert("hola " + user)
    }else{
        alert("Contraseña incorrecta")
    }
}else{
    alert("Usuario no encontrado")
}