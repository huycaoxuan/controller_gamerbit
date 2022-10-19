gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    radio.sendNumber(5)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    radio.sendNumber(6)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendNumber(3)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    radio.sendNumber(0)
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
})
gamerbit.onEvent(GamerBitPin.P2, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendNumber(4)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    radio.sendNumber(1)
})
basic.showIcon(IconNames.Yes)
