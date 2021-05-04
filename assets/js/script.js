/*DEBOUNCE*/
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
/*DEBOUNCE*/


/*HEADERANIMATION*/
$('header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('header').innerHeight(),
        targetOffset = $(id).offset().top;

        $('html,body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
});
/*HEADERANIMATION*/


/*SCROLLBAR*/
let progress = document.getElementById('scrollbar');
let totalHeight = document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
    let progressHeight = ((window.pageYOffset/totalHeight)*100);
    progress.style.height = progressHeight + "%";
}
/*SCROLLBAR*/


/*RETURN*/
$('#return').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('header').innerHeight(),
        targetOffset = $(id).offset().top;

        $('html,body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
});
/*RETURN*/


/*TEXT-EFFECT*/
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
    });

}
const titulo = document.querySelector('#inicio h1');
typeWrite(titulo)
/*TEXT-EFFECT*/


/*SCROLLREVEAL*/
/*top*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});
sr.reveal('.titulo-delay',{delay: 200})
sr.reveal('.cards-interval',{interval: 400})
/*top*/
/*left*/
const srl = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});
srl.reveal('.titulo-delayLeft',{delay: 200})
srl.reveal('.cards-intervalLeft',{interval: 400})
/*left*/
/*SCROLLREVEAL*/