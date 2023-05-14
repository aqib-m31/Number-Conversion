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

export { isBinary, isOctal, isDecimal, isHexadecimal };