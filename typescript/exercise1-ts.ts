function wrappingTS(gifts: string[]): string[] {
    const fill = (length: number, char: string): string => {
        return char.repeat(length + 2) //sum 2 for both corners
    }
    return gifts.map(gift => fill(gift.length, '*') + '\n' + `*${gift}*` + '\n' + fill(gift.length, '*')
    )
}

