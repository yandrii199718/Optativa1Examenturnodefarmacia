
var EmailUser =  document.getElementById("reg-correo");
var ContraseñaRegistro = document.getElementById("reg-pass");
var ConfirmeContraseña = document.getElementById("reg-rep-pass");
var btnRegistrar = document.getElementById('farm');
 

btnRegistrar.addEventListener ('submit', function(event){
event.preventDefault();


if (EmailUser.value === null || EmailUser.value === "")
 {
    alert("El campo Email esta vacio");
    return false;
 } 
if (ContraseñaRegistro.value === null || ContraseñaRegistro.value === "")
{
    alert("El campo Contraseña  esta vacio");
    return false;
} 
if (ConfirmeContraseña.value === null || ConfirmeContraseña.value === "")
{
    alert("El campo confirme contraseña  esta vacio");
    return false;
} 
else{
    alert("Registro Exitoso");
 location.href="index.html"

} 

});
