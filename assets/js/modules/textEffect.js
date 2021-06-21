export default function textEffect() {
    function typeWrite(elemento){
        const textoArray = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        textoArray.forEach((letra, i) => {
            setTimeout(() => elemento.innerHTML += letra, 75 * i)
        });

    }
    const titulo = document.querySelector('#inicio h1');
    typeWrite(titulo)
}
