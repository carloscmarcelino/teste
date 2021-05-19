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
    const to = getScrollTopByHref(event.target)
    scrollToPosition(to)
}
function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}
/*Scroll-reveal*/
/*Left*/
const srl = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});
srl.reveal('.titulo-delayLeft',{delay: 200})
srl.reveal('.cards-intervalLeft',{interval: 400})