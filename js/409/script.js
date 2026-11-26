const lomake = document.getElementById("muunnin");
const lampotilaKentta = document.getElementById("lampotila");
const suuntaValinta = document.getElementById("suunta");
const tulos = document.getElementById("tulos");

function celsiusFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}

function fahrenheitCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function naytaVirhe(viesti) {
    tulos.textContent = viesti;
    tulos.classList.add("virhe");
    lampotilaKentta.setAttribute("aria-invalid", "true");
}

function muunnaLampotila(event) {
    event.preventDefault();

    const syote = lampotilaKentta.value.trim();
    if (syote === "") {
        naytaVirhe("Virhe: syötä lämpötila.");
        return;
    }

    // Hyväksytään desimaalierottimeksi sekä pilkku että piste.
    const lukuarvo = syote.replace(",", ".");
    const lampotila = Number(lukuarvo);
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(lukuarvo)
        || !Number.isFinite(lampotila)) {
        naytaVirhe("Virhe: anna lämpötila lukuarvona.");
        return;
    }

    const celsiuksesta = suuntaValinta.value === "c-f";
    const nollapiste = celsiuksesta ? -273.15 : -459.67;
    if (lampotila < nollapiste) {
        naytaVirhe("Virhe: lämpötila on alle absoluuttisen nollapisteen (−273,15 °C / −459,67 °F).");
        return;
    }

    const muunnettu = celsiuksesta
        ? celsiusFahrenheit(lampotila)
        : fahrenheitCelsius(lampotila);
    if (!Number.isFinite(muunnettu)) {
        naytaVirhe("Virhe: lämpötila on liian suuri muunnettavaksi.");
        return;
    }

    const desimaalit = Number(lomake.querySelector('input[name="desimaalit"]:checked').value);
    const vastaus = muunnettu.toFixed(desimaalit).replace(".", ",");
    const lahtoYksikko = celsiuksesta ? "°C" : "°F";
    const tulosYksikko = celsiuksesta ? "°F" : "°C";

    tulos.classList.remove("virhe");
    lampotilaKentta.removeAttribute("aria-invalid");
    tulos.textContent = `${syote.replace(".", ",")} ${lahtoYksikko} = ${vastaus} ${tulosYksikko}`;
}

lomake.addEventListener("submit", muunnaLampotila);
