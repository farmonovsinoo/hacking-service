const services = document.querySelector('.services'),
    contact = document.querySelector('.contact'),
    about = document.querySelector('.about'),
    header = document.querySelector('.header'),
    home = document.querySelector('.home'),
    active = document.querySelector('.active'),
    info = document.querySelector('.info'),
    body = document.getElementsByTagName('body'),
    homeContent = document.querySelector('.home-content'),
    logo = document.querySelector('.logo'),
    text = document.querySelector(".text")
    bigtext = document.querySelector(".bigtext");

services.onclick = () => {
    bigtext.style.fontSize = '20px';
    bigtext.textContent = 'Social media hacking ( Not including Emails) :- $100   #social_media_hack   Email hacking Service :- $150#email_hacking';
    text.textContent = '';
    text.style.visibility = 'initial';
    text.style.fontSize = '20px';
    text.style.color = 'white';
    info.style.visibility = 'initial';
    active.style.color = '#ededed';
    services.style.color = '#00abf0';
    contact.style.color = '#ededed';
    about.style.color = '#ededed';
    header.style.visibility = 'hidden';
    services.style.visibility = 'initial';
    contact.style.visibility = 'initial';
    about.style.visibility = 'initial';
    active.style.visibility = 'initial';
    logo.style.visibility = 'initial';
}

active.onclick = () => {
    text.textContent = 'Black-Hat-Hacker';
    info.style.visibility = 'hidden';
    header.style.visibility = 'initial';
    home.style.visibility = 'initial';
    home.style.display = 'flex'
    active.style.color = '#00abf0';
    services.style.color = '#ededed';
    contact.style.color = '#ededed';
    about.style.color = '#ededed';
    services.style.visibility = 'initial';
    active.style.visibility = 'initial';
    contact.style.visibility = 'initial';
    about.style.visibility = 'initial';
    logo.style.visibility = 'initial';
}