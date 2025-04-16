const inputArrivalDate = document.getElementById('date__input--arrival');
const inputDepartureDate = document.getElementById('date__input--departure');

// Obtener la fecha actual en formato YYYY-MM-DD
const currentDate = new Date();
const currentDay = currentDate.getDate().toString().padStart(2, '0');
const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const currentYear = currentDate.getFullYear();
const currentDateString = `${currentYear}-${currentMonth}-${currentDay}`;
const departureDate = new Date(currentDate);

departureDate.setDate(departureDate.getDate() + 3);
const departureDay = departureDate.getDate().toString().padStart(2, '0');
const departureMonth = (departureDate.getMonth() + 1).toString().padStart(2, '0');
const departureYear = departureDate.getFullYear();
const currentDateStringDeparture = `${departureYear}-${departureMonth}-${departureDay}`;

// Asignar la fecha al input (formato correcto)
inputArrivalDate.value = currentDateString;
inputDepartureDate.value = currentDateStringDeparture; // Opcional: misma fecha en salida