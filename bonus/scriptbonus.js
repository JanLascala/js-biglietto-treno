/*test*/
const name = `jan`

console.log(name)

/*bonus start*/


const userchoice = prompt("choose even or odd [even, odd]");
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

    alert(`you win`)
} else {
    alert(`pc won`)
}

if (sum % 2 === 0 && userchoice == `odd`) {

    alert(`you win`)

} else {

    alert(`pc won`)
}