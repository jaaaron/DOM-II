// import { read } from "fs"
let event1 = document.querySelector('nav a')
event1.addEventListener('mouseover', () => {
        event1.style.color = "red";
});
let navBar = document.getElementsByTagName('a')
// event 2
navBar[1].addEventListener('mouseover', () => {
    navBar[1].style.color = "blue";
});
// event 3
navBar[2].addEventListener('mouseover', () => {
    navBar[2].style.color = "yellow";
});
// event 4
navBar[3].addEventListener('mouseover', () => {
    navBar[3].style.color = "brown";
});
// event 5
navBar[0].addEventListener('dblclick', () => {
    navBar[0].style.display = 'none';
});
// event 6
navBar[1].addEventListener('dblclick', () => {
    navBar[1].style.display = 'none';
});
// event 7
navBar[2].addEventListener('dblclick', () => {
    navBar[2].style.display = 'none';
});
// event 8
navBar[3].addEventListener('dblclick', () => {
    navBar[3].style.display = 'none';
});
// event 9
document.querySelector('h1.logo-heading').addEventListener('mouseover', () => {
    document.querySelector('h1.logo-heading').style.fontSize = "50px"
})
// event 10
document.querySelector('h1.logo-heading').addEventListener('click', () => {
    document.querySelector('h1.logo-heading').style.fontSize = "20px"
})
// Nest two similar events & stop propagation
document.querySelector('.intro h2').addEventListener('mouseover', (event) => {
    document.querySelector('.intro h2').style.color = "yellow"
    document.querySelector('h1.logo-heading').style.color = "red"
    event.preventDefault()
})
// stop propagation from nav link refreshing page
document.querySelector('nav a').addEventListener('click', (event) => {
    event.preventDefault()
})
// stretch task https://greensock.com/docs/v2/TweenLite
var logoAni = document.querySelector('h1.logo-heading')
logoAni.addEventListener('dblclick', () => {
    TweenLite.to(logoAni, 2, {width:"200px", height:"50px"});
})