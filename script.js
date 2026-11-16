const image = document.getElementById('image');
const ghosts = [
  document.getElementById('ghost1'),
  document.getElementById('ghost2'),
  document.getElementById('ghost3')
];

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let positions = Array.from({ length: 4 }, () => ({
  x: mouseX,
  y: mouseY
}));

window.addEventListener('mousemove', (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function update() {
  positions[0].x += (mouseX - positions[0].x) * 0.08;
  positions[0].y += (mouseY - positions[0].y) * 0.08;

  for (let i = 1; i < positions.length; i++) {
    positions[i].x += (positions[i - 1].x - positions[i].x) * 0.07;
    positions[i].y += (positions[i - 1].y - positions[i].y) * 0.07;
  }

  image.style.left = positions[0].x + 'px';
  image.style.top = positions[0].y + 'px';

  const opacities = [0.45, 0.25, 0.10];

  ghosts.forEach((ghost, index) => {
    ghost.style.left = positions[index + 1].x + 'px';
    ghost.style.top = positions[index + 1].y + 'px';
    ghost.style.opacity = opacities[index];
  });

  requestAnimationFrame(update);
}

update();