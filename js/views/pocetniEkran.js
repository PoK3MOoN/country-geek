//Selektori
export const countryGeek = document.querySelector("h1");
export const pocetakIgre = document.querySelector(".pocetak--igre");
export const pocetakIgreDiv = document.querySelector(".kutija--pocetak--igre");
export const tijelo = document.querySelector("body");
export const pocniIgru = document.querySelector(".pocni-igru-div");
export const gradoviIgra = document.querySelector("pogodiZastavu");
export const zastaveIgra = document.querySelector(".glgrad-igra-div");
export const zatvoriIgre = document.querySelector(".izadji-div");
export const pocetniEkran = document.querySelector(".pocetniEkran");
export const nazadDiv = document.querySelector(".izadji-div");

//Prikaz pocetnog ekrana
pocetniEkran.style.display = "grid";

export const pocniIgruEvListener = function (pocniIgruCB) {
  pocniIgru.addEventListener("click", pocniIgruCB);
};

export const nazadPocetniEvListener = function (nazadCB) {
  nazadDiv.addEventListener("click", nazadCB);
};
export const zastaveIgraEvListener = function (zastaveIgraCB) {
  zastaveIgra.addEventListener("click", zastaveIgraCB);
};
export const postaviUcitavanje = function () {
  tijelo.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="ucitavanje">Ucitavanje...</h1>`
  );
};

//Izdrzavanje odabira igre
// pocetniEkran.pocniIgru.addEventListener("click", () => {
//   pocetniEkran.pocetakIgre.textContent = "IZABERI MOD IGRE";
//   pocetniEkran.pocetakIgreDiv.style.height = "12rem";
//   pocetniEkran.pocetakIgreDiv.style.paddingBottom = "9rem";
//   pocetniEkran.countryGeek.style.height = "12rem";
// });
// pocetniEkran.zastaveIgra.addEventListener("click", () => {
//   uzmiDrzave();

//   pocetniEkran.pocniIgruCanvas.style.display = "none";
//   gradoviIgraCanvas.style.display = "none";
// });
// gradoviIgra.addEventListener("click", () => {});
// zatvoriIgre.addEventListener("click", () => {});
