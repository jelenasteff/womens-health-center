       //  SLAJDSOU

var slideIndex=0;
let klasa=["Slajd1","Slajd2","Slajd3","Slajd4"]

showSlides(klasa[0], slideIndex);
showSlides(klasa[1], slideIndex);
showSlides(klasa[2], slideIndex);
showSlides(klasa[3], slideIndex);

function showSlides(className, slideIndex) {
  let i;
  let slides = document.getElementsByClassName(className);
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(function () { showSlides(className, slideIndex); }, 4000);
}

      //  BROJAC ZA SLEDECU SLIKU ZA USLUGE

let counter=0;
let right = document.querySelector(".slicicaudesno");
let left = document.querySelector(".slicicaulevo");
let nextpic = document.querySelector("#nextpic");
let nextpost = document.querySelector("#nextpost");
let timerId;

left.addEventListener("click",()=>{
  counter--;
  if(counter<0){
    counter=3;
  }
  switch(counter) {
    case 0:
      nextpic.innerHTML=`<img src="Slike/Medicine.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=
      `
      <h2 class="col-12">
        Laboratorija
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Krvna slika</td>
          <td>480,00RSD</td>
        </tr>
        <tr>
          <td>Trombociti</td>
          <td>120,00RSD</td>
        </tr>
        <tr>
          <td>Leukociti</td>
          <td>150,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 1:
      nextpic.innerHTML=`<img src="Slike/Medicine1.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Papanikolau test
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Bris</td>
          <td>200,00RSD</td>
        </tr>
        <tr>
          <td>Protein C*</td>
          <td>1200,00RSD</td>
        </tr>
        <tr>
          <td>Komplement CH50*</td>
          <td>1500,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 2:
      nextpic.innerHTML=`<img src="Slike/Medicine2.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Neuropsihijatar
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Sat vremena</td>
          <td>599,00RSD</td>
        </tr>
        <tr>
          <td>Dva sata</td>
          <td>1099,00RSD</td>
        </tr>
        <tr>
          <td>Recept za lekove</td>
          <td>150,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 3:
      nextpic.innerHTML=`<img src="Slike/Medicine3.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Ginekološki pregled
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Bris</td>
          <td>180,00RSD</td>
        </tr>
        <tr>
          <td>Gama GT</td>
          <td>1299,00RSD</td>
        </tr>
        <tr>
          <td>Progesteron</td>
          <td>1599,00RSD</td>
        </tr>
      </table>
      `;
    break;
  }
})

