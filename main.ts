function curtainUp () {
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 4; x++) {
            led.unplot(x, 4 - y)
        }
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    currentLevel = level
    level += -1
    level = Math.max(1, currentLevel)
    curtainUp()
})
function curtainDown () {
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y + 1)
        }
        basic.pause(500)
    }
}
radio.onReceivedString(function (receivedString) {
    if (name == "down") {
        curtainDown()
    } else if (name == "up") {
        curtainDown()
    }
})
input.onButtonPressed(Button.B, function () {
    currentLevel = level
    currentLevel += 1
    level = Math.min(4, currentLevel)
    curtainDown()
})
let currentLevel = 0
let level = 0
radio.setGroup(103)
level = 0
currentLevel = 0
for (let index = 0; index <= 4; index++) {
    led.plot(index, 0)
}
