let btn = document.getElementById('cta');
let btn2 = document.getElementById('cta2');
let btn3 = document.getElementById('inicio');
let btn4 = document.getElementById('seguir');



btn.onclick = function(){
    let morphing = anime({
  targets: '.polymorph',
  points: [
    { value: '215, 110 0, 110 0, 0 47.7, 0 67,76' },
    { value: '215, 110 0, 110 0, 0 0, 0 67,76' },
   ],
  easing: 'easeOutQuad',
  duration: 1200,
  loop: false
});

anime({
    targets: '#blip',
    opacity: 1,
    duration: 500,
    translateY: 150
});

let promise = morphing.finished.then(()=> {

    btn2.onclick = function(){
    let morphing = anime({
  targets: '.polymorph',
  points: [
    { value: '215, 110 0, 110 0, 0 47.7, 0 67,76' },
    { value: '215,110 0, 110 0, 0 47.7, 0 215, 0' },
   ],
  easing: 'easeOutQuad',
  duration: 1200,
  loop: false
})

anime({
    targets: '#blip',
    opacity: 0,
    duration: 500,
    translateY: -800
});

    }
})

}

 btn3.addEventListener('click', portada);

 function portada(){
  window.location.href= "../index.html";
 }

 btn4.addEventListener('click', seguir);

 function seguir(){
  window.location.href="website/index.html";
 }

//https://www.youtube.com/watch?v=2wr1iixy20I