/*Debounce*/
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};
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
    const to = getScrollTopByHref(event.target) - 95
    scrollToPosition(to)
}
function scrollToPosition(to){
    window.scroll({
        top: to,
        behavior: "smooth",
    })
}
/*Scroll-bar*/
let progress = document.getElementById('scrollbar');
let totalHeight = document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
    let progressHeight = ((window.pageYOffset/totalHeight)*100);
    progress.style.height = progressHeight + "%";
}

/*Text-effect*/
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });

}
const titulo = document.querySelector('#inicio h1');
typeWrite(titulo)


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