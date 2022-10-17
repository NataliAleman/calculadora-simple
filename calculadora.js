var ingresa = prompt( "Selecciona la operacion deseas hacer \n1. Suma \n2. Resta \n3. Multiplicacion \n4. Divison"
);
switch (ingresa) {
  case "1":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    resultado =x + y;
    alert('El resultado de tu suma es: ' + resultado);
    break;

  case "2":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    resultado =x - y;
    alert('El resultado de tu resta es: ' + resultado);
    break;

  case "3":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    resultado =x * y;
    alert('El resultado de tu multipliacion es: ' + resultado);
    break;

  case "4":
    var x = parseInt(prompt("Ingresa un digito"));
    var y = parseInt(prompt("Ingresa otro digito"));
    resultado =x / y;
    alert('El resultado de tu division es: ' + resultado);
    break;

    default: 
    ('Ingrese una opción correcta.');
}


var ingresa = prompt("¿Deseas hacer alguna otra operacion? \n1. Si \n2. No");
if (ingresa == "1") {
  location.reload();
} else {
  alert("Vuelve cuando desees hacer alguna otra operación :)");
}
