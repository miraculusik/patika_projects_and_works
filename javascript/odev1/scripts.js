"use strict";

let name_ = prompt("Adinizi giriniz...");

console.log(name_, typeof name_);
document.querySelector("#myName").textContent = name_;

const days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];
const showDate = () => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  document.querySelector(".clock").textContent = `${h}:${m}:${s} ${
    days[d.getDay()]
  }`;
};
setInterval(showDate);
