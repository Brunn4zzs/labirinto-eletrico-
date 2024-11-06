input.onButtonPressed(Button.A, function () {
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter = 0
})
function sinalizar () {
    basic.showLeds(`
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        `)
}
let counter = 0
counter = pins.analogReadPin(AnalogPin.P0)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        sinalizar()
        counter += 1
        music.ringTone(880)
        basic.pause(8)
        music.stopAllSounds()
    }
})
