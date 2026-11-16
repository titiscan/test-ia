const image = document.querySelector('img');

let time = 0;

function animate() {
  time += 0.01;
  const offset = Math.sin(time) * 4;
  image.style.transform = `translateY(${offset}px)`;
  requestAnimationFrame(animate);
}

animate();