function checkJumpTS(heights: number[]): boolean {
    const maxHeight = Math.max(...heights)
    const upArray = heights
        .slice(0, heights.indexOf(maxHeight))

    const up = upArray.length > 0 &&
        upArray
            .every((height, i) => height <= heights[i + 1])

    const downArray = heights
        .slice(heights.indexOf(maxHeight))

    const down = downArray.length > 1 &&
        downArray
            .every((height, i) => {
                const next = downArray[i + 1] || height
                return height >= next
            })
    return up && down
}