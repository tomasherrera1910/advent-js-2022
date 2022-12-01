function wrapping(gifts) {
    return gifts.map(gift => {
      return '*'.repeat(gift.length + 2) + '\n' + `*${gift}*` + '\n' + '*'.repeat(gift.length + 2) 
    })
  }
  