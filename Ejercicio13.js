// CON ESTE CÓDIGO SE OBTIENE 300 PERO ME GUSTA MÁS EL OTRO
// function getFilesToBackup(lastBackup, changes) {
//     const array = 
//     changes.filter(
//       ([_, timestamp]) => timestamp > lastBackup
//     )
//      return [...new Set(array.map(([id, _t]) => id)
//     .sort((a,b) => a - b))]
//   }

function getFilesToBackup(lastBackup, changes) {
    const array = changes.filter(
      ([_id, timestamp]) => timestamp > lastBackup)
      .map(([id, _t]) => id)
      .sort((a,b) => a - b)

    return [...new Set(array)]
  }