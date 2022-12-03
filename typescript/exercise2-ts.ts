function countHours(year: number, holidays: string[]): number {
    return holidays.reduce((acc, holiday) => {
        const day = new Date(`${holiday}/${year}`).getDay()
        if (day !== 0 && day !== 6) acc += 2
        return acc
    }, 0)
}


