//creazione lista cognomi
var surname = ["Ghironi", "Cinus", "Sanna", "Cocco", "Pisu", "Tolu"]

//chiedere all'utente un cognome da aggiungere alla lista
var surnameAgg = prompt("inserisci cognome da aggiungere alla lista");
surname.push(surnameAgg);

//ordina alfabeticamente la lista di cognomi e visualizzo
var newSurname = [];
surname.sort();

console.log(surname);

for(var i = 0; i < surname.length; i++) {
    console.log(surname[i]);
    newSurname.push(surname[i]);

    document.getElementById("list").innerHTML +=  surname[i] + " " ;

    if (surname[i] == surnameAgg){
        document.getElementById("posizione").innerHTML = (i +1);
    }
} 


