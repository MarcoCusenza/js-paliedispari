const result = document.getElementById("result");

//PALINDROMA
// const string = prompt("Inserisci una parola");

// if (isPalindroma(string) == false) {
//     result.innerHTML = "La parola inserita NON è palindroma";
// } else {
//     result.innerHTML = "La parola inserita è palindroma";
// }

// function isPalindroma(string) {
//     for (let i = 0; i < (string.length / 2); i++) {
//         if (string[i] != string[string.length - (i + 1)]) {
//             return false;
//         }
//     }
//     return true;
// }


//PARI O DISPARI
const scelta = prompt("Scrivi la tua scelta: pari o dispari?");
if (scelta != "pari" && scelta != "dispari") {
    alert("Non hai fatto quello che ti ho detto. Eppure era così semplice. Complimenti davvero.")
} else {
    const numUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
    if (numUser < 1 || numUser > 5) {
        alert("Non hai fatto quello che ti ho detto. Eppure era così semplice. Complimenti davvero.")
    } else {
        const numCPU = rand(1, 5);
        const somma = numUser + numCPU;
        document.getElementById("scelta").innerHTML = `Scelta: ${scelta}`;
        document.getElementById("numUser").innerHTML = `Numero iserito: ${numUser}`;
        document.getElementById("numCPU").innerHTML = `Numero CPU: ${numCPU}`;
        document.getElementById("somma").innerHTML = `Somma: ${somma}`;
        if ((somma) % 2 == 0) {
            if (scelta == "pari") {
                result.innerHTML = "Hai Vinto! :D";
            } else {
                result.innerHTML = "Hai Perso :(";
            }
        } else {
            if (scelta == "dispari") {
                result.innerHTML = "Hai Vinto! :D";
            } else {
                result.innerHTML = "Hai Perso :(";
            }
        }
    }
}

function rand(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}