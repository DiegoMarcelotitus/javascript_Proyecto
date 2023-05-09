//inicio de calculo enteres y cuotas

function calcula_interes(monto, cuotas) {

    if (cuotas == 1) {
      let interes = monto * 0.05;
      return interes;
    }
    else if (cuotas == 3) {
      let interes = monto * 0.18;
      return interes;
    }
    else if (cuotas == 6) {
      let interes = monto * 0.45;
      return interes;
    }
    else if (cuotas == 9) {
      let interes = monto * 0.85;
      return interes;
    }
    else if (cuotas == 12) {
      let interes = monto * 1;
      return interes;
    }
  }
  
  console.log("Bienvenido/a Prestamos ELgarca");
  
  let monto = 0;
  
  //inicio de bucle 

  while (monto == 0) {
    monto = parseInt(prompt("Ingrese el monto a solicitar y para salir el número 0: "));
    
    if (monto == 0) {
      console.log("Saliendo...");
      break;
    }
  
    let cuotas = parseInt(prompt("Ingrese el número de cuotas (1, 3, 6, 9, 12): "));
    let interes = calcula_interes(monto, cuotas);
    let total = monto + interes;
  
    console.log("Prestamo pedido: ", monto);
    console.log("En cantidad de cuotas:", cuotas);
    console.log("Su total con interés:", total);
    console.log("Pagas en cuotas:", total / cuotas);
  }





