function createCube(size){
    const upFace = '/\\'
    const middleUpFace = '_\\'
    const downFace = '\\/'
    const middleDownFace = '_/'
    let upCube = ''
    let downCube = ''
    let down = size
    for(let i=1; i< (size+1); i++){
      upCube += ' '.repeat(size - i) + upFace.repeat(i) + middleUpFace.repeat(size) + '\n'
      if(i === size)
      downCube += ' '.repeat(i-1) + downFace.repeat(down) + middleDownFace.repeat(size)
      else
      downCube += ' '.repeat(i-1) + downFace.repeat(down) + middleDownFace.repeat(size) + '\n'
      down--
    }
      return upCube + downCube
  }
console.log(createCube(3))