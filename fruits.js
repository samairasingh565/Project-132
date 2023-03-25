img = "";
status = "";

function setup() {
canvas = createCanvas(610,320);
canvas.position(300,220);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Object";


}



function draw(){
image(img, 0,0,610,320);
    
}

function modelLoaded(){

    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}
    
function gotResult(error, results) {

if (error) {
    console.log(error);
}
 
console.log(results);
}

function preload(){
 
img = loadImage("8.png");

}
 

