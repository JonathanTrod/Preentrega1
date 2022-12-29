const comprarBonos = () => {
  // Declaro e inicializo mis variables
  let masClases = false;
  let actividad = "";
  let clasesMensuales = 0;
  let clasesTotales = 0;
  let precioMensual = 0;
  let precioClase = 0;

  // ciclo DO... WHILE
  do {
    actividad = prompt(
      "El gimnasio cuenta con las siguientes actividades y precios POR CLASE:\n" +
        "CrossFit: $300 \n" +
        "Spinning: $350 \n" +
        "Pilates: $350 \n" +
        "Yoga: $200 \n" +
        "Indicá la actividad que deseas realizar: "
    ).toUpperCase();
    clasesMensuales = parseInt(
      prompt(
        "Indicá cuántas clases al mes asistirás: \n" +
          "Recordá que si tu abono mensual supera los $1500 se aplicará un 10% de descuento!"
      )
    );
    // WHILE
    while (Number.isNaN(clasesMensuales) || clasesMensuales === 0) {
      // IF ELSE
      if (clasesMensuales !== 0) {
        alert("Ingresá un número.");
      } else {
        alert("La cantidad de clases debe ser mayor a cero.");
      }
      // IF ELSE
      clasesMensuales = parseInt(
        prompt("Indique cuántas clases al mes asistirá: ")
      );
    }
    // WHILE

    // SWITCH
    switch (actividad) {
      case "CROSSFIT":
        precioClase = 300;
        break;
      case "SPINNING":
        precioClase = 350;
        break;
      case "PILATES":
        precioClase = 350;
        break;
      case "YOGA":
        precioClase = 200;
        break;
      default:
        alert("Alguno de los datos ingresados no es correcto.");
        precioClase = 0;
        clasesMensuales = 0;
    }
    // SWITCH

    clasesTotales += clasesMensuales;
    precioMensual += precioClase * clasesTotales;
    masClases = confirm("¿Desea contratar más clases?");
  } while (masClases);

  // ciclo DO... WHILE
  // funcion descuento
  let totalConDescuento = calcularDescuento(precioMensual);
  // funcion descuento
  alert(
    "Contrataste " +
      clasesTotales +
      " clases mensuales en nuestro gimnasio. Deberás abonar una cuota de $" +
      totalConDescuento +
      " al mes."
  );

  let finalizarCompra = confirm("¿Desea finalizar?");

  if (finalizarCompra) alert("¡Te esperamos en el gimnasio!");
  if (!finalizarCompra)
    alert(
      "Recordá que el ejercicio es clave para la salud física y mental. ¡Esperamos que vuelvas pronto!"
    );
};

// ## FUNCION CALCULAR DESCUENTO ##

const calcularDescuento = (precioMensual) => {
  let totalConDescuento = 0;
  if (precioMensual >= 1500) {
    totalConDescuento = precioMensual * 0.9;
    return totalConDescuento;
  } else {
    return precioMensual;
  }
};

comprarBonos();
