const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const radius = 3;
const maxlength = 150;
const particlesArray = [];
let isClicked = false;
let velocity = { x: 0, y: 0 };

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = { x: 0, y: 0 };

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
window.addEventListener("mousemove", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});
window.addEventListener("click", (event) => {
  isClicked = !isClicked;
  mouse.x = event.x;
  mouse.y = event.y;

  for (let i = 0; i < particlesArray.length; i++) {
    const angle = Math.atan2(particlesArray[i].y - mouse.y, particlesArray[i].x - mouse.x);
    velocity = { x: Math.cos(angle), y: Math.sin(angle) };

    particlesArray[i].speedX = -velocity.x * 5;
    particlesArray[i].speedY = -velocity.y * 5;
  }
});

function gameLoop() {
  createRect(0, 0, canvas.width, canvas.height, "#3A3934");

  particlesArray.push(new Circle(isClicked, mouse));
  handleParticles();

  requestAnimationFrame(gameLoop);
}

const createRect = (x, y, width, height, color) => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
};

class Circle {
  constructor(isClicked, mouse) {
    this.x = Math.random() > 0.3 ? parseInt(Math.random() * canvas.width) : Math.random() > 0.5 ? 0 : canvas.width;
    this.y = Math.random() > 0.7 ? (Math.random() > 0.5 ? 0 : canvas.width) : parseInt(Math.random() * canvas.width);
    this.size = Math.floor(Math.random() * 2 + 4);
    this.speedX = Math.round(Math.random() * 3) - 1.5;
    this.speedY = Math.round(Math.random() * 3) - 1.5;
    this.angle = Math.atan2(this.y - mouse.y, this.x - mouse.x);
    this.velocity = { x: Math.cos(this.angle), y: Math.sin(this.angle) };
    this.isClicked = isClicked;
    this.color = "#9D9C9A";
  }
  update() {
    if (isClicked) {
      this.x -= this.velocity.x * 5;
      this.y -= this.velocity.y * 5;
    } else {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    if (this.size >= 1) this.size -= 0.01;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const handleParticles = () => {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();

    const dx = particlesArray[i].x - mouse.x;
    const dy = particlesArray[i].y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < maxlength) {
      ctx.beginPath();
      ctx.strokeStyle = "#9D9C9A";
      ctx.lineWidth = particlesArray[i].size / 5;
      ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }

    for (let j = 0; j < particlesArray.length; j++) {
      const dx = particlesArray[i].x - particlesArray[j].x;
      const dy = particlesArray[i].y - particlesArray[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < maxlength) {
        ctx.beginPath();
        ctx.strokeStyle = particlesArray[i].color;
        ctx.lineWidth = particlesArray[i].size / 15;
        ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
        ctx.stroke();
      }
    }

    if (
      particlesArray[i].x > canvas.width ||
      particlesArray[i].x < 0 ||
      particlesArray[i].y > canvas.height ||
      particlesArray[i].y < 0 ||
      particlesArray[i].size <= 1
    ) {
      particlesArray.splice(i, 1);
      i--;
    }
  }
};

gameLoop();
