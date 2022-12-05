function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
    const giftsWeigth = packOfGifts.reduce((weigthAcc, gift) => weigthAcc + gift.length, 0)
    const reindeersCarry = reindeers.reduce((weigthCarryAcc, reindeer) => weigthCarryAcc + reindeer.length * 2, 0)
    return Math.floor(reindeersCarry / giftsWeigth)
}