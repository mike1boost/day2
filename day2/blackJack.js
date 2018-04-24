//
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
//
//
// function blackJack() {
//     getRandomInt(1,6);
//     var fs = require('fs');
//
// }


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your favorite food? ', (answer) => {
    if (answer === "ok")
        console.log(`Oh, so your favorite food is ${answer}`);
});
