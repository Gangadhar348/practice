// generate randon number

const randomColor = function () {
  const hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intravlID;
let startChangingColor = function () {
  if (!intravlID) {
    intravlID = setInterval(changeBgColor, 200);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

let stopChangingColor = function () {
  clearInterval(intravlID);
  intervalID = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
