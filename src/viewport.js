function reportWindowSize() {
  document.getElementById("viewPort").innerText =
    "Viewport: " + window.innerWidth + " px";
}
reportWindowSize();
window.onresize = reportWindowSize;
