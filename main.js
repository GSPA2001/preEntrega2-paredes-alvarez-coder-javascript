console.log("Holaa 👋🏼, está 🥁🥁 es la segunda pre-entrega");
//Se vera en especifico cuando entre al HTML reservas
//Modificacion de la primera-entrega aplicando el uso de objetos, arrays y funciones del orden supeior
class Plato {
  constructor(numero, nombre, precio) {
    this.numero = numero;
    this.nombre = nombre;
    this.precio = precio;
  }
  getDescripcion() {
    return `El plato número ${this.numero} es: ${this.nombre} - Precio: $${this.precio}`;
  }
}

const listaPlatosPeruanos = [];

listaPlatosPeruanos.push(new Plato(1, 'Ceviche', 2200));
listaPlatosPeruanos.push(new Plato(2, 'Pollo Dorado', 950));
listaPlatosPeruanos.push(new Plato(3, 'Lomo Saltado', 1950));
listaPlatosPeruanos.push(new Plato(4, 'Chaufa', 1650));
listaPlatosPeruanos.push(new Plato(5, 'Rabas', 2600));
listaPlatosPeruanos.push(new Plato(6, 'Tamales', 600));
listaPlatosPeruanos.push(new Plato(7, 'Cabrito', 1900));
listaPlatosPeruanos.push(new Plato(8, 'Jalea de mariscos', 3150));


function obtenerListaPlatos(personas) {
  let listaPlatos = [];
  for (let i = 1; i <= personas; i++) {
    let platoSeleccionado = prompt(`Ingresa el número del plato para la persona ${i}:\n1. Ceviche ($2200)\n2. Pollo Dorado ($950)\n3. Lomo Saltado ($1950)\n4. Chaufa ($1650)\n5. Rabas ($2600)\n6. Tamales ($600)\n7. Cabrito ($1900)\n8. Jalea de mariscos ($3150)`);
    platoSeleccionado = parseInt(platoSeleccionado);
    if (platoSeleccionado < 1 || platoSeleccionado > listaPlatosPeruanos.length) {
      alert("Número de plato inválido. Por favor, selecciona un número de plato válido.");
      i--;
    } else {
      let plato = listaPlatosPeruanos[platoSeleccionado - 1];
      listaPlatos.push(new Plato(i, plato.nombre, plato.precio));
    }
  }
  return listaPlatos;
}

function mostrarPlatos(listaPlatos) {
  listaPlatos.forEach(plato => {
    alert(`El plato número ${plato.numero} es: ${plato.nombre} - Precio: $${plato.precio}`);
    console.log(`--> El plato número ${plato.numero} es: ${plato.nombre} - Precio: $${plato.precio}`);
  });
}
//Para mejora la idea, que la persona tambien tenga acceso a tener un vista previa a lo que gastara, con lo que reserva
function calcularPresupuesto(listaPlatos) {
  let total = 0;
  listaPlatos.forEach(plato => {
    total += plato.precio;
  });
  return total;
}

let edad = parseInt(prompt("Para reservar en este lugar debes ser mayor de edad. ¿Cuál es tu edad?"));
console.log("--> Edad: " + edad);

if (edad >= 18) {
  alert("Puedes ingresar a reservar en el sitio.");
  console.log("--> Puede ingresar a reservar al sitio.");
} else {
  alert("No puedes reservar, no eres mayor de edad.");
  console.log("--> No puede reservar, no es mayor de edad");
}

let reserva = prompt("Ingresa el nombre de la persona que realiza la reserva.");
alert("El nombre de la persona que realiza la reserva es: " + reserva);
console.log("--> Nombre de la persona que realiza la reserva: " + reserva);

let personas = parseInt(prompt("¿Para cuántas personas deseas realizar la reserva?"));
alert("La cantidad de personas que asistirán a la reserva son: " + personas);
console.log("--> Cantidad de personas: " + personas);

let listaPlatos = obtenerListaPlatos(personas);

mostrarPlatos(listaPlatos);

let presupuestoTotal = calcularPresupuesto(listaPlatos);
alert(`El presupuesto total para la reserva es: $${presupuestoTotal.toFixed(2)}`);

alert("Gracias por reservar en el Sabor Norteño. ¡Esperamos verte pronto!");