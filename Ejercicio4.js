function fitsInOneBox(boxes) {
    let isValid = true
    const boxSize = (box) => box.l + box.w + box.h
    boxes
    .sort((a, b) => boxSize(b) - boxSize(a))
    .forEach((box, i) => {
      const next = boxes[i+1] || 0
      if(box.l <= next.l || box.w <= next.w || box.h <= next.h)
        isValid = false
    })
    return isValid    
}
// console.log(fitsInOneBox([
//     { l: 1, w: 1, h: 1 },
//     { l: 3, w: 3, h: 3 },
//     { l: 2, w: 2, h: 2 }
//   ]))
console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
  ]))

  