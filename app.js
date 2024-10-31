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

const animalItems = [
  {
    name: 'ball',
    price: 200,
    quantity: 0,
    sootheAmount: 1
  },
  {
    name: 'treats',
    price: 500,
    quantity: 0,
    sootheAmount: 4
  },
  {
    name: 'trampoline',
    price: 10000,
    quantity: 0,
    sootheAmount: 15
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
    // animal.mood-- // go down by one
    let moodDecrease = 20

    let totalSootheAmount = calculateSootheAmounts()

    moodDecrease -= totalSootheAmount

    animal.mood -= moodDecrease
    // NOTE clamp
    if (animal.mood < 0) {
      animal.mood = 0
    }

    if (animal.mood > 100) {
      animal.mood = 100
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


function purchaseAnimalItem(itemName) {
  const foundAnimalItem = animalItems.find(animalItem => animalItem.name == itemName)

  if (money < foundAnimalItem.price) {
    window.alert(`You cannot afford the ${foundAnimalItem.name}!`)
    // NOTE hard stop! Do not continue this function!
    return
  }


  money -= foundAnimalItem.price
  foundAnimalItem.quantity++

  drawMoney()
  drawAnimalItemStats()
}

function calculateSootheAmounts() {
  let totalSootheAmount = 0

  for (let i = 0; i < animalItems.length; i++) {
    const animalItem = animalItems[i];
    totalSootheAmount += animalItem.sootheAmount * animalItem.quantity
  }


  return totalSootheAmount
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

function drawAnimalItemStats() {
  for (let i = 0; i < animalItems.length; i++) {
    const animalItem = animalItems[i];
    const animalItemElem = document.getElementById(animalItem.name)
    const spanElem = animalItemElem.querySelector('span')
    spanElem.innerText = animalItem.quantity.toString()
  }
}


//#endregion


//#region document load

drawAllAnimalStats()
drawAnimalItemStats()

// NOTE first argument is INSTRUCTIONS for setInterval to run
// NOTE second argument is how often to run the supplied function in milliseconds
// 1000 milliseconds = 1 second
setInterval(decreaseAnimalMoods, 5000)

setInterval(evaluateAnimalMoods, 10000)

//#endregion