export default function reveal(){
    /*Top*/
    const sr = ScrollReveal({
        origin: 'top',
        distance: '50px',
        duration: 2000,
        reset: false
    });
    sr.reveal('.titulo-delay',{delay: 200})
    sr.reveal('.cards-interval',{interval: 400})
    /*Left*/
    const srl = ScrollReveal({
        origin: 'left',
        distance: '50px',
        duration: 2000,
        reset: false
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
}