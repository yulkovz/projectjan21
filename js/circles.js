// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

( function( $ ) {

$( document ).ready(function() {

var progressBarOptions = {
  startAngle: -1.55,
  size: 170,
    value: 0.75,
    fill: {
    color: '#ffa500'
  }
}

$('.circle1').circleProgress(progressBarOptions).on('circle-animation-progress', function(event, progress, stepValue) {
  //$(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});

$('#circle-a').circleProgress({
  value : 0.9,
  fill: {
    color: 'rgb(48, 186, 231)'
  }
});

$('#circle-b').circleProgress({
  value : 0.75,
  fill: {
    color: 'rgb(215, 70, 128)'
  }
});

$('#circle-c').circleProgress({
  value : 0.70,
  fill: {
    color: 'rgb(21, 199, 168)'
  }
});

$('#circle-d').circleProgress({
  value : 0.85,
  fill: {
    color: 'rgb(235, 125, 75)'
  }
});


});

 } )( jQuery );