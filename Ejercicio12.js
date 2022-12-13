function selectSleigh(distance, sleighs) {
    const filtered = 
    sleighs
    .filter(sleigh => {
      return sleigh.consumption * distance <= 20
      })
    .sort((a, b) => b.consumption - a.consumption)
    
    return filtered.length ? filtered[0].name : null
  }