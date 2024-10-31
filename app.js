//#region state

let money = 0


const animals = [
  {
    name: 'jeffrey',
    emoji: '🐅',
    mood: 80
  },
  {
    name: 'polka-dot',
    emoji: '🦓',
    mood: 90
  },
  {
    name: 'brenda',
    emoji: '🐊',
    mood: 20
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
  const foundAnimal = animals.find(animal => animal.name == animalName)
  // foundAnimal.mood += 1     equivalent to ++
  foundAnimal.mood++

  if (foundAnimal.mood > 100) {
    foundAnimal.mood = 100
  }

  drawAllAnimalStats()
}

function decreaseAnimalMoods() {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]
    // animal.mood -= 1
    animal.mood-- // go down by one

    // NOTE clamp
    if (animal.mood < 0) {
      animal.mood = 0
    }

  }
  drawAllAnimalStats()
}


function evaluateAnimalMoods() {
  for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]
    if (animal.mood > 0) {
      money += 100
    }
    else {
      money -= 100
    }
  }

  drawMoney()
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
    const animalElem = document.getElementById(animal.name)

    const animalParagraphElem = animalElem.querySelector('p')
    animalParagraphElem.innerText = `${animal.name} | Mood ${animal.mood}`
  }
}

function drawMoney() {
  const moneyElem = document.getElementById('my-money')
  moneyElem.innerText = money.toString()
}


//#endregion


//#region document load

drawAllAnimalStats()

// NOTE first argument is INSTRUCTIONS for setInterval to run
// NOTE second argument is how often to run the supplied function in milliseconds
// 1000 milliseconds = 1 second
setInterval(decreaseAnimalMoods, 1000)

setInterval(evaluateAnimalMoods, 10000)

//#endregion