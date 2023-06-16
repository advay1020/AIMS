let song1;
let song2;

function preload() {
  song1 = loadSound('music.mp3');
  song2 = loadSound('music2.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let constraints = {
    video: {
      mandatory: {
        minWidth: width,
        minHeight: height,
      },
      optional: [{ maxFrameRate: 30 }],
    },
    audio: false,
  };
  video = createCapture(constraints, function () {
    video.hide();
  });
}

function draw() {
  image(video, 0, 0, width, height);
}
