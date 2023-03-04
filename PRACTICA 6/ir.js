function prueba(){

var u=document.getElementById("usuario").value;
var n=document.getElementById("nombre").value;
var a=document.getElementById("pass").value;
var c=document.getElementById("correo").value;
var f=document.getElementById("form__mensaje-exito").value;

if(u=="JOSE" && n=="JOSE" && a=="JOSE" && c=="JOSE"){

alert("te has registrado");

window.location="practicas/!PAGINA PRINCIPAL.html";

}else{

alert("datos erroneos");

}


}
