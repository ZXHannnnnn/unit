input.onButtonPressed(Button.A, function () {
    music.playMelody("C D E C G E D G ", 120)
})
pins.setAudioPin(AnalogPin.P2)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        music.playMelody("C5 G G A E E - - ", 120)
    }
})
