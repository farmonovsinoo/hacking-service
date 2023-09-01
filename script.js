const services = document.querySelector('.services'),
    contact = document.querySelector('.contact'),
    about = document.querySelector('.about'),
    header = document.querySelector('.header'),
    home = document.querySelector('.home'),
    active = document.querySelector('.active'),
    info = document.querySelector('.info'),
    body = document.getElementsByTagName('body');

services.onclick = () => {
    body.style.backgraound = '#081b29';
    info.style.visibility = 'initial';
    active.style.color = '#ededed'
    services.style.color = '#00abf0';
    contact.style.color = '#ededed';
    about.style.color = '#ededed';
    header.style.visibility = 'hidden';
    services.style.visibility = 'initial';
    home.style.visibility = 'hidden';
    home.style.display = 'inline';
    contact.style.visibility = 'initial';
    about.style.visibility = 'initial';
    active.style.visibility = 'initial';
}

active.onclick = () => {
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
}