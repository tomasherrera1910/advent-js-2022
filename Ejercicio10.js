function checkJump(heights) {
const maxIndex = heights.indexOf(Math.max(...heights))
const upArray = heights
        .slice(0, maxIndex)

const up =  upArray.length > 0 && 
        upArray
        .every((height, i) => height <= heights[i+1])

const downArray = heights
        .slice(maxIndex)                        

const down = downArray.length > 1 &&
         downArray
        .every((height, i) => {
        const next = downArray[i+1] || height
        return height >= next
        })
return up && down
}
// console.log(checkJump([1, 3, 8, 5, 2]))
console.log(checkJump([2, 2, 2, 2]))
// console.log(checkJump([1, 2, 3]))