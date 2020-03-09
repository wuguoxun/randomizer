let foods = [{

  name: "pizza",
  color: "red"
}, {
  name: "noddle",
  color: "yellow"
}, {
  name: "burger",
  color: "brown"
}, {
  name: "salad",
  color: "green"

}, {
  name: "poke",
  color: "orange"

}, {
  name: "yougert",
  color: "blue"

}];

let randomIndex;
let counter = 0;
let animating = false;
let lunchs = [];
let imageCounter = 0;

function preload() {

  for (let i = 0; i <= 6; i++) {
    lunchs[i] = loadImage(`assets/lunch${i}.png`)
  }
}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(35);
  imageMode(CENTER);
  frameRate(8);

  text("click to randomizer");


  button = createButton("click to randomizer");
  button.mousePressed(buttonPressed);
  // button.style("padding","20px");
  // button.style("background-color","#f5cc5d");
  button.class("randomizerButton");
}

function draw() {
  if (animating == true) {
    clear();
    // ellipse(random(width),random(height),50,50)
    image(lunchs[imageCounter], width / 2, height / 2);

    if (imageCounter < lunchs.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }

  }

}

function randomizer() {
  animating = false;

  if (foods[0]) {
    background(random(200, 255));
    randomIndex = int(random(foods.length));
    text(`${foods[randomIndex].name} favorite color is
      ${foods[randomIndex].color}`, 50, 50);
    foods.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", 50, 50);
  }

}

function changeBackround() {
  if (counter <= 5) {
    counter++;
    background(random(255), random(255), random(255));
    setTimeout(changeBackround, 1000);
  } else {

  }
}

function mousePressed() {}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}
