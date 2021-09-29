

function palindrome(str) {
  //variable para convertir todo en minusculas
  var minusculas = str.toLowerCase()

 //variable para eliminar todo caracter no alfanumerico
  var alfaNum = minusculas.replace(/[_-]*[^A-Za-z0-9]\d*\s*/g, '');

//variable para invertir la cadena principal (alfaNum)
  var alfaNumReverso = alfaNum.split('').reverse().join('');

// Si la cadena principal (alfaNum) coincide con la cadena en reversa (alfaNumReverso)
  if ( alfaNum === alfaNumReverso ) {
    console.log("verdadero")
    return true;
    //devuelve verdadero y lo imprime en consola
  } else {
    console.log("Falso")
    return false;
 //devuelve falso y lo imprime en consola
  }
}

//cadenas para analizar
palindrome("1 eye for of 1 eye.");
palindrome("_eye")

