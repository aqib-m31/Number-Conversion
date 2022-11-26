function convertDecimalNumber(decimalNum,base){
    let remainders = "";
    if(!isNaN(decimalNum)){
        let quotient = decimalNum;
        while (quotient != 0) {
            let remainder = (quotient % base);
            if (base == 16) {
                switch (remainder) {
                    case 10:
                        remainders += 'A';
                        break;
                    case 11:
                        remainders += 'B';
                        break;
                    case 12:
                        remainders += 'C';
                        break;
                    case 13:
                        remainders += 'D';
                        break;
                    case 14:
                        remainders += 'E';
                        break;
                    case 15:
                        remainders += 'F';
                        break;
                    default:
                        remainders += remainder;
                        break;
                }
            } else {
                remainders += remainder;
            }
            quotient = Math.floor(quotient / base);
        }
        let resultNum = "";
        for (let i = remainders.length-1; i>= 0; i--){
            resultNum += remainders[i];
        }
        return resultNum;
    } else {
        return undefined;
    }

}

function isBinary(binaryNum){
    let isBinary = true;
    for (let i = 0; i < binaryNum.length; i++){
        if (binaryNum[i] != 0 && binaryNum[i] != 1){
            isBinary = false;
            break;
        }
    }
    return isBinary;
}

function isOctal(octalNum){
    let isOctal = true;
    for (let i = 0; i < octalNum.length; i++){
        if (octalNum[i] < 0 || octalNum[i] > 7){
            isOctal = false;
            break;
        }
    }
    return isOctal;
}

function isHexadecimal(hexadecimalNum){
    let isHexadecimal = true;
    let hexValsTenToFifteen = ['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9'];
    for (let i = 0; i < hexadecimalNum.length; i++){
        if (!(hexValsTenToFifteen.includes(hexadecimalNum[i]))){
            isHexadecimal = false;
            break;
        }
    }
    return isHexadecimal;
}

function convertBinaryNumber(binaryNum,base){
    let sum = 0;
    for (let i = binaryNum.length - 1; i >= 0; i--) {
        if (binaryNum[i] == 1){
            sum += 2**(binaryNum.length-i-1);
        }
    }
    return convertDecimalNumber(sum,base);
}

function convertOctalNumber(octalNum,base){
    let sum = 0;
    for (let i = octalNum.length - 1; i >= 0; i--) {
        sum += octalNum[i]*(8**(octalNum.length-i-1));
    }
    return convertDecimalNumber(sum,base);
}

function convertHexadecimalNumber(hexadecimalNum,base){
    let sum = 0;
    for (let i = hexadecimalNum.length - 1; i >= 0; i--) {
        switch (hexadecimalNum[i]) {
            case 'A':
                sum += 10*(16**(hexadecimalNum.length-i-1));
                break;
            case 'B':
                sum += 11*(16**(hexadecimalNum.length-i-1));
                break;
            case 'C':
                sum += 12*(16**(hexadecimalNum.length-i-1));
                break;
            case 'D':
                sum += 13*(16**(hexadecimalNum.length-i-1));
                break;
            case 'E':
                sum += 14*(16**(hexadecimalNum.length-i-1));
                break;
            case 'F':
                sum += 15*(16**(hexadecimalNum.length-i-1));
                break;
            default:
                sum += hexadecimalNum[i]*(16**(hexadecimalNum.length-i-1));
                break;
        }
    }
    return convertDecimalNumber(sum,base);
}

let answer = document.getElementById("answer");

// functions for buttons

// decimal conversions
function d2b(){
    let num = prompt("Enter number: ");
    let ans = convertDecimalNumber(num,2);
    if(num < 0){
        alert("Negative number!");
    } else if(ans == undefined || num.length == 0){
        alert("Invalid decimal number!");
    } else{
        answer.innerHTML = `(${num})<small><sub>10</sub></small> = (${ans})<small><sub>2</sub></small>`;
    }
}

