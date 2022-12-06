function getMaxGiftsTS(giftsCities: number[], maxGifts: number, maxCities: number): number {
    const gifts = giftsCities
        .reduce((acc, giftsA) => acc.concat(acc.map(giftsB => [giftsA].concat(giftsB))), [[] as number[]])
        .filter(gifts => gifts.length <= maxCities && gifts.length)
        .map(gifts => gifts.reduce((acc, gifts) => acc + gifts))
        .filter(gifts => gifts <= maxGifts)
    return gifts.length ? Math.max(...gifts) : 0
}