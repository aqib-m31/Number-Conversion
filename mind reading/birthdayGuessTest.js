// let cards = [[], [], [], [], []];

// for (let i = 1; i <= 31; i++) {
//     if(i & (1 << 4))cards[0].push(i);
//     if(i & (1 << 3))cards[1].push(i);
//     if(i & (1 << 2))cards[2].push(i);
//     if(i & (1 << 1))cards[3].push(i);
//     if(i & 1)cards[4].push(i);
// }

// for (let index = 0; index <= cards[0].length - 4; index += 4) {
//     if(index == 0){
//         console.log("Card 4        Card 3        Card 2        Card 1        Card 0");
//         console.log(`${cards[0].slice(index, index + 4).toString()}   ${cards[1].slice(index, index + 4).toString()}     ${cards[2].slice(index, index + 4).toString()}       ${cards[3].slice(index, index + 4).toString()}       ${cards[4].slice(index, index + 4).toString()}`);
//     } else {
//         console.log(cards[0].slice(index, index + 4).toString() + "   " + cards[1].slice(index, index + 4).toString() + "   " + cards[2].slice(index, index + 4).toString() + "   " + cards[3].slice(index, index + 4).toString() + "   " + cards[4].slice(index, index + 4).toString());
//     }
// }

//Output:
// Card 4        Card 3        Card 2        Card 1        Card 0
// 16,17,18,19   8,9,10,11     4,5,6,7       2,3,6,7       1,3,5,7
// 20,21,22,23   12,13,14,15   12,13,14,15   10,11,14,15   9,11,13,15
// 24,25,26,27   24,25,26,27   20,21,22,23   18,19,22,23   17,19,21,23
// 28,29,30,31   28,29,30,31   28,29,30,31   26,27,30,31   25,27,29,31

// I'm not sure if this is the best way to do it, but it works. I'm sure there's a better way to do it, but I'm not sure how.


let dayCardNumbers = prompt("Enter the card numbers separated by spaces in which your birthday exists");
let dayPowers = dayCardNumbers.split(" ");
let birthday = 0;
for (let i = 0; i < dayPowers.length; i++) {
    birthday += Math.pow(2, dayPowers[i].trim());
}
// console.log(birthday);

let monthCardNumbers = prompt("Enter the card numbers separated by spaces in which your birth month exists");
let monthPowers = monthCardNumbers.split(" ");
let birthMonth = 0;
for (let i = 0; i < monthPowers.length; i++) {
    birthMonth += Math.pow(2, monthPowers[i].trim());
}
// console.log(birthMonth);

switch(birthMonth){
    case 1:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on the ${birthday} January`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 2:
        if (birthday > 0 && birthday < 29) {
        console.log(`Your birthday is on ${birthday} February`);
        break;
        } else if (birthday == 29){
            console.log(`Your birthday is on ${birthday} February (Leap Year)`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 3:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} March`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 4:
        if (birthday > 0 && birthday < 31) {
            console.log(`Your birthday is on ${birthday} April`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 5:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} May`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 6:
        if (birthday > 0 && birthday < 31) {
            console.log(`Your birthday is on ${birthday} June`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 7:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} July`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 8:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} August`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 9:
        if (birthday > 0 && birthday < 31) {
            console.log(`Your birthday is on ${birthday} September`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 10:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} October`);
            break;
        } else {
            console.log("Invalid date");
            break;  
        }
    case 11:
        if (birthday > 0 && birthday < 31) {
            console.log(`Your birthday is on ${birthday} November`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    case 12:
        if (birthday > 0 && birthday < 32) {
            console.log(`Your birthday is on ${birthday} December`);
            break;
        } else {
            console.log("Invalid date");
            break;
        }
    default:
        console.log("Invalid month");
        break;
}

