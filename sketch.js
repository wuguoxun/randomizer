let foods = [];
let randomIndex;
let animating = false;
let lunchs = [];
let imageCounter = 0;
let starRandomizerButton;
let cnv;
// let button;
let nameInputs = [];
let addMoreButton;
let firstTime = true;

function preload() {

  for (let i = 0; i <= 6; i++) {
    lunchs[i] = loadImage(`assets/lunch${i}.png`)
  }
}

function setup() {
  cnv = createCanvas(600, 500);
  cnv.parent("#canvasDiv");
  background(156, 93, 112);
  textSize(144);
  textFont('courier new');
  textAlign(CENTER);
  // textSytle(BOLD);
  fill(0);
  imageMode(CENTER);
  frameRate(8);


  // button = createButton('click to randomizer');
  // button = select("#randButton");
  // button.mousePressed(buttonPressed);
  // button.class("randomizerButton");

  addMoreButton = select("#addMoreButton")
  addMoreButton.mousePressed(addAnotherInput);
  starRandomizerButton = select("#randButton")
  starRandomizerButton.mousePressed(buttonPressed);


  for (let i = 1; i < 7; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
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

function addAnotherInput() {
  for (let i = 1; i < 2; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

function randomizer() {
  animating = false;

  if (foods[0]) {
    clear();
    randomIndex = int(random(foods.length));
    image(random(lunchs), width / 2, height / 2);
    text(foods[randomIndex], width / 2, height * .2);
    // text(foods[randomIndex].name, width / 2, height - 55);
    foods.splice(randomIndex, 1);
  } else {
    background(random(20, 40, 200));
    text("Nothing", width / 2, height / 2);
  }
}


function buttonPressed() {
  if (firstTime) {
    for (let i = 0; i < nameInputs.length; i++) {
      foods.push(nameInputs[i].value());
    }
    firstTIme = false;
  }
  animating = true;
  setTimeout(randomizer, 2000);
}
