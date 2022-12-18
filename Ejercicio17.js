function carryGifts(gifts, maxWeight) {
  const bags = []
  const cleanSpaces = (str) => str.replaceAll(" ", "").length

  const lastAcc = gifts.reduce((acc, gift) => {
    const accLength = cleanSpaces(acc)
    const giftLength = cleanSpaces(gift)

    if (accLength + giftLength <= maxWeight) return `${acc} ${gift}`
    else if (accLength <= maxWeight) bags.push(acc)

    return gift
  })
  if (cleanSpaces(lastAcc) <= maxWeight) bags.push(lastAcc)

  return bags
}
