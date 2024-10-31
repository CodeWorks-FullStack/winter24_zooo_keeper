//#region state
const animals = [
  {
    name: 'jeffrey',
    emoji: '🐅',
    mood: 100
  },
  {
    name: 'polka-dot',
    emoji: '🦓',
    mood: 100
  },
  {
    name: 'brenda',
    emoji: '🐊',
    mood: 100
  },
]

//#endregion

//#region logic

function sootheJeffrey() {
  // ✅ get jeffrey
  const jeffrey = animals[0]
  // make mood go up by 1
  jeffrey.mood += 1
  console.log('this is jeffrey', jeffrey)
  drawJeffreyStats()
}

function soothePolkaDot() {
  const polkaDot = animals[1]
  polkaDot.mood += 1
  console.log('polka dot', polkaDot);
  drawPolkaDotStats()
}

function sootheAnimal(animalName) {
  console.log(`soothing the animal with the name of ${animalName}`);
  const foundAnimal = animals.find(animal => animal.name == animalName)
  // foundAnimal.mood += 1 equivalent to ++
  foundAnimal.mood++
  console.log('found the animal', foundAnimal);
  drawAllAnimalStats()
}



//#endregion

//#region graphics

function drawJeffreyStats() {
  const jeffreyElem = document.getElementById('jeffrey')
  console.log('got the jeffrey elem', jeffreyElem);

  const jeffreyParagraphElem = jeffreyElem.querySelector('p')
  console.log('got the jeffrey paragraph elem', jeffreyParagraphElem);

  const jeffrey = animals[0]
  jeffreyParagraphElem.innerText = `Jeffrey | Mood ${jeffrey.mood}`
}

function drawPolkaDotStats() {
  const polkaDotElem = document.getElementById('polka-dot')
  const polkaDotParagraphElem = polkaDotElem.querySelector('p')
  const polkaDot = animals[1]
  polkaDotParagraphElem.innerText = `Polka-Dot | Mood ${polkaDot.mood}`
}

function drawAllAnimalStats() {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]
    console.log('animal', animal);
    const animalElem = document.getElementById(animal.name)
    console.log(animalElem);

    const animalParagraphElem = animalElem.querySelector('p')
    animalParagraphElem.innerText = `${animal.name} | Mood ${animal.mood}`
  }
}

//#endregion
