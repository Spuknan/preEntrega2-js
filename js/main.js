


// Clase clientes.
class Client {
   constructor(id, name, surname, dni, birthDate, membership, lastPayment) {
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.dni = dni;
      this.birthDate = birthDate || new Date();
      this.membership = membership;
      this.lastPayment = lastPayment || new Date();
   }
}

const client00 = new Client("00", "Hernán", "Rojas", "39.430.811", "February 7, 1996", 1, "December 5, 2022");
const client01 = new Client("01", "Lucas", "Blautzik", "38.698.553", "September 11, 1995", 2, "March 2, 2022");
const client02 = new Client("02", "Jose Luis", "Inturri", "24.125.961", "December 12, 1985", 0, "November 22, 2022");
const client03 = new Client("03", "Micaela", "Thomas", "38.367.173", "September 10, 1995", 1, "December 6, 2022");

let clientsArray = [client00, client01, client02, client03];


// Usuario de administrador.
const adminNameAuth = "admin";
const adminPassAuth = "1234";

// Login.
const userName = prompt("Por favor, ingrese su usuario.");
const userPassword = prompt("Por favor, ingrese su contraseña.");

// Funcion de verificación.
let loginAttempts = 0;
function loginCheck(userName, userPassword) {
   if (userName === adminNameAuth && userPassword === adminPassAuth) {
      alert("Credenciales correctas. Bienvenido " + userName + "!");
   } else {
      loginAttempts++;
      if (loginAttempts < 3) {
         alert("Credenciales incorrectas. Intente nuevamente.");
         userName = prompt("Por favor, ingrese su usuario.");
         userPassword = prompt("Por favor, ingrese su contraseña.");
         loginCheck(userName, userPassword);
      } else {
         alert("Demasiados intentos fallidos. Intente nuevamente mas tarde.");
         return false;
      }
   }
}

// Funcion para pedir ID.
function askForClientId() {
   let selectedClientId = prompt("Por favor, ingrese el ID del cliente.");
   return selectedClientId;
}

// Funcion para verificar si el ID corresponde a un cliente activo.
function checkClientId(selectedClientId) {
   for (var i = 0; i < clientsArray.length; i++) {
      if (clientsArray[i].id === selectedClientId) {
         return true;
      }
   }
   return false;
};

// Funcion menu.
function menu() {
   prompt(
      "Elija la opción que desee revisar." + "\n" +
      "\n   1) Información personal del cliente." +
      "\n   2) Información sobre la membresía vigente." +
      "\n   3) Información sobre la renovación de la membresía."
   );
};


// Llamando a las funciones.
loginCheck(userName, userPassword);
console.log(loginCheck());

let selectedClientId = askForClientId();
console.log(selectedClientId);

let isItValid = checkClientId(selectedClientId);
console.log(isItValid);

if (isItValid) {
   menu();
} else {
   alert("El cliente no se encuentra registrado. Por favor ingrese otro ID.");
   askForClientId();
};