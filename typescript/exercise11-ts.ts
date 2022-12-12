function getCompletedTS(part: string, total: string): string {
    const formatTime = (time) => {
        const [h, m, s] = time.split(':');
        return (Number(h) * 3600) + (Number(m) * 60) + Number(s)
    }
    const completed = formatTime(part)
    const totalTime = formatTime(total)
    let MCD_min = completed
    let MCD_max = totalTime
    while (MCD_max !== 0) {
        let aux = MCD_max
        MCD_max = MCD_min % MCD_max
        MCD_min = aux
    }

    return `${completed / MCD_min}/${totalTime / MCD_min}`
}