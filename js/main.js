/* CONCEPTOS A ABORDAR */

// ESTRUCTURA, VARIABLES Y OBJETOS //

// Estructura HTML
// Variables
// Funciones
// Objetos
// Arrays
// Metodos de busqueda y filtrado sobre el array

/* MEMBRESÍAS GIMNASIO */

// El simulador debe entregarme:
   // Información básica del cliente.
   // Información sobre la membresía.
   // Estado de la membresía.
   // Tipo de membresía activa.
   // Fecha de renovación.
   // Precio según tipo de membresía a renovar.
   // Nueva fecha de renovación.
//

// Clientes
class Client {
   constructor(id, name, surname, birthDate, membership, lastPayment) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.birthDate = birthDate || new Date();
      this.membership = membership;
      this.lastPayment = lastPayment || new Date();
   }
}

const client00 = new Client("00", "Hernán", "Rojas", "February 7, 1996", 1, "December 5, 2022");
const client01 = new Client("01", "Lucas", "Blautzik", "September 11, 1995", 2, "March 2, 2022");
const client02 = new Client("02", "Jose Luis", "Inturri", "December 12, 1985", 0, "November 22, 2022");
const client03 = new Client("03", "Micaela", "Thomas", "September 10, 1995", 1, "December 6, 2022");

let clientsArray = [client00, client01, client02, client03];


// Membresías
class Membership {
   constructor(id, name, description, duration, price) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.duration = duration;
      this.price = price;
   }
}

const membershipNull = new Membership(0, "Inactiva", "No ha sido dado de alta", "No aplica", 0);
const membershipSilver = new Membership(1, "Silver", "Membresía mensual", "Un mes", 4500);
const membershipGold = new Membership(2, "Gold", "Membresía trimestral", "Tres meses", 12500);
const membershipPlatinum = new Membership(3, "Platinum", "Membrecía anual", "Un año", 45000);
const arrayMembership = [membershipNull, membershipSilver, membershipGold, membershipPlatinum];


// Verificación.
let adminName = prompt("Ingrese su usuario de administrador.");
let adminPass = prompt("Ingrese su contraseña de admisitrador.");

const adminNameAuth = "admin";
const adminPassAuth = "1234";

for (i = 0; i < 3; i++) {
   if (adminName === adminNameAuth && adminPass === adminPassAuth) {
      alert("Usuario autorizado." + "\nBienvenidx.")
      break;
   } else if (i < 2) {
      alert("Credenciales incorrectas, intente nuevamente." + "\n 2/3");
      adminName = prompt("Ingrese  su usuario de administrador.");
      adminPass = prompt("Ingrese su contraseña de administrador.");
      if (adminName === adminNameAuth && adminPass === adminPassAuth) {
         alert("Usuario autorizado." + "\nBienvenidx.");
         break;
      }
   } else if (i === 2) {
      alert("Usuario bloqueado. Ha superado el limite de intentos." + "\n 3/3");
   }
};



// Ingresar ID.
let promptId = prompt("Por favor ingrese el ID del cliente.");

// Check ID.
function checkId(id) {
   for (var i = 0; i < clientsArray.length; i++) {
      if (clientsArray[i].id == id) {
         return clientsArray[i];
      }
   }
}

// Buscando el array del ID.
let clientId = checkId(promptId);

// Menu de selección.
function menu() {
   let option = parseInt (
      prompt(
      "Por favor, ingrese la opción que desea revisar:" + 
      "\n" + 
      "\n   1) Datos personales del cliente." +
      "\n   2) Datos de la membresía." +
      "\n   3) Fecha de renovación." + "\n"
      )
   );
   return option;
}

// Función para datos personales.
function personalInfo() {
   alert (
   "ID del cliente: " + promptId +
   "\nNombre: " + clientId.name + " " + clientId.surname +
   "\n"
   )
   menu();
};

// Función para datos de membresía.
function membershipInfo() {
   alert (
      "ID del cliente: " + promptId +
      "\nMembresía activa: " + clientId.membership
   )
   menu();
};

// Función para fecha de renovación.
function membershipRenovation() {
   alert (
      "ID del cliente: " + promptId +
      "\nFecha de renovación: "
   )
   menu();
};

// Llamando a la acción del menu.
let option = menu();
switch (option) {
   case 1:
      personalInfo();
   case 2:
      membershipInfo();
   case 3:
      membershipRenovation();
   default:
      alert("Elija una oppción correcta");
      menu();
}