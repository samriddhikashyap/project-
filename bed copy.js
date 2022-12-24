img = "";

function setup(){
    canvas = createCanvas(640, 300);
    canvas.center();
}

function preload(){
img = loadImage("tchat.png");
}

function draw(){
image(img, 0, 0, 640, 300);
fill("red");
text("dog", 45, 47);
noFill();
stroke("red");
rect(30, 60, 450, 350);
}