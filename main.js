const container = document.getElementById("container");

for (let i = 0; i < 16; i += 1) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.append(square);
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "red";
  });
}
