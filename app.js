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
}



//#endregion

//#region graphics

//#endregion
