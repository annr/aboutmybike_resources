(function($) {
  $.fn.drags = function(opt) {

    opt = $.extend({handle:"",cursor:"move"}, opt);

    if(opt.handle === "") {
        var $el = this;
    } else {
        var $el = this.find(opt.handle);
    }

    return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
      if(opt.handle === "") {
        var $drag = $(this).addClass('draggable');
      } else {
        var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
      }

      var cont_h = $(opt.container).outerHeight();
      var cont_w = $(opt.container).outerWidth();
      var cont_x = $(opt.container).offset().top;
      var cont_y = $(opt.container).offset().left;

      var z_idx = $drag.css('z-index'),
        drg_h = $drag.outerHeight(),
        drg_w = $drag.outerWidth(),
        pos_y = $drag.offset().top + drg_h - e.pageY,
        pos_x = $drag.offset().left + drg_w - e.pageX;

      $drag.css('z-index', 1000).parent().on("mousemove", function(e) {

        // top value is min cont_x, max cont_x + cont_h
        var top = e.pageY + pos_y - drg_h;
        var left = e.pageX + pos_x - drg_w;
        if(top < cont_x) top = cont_x;
        if(top > (cont_x + cont_h)) top = (cont_x + cont_h - drg_h);


        if(left < cont_y) left = cont_y;
        if(left > (cont_y + cont_w)) left = (cont_y + cont_w - drg_w);

        $('.draggable').offset({

          top: Math.min(580, top),
          left: Math.min(10, left)

        }).on("mouseup", function() {
            $(this).removeClass('draggable').css('z-index', z_idx);
        });
      });
      e.preventDefault(); // disable selection

    }).on("mouseup", function() {
        if(opt.handle === "") {
            $(this).removeClass('draggable');
        } else {
            $(this).removeClass('active-handle').parent().removeClass('draggable');
        }
    });

  }
})(jQuery);