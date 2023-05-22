stat = "";
object = [];

function setup() {
    canvas = createCanvas(500, 270);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(500, 270);
    video.hide();
}

function start() {
    objects = ml5.objectDetector('cocossd', ModelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects...";
}

function ModelLoaded() {
    console.log("The model has been initialised");
    stat = true;
}

function draw() {
    image(video, 0, 0, 500, 270);
}