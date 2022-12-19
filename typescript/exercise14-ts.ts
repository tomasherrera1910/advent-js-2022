function getOptimalPathTS(path: Array<number[]>): number {
    return path
        .reduceRight((acc, curr) => {
    return curr
        .map((num, i) => {
            return num + Math.min(acc[i], acc[i + 1])
        })
})[0]
}

//Solución por WhoKnows, me parece muy buena y tuve que poner unos cuantos logs para entenderla por completo 😂