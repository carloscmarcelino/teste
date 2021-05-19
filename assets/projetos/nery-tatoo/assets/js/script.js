/*Slide-home*/
function slide(){
let time = 5000,
    currentImageIndex = 0,
    imagens = document.querySelectorAll('#home img')
    max = imagens.length;
function nextImage(){
    imagens[currentImageIndex].classList.remove('ativo')
    currentImageIndex++
    if(currentImageIndex >= max){
        currentImageIndex = 0
    }
    imagens[currentImageIndex].classList.add('ativo')
}
function start(){
    setInterval(() => {
        nextImage()
    }, time)
}
window.addEventListener("load", start())
}
slide()
/*Scroll-top*/
const menuItens = document.querySelectorAll('header a[href^="#"]')
menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})
function getScrollTopByHref(element){
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}
function scrollToIdOnClick(event){
    event.preventDefault()
    menuHeight = $('header').innerHeight()
    const to = getScrollTopByHref(event.target) - menuHeight
    scrollToPosition(to)
}
function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}
/*Scroll-reveal*/
/*Top*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});
sr.reveal('.titulo-delay',{delay: 200})
sr.reveal('.cards-interval',{interval: 400})
/*Left*/
const srl = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});
srl.reveal('.titulo-delayLeft',{delay: 200})
srl.reveal('.cards-intervalLeft',{interval: 400})
/*No-reset*/
const srNR = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: false
});
sr.reveal('.cards-intervalNR',{interval: 400})