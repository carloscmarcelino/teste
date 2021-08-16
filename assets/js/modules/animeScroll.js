import $ from 'jquery';

export default function animeScroll () {
  const widthScreen = window.screen.width;   
  const heightScreen = window.screen.height;

  if ( widthScreen > 1100 && heightScreen >= 1080 ) {
    $('.section').each(function () {
      let heightSection = $(this).height(),
      offsetTop = $(this).offset().top,
      menuHeight = $('header').innerHeight() + 150,
      id = $(this).attr('id'),
      $itemMenu = $('a[href="#' + id + '"]');
      
      $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
  
        if ( offsetTop - menuHeight < scrollTop && offsetTop + heightSection - menuHeight > scrollTop ) {
          $itemMenu.addClass('active');
        } else {
          $itemMenu.removeClass('active');
        }
      });
    });
  }
}