class SpriteAnimation {
  constructor(totalFrames) {
    this.spriteImages = [];
    this.currentFrame = 0;
    this.TOTAL_FRAMES = totalFrames;
    this.speed = 1; // Velocidade padrão
    this.frameCount = 0;
  }

  preload() {
    for (let i = 0; i <= this.TOTAL_FRAMES; i++) {
      let imageName = `horse/horse-run-0${i}.png`;
      this.spriteImages.push(loadImage(imageName));
    }
  }

  setSpeed(speed) {
    this.speed = speed; // Define a velocidade da animação
  }

  draw() {
    // Reduza o frameCount com base na velocidade
    if (this.frameCount >= this.speed) {
      this.currentFrame = (this.currentFrame + 1) % this.TOTAL_FRAMES;
      this.frameCount = 0;
    }

    background(random());
    smooth();
    image(this.spriteImages[this.currentFrame], width / 2, height / 2);
    image(this.spriteImages[this.currentFrame], width / 3, height / 3);

    // Incremente o frameCount a cada quadro
    this.frameCount++;
  }
}

let animation;
let speedSlider;

function setup() {
  createCanvas(400, 400 );
  animation = new SpriteAnimation(6); // Substitua 6 pelo número real de quadros.
  animation.preload();
  animation2 = new SpriteAnimation(6); // Substitua 6 pelo número real de quadros.
  animation.preload();

  // Crie um controle deslizante para ajustar a velocidade
  speedSlider = createSlider(10, 60, 10); // Valores mínimo, máximo e inicial
  speedSlider.position(10, height + 10);
  speedSlider.input(updateSpeed); // Chame a função updateSpeed() quando o controle deslizante for movido
}

function draw() {
  animation.draw();
}

// Função chamada quando o controle deslizante é movido
function updateSpeed() {
  let newSpeed = speedSlider.value();
  animation.setSpeed(newSpeed);
}