right.addEventListener("click",()=>{
  counter++;
  if(counter>3){
    counter=0;
  }
  switch(counter) {
    case 0:
      nextpic.innerHTML=`<img src="Slike/Medicine.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=
      `
      <h2 class="col-12">
        Laboratorija
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Krvna slika</td>
          <td>480,00RSD</td>
        </tr>
        <tr>
          <td>Trombociti</td>
          <td>120,00RSD</td>
        </tr>
        <tr>
          <td>Leukociti</td>
          <td>150,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 1:
      nextpic.innerHTML=`<img src="Slike/Medicine1.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Papanikolau test
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Bris</td>
          <td>200,00RSD</td>
        </tr>
        <tr>
          <td>Protein C*</td>
          <td>1200,00RSD</td>
        </tr>
        <tr>
          <td>Komplement CH50*</td>
          <td>1500,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 2:
      nextpic.innerHTML=`<img src="Slike/Medicine2.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Neuropsihijatar
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Sat vremena</td>
          <td>599,00RSD</td>
        </tr>
        <tr>
          <td>Dva sata</td>
          <td>1099,00RSD</td>
        </tr>
        <tr>
          <td>Recept za lekove</td>
          <td>150,00RSD</td>
        </tr>
      </table>
      `;
    break;
    case 3:
      nextpic.innerHTML=`<img src="Slike/Medicine3.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML=`
      <h2 class="col-12">
        Ginekološki pregled
      </h2>
      <table class="col-12">
        <tr style="padding:2%">
          <td>Bris</td>
          <td>180,00RSD</td>
        </tr>
        <tr>
          <td>Gama GT</td>
          <td>1299,00RSD</td>
        </tr>
        <tr>
          <td>Progesteron</td>
          <td>1599,00RSD</td>
        </tr>
      </table>
      `;
    break;
  }
})

function changeContent() {
  switch (counter) {
    case 0:
      nextpic.innerHTML = `<img src="Slike/Medicine.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML =
        `
        <h2 class="col-12">
          Laboratorija
        </h2>
        <table class="col-12">
          <tr style="padding:2%">
            <td>Krvna slika</td>
            <td>480,00RSD</td>
          </tr>
          <tr>
            <td>Trombociti</td>
            <td>120,00RSD</td>
          </tr>
          <tr>
            <td>Leukociti</td>
            <td>150,00RSD</td>
          </tr>
        </table>
        `;
      break;
    case 1:
      nextpic.innerHTML = `<img src="Slike/Medicine1.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML = `
        <h2 class="col-12">
          Papanikolau test
        </h2>
        <table class="col-12">
          <tr style="padding:2%">
            <td>Bris</td>
            <td>200,00RSD</td>
          </tr>
          <tr>
            <td>Protein C*</td>
            <td>1200,00RSD</td>
          </tr>
          <tr>
            <td>Komplement CH50*</td>
            <td>1500,00RSD</td>
          </tr>
        </table>
        `;
      break;
    case 2:
      nextpic.innerHTML = `<img src="Slike/Medicine2.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML = `
        <h2 class="col-12">
          Neuropsihijatar
        </h2>
        <table class="col-12">
          <tr style="padding:2%">
            <td>Sat vremena</td>
            <td>599,00RSD</td>
          </tr>
          <tr>
            <td>Dva sata</td>
            <td>1099,00RSD</td>
          </tr>
          <tr>
            <td>Recept za lekove</td>
            <td>150,00RSD</td>
          </tr>
        </table>
        `;
      break;
    case 3:
      nextpic.innerHTML = `<img src="Slike/Medicine3.jpg" id="nextpic" class="fade col-12 slikeLaboratorija">`;
      nextpost.innerHTML = `
        <h2 class="col-12">
          Ginekološki pregled
        </h2>
        <table class="col-12">
          <tr style="padding:2%">
            <td>Bris</td>
            <td>180,00RSD</td>
          </tr>
          <tr>
            <td>Gama GT</td>
            <td>1299,00RSD</td>
          </tr>
          <tr>
            <td>Progesteron</td>
            <td>1599,00RSD</td>
          </tr>
        </table>
        `;
      break;
  }
}

function showNextSlide() {
  counter++;
  if (counter > 3) {
    counter = 0;
  }
  changeContent();
}

function startSlideshow() {
  stopSlideshow();
  timerId = setInterval(showNextSlide, 4000);
}

function stopSlideshow() {
  clearInterval(timerId);
}

function handleWindowResize() {
  if (window.innerWidth <= 600) {
    changeContent();
    startSlideshow();
  } else {
    stopSlideshow();
  }
}

left.addEventListener("click", changeContent);
right.addEventListener("click", changeContent);
window.addEventListener("load", handleWindowResize);
window.addEventListener("resize", handleWindowResize);

      //  ZAKAZIVANJE PREGLEDA

//Date() je klasa, pa koristimo "konstruktor kopije" da stvorimo sutrasnji dan tako sto parametru dan dodamo 1

const danas = new Date();
const sutra = new Date(danas);
sutra.setDate(sutra.getDate() + 1);
const sutraString = sutra.toISOString().split("T")[0];
document.getElementById("date_min").min = sutraString;

let selekcija = document.getElementById("selekcija");
let forma_zakazivanje = document.getElementById("forma_zakazivanje");
let zakazi = document.getElementById("zakazi");
let lekar1 = document.getElementById("lekar1");
let lekar2 = document.getElementById("lekar2");

// prvi deo selekcije / dodavanje imena lekara za izbor

selekcija.addEventListener("change",()=>{
  switch(selekcija.value) {
    case "0":
      forma_zakazivanje.style=`display:none`;
    break;

    case "1":
      forma_zakazivanje.style=`display:block`;
      lekar1.innerHTML=`<input type="radio" name="lekar" value="Dr Jelena Stefanović">Dr Jelena Stefanović`;
      lekar2.innerHTML=`<input type="radio" name="lekar" value="Dr Derek Shepherd">Dr Derek Shepherd`;
    break;

    case "2":
      forma_zakazivanje.style=`display:block`;
      lekar1.innerHTML=`<input type="radio" name="lekar" value="Dr Meredith Grey">Dr Meredith Grey`;
      lekar2.innerHTML=`<input type="radio" name="lekar" value="Dr Cristina Yang">Dr Cristina Yang`;
    break;

    case "3":
      forma_zakazivanje.style=`display:block`;
      lekar1.innerHTML=`<input type="radio" name="lekar" value="Dr Alexander Karev">Dr Alexander Karev`;
      lekar2.innerHTML=`<input type="radio" name="lekar" value="Dr Addison Montgomery">Dr Addison Montgomery`;
    break;

    case "4":
      forma_zakazivanje.style=`display:block`;
      lekar1.innerHTML=`<input type="radio" name="lekar" value="Dr Isobel Stevens">Dr Isobel Stevens`;
      lekar2.innerHTML=`<input type="radio" name="lekar" value="Dr Arizona Robbins">Dr Arizona Robbins`;
    break;
  }
});

// slanje forme , finalno zakazivanje pregleda sa proverom

document.addEventListener("DOMContentLoaded", function() {
  zakazi.addEventListener("click", function(event){
      event.preventDefault();
      const izabraniLekar = document.querySelector('input[name="lekar"]:checked');
      const izabraniDatum = document.getElementById("date_min").value;

      let imePrezimePolje = document.querySelector("#imePrezime");
      let imePrezimeVrednost = imePrezimePolje.value.trim();

      let jmbgPolje = document.querySelector("#jmbg");
      let jmbgVrednost = jmbgPolje.value.trim();

      if (imePrezimeVrednost === "" || jmbgVrednost === "") {
          alert("Molimo unesite obavezne podatke.");
      }
      else{
        if(jmbgVrednost.length<13){
          alert("JMBG mora da sadrži 13 cifara.");
        }
        else{
          if (izabraniLekar && izabraniDatum) {
            alert(`Poštovana ${imePrezimeVrednost}, Vaš pregled je zakazan za ${izabraniDatum} kod ${izabraniLekar.value}.`);
            window.open("Stranice/Potvrda.html","_self");
          } else {
            alert("Molimo izaberite lekara i datum.");
          }
        }
      }
  });
});