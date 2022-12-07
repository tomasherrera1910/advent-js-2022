function getGiftsToRefillTS(a1: string[], a2: string[], a3: string[]): string[] {
    const refill: Set<string> = new Set()

    const verify = (mainArray: string[], array2: string[], array3: string[]): void => {
        mainArray.forEach(gift => {
            if (array2.indexOf(gift) === -1 && array3.indexOf(gift) === -1)
                refill.add(gift)
        })
    }

    verify(a1, a2, a3)
    verify(a2, a1, a3)
    verify(a3, a2, a1)

    return [...refill.values()]
}