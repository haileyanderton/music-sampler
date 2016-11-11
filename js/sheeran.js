// jQuery hide()/show() example with a switch statement

$(document).ready(function() {

      $('.songInfo').hide();

      $('.albumCover').click(function() {
        $('.songInfo').slideToggle();
      });

    // function to hide all divs
    function hideAll() {
      $('#loveInfo').hide();
      $('#ynmmidnyInfo').hide();
      $('#loudInfo').hide();
      $('#backInfo').hide();
    }

    hideAll();

    $('.albumCover').click(function() {

    hideAll();

    // audio won't play over eachother

  $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
});
  // switch statement
      switch ($(this).attr("id")) {
        case "loveCover":
          $('#loveInfo').show();
          break;
        case "ynmmidnyCover":
          $('#ynmmidnyInfo').show();
          break;
        case "loudCover":
          $('#loudInfo').show();
          break;
        case "backCover":
          $('#backInfo').show();
          break;
      }
    });

});
