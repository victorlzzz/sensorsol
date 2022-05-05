enum RadioMessage {
    message1 = 49434,
    sol = 8468,
    solO = 62579,
    nube = 62918,
    nubeO = 47874,
    solnube = 33757,
    solnubeO = 1891
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
        radio.sendMessage(RadioMessage.nube)
    } else {
        radio.sendMessage(RadioMessage.nubeO)
    }
})
basic.forever(function () {
    if (envirobit.getPressure() >= 0) {
        radio.sendMessage(RadioMessage.solnube)
    } else {
        radio.sendMessage(RadioMessage.solnubeO)
    }
})
basic.forever(function () {
    basic.showNumber(envirobit.getPressure())
    basic.pause(5000)
    basic.showNumber(envirobit.getTemperature())
    basic.pause(5000)
})
