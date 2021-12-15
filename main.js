function preload() {
clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
  canvas = createCanvas(500, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(500, 400);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', getPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized");
}

function draw() {
  image(video, 0, 0, 500, 400);
  fill("red");
  stroke("red");
  //circle(noseX, noseY, 30);
  image(clown_nose, noseX-20, noseY-20, 40,40);

}

function takeSnapshot() {
  save("My_Filtered_Image.png");
}

var noseX = "";
var noseY = "";

function getPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x=" + noseX);
    console.log("nose y=" + noseY);
  }
}
