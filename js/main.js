// Clase clientes.
class Client {
   constructor(id, name, lastName, dni, birthDate, membership, lastPayment) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.dni = dni;
      this.birthDate = birthDate;
      this.membership = membership;
      this.lastPayment = lastPayment;
   }
}
const clientArray = [
   new Client("1", "Hernán", "Rojas", "39.430.811", "February 7, 1996", 1, "December 5, 2022"),
   new Client("2", "Lucas", "Blautzik", "38.698.553", "September 11, 1995", 2, "November 2, 2022"),
   new Client("3", "Jose Luis", "Inturri", "24.125.961", "December 12, 1965", 0, "November 16, 2022"),
   new Client("4", "Micaela", "Thomas", "38.367.173", "September 10, 1995", 3, "December 6, 2022"),
];

// Clase membresías.
class Membership {
   constructor(level, name, months, price) {
      this.level = level;
      this.name = name;
      this.months = months;
      this.price = price;
   }
}
const membershipArray = [
   new Membership(0, "Suscripción inactiva", 0, 0),
   new Membership(1, "Suscripción Silver (Mensual)", 1, 4500),
   new Membership(2, "Suscripción Gold (Trimestral)", 3, 12500),
   new Membership(3, "Suscripción Platinum (Anual)", 12, 35000),
];

// Funcion membresía activa.
function isMembershipActive(clientIndex) {
   const today = new Date();
   const lastPayment = new Date(clientArray[clientIndex].lastPayment);
   const months = membershipArray[clientArray[clientIndex].membership].months;
   const membershipIsActive = (today - lastPayment) / (1000 * 60 * 60 * 24 * 30) < months;
   if (membershipIsActive) {
      alert(
         "El cliente " + clientArray[clientIndex].name + " " + clientArray[clientIndex].lastName + " tiene una suscripción " + membershipArray[clientArray[clientIndex].membership].name + " activa!"
      )
   } else {
      alert(
         "El cliente " + clientArray[clientIndex].name + " " + clientArray[clientIndex].lastName + " no tiene una suscripción activa."
      )
   }
}

// Funcion agregar meses.
function addMonths(date, n = 1) {
   return new Date(date.setMonth(date.getMonth() + n));
}


// Funcion próxima renovación.
function membershipRenewDate(clientIndex) {
   const today = new Date();
   const lastPayment = new Date(clientArray[clientIndex].lastPayment);
   const months = membershipArray[clientArray[clientIndex].membership].months;
   const membershipIsActive = (today - lastPayment) / (1000 * 60 * 60 * 24 * 30) < months;
   const membershipEnds = addMonths(lastPayment, months).toLocaleDateString();
   if (membershipIsActive) {
      alert(
         "El cliente " + clientArray[clientIndex].name + " " + clientArray[clientIndex].lastName + " tiene una suscripción " + membershipArray[clientArray[clientIndex].membership].name + " activa hasta el " + membershipEnds +
         "\n\nPuede renovar su suscripción entre estas opciones:" +
         "\n\n- " + membershipArray[1].name + " - " + "$" + membershipArray[1].price +
         "\n- " + membershipArray[2].name + " - " + "$" + membershipArray[2].price +
         "\n- " + membershipArray[3].name + " - " + "$" + membershipArray[3].price
      )
   } else {
      alert(
         "El cliente " + clientArray[clientIndex].name + " " + clientArray[clientIndex].lastName + " no tiene una suscripción activa." +
         "\n\nPuede contratar una suscripción entre estas opciones:" +
         "\n\n- " + membershipArray[1].name + " - " + "$" + membershipArray[1].price +
         "\n- " + membershipArray[2].name + " - " + "$" + membershipArray[2].price +
         "\n- " + membershipArray[3].name + " - " + "$" + membershipArray[3].price
      )
   }
}


// Funcion calcular edad.
function getEdad(dateString) {
   let today = new Date()
   let birthDate = new Date(dateString)
   let age = today.getFullYear() - birthDate.getFullYear()
   let diferenciaMeses = today.getMonth() - birthDate.getMonth()
   if (diferenciaMeses < 0 || (diferenciaMeses === 0 && today.getDate() < birthDate.getDate())) {
      age--
   }
   return age
}


// Usuario de administrador habilitado.
const adminAuthName = "admin";
const adminAuthPass = "1234";

// Pidiendo datos de sesión.
const userName = prompt("Ingrese su nombre de usuario.");
const userPassword = prompt("Ingrese su contraseña.");

// Chequeo de credenciales.
function checkAuth(userName, userPassword) {
   let counter = 0;
   while (counter < 3) {
      if (userName === adminAuthName && userPassword === adminAuthPass) {
         return true;
      } else {
         counter++;
         userName = prompt("Ingrese su nombre de usuario.");
         userPassword = prompt("Ingrese su contraseña.");
      }
   }
   return false;
}
checkAuth(userName, userPassword);

// Solicitando y verificando el ID del cliente buscado.
if (checkAuth(userName, userPassword)) {
   let clientId = prompt("Ingrese el ID buscado");
   let clientIndex = clientArray.findIndex(client => client.id == clientId);
   while (clientIndex === -1) {
      alert("No se encuentra el ID buscado, intentelo nuevamente.");
      clientId = prompt("Ingrese el ID buscado.");
      clientIndex = clientArray.findIndex(client => client.id == clientId);
   }
   menu(clientIndex);
} else {
   alert("Ha superado el límite de intentos, intentelo más tarde.");
}




// Menu.
function menu(clientIndex) {
   let option = prompt(
      "1. ID\n2. Información personal\n3. Estado de su membresía.\n4. Próxima fecha de renovacion.\n5. Ingresar otro id de cliente.\n6. Salir"
   );
   while (option !== "6") {
      switch (option) {
         case "1":
            alert("el ID de este cliente es: " + clientArray[clientIndex].id + "\n")
            break;
         case "2":
            alert(
               "Nombre: " + clientArray[clientIndex].name + " " + clientArray[clientIndex].lastName + "\n" +
               "Edad: " + getEdad(clientArray[clientIndex].birthDate) + "\n" +
               "DNI: " + clientArray[clientIndex].dni + "\n"
            );
            break;
         case "3":
            isMembershipActive(clientIndex);
            break;
         case "4":
            membershipRenewDate(clientIndex);
            break;
         case "5":
            if (checkAuth(userName, userPassword)) {
               let clientId = prompt("Ingrese el ID buscado");
               let clientIndex = clientArray.findIndex(client => client.id == clientId);
               while (clientIndex === -1) {
                  alert("No se encuentra el ID buscado, intentelo nuevamente.");
                  clientId = prompt("Ingrese el ID buscado.");
                  clientIndex = clientArray.findIndex(client => client.id == clientId);
               }
               menu(clientIndex);
            } else {
               alert("Ha superado el límite de intentos, intentelo más tarde.");
            }
            break;
         default:
            alert("Opción incorrecta.");
            break;
      }
      option = prompt(
         "1. ID\n2. Información personal\n3. Estado de su membresía.\n4. Próxima fecha de renovacion.\n5. Ingresar otro id de cliente.\n6. Salir"
      );
   }
}