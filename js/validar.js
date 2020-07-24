function validar() {
    var nombre, correo, telefono , mensaje , expersion ;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    mensaje = document.getElementById("mensaje").value;
  
    
    expersion = /\W+@\W+\.+[a-z]/;
    
 if(nombre ==="" || correo ==="" || telefono ==="" || mensaje ==="" ){
     alert("Todos los campos son obligatorio");
     return false;
 }   
    
    else if (nombre.length>20){
        alert("El nombre es muy largo ");
        return false;
        
    }
    
    else if (correo.length>100){
        alert("El correo es muy largo ");
        return false;
        
    }
    else if (expersion.test(correo)){
        alert("El correo no es válido");
        return false;
        
    }
    
    else if (telefono.length>10){
        alert("El telefono es muy largo ");
        return false;
        
    }
    else if (isNaN(telefono)){
        alert("El el telefono ingresado no es un número");
        return false;
    
    }
    

    
     
}