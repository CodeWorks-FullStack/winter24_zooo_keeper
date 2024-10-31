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
]

//#endregion

//#region logic

function feedJeffrey() {
  // ✅ get jeffrey
  const jeffrey = animals[0]
  // make mood go up by 1
  jeffrey.mood += 1
  console.log('this is jeffrey', jeffrey)
  drawJeffreyStats()
}



//#endregion

//#region graphics

function drawJeffreyStats() {
  // const jeffreyElem = document.getElementById('jeffrey')
  // console.log('got the jeffrey elem', jeffreyElem);

  const jeffreyParagraphElem = document.querySelector('p')
  console.log('got the jeffrey paragraph elem', jeffreyParagraphElem);

  const jeffrey = animals[0]
  jeffreyParagraphElem.innerText = `Jeffrey | Mood ${jeffrey.mood}`
}

//#endregion
