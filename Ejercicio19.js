function sortToys(toys, positions) {
  const indexMin = Math.min(...positions)
  let toysSorted = []
  positions.forEach((p, i) => {
    toysSorted[p - indexMin] = toys[i]
  })
  return toysSorted
}
