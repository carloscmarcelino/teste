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


$('header a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('header').innerHeight(),
        targetOffset = $(id).offset().top;

        $('html,body').animate({
            scrollTop: targetOffset - menuHeight
        }, 500);
});


const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';
function animeScroll(){
    const windowTop = window.pageYOffset +((window.innerHeight*3)/4);
    target.forEach(function(element){
        if((windowTop)>element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}
animeScroll();
if(target.length){
    window.addEventListener('scroll', debounce(function(){
        animeScroll();
    }, 200));
}

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
    let progressHeight = ((window.pageYOffset/totalHeight)*100);
    progress.style.height = progressHeight + "%";
}