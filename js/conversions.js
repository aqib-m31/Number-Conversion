import { isBinary, isOctal, isDecimal, isHexadecimal } from "./userInputValidation.js";

// Function for getting user input
function getNumber()
{
    let num = document.querySelector('#number').value;
    if (num != null)
    {
        return num.toUpperCase();
    }
}

// Converts a decimal number to provided base (2, 8, 16)
function convertDecimalNumber(decimalNum, base)
{
    // Check for valid decimal number
    if (!isDecimal(decimalNum))
    {
        return "Invalid decimal number!"
    }
    let remainders = "";
    decimalNum = Number(decimalNum);
    let quotient = Math.floor(decimalNum);
    while (quotient > 0)
    {
        let remainder = quotient % base;
        if (base == 16)
        {
            switch (remainder)
            {
                case 10:
                    remainders += "A";
                    break;
                case 11:
                    remainders += "B";
                    break;
                case 12:
                    remainders += "C";
                    break;
                case 13:
                    remainders += "D";
                    break;
                case 14:
                    remainders += "E";
                    break;
                case 15:
                    remainders += "F";
                    break;
                default:
                    remainders += remainder;
                    break;
            }
        }
        else
        {
            remainders += remainder;
        }
        quotient = Math.floor(quotient / base);
    }
    let resultNum = "";
    for (let i = remainders.length - 1; i >= 0; i--)
    {
        resultNum += remainders[i];
    }
    if (resultNum.length == 0)
    {
        resultNum += "0";
    }
    let resultFraction = "";
    if (!Number.isInteger(decimalNum))
    {
        resultNum += ".";
        let fraction = decimalNum - Math.floor(decimalNum);
        while (fraction != 0)
        {
            fraction = fraction * base;
            let integralPart = Math.floor(fraction);
            if (base == 16)
            {
                switch (integralPart)
                {
                    case 10:
                        resultFraction += "A";
                        break;
                    case 11:
                        resultFraction += "B";
                        break;
                    case 12:
                        resultFraction += "C";
                        break;
                    case 13:
                        resultFraction += "D";
                        break;
                    case 14:
                        resultFraction += "E";
                        break;
                    case 15:
                        resultFraction += "F";
                        break;
                    default:
                        resultFraction += integralPart;
                        break;
                }
            }
            else
            {
                resultFraction += integralPart;
            }
            fraction = fraction - integralPart;
        }
        resultNum += resultFraction;
    }
    if (resultNum.includes('.'))
    {
        return resultNum.substring(0, resultNum.indexOf('.') + 5);
    }
    return resultNum;
}

// Converts a binary number to provided base (8, 10, 16)
function convertBinaryNumber(binaryNum, base)
{
    // Check for valid binary number
    if (!isBinary(binaryNum))
    {
        return "Invalid binary number!";
    }
    let wholePart = binaryNum.split('.')[0];
    let fractionPart = binaryNum.split('.')[1];
    let sum = 0;
    for (let i = wholePart.length - 1; i >= 0; i--)
    {
        sum += wholePart[i]*(2**(wholePart.length-i-1));
    }
    if (fractionPart != undefined)
    {
        for (let i = 0; i < fractionPart.length; i++)
        {
            sum += fractionPart[i]*(2**(-(i+1)));
        }
    }
    return convertDecimalNumber(sum, base);
}

// Converts an octal number to provided base (2, 10, 16)
function convertOctalNumber(octalNum, base)
{
    // Check for valid octal number
    if (!isOctal(octalNum))
    {
        return "Invalid octal number!";
    }
    let wholePart = octalNum.split('.')[0];
    let fractionPart = octalNum.split('.')[1];
    let sum = 0;
    for (let i = wholePart.length - 1; i >= 0; i--)
    {
        sum += wholePart[i]*(8**(wholePart.length-i-1));
    }
    if (fractionPart != undefined)
    {
        for (let i = 0; i < fractionPart.length; i++)
        {
            sum += fractionPart[i]*(8**(-(i+1)));
        }
    }
    return convertDecimalNumber(sum,base);
}

// Converts a hexadecimal number to provided base (2, 8, 10)
function convertHexadecimalNumber(hexadecimalNum,base)
{
    // Check for valid hexadecimal number
    if (!isHexadecimal(hexadecimalNum))
    {
        return "Invalid hexadecimal number!";
    }
    let wholePart = hexadecimalNum.split('.')[0];
    let fractionPart = hexadecimalNum.split('.')[1];
    let sum = 0;
    for (let i = wholePart.length - 1; i >= 0; i--)
    {
        switch (wholePart[i].toUpperCase())
        {
            case 'A':
                sum += 10*(16**(wholePart.length-i-1));
                break;
            case 'B':
                sum += 11*(16**(wholePart.length-i-1));
                break;
            case 'C':
                sum += 12*(16**(wholePart.length-i-1));
                break;
            case 'D':
                sum += 13*(16**(wholePart.length-i-1));
                break;
            case 'E':
                sum += 14*(16**(wholePart.length-i-1));
                break;
            case 'F':
                sum += 15*(16**(wholePart.length-i-1));
                break;
            default:
                sum += wholePart[i]*(16**(wholePart.length-i-1));
                break;
        }
    }
    if (fractionPart != undefined)
    {
        for (let i = 0; i < fractionPart.length; i++)
        {
            switch (fractionPart[i].toUpperCase())
            {
                case 'A':
                    sum += 10*(16**(-(i+1)));
                    break;
                case 'B':
                    sum += 11*(16**(-(i+1)));
                    break;
                case 'C':
                    sum += 12*(16**(-(i+1)));
                    break;
                case 'D':
                    sum += 13*(16**(-(i+1)));
                    break;
                case 'E':
                    sum += 14*(16**(-(i+1)));
                    break;
                case 'F':
                    sum += 15*(16**(-(i+1)));
                    break;
                default:
                    sum += fractionPart[i]*(16**(-(i+1)));
                    break;
            }
        }
    }
    return convertDecimalNumber(sum, base);
}

// Function to convert a given number from one base to another
function convert(num, fromBase, toBase)
{
    if (num == "")
    {
        return "Please enter a number!";
    }
    let answer;
    if (fromBase == 2)
    {
        answer = convertBinaryNumber(num, toBase);
    }
    else if (fromBase == 8)
    {
        answer = convertOctalNumber(num, toBase);
    }
    else if (fromBase == 10)
    {
        answer = convertDecimalNumber(num, toBase);
    }
    else if (fromBase == 16)
    {
        answer = convertHexadecimalNumber(num, toBase);
    }

    if (answer.startsWith('Invalid'))
    {
        return answer;
    }
    return `(${num})<small><sub>${fromBase}</sub></small> = (${answer})<small><sub>${toBase}</sub></small>`;
}

export { getNumber, convert };