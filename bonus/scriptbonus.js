/*test*/
const name = `jan`

console.log(name)

/*bonus start*/


/*const userchoice = prompt("choose even or odd [even, odd]");
console.log(userchoice);

const userNumber = Number(prompt("select a number 1 to 9"))
console.log(userNumber);


const pcNumber = Math.floor(Math.random() * 9) + 1;
console.log(pcNumber)


const sum = userNumber + pcNumber
console.log(sum)


console.log(sum % 2)

console.log(sum % 2 === 0)


if (sum % 2 === 0 && userchoice == `even`) {

    alert(`you 1`)
} else {
    alert(`pc 1`)
}

if (sum % 2 !== 0 && userchoice == `odd`) {

    alert(`pc win`)

} else {

    alert(`you win`)
}*/









/* I give up*/

/* date time*/

const hour = new Date();
const minutes = new Date();
const minute2 = 1000 * 60;
const hour2 = minute2 * 60;

document.getElementById("hour").innerHTML = hour.getHours()
document.getElementById("minutes").innerHTML = minutes.getMinutes()

const minutesTo = Math.round(Date.now() - minute2)
document.getElementById("minutesTO").innerHTML = minutesTo



