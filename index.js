const bases = {
    'Binary' : 2,
    'Octal' : 8,
    'Decimal' : 10,
    'Hexadecimal' : 16
}

document.addEventListener('DOMContentLoaded', () => {
    // Prevent default submit action
    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
    });

    // Select the necessary elements
    let page = document.getElementById('page');
    let btnDiv = document.getElementById('btns');
    let input = document.getElementById('input-div');
    let nav = document.getElementById('nav');
    let navLinks = document.getElementsByClassName('nav-link');
    let heading = document.getElementById('title');
    let form = document.getElementById('form');

    // Add event listeners to the Nav brand and nav-bar links
    nav.addEventListener('click', () => {
        setPage(page, 0, btnDiv, input, nav, navLinks, heading, form);
    });
    for (let link of navLinks)
    {
        link.addEventListener('click', () => {
            if (link.id == 'Home')
            {
                setPage(page, 0, btnDiv, input, nav, navLinks, heading, form);
            }
            else 
            {
                setPage(page, bases[link.id], btnDiv, input, nav, navLinks, heading, form);
            }
        });
    }

    // Set initial page to HOME
    setPage(page, 0, btnDiv, input, nav, navLinks, heading, form);
});

// Function to set the value of hidden input to determine the content
function setPage(page, base, btnDiv, input, nav, navLinks, heading, form)
{
    page.value = base;
    updateNav(navLinks);
    updateHeading(page, heading);
    form.reset();
    checkPage(page, btnDiv, input, nav, navLinks, heading, form);
}

// Function for updating the page heading text
function updateHeading(page, heading)
{
    switch (page.value)
    {
        case "2":
            heading.setAttribute('class', "fw-bold text-white fs-2");
            heading.innerHTML = 'BINARY CONVERSION';
            break;
        case "8":
            heading.setAttribute('class', "fw-bold text-white fs-2");
            heading.innerHTML = 'OCTAL CONVERSION';
            break;
        case "10":
            heading.setAttribute('class', "fw-bold text-white fs-2");
            heading.innerHTML = 'DECIMAL CONVERSION';
            break;
        case "16":
            heading.setAttribute('class', "fw-bold text-white fs-2");
            heading.innerHTML = 'HEXADECIMAL CONVERSION';
            break;
        default:
            heading.setAttribute('class', "fw-bold text-white fs-1");
            heading.innerHTML = 'NUMBER CONVERSION';
    }
}

// Function for updating the class of active link
function updateNav(navLinks)
{
    for (let link of navLinks)
    {
        if (bases[link.id] == page.value || (page.value == 0 && link.id == 'Home'))
        {
            link.setAttribute('class', 'nav-link active');
        }
        else
        {
            link.setAttribute('class', 'nav-link');
        }
    }
}

// Check input to determine what to display
function checkPage(page, btnDiv, input, nav, navLinks, heading, form)
{
    let answer = document.getElementById('answer');
    if (page.value == 0)
    {
        input.style.display = 'none';
        btnDiv.innerHTML = '';
        answer.style.display = 'none';
        for (const [name, base] of Object.entries(bases))
        {
            let button = document.createElement('button');
            button.setAttribute('class', 'btn btn-light my-2 fs-3 fw-semibold convert border border-white border-3 rounded-0 text-uppercase');
            button.setAttribute('id', `${name.toLowerCase().substring(0, 3)}`);
            button.addEventListener('click', () => {
                setPage(page, base, btnDiv, input, nav, navLinks, heading, form);
            });
            button.innerHTML = `Convert ${name}`;
            btnDiv.appendChild(button);
        }
    }
    else if (page.value == 2)
    {
        input.style.display = 'block';
        btnDiv.innerHTML = '';
        answer.style.display = 'block';
        answer.innerHTML = 'Answer will appear here';
        for (const [name, base] of Object.entries(bases))
        {
            if (base != 2)
            {
                let button = document.createElement('button');
                button.setAttribute('class', 'btn btn-light my-2 fs-3 fw-semibold convert border border-white border-3 rounded-0');
                button.setAttribute('id', `${name.toLowerCase().substring(0, 3)}`);
                button.addEventListener('click', () => {
                    let ans = convert(getNumber(), page.value, base);
                    answer.innerHTML = `${ans}`
                });
                button.innerHTML = `To ${name}`;
                btnDiv.appendChild(button);
            }
        }
    }
    else if (page.value == 8)
    {
        input.style.display = 'block';
        btnDiv.innerHTML = '';
        answer.style.display = 'block';
        answer.innerHTML = 'Answer will appear here';
        for (const [name, base] of Object.entries(bases))
        {
            if (base != 8)
            {
                let button = document.createElement('button');
                button.setAttribute('class', 'btn btn-light my-2 fs-3 fw-semibold convert border border-white border-3 rounded-0');
                button.setAttribute('id', `${name.toLowerCase().substring(0, 3)}`);
                button.addEventListener('click', () => {
                    let ans = convert(getNumber(), page.value, base);
                    answer.innerHTML = `${ans}`
                });
                button.innerHTML = `To ${name}`;
                btnDiv.appendChild(button);
            }
        }
    }
    else if (page.value == 10)
    {
        input.style.display = 'block';
        btnDiv.innerHTML = '';
        answer.style.display = 'block';
        answer.innerHTML = 'Answer will appear here';
        for (const [name, base] of Object.entries(bases))
        {
            if (base != 10)
            {
                let button = document.createElement('button');
                button.setAttribute('class', 'btn btn-light my-2 fs-3 fw-semibold convert border border-white border-3 rounded-0');
                button.setAttribute('id', `${name.toLowerCase().substring(0, 3)}`);
                button.addEventListener('click', () => {
                    let ans = convert(getNumber(), page.value, base);
                    answer.innerHTML = `${ans}`
                });
                button.innerHTML = `To ${name}`;
                btnDiv.appendChild(button);
            }
        }
    }
    else if (page.value == 16)
    {
        input.style.display = 'block';
        btnDiv.innerHTML = '';
        answer.style.display = 'block';
        answer.innerHTML = 'Answer will appear here';
        for (const [name, base] of Object.entries(bases))
        {
            if (base != 16)
            {
                let button = document.createElement('button');
                button.setAttribute('class', 'btn btn-light my-2 fs-3 fw-semibold convert border border-white border-3 rounded-0');
                button.setAttribute('id', `${name.toLowerCase().substring(0, 3)}`);
                button.addEventListener('click', () => {
                    let ans = convert(getNumber(), page.value, base);
                    answer.innerHTML = `${ans}`
                });
                button.innerHTML = `To ${name}`;
                btnDiv.appendChild(button);
            }
        }
    }
}

// Function for getting user input
function getNumber()
{
    let num = document.querySelector('#number').value;
    if (num != null)
    {
        return num.toUpperCase();
    }
}

// Embeds answer to the p element
function printAnswer(num, fromBase, toBase)
{
    let ans = document.querySelector('#answer');
    ans.innerHTML = convert(num, fromBase, toBase);
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
