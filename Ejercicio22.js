function checkStepNumbers(systemNames, stepNumbers) {
  return stepNumbers.every((n, i) => {
    const index = systemNames.slice(i + 1).indexOf(systemNames[i])
    return index === -1 || n < stepNumbers[index + (i + 1)]
  })
}
