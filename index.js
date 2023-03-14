// Function for prompting user for a number
function get_number()
{
    num = prompt("Enter number: ")
    if (num != null)
    {
        return num.toUpperCase();
    }
}

// Validating user input functions
// Checks if a number is a valid binary number
function isBinary(binaryNum)
{
    const binaryFormat = /^([0-1]+\.?|[0-1]*\.[0-1]+|\.[0-1]+)$/;
    return binaryFormat.test(binaryNum);
}

// Checks if a number is a valid octal number
function isOctal(octalNum)
{
    const octalFormat = /^([0-7]+\.?|[0-7]*\.[0-7]+|\.[0-7]+)$/;
    return octalFormat.test(octalNum);
}

// Checks if a number is a valid decimal number
function isDecimal(decimalNum)
{
    const decimalFormat = /^([0-9]+\.?|[0-9]*\.[0-9]+|\.[0-9]+)$/;
    return decimalFormat.test(decimalNum);
}

// Checks if a number is a valid hexadecimal number
function isHexadecimal(hexadecimalNum)
{
    const hexadecimalFormat = /^([0-9A-Fa-f]+\.?|[0-9A-Fa-f]*\.[0-9A-Fa-f]+|\.[0-9A-Fa-f]+)$/;
    return hexadecimalFormat.test(hexadecimalNum);
}


// Converts a decimal number to provided base (2, 8, 16)
function convertDecimalNumber(decimalNum, base)
{
    // Check for valid decimal number
    if (!isDecimal(decimalNum))
    {
        alert("Invalid decimal number!");
        return undefined;
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
    return resultNum;
}

// Converts a binary number to provided base (8, 10, 16)
function convertBinaryNumber(binaryNum, base)
{
    // Check for valid binary number
    if (!isBinary(binaryNum))
    {
        alert("Invalid binary number!");
        return undefined;
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
        alert("Invalid octal number!");
        return undefined;
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
        alert("Invalid hexadecimal number!");
        return undefined;
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

let answer = document.getElementById("answer");

// Function to convert a given number from one base to another
function convert(num, fromBase, toBase)
{
    let ans;
    if (fromBase == 2)
    {
        ans = convertBinaryNumber(num, toBase);
    }
    else if (fromBase == 8)
    {
        ans = convertOctalNumber(num, toBase);
    }
    else if (fromBase == 10)
    {
        ans = convertDecimalNumber(num, toBase);
    }
    else if (fromBase == 16)
    {
        ans = convertHexadecimalNumber(num, toBase);
    }

    if (ans != undefined)
    {
        answer.innerHTML = `(${num})<small><sub>${fromBase}</sub></small> = (${ans})<small><sub>${toBase}</sub></small>`;
    }
}