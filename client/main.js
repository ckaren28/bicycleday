window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		function( callback ){
			window.setTimeout(callback, 1000 / 60);
		};
})();

var ctx = document.getElementById("drawingBoard").getContext('2d');
var x = 0;

var height = 200;
var offset = 20;
var step = 0.2;
var size = 3;

ctx.fillStyle = "red";
ctx.shadowBlur = 10;

var equation = function(x, magnitude) {
  return magnitude + Math.cos(x / 10) * magnitude;
};

requestAnimationFrame(function update() {

  requestAnimationFrame(update);

  x += step;

  var color = "rgb(" + [
     10 + Math.round(equation(x, 55)),
     80 + Math.round(equation(x, 75)),
     Math.round(equation(x, 20)),
  ].join(",") + ")";

  ctx.fillStyle = color;
  ctx.shadowColor = color;

  ctx.fillRect(x, equation(x, height) + offset, size, size);

});
