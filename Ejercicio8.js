function checkPart(part) {
    const reversePart = (part) => Array.from(part).reverse().join('') === part
    return Array.from(part).some((_letter, i) => {
        const partWithoutIndex = part.slice(0,i) + part.slice(i+1)
        const isPalindrome = reversePart(partWithoutIndex)
        return isPalindrome
    })
  }
//   console.log(checkPart("zzzoozznz"))
 