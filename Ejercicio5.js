function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const gifts = giftsCities
                .reduce((acc, giftsA) => acc.concat(acc.map(giftsB => [giftsA].concat(giftsB))),[[]])
                .filter(gifts => gifts.length <= maxCities && gifts.length)
                .map(gifts => gifts.reduce((acc, gifts) => acc + gifts))
                .filter(gifts => gifts <= maxGifts)
  return gifts.length ? Math.max(...gifts) : 0
}

  // console.log(getMaxGifts([1, 2, 3], 44, 3))
// console.log(getMaxGifts([12, 22, 11, 1, 23], 36, 3)) // 36
//   console.log(getMaxGifts([12, 22, 11, 1, 23], 35, 2)) // 35
//   console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
  console.log(getMaxGifts([50], 15, 1)) // 0
// console.log(getMaxGifts([50], 100, 1)) // 50
// console.log(getMaxGifts([50, 70], 100, 1)) // 70
//   console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
//   console.log(getMaxGifts([50, 70, 30], 100, 3) )// 100
//   console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100