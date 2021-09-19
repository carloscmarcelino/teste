export default function projetos() {
  const largura = innerWidth;
  if ( largura > 500 ) {
    const projetos = document.querySelectorAll('.design');
    projetos.forEach((i) => {
      i.classList.remove('hidden')
    })
  }
}