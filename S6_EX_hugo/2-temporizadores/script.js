"use strict";

const now = new Date();
console.log(now);

const intervalID = setInterval(() => {
  let moment = new Date();
  let daysExecution;
  let hoursExecution;
  let minutesExecution;
  let secondsExecution;

  if (moment.getSeconds() < now.getSeconds()) {
    secondsExecution = moment.getSeconds() + 60 - now.getSeconds();
    minutesExecution = moment.getMinutes() - 1 - now.getMinutes();
  } else {
    secondsExecution = moment.getSeconds() - now.getSeconds();
    minutesExecution = moment.getMinutes() - now.getMinutes();
  }
  if (moment.getMinutes() < now.getMinutes()) {
    minutesExecution = moment.getMinutes() + 60 - now.getMinutes();
    hoursExecution = moment.getHours() - 1 - now.getHours();
  } else {
    hoursExecution = moment.getHours() - now.getHours();
  }
  if (moment.getHours() < now.getHours()) {
    hoursExecution = moment.getHours() + 24 - now.getHours();
    daysExecution = moment.getDay() - 1 - now.getDay();
  } else {
    daysExecution = moment.getDay() - now.getDay();
  }

  console.log(
    `O tempo transcurrido dende o inicio é ${daysExecution} dí[a|as], ${hoursExecution} hor[a|as], ${minutesExecution} minut[0|os] e ${secondsExecution} segundos`
  );
}, 5000);

function temporizador(tiempo, unidad) {
  let timing;
  if (unidad === "D") {
    timing = tiempo * 24 * 3600 * 1000;
  } else if (unidad === "H") {
    timing = tiempo * 3600 * 1000;
  } else if (unidad === "M") {
    timing = tiempo * 60 * 1000;
  } else {
    timing = tiempo * 1000;
  }
  setTimeout(() => {
    console.log("El programa ha finalizado");
    clearInterval(intervalID);
  }, timing);
}

temporizador(20, "S");
