function createCubeTS(size: number): string {
    let upCube: string = ''
    let downCube: string = ''
    for (let i = 1; i < (size + 1); i++) {
        upCube += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n'
        downCube += ' '.repeat(i - 1) + '\\/'.repeat(size + 1 - i) + '_/'.repeat(size) + '\n'
    }
    return upCube + downCube.slice(0, downCube.length - 1)
}