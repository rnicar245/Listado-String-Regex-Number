/**
 * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
 * Métodos a utilizar:
 * miVentana = window.open('','','width=200,height=200');
 * miVentana.document.open();
 * miVentana.document.write() 
 * Añade el esqueleto básico: html, head, title, body, ul...
 * miVentana.document.close();
 * @author Rafael Jesús Nieto Cardador
 */
{
  let inicio = function(){
    document.getElementById("capitaliza").addEventListener("blur", capitaliza);
    document.getElementById("invierte").addEventListener("blur", invierte);
    document.getElementById("camelcase").addEventListener("blur", camelcase);
    document.getElementById("nCamelcase").addEventListener("blur", nCamelcase);
    document.getElementById("finaliza2").addEventListener("blur", finaliza);
    document.getElementById("comienza2").addEventListener("blur", comienza);
    document.getElementById("dni").addEventListener("blur", dni);
    document.getElementById("matricula").addEventListener("blur", matricula);
    document.getElementById("cp").addEventListener("blur", cp);
    document.getElementById("mac").addEventListener("blur", mac);
  }

  let capitaliza = function(){
    let resultado = document.getElementById("rCapitaliza");
    let cadena = document.getElementById("capitaliza").value;
    try{
      if(cadena == ""){
        throw "No deje el campo de texto vacío.";
      }
      cadena = cadena.trim().split(" ");
      for(i in cadena){
        cadena[i] = cadena[i].split("");
        cadena[i][0] = cadena[i][0].toUpperCase();
        cadena[i] = cadena[i].join("");
      } 
      resultado.style.color = "black";
      resultado.innerHTML = cadena.join(" ");
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let invierte = function(){
    let resultado = document.getElementById("rInvierte");
    let cadena = document.getElementById("invierte").value;
    try{
      if(cadena == ""){
        throw "No deje el campo de texto vacío.";
      }
      cadena = cadena.trim().split(" ");

      for(i in cadena){
        cadena[i] = cadena[i].split("");
        for(j in cadena[i]){
          if(cadena[i][j] != cadena[i][j].toUpperCase()){
            cadena[i][j] = cadena[i][j].toUpperCase();
          }else{
            cadena[i][j] = cadena[i][j].toLowerCase();
          }
        }
      }

      resultado.style.color = "black";
      resultado.innerHTML = cadena.join(" ");

    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let camelcase = function(){
    let resultado = document.getElementById("rCamelcase");
    let cadena = document.getElementById("camelcase").value;
    try{
      if(cadena == ""){
        throw "No deje el campo de texto vacío.";
      }

      cadena = cadena.trim().split(" ");
      for(i in cadena){
        cadena[i] = cadena[i].split("");
        if(i == 0 && cadena[i][0] == cadena[i][0].toUpperCase()){
          cadena[i][0] = cadena[i][0].toLowerCase();
        }else{
          cadena[i][0] = cadena[i][0].toUpperCase();
        }
        cadena[i] = cadena[i].join("");
      }

      resultado.style.color = "black";
      resultado.innerHTML = cadena.join(" ");
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let nCamelcase = function(){
    let resultado = document.getElementById("rNCamelcase");
    let cadena = document.getElementById("nCamelcase").value;
    try{
      if(cadena == ""){
        throw "No deje el campo de texto vacío.";
      }

      cadena = cadena.trim().split(" ");

      for(i in cadena){
        cadena[i] = cadena[i].split("");
        cadena[0][0] = cadena[0][0].toUpperCase();
        if(cadena[i][0] == cadena[i][0].toUpperCase() && i != 0){
          cadena[i][0] = cadena[i][0].toLowerCase();
          cadena[i].unshift(" ");
        }
        cadena[i] = cadena[i].join(""); 
      }

      resultado.style.color = "black";
      resultado.innerHTML = cadena.join(" ");
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let finaliza = function(){
    let resultado = document.getElementById("rFinaliza");
    let cadena1 = document.getElementById("finaliza1").value;
    let cadena2 = document.getElementById("finaliza2").value;
    try{
      if(cadena1 == "" || cadena2 == ""){
        throw "No deje los campos de texto vacíos.";
      }
      resultado.style.color = "black";

      if(cadena1.endsWith(cadena2)){
        resultado.innerHTML = cadena1+" acaba con "+cadena2+".";
      }else{
        resultado.innerHTML = cadena1+" no acaba con "+cadena2+".";
      }
      
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let comienza = function(){
    let resultado = document.getElementById("rComienza");
    let cadena1 = document.getElementById("comienza1").value;
    let cadena2 = document.getElementById("comienza2").value;
    try{
      if(cadena1 == "" || cadena2 == ""){
        throw "No deje los campos de texto vacíos.";
      }
      resultado.style.color = "black";

      if(cadena1.startsWith(cadena2)){
        resultado.innerHTML = cadena1+" empieza con "+cadena2+".";
      }else{
        resultado.innerHTML = cadena1+" no empieza con "+cadena2+".";
      }
      
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let dni = function(){
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";

    let dni = document.getElementById("dni").value;
    let resultado = document.getElementById("rDni");
    let exec = /^(\d{8})([a-zA-Z]$)/.exec(dni);
    try{
      if(dni == ""){
        throw "No deje el campo de texto vacío.";
      }
      if(exec == null){
        throw "El formato del DNI introducido es erróneo. Ej: 12345678A";
      }

      resultado.style.color = "black";
      if(exec[2] == letras[exec[1]%23]){
        resultado.innerHTML = "El DNI introducido es válido.";
      }else{
        resultado.innerHTML = "El DNI introducido no es válido.";
      }
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let matricula = function(){
    let matricula = document.getElementById("matricula").value;
    let resultado = document.getElementById("rMatricula");
    let exec = /^\d{4} ?([a-zA-Z]{3})$/.exec(matricula);
    
    try{
      if(matricula == ""){
        throw "No deje el campo de texto vacío.";
      }
      if(exec == null){
        throw "El formato de la matrícula introducida es erróneo. Ej: 1234BCD";
      }

      resultado.style.color = "black";
      if(/[aeiouñAEIOUÑ]/.test(exec[1])){
        resultado.innerHTML = "La matrícula es incorrecta ya que no tienen vocales.";
      }else{
        resultado.innerHTML = "La matrícula introducida es válida.";
      }
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let cp = function(){
    let codigo = document.getElementById("cp").value;
    let resultado = document.getElementById("rCp");
    let exec = /^(0[1-9]|[1-4]\d|5[0-2])0\d{2}$/.exec(codigo);
    
    try{
      if(codigo == ""){
        throw "No deje el campo de texto vacío.";
      }
      if(exec == null){
        throw "El formato del código postal es incorrecto. Ej: 12034";
      }

      resultado.style.color = "black";
      resultado.innerHTML = "El código postal introducido es válido.";
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  let mac = function(){
    let codigo = document.getElementById("mac").value;
    let resultado = document.getElementById("rMac");
    let exec = /^((\d|[a-fA-F]){2}-?){6}$/.exec(codigo);
    
    try{
      if(codigo == ""){
        throw "No deje el campo de texto vacío.";
      }
      if(exec == null){
        throw "La dirección MAC es incorrecta. Ej: A1-B2-C3-D4-E5-F6";
      }

      resultado.style.color = "black";
      resultado.innerHTML = "La dirección MAC introducida es correcta.";
    }catch(ex){
      resultado.style.color = "red";
      resultado.innerHTML = ex;
    }
  }

  

  document.addEventListener("DOMContentLoaded", inicio);
}