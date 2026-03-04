let lastScroll = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  if (current > lastScroll) {
    header.style.transform = "translateY(-100%)";
  } else {
    header.style.transform = "translateY(0)";
  }
  lastScroll = current;
});

function changeImg(el) {
  document.getElementById("mainImage").src = el.src;
}
let scale = 1;

function zoomIn() {
  scale += 0.1;
  document.getElementById("mainImage").style.transform = `scale(${scale})`;
}

function zoomOut() {
  if (scale > 1) {
    scale -= 0.1;
    document.getElementById("mainImage").style.transform = `scale(${scale})`;
  }
}

function changeImage(img) {
  scale = 1;
  const main = document.getElementById("mainImage");
  main.src = img.src;
  main.style.transform = "scale(1)";
}