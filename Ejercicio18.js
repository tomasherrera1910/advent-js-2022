function dryNumber(dry, numbers) {
  const numbersDry = []
  for (let i = 1; i <= numbers; i++) {
    if (i.toString().includes(dry)) numbersDry.push(i)
  }
  return numbersDry
}
