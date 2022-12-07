function getGiftsToRefill(a1, a2, a3) {
    const refill = new Set()
    
    const verify = (mainArray, array2, array3) => {
      mainArray.forEach(gift => {
      if(array2.indexOf(gift) === -1 && array3.indexOf(gift) === -1)
        refill.add(gift)
      })
    }
    
    verify(a1, a2, a3)
    verify(a2, a1, a3)
    verify(a3, a2, a1)
    
    return [...refill.values()]
  }

//   console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))
  console.log(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']))
