import $ from 'jquery';

export default function svgAnime() {
  $('svg path').each(function () {
    var comprimento = $(this).get(0).getTotalLength();
    var comprimentoArredondado = Math.round(comprimento);
    $(this).attr('stroke-dasharray', comprimentoArredondado);
    $(this).attr('stroke-dashoffset', comprimentoArredondado);
  });

  function boxTop(svgTop) {
    var boxOffset = $(svgTop).offset();
    return boxOffset.top;
  }

  $(document).scroll(function () {
    let documentTop = $(this).scrollTop();
    if (documentTop > boxTop('#skills') - 600) {
      $('svg').addClass('animate');
    } else {
      $('svg').removeClass('animate');
    }
  });
}