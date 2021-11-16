const result = document.getElementById("result");

//PALINDROMA
const string = prompt("Inserisci una parola");

if (isPalindroma(string) == false) {
    result.innerHTML = "La parola inserita NON è palindroma";
} else {
    result.innerHTML = "La parola inserita è palindroma";
}

function isPalindroma(string) {
    for (let i = 0; i < (string.length / 2); i++) {
        if (string[i] != string[string.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}


//PARI O DISPARI
