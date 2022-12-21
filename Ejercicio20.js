// SOLUTION BY ZJAAAL
function howManyReindeers(reindeerTypes, gifts) {
  const typesSort = reindeerTypes.sort(
    (a, b) => b.weightCapacity - a.weightCapacity
  )
  return gifts.map(({ country, weight }) => {
    let currentMax = weight
    let weights = typesSort.filter((x) => x.weightCapacity < currentMax)
    let currentCapacity = weights.reduce(
      (acc, curr) => (acc += curr.weightCapacity),
      0
    )
    let reindeers = weights.map(({ type, weightCapacity }) => {
      let num = Math.floor(currentMax / currentCapacity)
      currentCapacity -= weightCapacity
      currentMax -= num * weightCapacity
      return { type, num }
    })
    return { country, reindeers }
  })
}

// ESTÁ ERA MI SOLUCIÓN PERO FALLA EN LOS TEST SECRETOS
// function howManyReindeers(reindeerTypes, gifts) {
//   return gifts.map(({ country, weight }) => {
//     let currentWeight = weight
//     const reindeers = reindeerTypes
//       .sort((a, b) => b.weightCapacity - a.weightCapacity)
//       .reduce((acc, current, i) => {
//         const reindeersRest = reindeerTypes.length - (i + 1)
//         if (reindeersRest >= 0) {
//           if (current.weightCapacity - currentWeight <= weight) {
//             const num =
//               Math.round(currentWeight / current.weightCapacity) -
//                 reindeersRest || 1
//             if (num > 0) {
//               currentWeight -= current.weightCapacity * num
//               return acc.concat({
//                 type: current.type,
//                 num,
//               })
//             }
//           }
//         }
//         return acc
//       }, [])

//     return {
//       country,
//       reindeers,
//     }
//   })
// }
