const MODEL_URL = '/models'
const input = document.getElementById("myImage");

await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
await faceapi.loadFaceLandmarkModel(MODEL_URL)
await faceapi.loadFaceRecognitionModel(MODEL_URL)

let fullFaceDescriptions = await faceapi.detectAllFaces(input).withFaceLandmarks().withFaceDescriptors()

// const video = document.getElementById("video");

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
//   faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
//   faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
//   faceapi.nets.faceExpressionNet.loadFromUri("/models"),
// ]).then(startVideo)

// function startVideo () {
//   navigator.mediaDevices.getUserMedia(
//     { video: {} },
//     stream => video.srcObject = stream,
//     err => console.error(err)
//   )
// }

// video.addEventListener("play", () => {
//   console.log("jlkjlk")
// })