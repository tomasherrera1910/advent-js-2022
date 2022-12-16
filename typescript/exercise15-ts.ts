function decorateTreeTS(base: string): string[] {
    const DICTIONARY = {
        PP: 'P', BR: 'P', RB: 'P',
        RR: 'R', BP: 'R', PB: 'R',
        BB: 'B', RP: 'B', PR: 'B'
    }
    const baseNoSpace = base.split(' ')

    let three = [base]
    baseNoSpace.slice(0, -1).reduce((acc, _) => {
        acc = acc.slice(0, -1).map((_, i) => DICTIONARY[acc[i] + acc[i + 1]])
        three.push(acc.join(' '))
        return acc
    }, baseNoSpace)

    return three.reverse()
}