function printTable(gifts) {
  const nameLength = Math.max(
    ...gifts.map(({ name }) => name.length),
    "Gift".length
  )
  const quantityLength = Math.max(
    ...gifts.map(({ quantity }) => String(quantity).length),
    "Quantity".length
  )

  let table =
    "+".repeat(nameLength + quantityLength + 7) +
    "\n" +
    "| " +
    "Gift".padEnd(nameLength, " ") +
    " | " +
    "Quantity".padEnd(quantityLength, " ") +
    " |\n" +
    "| " +
    "-".repeat(nameLength) +
    " | " +
    "-".repeat(quantityLength) +
    " |\n"
  gifts.forEach(({ name, quantity }) => {
    table +=
      "| " +
      name.padEnd(nameLength, " ") +
      " | " +
      String(quantity).padEnd(quantityLength, " ") +
      " |\n"
  })

  table += "*".repeat(nameLength + quantityLength + 7)
  return table
}
console.log(
  printTable([
    { name: "PlayStation 5", quantity: 9234782374892 },
    { name: "Book Learn Web Dev", quantity: 23531 },
  ])
)