function d2o(){
    let num = prompt("Enter number: ");
    let ans = convertDecimalNumber(num,8);
    if(num < 0){
        alert("Negative number!");
    } else if(ans == undefined || num.length == 0){
        alert("Invalid decimal number!");
    } else{
        answer.innerHTML = `(${num})<small><sub>10</sub></small> = (${ans})<small><sub>8</sub></small>`;
    }
}

function d2h(){
    let num = prompt("Enter number: ");
    let ans = convertDecimalNumber(num,16);
    if(num < 0){
        alert("Negative number!");
    } else if(ans == undefined || num.length == 0){
        alert("Invalid decimal number!");
    } else{
        answer.innerHTML = `(${num})<small><sub>10</sub></small> = (${ans})<small><sub>16</sub></small>`;
    }
}

// binary conversions
function b2d(){
    let num = prompt("Enter number: ");
    if (isBinary(num)){
        let ans = convertBinaryNumber(num,10);
        answer.innerHTML = `(${num})<small><sub>2</sub></small> = (${ans})<small><sub>10</sub></small>`;
    } else {
        alert("Invalid binary number");
    }
}

function b2o(){
    let num = prompt("Enter number: ");
    if (isBinary(num)){
        let ans = convertBinaryNumber(num,8);
        answer.innerHTML = `(${num})<small><sub>2</sub></small> = (${ans})<small><sub>8</sub></small>`;
    } else {
        alert("Invalid binary number");
    }
}

function b2h(){
    let num = prompt("Enter number: ");
    if (isBinary(num)){
        let ans = convertBinaryNumber(num,16);
        answer.innerHTML = `(${num})<small><sub>2</sub></small> = (${ans})<small><sub>16</sub></small>`;
    } else {
        alert("Invalid binary number");
    }
}

// octal conversions
function o2b(){
    let num = prompt("Enter number: ");
    if (isOctal(num)){
        let ans = convertOctalNumber(num,2);
        answer.innerHTML = `(${num})<small><sub>8</sub></small> = (${ans})<small><sub>2</sub></small>`;
    } else {
        alert("Invalid octal number");
    }
} 

function o2d(){
    let num = prompt("Enter number: ");
    if (isOctal(num)){
        let ans = convertOctalNumber(num,10);
        answer.innerHTML = `(${num})<small><sub>8</sub></small> = (${ans})<small><sub>10</sub></small>`;
    } else {
        alert("Invalid octal number");
    }
}

function o2h(){
    let num = prompt("Enter number: ");
    if (isOctal(num)){
        let ans = convertOctalNumber(num,16);
        answer.innerHTML = `(${num})<small><sub>8</sub></small> = (${ans})<small><sub>16</sub></small>`;
    } else {
        alert("Invalid octal number");
    }
}

// hexadecimal conversions
function h2b(){
    let num = prompt("Enter number: ");
    if (isHexadecimal(num)){
        let ans = convertHexadecimalNumber(num,2);
        answer.innerHTML = `(${num})<small><sub>16</sub></small> = (${ans})<small><sub>2</sub></small>`;
    } else {
        alert("Invalid hexadecimal number");
    }
}

function h2o(){
    let num = prompt("Enter number: ");
    if (isHexadecimal(num)){
        let ans = convertHexadecimalNumber(num,8);
        answer.innerHTML = `(${num})<small><sub>16</sub></small> = (${ans})<small><sub>8</sub></small>`;
    } else {
        alert("Invalid hexadecimal number");
    }
}
function h2d(){
    let num = prompt("Enter number: ");
    if (isHexadecimal(num)){
        let ans = convertHexadecimalNumber(num,10);
        answer.innerHTML = `(${num})<small><sub>16</sub></small> = (${ans})<small><sub>10</sub></small>`;
    } else {
        alert("Invalid hexadecimal number");
    }
}

