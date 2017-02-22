/*Original code by Dawn Haynes. Edited by Lisa Louison 2.21.17*/

///creating a canvas
function setup() {
  createCanvas(600, 400);
}


function draw() {
//Setting the backgrounf color for the canvas and the strokeweight for the shapes. The stroke color will randomly change
  background(150);
  strokeWeight(2);
  stroke(random(255));

//creating a nested for loop. The first loop creates the x position of the ellipse starting from 0 and incrementing by 50
//as long as it's to the left of the mouse 
  for (var x = 0; x <= mouseX; x += 50) {
//The second loop creates the y position for the ellipse starting from 0 and incrementing by 50 as long as it's above the mouse
    for (var y = 0; y <= mouseY; y += 50) {
      fill(255, 0, 150);
      //The ellipse uses the x and y coordinates produced by the loops and creates multiple ellipses following the mouse
      ellipse(x, y, 25, 25);
    }
  }
}
