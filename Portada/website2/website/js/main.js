const llamada = document.querySelector("#area1");
const llamada2 = document.querySelector("#area2");

document.addEventListener("DOMContentLoaded", () => {
  console.log(llamada);
  llamada.addEventListener("change", openlink);
  llamada2.addEventListener("change", openlink2);
  anime({
    targets: ".logo",
    translateX: [-200, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 1000,
    opacity: [0, 1],
  });

  anime({
    targets: "nav a",
    translateY: [-50, 0],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => {
      return 1100 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: ".diamond",
    top: 40,
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => {
      return 1000 + 100 * i;
    },
    opacity: [0, 1],
  });

  anime({
    targets: ".col-1",
    translateX: [-400, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 1600,
    opacity: [0, 1],
  });

  anime({
    targets: ".col-2",
    translateX: [-200, 0],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 1700,
    opacity: [0, 1],
  });
});

function openlink() {

window.open(llamada.value, '_blank');
 /* window.location.href = llamada.value; */
}

function openlink2() {

  window.open(llamada2.value, '_blank');
}