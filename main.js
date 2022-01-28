function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LheH3ELRL/",modelReady);
}

function modelReady(){
classifier.classifiy(gotResults);
}   