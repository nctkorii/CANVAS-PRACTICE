const myCanvas = document.getElementById("myDrawing");
const myContext = myCanvas.getContext("2d");
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    myContext.save();
    myContext.fillStyle = "rgb(0, " + (300-30*i) + ", " + (300+30*j) + ")";
    myContext.translate(50 + i * 60, 50 + j * 60);
    myContext.fillRect(0, 0, 15, 15);
    myContext.restore();
 }
}