function checkPartTS(part: string): boolean {
    return [...part].some((_letter, i) => {
        const sliceIndex = part.slice(0, i) + part.slice(i + 1)
        return [...sliceIndex].reverse().join('') === sliceIndex
    })
}