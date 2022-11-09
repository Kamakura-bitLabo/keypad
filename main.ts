// 数桁の数字を検出する。
// 使い方
// 4　3　A　とキーパッドを押すと
// 返り値は43。
// ※終了文字は、
// 大文字で以下の文字を指定可
// A,、B、C、D、＃、＊
// 
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    x = Bit_Labo.キーパッドの値(AnalogPin.P2, "A")
    basic.clearScreen()
    basic.showNumber(x)
    basic.showIcon(IconNames.Yes)
})
// キーパッドで押した
// 1文字を検出する。
// 以下の数値が返り値。
// 0=0、1=1、、、9=9、
// A=10、B=11、、D=13
// ＃=14、＊=15
// null=16
// 
input.onButtonPressed(Button.B, function () {
    while (true) {
        y = Bit_Labo.キーパッドキー値(AnalogPin.P2)
        if (0 <= y && y <= 15) {
            basic.clearScreen()
            basic.showNumber(y)
            break;
        }
        basic.pause(100)
    }
    basic.showIcon(IconNames.Yes)
})
let y = 0
let x = 0
basic.showIcon(IconNames.Heart)
