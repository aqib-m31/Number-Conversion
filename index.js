import { setPage, bases } from './js/domUpdation.js';

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
