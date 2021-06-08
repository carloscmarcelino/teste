export default function headerAnimation(){
    window.addEventListener('scroll', function(){
        const header = document.querySelector('header')
        header.classList.add('hd-Animated', window.scroll > 0)
    })
}