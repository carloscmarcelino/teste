export default function idade() {
  const spanIdade = document.querySelector(".idade");
  
  function calculaIdade(dataNasc) {
    let anoAtual = new Date().getFullYear();
    let anoNascParts = dataNasc.split('/');
    let diaNasc = anoNascParts[0];
    let mesNasc = anoNascParts[1];
    let anoNasc = anoNascParts[2];
    let idade = anoAtual - anoNasc;
    let mesAtual = new Date().getMonth() + 1;

    if (mesAtual < mesNasc) {
      idade--;
    } else {
      if (mesAtual == mesNasc) {
        if (new Date().getDate() < diaNasc) {
          idade--;
        }
      }
    }
    return idade;
  }
  spanIdade.innerHTML = calculaIdade('11/07/2001');
}