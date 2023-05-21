            // SLAJDSOU - ista fja kao u indeksu

var slideIndex=0;
showSlides("Slajd_WebShop", slideIndex);
showSlides("Slajd_WebShop1", slideIndex);
showSlides("Slajd_WebShop2", slideIndex);

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

            // NARUDZBENICA

let dugmemanje = document.querySelector("#manje");
let dugmevise = document.querySelector("#vise");
let spankolicina = document.querySelector("#kolicina");

var kol = 0;
var cena = 0;
var pocetnacena = 0;

// prati se kolicina da bi se odredila cena i ispisalo u listi

dugmemanje.addEventListener("click", function(event){
    event.preventDefault();
    if(kol>0){
        spankolicina.innerHTML=`${--kol}`;
    }
})

dugmevise.addEventListener("click", function(event){
    event.preventDefault();
    spankolicina.innerHTML=`${++kol}`;
})

let selekcija = document.getElementById("selekcija");
let ubaci = document.getElementById("ubaci");

// ubacivanje u korpu sa validacijom obaveznih podataka

ubaci.addEventListener("click", function(event) {
    event.preventDefault();

    let imePrezimePolje = document.querySelector("#imePrezime");
    let imePrezimeVrednost = imePrezimePolje.value.trim();

    let adresaPolje = document.querySelector("#adresa");
    let adresaVrednost = adresaPolje.value.trim();

    if (imePrezimeVrednost === "" || adresaVrednost === "") {
        event.preventDefault();
        alert("Molimo unesite obavezne podatke.");
    }

    //ako smo uneli sve potrebne podatke, u zavisnosti od selekcije stampamo proizvod, kolicinu, cenu pojedinacnog elementa

    else{
        document.querySelector("#animacija1").src = `../Slike/Logoi/korpaanimacija.gif`;
        if (kol > 0) {
            let string = '<ul style="padding: 1% 0% 0.5% 2%;">';
            switch (selekcija.value) {
                case "0":
                    break;

                case "1":
                    pocetnacena = 899;
                    cena+=899*kol;
                    string += `<li>Majica kratkih rukava x ${kol}, ${pocetnacena},00RSD x ${kol}</li>`;
                    break;

                case "2":
                    pocetnacena = 1299;
                    cena+=1299*kol;
                    string += `<li>Gornji deo dugih rukava x ${kol}, ${pocetnacena},00RSD x ${kol}</li>`;
                    break;

                case "3":
                    pocetnacena = 399;
                    cena+=399*kol;
                    string += `<li>Šolja x ${kol}, ${pocetnacena},00RSD x ${kol}</li>`;
                    break;

                case "4":
                    pocetnacena = 299;
                    cena+=299*kol;
                    string += `<li>Ram za slike x ${kol}, ${pocetnacena},00RSD x ${kol}</li>`;
                    break;
            }
            string+='</ul>'
            porudzbina.innerHTML += string;
        }
    }
    });

// animacija kada stavimo nesto u korpu

let animacije = document.querySelectorAll(".animacija");
animacije.forEach((animacija) => {
    let kliknuto = false;
    animacija.addEventListener("click", () => {
        if (!kliknuto) {
            animacija.src = `../Slike/Logoi/lajkanimacija.gif`;
          } else {
            animacija.src = `../Slike/Logoi/lajk.png`;
          }
        kliknuto = !kliknuto;
    });
});

// stampanje ukupne cene 

let cenaproizvoda = document.querySelector("#cenaproizvoda");

cenaproizvoda.addEventListener("click",(event)=>{
    event.preventDefault()
    if(cena>0){
        porudzbina.innerHTML += `Ukupno za placanje: ${cena},00RSD<br>`;
    }
    else{
        alert("Nemate proizvode u korpi. Dodajte proizvode pre nego što izračunate cenu.")
    }
})

// finalno "saljemo" proizvode iz korpe

let forma_porudzbina = document.getElementById("forma_porudzbina");
forma_porudzbina.addEventListener("submit",(event)=>{
    event.preventDefault()
    if (porudzbina.innerHTML.trim() == "--") {
        alert("Nemate proizvode u korpi. Dodajte proizvode pre nego što izvršite porudžbinu.");
    } 
    else {
        alert(`Uspešno ste izvršili porudžbinu! Cena Vaše porudžbine je ${cena},00RSD. Plaćanje pouzećem.`);
        window.open("../Stranice/PotvrdaW.html","_self");
    }
});
