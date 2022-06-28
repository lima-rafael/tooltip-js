(function ($) {
  function postionTooltip() {
    let mousePosition = { x: -1, y: -1 };

    $(document).mousemove(function (event) {
      mousePosition.x = event.pageX;
      mousePosition.y = event.pageY;
    });

    /*$('.tooltips').click(function (event) {
      let elementWidth = $(event.target).innerWidth();
      let windowWidth = $(window).width();
      let elementheight = $(event.target).innerHeight();
      let leftPosition = event.pageX;
      let topPosition = event.pageY;
      $('.tooltips-content').css({
        display: 'inline-block',
        position: 'absolute',
        left: ((leftPosition - elementWidth) * 100) / 100,
        top: topPosition + elementheight,
      });
      console.log(windowWidth);
    });*/

    $('.tooltips').click(function (event) {
      let elementWidth = $(event.target).innerWidth();
      let windowWidth = $(window).width();
      let elementheight = $(event.target).innerHeight();
      let leftPosition = $(this).offset().left;
      let topPosition = event.pageY;
      $('.tooltips-content')
        .offset({
          left: ((leftPosition - windowWidth) * 50) / 100,
        })
        .css({
          display: 'inline-block',
          position: 'absolute',
          top: topPosition + elementheight,
        });
      console.log('leftPosition', leftPosition);
      console.log('topPosition', topPosition);
    });

    /*$('.tooltips').mouseleave(function () {
      $('.tooltips-content').css({
        display: 'none',
        position: 'initial',
        left: 'initial',
        top: 'initial',
      });
    });*/
  }

  const init = (function () {
    $(document).ready(function () {
      postionTooltip();
    });
  })();
})(jQuery);
