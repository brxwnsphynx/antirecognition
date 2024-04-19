let faceapi;
let video;
let detections;
const detectionOptions = {
  withLandmarks: true,
  withDescriptors: false,
  minConfidence: 0.5,
  minFaceSize: 150 
};

function setup() {
  let canvasContainer = document.getElementById('canvas-container');
  let canvas = createCanvas(800, 600); // Increase canvas size to match larger video size
  canvas.parent(canvasContainer);
  
  video = createCapture(VIDEO);
  video.size(800, 600); // Set video size to match canvas size
  video.hide();
  faceapi = ml5.faceApi(video, detectionOptions, modelReady);
}

function modelReady() {
  if (faceapi) {
    faceapi.detect(gotResults);
  } else {
    console.error('FaceAPI is not initialized.');
  }
}

function gotResults(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  detections = result;
}

function draw() {
  background(255);
  image(video, 0, 0, width, height);
  if (detections) {
    for (let i = 0; i < detections.length; i++) {
      const alignedRect = detections[i].alignedRect;
      const x = alignedRect._box._x;
      const y = alignedRect._box._y;
      const boxWidth = alignedRect._box._width;
      const boxHeight = alignedRect._box._height;
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      rect(x, y, boxWidth, boxHeight);
      let faceImage = video.get(x, y, boxWidth, boxHeight);
      faceImage.filter(BLUR, 31);
      image(faceImage, x, y, boxWidth, boxHeight);
    }
  }
  if (faceapi) {
    faceapi.detect(gotResults);
  } else {
    console.error('FaceAPI is not initialized.');
  }
}
