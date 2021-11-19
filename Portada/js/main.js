const container = document.querySelector(".container");
const IrA = document.querySelector("h2");

document.addEventListener('DOMContentLoaded',()=>{
   
    animateBlocks();
animateBlocks2();
    IrA.addEventListener('click',IrAOtroLado);
})

function IrAOtroLado(){
    window.location.href="website2/index.html";
}

for(var i=0; i<=100; i++){
    const blocks = document.createElement('div');
    
    const blocks2= document.createElement('div');
    blocks.classList.add('blocks');
    blocks2.classList.add('blocks2');
    container.appendChild(blocks);
    container.appendChild(blocks2);
}

function animateBlocks(){
    anime({
        targets: '.blocks',
        translateX: function(){
            return anime.random(-700,700);
        },
        translateY: function(){
            return anime.random(-700,700);
        },
       scale: function(){
            return anime.random(1,5);
        },
     easing: 'linear',
     duration: 3000,
     delay: anime.stagger(10),
     complete: animateBlocks
    })
}

function animateBlocks2(){
    anime({
        targets: '.blocks2',
        translateX: function(){
            return anime.random(-700,700);
        },
        translateY: function(){
            return anime.random(-700,700);
        },
       scale: function(){
            return anime.random(1,5);
        },
     easing: 'linear',
     duration: 3000,
     delay: anime.stagger(10),
     complete: animateBlocks2
    })
}
