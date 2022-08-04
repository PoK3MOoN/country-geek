import { gradoviIgraCanvas } from "./pogodiGradove.js";

export const zastava = document.querySelector(".zastava2");
export const zastaveIgra = document.querySelector(".zastave-igra-div");
export const potvrdiIme = document.querySelector(".potvrdi");
export const obrisiIme = document.querySelector(".obrisi");
export const unesenaDrzava = document.querySelector(".unesena-drzava");
export const sliciceH = document.querySelectorAll(".slicica");
export const lijevoZastave = document.querySelector(".lijevoZastave");
export const desnoZastave = document.querySelector(".desnoZastave");
export const vrijemeZastaveEl = document.querySelector(".minuteZastave");
export const trenutnaDrzavaZastave = document.querySelector(
  ".trenutnaDrzavaPoReduZastave"
).firstChild;
export const lijevoZastaveEvListener = function (callBack) {
  lijevoZastave.addEventListener("click", callBack);
};
export const desnoZastaveEvListener = function (callBack) {
  desnoZastave.addEventListener("click", callBack);
};

export const potvrdiImeEvListener = function (callBack) {
  potvrdiIme.addEventListener("click", callBack);
};
export const potvrdiImeEvSklanjanje = function (callBack) {
  potvrdiIme.removeEventListener("click", callBack);
};
export const obrisiImeEvListener = function (callBack) {
  obrisiIme.addEventListener("click", callBack);
};
export const obrisiImeEvSklanjanje = function (callBack) {
  obrisiIme.removeEventListener("click", callBack);
};

export const oneTapSliciceZastaveEvListener = function (item, callBack) {
  item.addEventListener("click", callBack);
};
export const unesenaDrzavaEvListener = function (callBack) {
  unesenaDrzava.addEventListener("keyup", callBack);
};
export const pocniZastaveEvListener = function (callBack) {
  zastaveIgra.addEventListener("click", callBack);
};
