const lomake = document.getElementById("rekisterointi");
const palaute = document.getElementById("palaute");
let tarkistettu = false;

const saannot = {
    kayttaja: arvo => arvo.trim().length >= 6 ? "" : "Käyttäjä ID:n pitää olla vähintään 6 merkkiä pitkä.",
    salasana: arvo => arvo.length >= 6 && /[0-9]/.test(arvo) && /\p{Lu}/u.test(arvo) && /[!@£$€&%#]/.test(arvo)
        ? "" : "Salasanassa pitää olla vähintään 6 merkkiä, numero, iso kirjain ja erikoismerkki !@£$€&%#.",
    nimi: arvo => arvo.trim() ? "" : "Kirjoita nimi.",
    osoite: arvo => arvo.trim() ? "" : "Kirjoita osoite.",
    maa: arvo => arvo ? "" : "Valitse maa.",
    postinumero: arvo => /^[0-9]{5}$/.test(arvo) ? "" : "Postinumerossa pitää olla täsmälleen 5 numeroa.",
    sahkoposti: arvo => /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(arvo.trim())
        ? "" : "Kirjoita sähköpostiosoite muodossa nimi@esimerkki.fi.",
    sukupuoli: () => lomake.querySelector('input[name="sukupuoli"]:checked') ? "" : "Valitse sukupuoli.",
    kieli: () => lomake.querySelector('input[name="kieli"]:checked') ? "" : "Valitse vähintään yksi kieli."
};

function tarkistaKentta(nimi) {
    const kentat = lomake.querySelectorAll(`[name="${nimi}"]`);
    const virhe = saannot[nimi](kentat[0].value);
    document.getElementById(`${nimi}-virhe`).textContent = virhe;
    kentat.forEach(kentta => kentta.setAttribute("aria-invalid", virhe ? "true" : "false"));
    return virhe ? kentat[0] : null;
}

lomake.addEventListener("submit", tapahtuma => {
    tapahtuma.preventDefault();
    tarkistettu = true;
    const virheelliset = Object.keys(saannot).map(tarkistaKentta).filter(Boolean);
    palaute.className = virheelliset.length ? "" : "onnistui";
    palaute.textContent = virheelliset.length
        ? `Korjaa merkityt kentät (${virheelliset.length} kpl).`
        : "Lomakkeen tiedot ovat kunnossa! Tietoja ei lähetetty mihinkään.";
    if (virheelliset.length) virheelliset[0].focus();
});

function paivitaKentta(tapahtuma) {
    palaute.textContent = "";
    palaute.className = "";
    if (tarkistettu && Object.hasOwn(saannot, tapahtuma.target.name)) {
        tarkistaKentta(tapahtuma.target.name);
    }
}
lomake.addEventListener("input", paivitaKentta);
lomake.addEventListener("change", paivitaKentta);
