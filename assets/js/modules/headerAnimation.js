export default function headerAnimation() {
    const largura = innerWidth;
    if ( largura > 1100 ) {
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header')
            header.classList.add('hd-Animated', window.scroll > 0)
        })
    }
}
