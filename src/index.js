import { closeContainer, closeWindow, back } from "./close-window";
import { executionObserver } from "./animation";
import { scrollToSection } from "./navegation"
import './css/style.css'
console.log('hola mundo');
const logo = document.querySelector('#logo');
const nav = document.getElementById('list-nav');
const btnLogo = document.querySelector('.container-header--section-one a');
const containerHome = document.getElementById('container-home');
const btnMenu = document.getElementById('btn-menu');
const menuMovileList = document.getElementById('menu-list--header');
const btnYoung = document.getElementById('btn-young');
const btnCloseCards = document.getElementById('close-young');
const containerCardsYoung = document.getElementById('cards-message--young');
const btnCloseBooks = document.getElementById('close-books');
const containerDocumentation = document.getElementById('container-book');
const btnDocumentation = document.getElementById('btn-documentation');
const containers = document.querySelectorAll('#observed-load');
const btnViewVideo = document.getElementById('btn-content--video');
const containerVideoPlay = document.getElementById('container-video--play');
const btnCloseVideo = document.getElementById('close-video');
const btnListIndex = document.querySelectorAll('#list-index a');
const btnSupport = document.getElementById('support-btn');
const btnClosesupport = document.getElementById('close-support');
const containerSupport = document.querySelector('.container-form');

console.log(logo);
console.log(btnListIndex);

containers.forEach(container => {
    executionObserver(container);
});

scrollToSection(btnListIndex, logo);
closeWindow(menuMovileList, btnMenu);
closeWindow(containerCardsYoung, btnYoung, containerHome, nav);
closeContainer(btnCloseCards, containerCardsYoung, containerHome, nav);
closeWindow(containerDocumentation, btnDocumentation, containerHome, nav);
closeContainer(btnCloseBooks, containerDocumentation,containerHome, nav);
closeWindow(containerVideoPlay, btnViewVideo, containerHome, nav);
closeContainer(btnCloseVideo, containerVideoPlay, containerHome, nav);
closeContainer(btnClosesupport, containerSupport, containerHome, nav);
closeWindow(containerSupport, btnSupport, containerHome, nav);

