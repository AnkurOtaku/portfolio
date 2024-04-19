const coords = {x:0, y:0};
const circles = Array.from(document.querySelectorAll(".circle"));

circles.forEach(function (circle){
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove",function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;

  circles.forEach(function(circle){
    circle.style.left = coords.x + "px";
    circle.style.top = coords.y + "px";
  })

  console.log(circles);

  //animateCircles();
});

function animateCircles(){
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function(circle, index){
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    x +=10;
    y +=10;
  })
}