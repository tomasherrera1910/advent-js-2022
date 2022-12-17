function fixLetter(letter) {
  return letter
    .trim()
    .replace(/([.,!])(.*)/g, "$1 $2") //Separate after ,
    .replace(/([.,?!\s])(?=\1)/g, "") //Let only one sign
    .replace(/\s+([.,?!])/g, "$1") //Remove extra spaces
    .replace(/santa claus/gi, "Santa Claus") //santa claus -> Santa Claus
    .replace(/\b([.?!] \w)|(^\w)/g, (n) => n.toUpperCase()) //Uppercase after .?!
    .replace(/^.*\w$/, (n) => n + ".") //If sentence finish with a letter put a .
}

// ESTÁ FUE MI SOLUCION SIN RegEx aunque no pasaba los test secretos no encontré el corner case en el que falla
// function fixLetter(letter) {
//   const letterArray = letter.trim().split("")
//   const signs = ["?", "!", ".", ","]

//   let fixSigns = letterArray.map((v, i) => {
//     const last = letterArray[i - 1]
//     const next = letterArray[i + 1]
//     if (signs.includes(v) && signs.includes(last)) return " "
//     if (signs.includes(next) && v === " ") return ""
//     else return v
//   })
//   if (!signs.includes(fixSigns.at(-1))) fixSigns.push(".")

//   let cleanSpaces = fixSigns
//     .map((v, i) => {
//       const last = fixSigns[i - 1]
//       const next = fixSigns[i + 1]
//       if (v === " " && last === " ") return ""
//       if (i !== fixSigns.length - 1 && signs.includes(v) && next !== " ")
//         return v + " "
//       else return v
//     })
//     .join("")
//     .split("")

//   let fixUppercases = cleanSpaces
//     .map((v, i) => {
//       const last = cleanSpaces[i - 2]
//       if (signs.includes(last) && last !== ",") {
//         return v.toUpperCase()
//       } else return v
//     })
//     .join("")
//   fixUppercases = fixUppercases.replace(
//     fixUppercases.at(0),
//     fixUppercases.at(0).toUpperCase()
//   )
//   fixUppercases = fixUppercases.replaceAll("santa", "Santa")
//   fixUppercases = fixUppercases.replaceAll("claus", "Claus")

//   const letterCorrected = fixUppercases
//   return letterCorrected
// }
