import $ from 'jquery';

export default function tolltip() {
  $(".tolltip").on('mouseover', function () {
    let mouse = event.pageX;
    $(this).append("<style>.tolltip::after { left: " + mouse + "px; }</style>")
  });

  $(".tolltip").on('mouseout', function () {
    $('.tolltip style').remove();
  })
}