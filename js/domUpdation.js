import { convert, getNumber } from './conversions.js';

const bases = {
    'Binary' : 2,
    'Octal' : 8,
    'Decimal' : 10,
    'Hexadecimal' : 16
}

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

export { setPage, bases };