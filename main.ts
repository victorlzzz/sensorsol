enum RadioMessage {
    message1 = 49434,
    sol = 8468,
    solO = 62579
}
basic.forever(function () {
    if (envirobit.getPressure() >= 0) {
        radio.sendMessage(RadioMessage.sol)
    } else {
        radio.sendMessage(RadioMessage.solO)
    }
})
basic.forever(function () {
    if (envirobit.getPressure() >= 0) {
        radio.sendMessage(RadioMessage.sol)
    } else {
        radio.sendMessage(RadioMessage.solO)
    }
})
basic.forever(function () {
    if (envirobit.getPressure() >= 0) {
        radio.sendMessage(RadioMessage.sol)
    } else {
        radio.sendMessage(RadioMessage.solO)
    }
})
basic.forever(function () {
    basic.showNumber(envirobit.getPressure())
    basic.pause(5000)
    basic.showNumber(envirobit.getTemperature())
})
basic.forever(function () {
    if (envirobit.getPressure() >= 0) {
        radio.sendMessage(RadioMessage.sol)
    } else {
        radio.sendMessage(RadioMessage.solO)
    }
})
