
function preload() {

}
function setup() {
    canvas = createCanvas(400,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
   video.hide();

  
}
function draw() {
    image(video,100,100,230,230);
   circle(20,30,30)
   circle(380,380,30)
   circle(380,30,30)
   circle(30,380,30)
}

function take_snapshot() {
    save('image.png');
}