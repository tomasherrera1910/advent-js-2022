function countTime(leds) {
    const ledsNotOn = leds.join('').split('1')
    const firstAndLastLength = 
    ledsNotOn[0].length + ledsNotOn[ledsNotOn.length - 1].length 
    return Math.max(
        ...ledsNotOn.map((e) => e.length), firstAndLastLength
    ) * 7
}