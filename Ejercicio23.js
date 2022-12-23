function executeCommands(commands) {
  let res = [0, 0, 0, 0, 0, 0, 0, 0]
  const calculate = (result) => {
    if (result < 255 && result >= 0) return result
    else if (result > 255) {
      return result - 256
    } else if (result < 0) {
      return 255 + (result + 1)
    }
  }
  const commandsSwitch = (instr, values) => {
    switch (instr) {
      case "MOV": {
        const [first, second] = values.split(",")
        if (first.startsWith("V")) res[second.at(-1)] = res[first.at(-1)]
        else res[second.at(-1)] = Number(first)
        break
      }
      case "ADD": {
        const [first, second] = values.split(",")
        res[first.at(-1)] = calculate(res[first.at(-1)] + res[second.at(-1)])
        break
      }
      case "DEC": {
        res[values.at(-1)] = calculate(res[values.at(-1)] - 1)
        break
      }
      case "INC": {
        res[values.at(-1)] = calculate(res[values.at(-1)] + 1)
        break
      }
      default: {
        break
      }
    }
  }
  commands.forEach((com, index) => {
    let [instr, values] = com.split(" ")
    if (instr === "JMP" && res[0] !== 0) {
      while (res[0] > 0) {
        commands.slice(values, index).forEach((c) => {
          let [i, v] = c.split(" ")
          commandsSwitch(i, v)
        })
      }
    } else commandsSwitch(instr, values)
  })
  return res
}
