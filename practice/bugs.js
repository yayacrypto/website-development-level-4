const button = document.querySelector("#count-button");
let clicks = 0;

button.addEventListener("click", () => {
  clicks = clicks + 1;
  button.textContent = "Clicked " + count + " times";
});
