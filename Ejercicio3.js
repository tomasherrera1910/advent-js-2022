function distributeGifts(packOfGifts, reindeers) {
    const giftsWeigth = packOfGifts.reduce((weigthAcc, gift) => {
      return weigthAcc + gift.length
    },0)
    const reindeersCarry = reindeers.reduce((weigthCarryAcc, reindeer) => {
      return weigthCarryAcc + reindeer.length * 2
  }, 0)
  return Math.floor(reindeersCarry / giftsWeigth)
  }
//   console.log(distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))
// console.log(distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))