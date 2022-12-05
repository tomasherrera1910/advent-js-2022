function fitsInOneBox(boxes) {
  return boxes
  .sort((a, b) => b.l - a.l)
  .every((box, i) => {
    const next = boxes[i+1] || {l:0,w:0,h:0}
    return (box.l > next.l && box.w > next.w && box.h > next.h)
  })
}
console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]))
console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
  ]))

  