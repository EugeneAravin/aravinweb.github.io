AOS.init({
  duration: 1000
});

var scene = $('#scene').get(0);
var parallaxInstance = new Parallax(scene);

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})


$('.parallax-window').parallax({imageSrc: '../img/bg2.png'});
$('.parallax-window').parallax({imageSrc: '../img/skills-bg.png'});


$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });