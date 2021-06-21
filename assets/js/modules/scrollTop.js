export default function scrollTop() {
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
        let menuHeight = $('header').innerHeight()
        const to = getScrollTopByHref(event.target) - menuHeight
        scrollToPosition(to)
    }
    function scrollToPosition(to){
        window.scroll({
            top: to,
            behavior: "smooth",
        })
    }
}
