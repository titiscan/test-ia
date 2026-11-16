const image = document.querySelector('img');

let angle = 0;
let direction = 1;

function animate() {
  angle += direction * 0.02;

  if (angle > 0.15) direction = -1;
  if (angle < -0.15) direction = 1;

  image.style.transform = `rotate(${angle}rad) translateY(${Math.sin(angle * 10) * 6}px)`;
  requestAnimationFrame(animate);
}

image.addEventListener('mouseenter', () => {
  image.style.filter = 'brightness(1.1)';
});

image.addEventListener('mouseleave', () => {
  image.style.filter = 'none';
});

animate();