$(document).ready(function(){

var character=$("#character")

  $(document).keydown(function(e) {
    switch (e.which) {
    case 37:
      $('#character').stop().animate({
            left: '-=75'
        }); //left arrow key
        break;
    case 38:
      $('#character').stop().animate({
            top: '-=50'

        }); //up arrow key
        break;
    case 39:
      $('#character').stop().animate({
            left: '+=75'
        }); //right arrow key
        break;
    case 40:
      $('#character').stop().animate({
            left: '+=9900'
        }); //bottom arrow key
        break;
    }  // All falling objects
  var gravity = $('#character'),
    // All static objects
    obstacle = $('#line');
  var all = gravity.add(obstacle);
  setInterval(function() {
    // Calculate positions of all falling objects
    gravity.each(function() {
      var e = this,
        g = $(this),
        ypos = g.offset().top,
        xpos = g.offset().left,
        h = g.height(),
        w = g.width();
      // Check whether something is in our way
      var conflicts = false;
      all.each(function() {
        if (this === e) return;
        var a = $(this);
        if (xpos < a.offset().left + a.width() && xpos + w > a.offset().left) {
          if (ypos + h > a.offset().top && ypos + h < a.offset().top + a.height()) {
            conflicts = true;
          }
        }
      });
      if (!conflicts) {
        // Move down (real gravitation would be v = a * t)
        g.css('top', g.offset().top + 3);
      }
    });
  }, 1000);
})
   
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
    
    return true;
  }
  window.setInterval(function() {
    $.each($('.allSpikes'), function() {
        if (collision($('#character'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
       window.location.replace("lose.html")
      }
    });
  }, 200);
});


