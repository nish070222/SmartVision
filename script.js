const URL = "./my_model/";

let model;
let webcam;
let maxPredictions;
let running = false;

const webcamContainer = document.getElementById("webcam-container");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");

const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");

const cameraStatus = document.getElementById("cameraStatus");

const result = document.getElementById("result");
const confidence = document.getElementById("confidence");
const confidenceBar = document.getElementById("confidence-bar");

// MULA KAMERA
startButton.addEventListener("click", init);

async function init() {


try {

    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    // Load model Teachable Machine
    model = await tmImage.load(modelURL, metadataURL);

    maxPredictions = model.getTotalClasses();

    // Setup webcam
    const flip = true;

    webcam = new tmImage.Webcam(400, 300, flip);

    await webcam.setup();
    await webcam.play();

    running = true;

    // Buang placeholder
    cameraPlaceholder.style.display = "none";

    // Masukkan kamera
    webcamContainer.appendChild(webcam.canvas);

    webcam.canvas.style.width = "100%";
    webcam.canvas.style.height = "100%";
    webcam.canvas.style.objectFit = "cover";

    // Tukar status
    cameraStatus.textContent = "ONLINE";

    cameraStatus.style.background =
        "rgba(34, 197, 94, 0.12)";

    cameraStatus.style.color = "#4ade80";

    result.textContent = "Mengesan...";

    loop();

} catch (error) {

    console.error(error);

    result.textContent = "Kamera gagal dibuka";

    cameraStatus.textContent = "ERROR";

}


}

// LOOP KAMERA
async function loop() {


if (!running) {
    return;
}

webcam.update();

await predict();

window.requestAnimationFrame(loop);

}

// PREDICTION
async function predict() {


const prediction = await model.predict(webcam.canvas);

let highestPrediction = prediction[0];

for (let i = 1; i < prediction.length; i++) {

    if (
        prediction[i].probability >
        highestPrediction.probability
    ) {

        highestPrediction = prediction[i];

    }

}

const className = highestPrediction.className;
const probability = highestPrediction.probability;

const percentage = Math.round(probability * 100);


// Jika confidence rendah
if (probability < 0.60) {

    result.textContent = "Objek Tidak Dikenali";

} else {

    result.textContent = className;

}


confidence.textContent = percentage + "%";

confidenceBar.style.width = percentage + "%";


}

// RESET
stopButton.addEventListener("click", resetCamera);

function resetCamera() {


running = false;

if (webcam) {

    webcam.stop();

    if (webcam.canvas) {
        webcam.canvas.remove();
    }

}

cameraPlaceholder.style.display = "block";

cameraStatus.textContent = "OFFLINE";

cameraStatus.style.background =
    "rgba(239, 68, 68, 0.12)";

cameraStatus.style.color = "#f87171";

result.textContent = "Menunggu objek...";

confidence.textContent = "0%";

confidenceBar.style.width = "0%";


}
