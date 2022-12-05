function fitsInOneBoxTS(boxes: Array<Record<string, number>>): boolean {
    return boxes
        .sort((a, b) => b.l - a.l)
        .every((box, i) => {
            const next = boxes[i + 1] || { l: 0, w: 0, h: 0 }
            return (box.l > next.l && box.w > next.w && box.h > next.h)
        })
}