function getFilesToBackupTS(lastBackup: number, changes: Array<number[]>): number[] {
    const array = changes.filter(
        ([_id, timestamp]) => timestamp > lastBackup)
        .map(([id, _t]) => id)
        .sort((a, b) => a - b)

    return [...new Set(array)]
}