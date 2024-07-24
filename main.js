const container = document.getElementById("container");
const sizeButton = document.getElementById("size-button");
const modeSelector = document.getElementById("mode");
let canvasSize = 10;
let mode = "normal";

const randomiseSquareColour = () => {
  // RGB is between 0 and 255, so this function includes 0 and excludes 256
  const getRandomRGBValue = () => Math.floor(Math.random() * 256);
  const redValue = getRandomRGBValue();
  const greenValue = getRandomRGBValue();
  const blueValue = getRandomRGBValue();
  return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
};
const createCanvas = () => {
  container.innerHTML = "";
  const squareWidth = 100 / canvasSize;
  for (let i = 0; i < canvasSize * canvasSize; i += 1) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareWidth}%`;
    container.append(square);
    square.addEventListener("mouseover", () => {
      if (mode === "normal") {
        square.style.backgroundColor = "yellow";
      }
      if (mode === "random") {
        square.style.backgroundColor = randomiseSquareColour();
      }
      if (mode === "shade") {
        square.style.backgroundColor = "black";
        const currentOpacity = parseFloat(square.style.opacity);
        console.log(currentOpacity);
        if (!currentOpacity) {
          square.style.opacity = "0.1";
        } else {
          square.style.opacity = currentOpacity + 0.1;
        }
      }
    });
  }
};

const changeCanvasSize = () => {
  const desiredSize = parseInt(
    prompt("How big do you want your canvas? (1-100)")
  );
  if (!desiredSize || typeof desiredSize !== "number" || desiredSize > 100) {
    return alert("Please enter a number between 1 and 100");
  } else {
    canvasSize = desiredSize;
    createCanvas();
  }
};

sizeButton.addEventListener("click", changeCanvasSize);
modeSelector.addEventListener("change", () => (mode = modeSelector.value));
createCanvas();
