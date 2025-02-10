/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
-va applicato uno sconto del 20% per i minorenni
-va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.*/

/* choices standard price*/
const tckprice = 0.21


const kilometerSelect = prompt("select kilometers");
console.log(kilometerSelect)

const userAge = prompt("select age")
console.log(userAge)

const standardPrice = tckprice * kilometerSelect
console.log(standardPrice)


/* variables*/

if (userAge < 18) {

    const minorDiscount = (80 * standardPrice) / 100
    console.log(minorDiscount)

} else if (userAge > 65) {
    const seniorDiscount = (60 * standardPrice) / 100
    console.log(seniorDiscount)
}






