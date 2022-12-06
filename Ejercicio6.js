function createCube(size){
    let upCube = ''
    let downCube = ''
    let down = size
    for(let i=1; i< (size+1); i++){
      upCube += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n'
      if(i === size)
      downCube += ' '.repeat(i-1) + '\\/'.repeat(down) + '_/'.repeat(size)
      else
      downCube += ' '.repeat(i-1) + '\\/'.repeat(down) + '_/'.repeat(size) + '\n'
      down--
    }
      return upCube + downCube
  }
console.log(createCube(3))