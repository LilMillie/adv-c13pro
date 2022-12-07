function preload() {
}

function setup() {
    console.log('running setup');
    canvas = createCanvas(640, 480);
    canvas.position(525, 225);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(700, 300);
    video.hide();
}

function take_snapshot() {
    save('picture.png');
}

function draw() {
  image(video, 180, 125, 270, 220);

  fill(199, 86, 86);
  stroke(199, 86, 86);
  rect(55, 25, 500, 25);

  fill(199, 86, 86);
  stroke(199, 86, 86);
  rect(55, 400, 500, 25);
  
  fill(199, 86, 86);
  stroke(199, 86, 86);
  rect(50, 25, 25, 415);
  
  fill(86, 92, 199);
  stroke(86, 92, 199);
  circle(62, 40, 60);
  circle(62, 415, 60);

  fill(199, 86, 86);
  stroke(199, 86, 86);
  rect(550, 25, 25, 415);
  
  fill(86, 92, 199);
  stroke(86, 92, 199);
  circle(562, 40, 60);
  circle(562, 415, 60);
}