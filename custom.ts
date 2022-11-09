
/**
* このファイルを使って、独自の関数やブロックを定義してください。
* 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
*/

/**
 * Custom blocks
 */
//% color="#0000ff" icon="\uf0a4"
namespace Bit_Labo {

    /**
     * キーパッド
     */
    //% group="キーパッド"
    export function readKeyValue(_keyPad: AnalogPin): string {
        let _KeyStg: string = ""
        let _keyAnalog: number = 0
        _keyAnalog = pins.analogReadPin(_keyPad)
        if (_keyAnalog < 118) {
            _KeyStg = "1"
        } else if (_keyAnalog < 264) {
            _KeyStg = "2"
        } else if (_keyAnalog < 372) {
            _KeyStg = "3"
        } else if (_keyAnalog < 447) {
            _KeyStg = "A"
        } else if (_keyAnalog < 503) {
            _KeyStg = "4"
        } else if (_keyAnalog < 555) {
            _KeyStg = "5"
        } else if (_keyAnalog < 598) {
            _KeyStg = "6"
        } else if (_keyAnalog < 630) {
            _KeyStg = "B"
        } else if (_keyAnalog < 657) {
            _KeyStg = "7"
        } else if (_keyAnalog < 683) {
            _KeyStg = "8"
        } else if (_keyAnalog < 707) {
            _KeyStg = "9"
        } else if (_keyAnalog < 725) {
            _KeyStg = "C"
        } else if (_keyAnalog < 741) {
            _KeyStg = "*"
        } else if (_keyAnalog < 757) {
            _KeyStg = "0"
        } else if (_keyAnalog < 771) {
            _KeyStg = "#"
        } else if (_keyAnalog < 999) {
            _KeyStg = "D"
        } else {
            _KeyStg = ""
        }
        if (_KeyStg != "") {
            return _KeyStg
        } else {
            return ""
        }
    }
    //% blockId="キーパッドの値" block="キーパッド 入力数値 端子 %_keypad 終了文字 %_breakStg"
    //% _keypad.defl=AnalogPin.P2
    //% _breakStg.defl="A"
    //% weight=60
    //% group="キーパッド"
    export function キーパッドの値(_keypad: AnalogPin = AnalogPin.P2, _breakStg: string): number {
        let _stg: string = ""
        let _wkStg: string = ""

        while (true) {
            _stg = readKeyValue(_keypad)
            basic.pause(10)

            basic.showString(_stg)
            basic.clearScreen()
            if (_stg == _breakStg) { //break
                break
            } else if (0 <= parseFloat(_stg) && parseFloat(_stg) <= 9) { // numeric
                _wkStg = "" + _wkStg + _stg
            }
        }
        if (_wkStg == "") {
            return -1
        } else {
            return parseFloat(_wkStg)
        }
    }

    //% blockId="キーパッドの値2" block="キーパッド キー値 端子 %_keypad"
    //% _keypad.defl=AnalogPin.P2
    //% weight=50
    //% group="キーパッド"
    export function キーパッドキー値(_keypad: AnalogPin = AnalogPin.P2): number {
        let _num: number = 16
        let _wkStg: string = ""
        let _asciiCode:number = 0

        _wkStg = readKeyValue(_keypad)
        basic.pause(20)
        
        if (_wkStg != "") {
            _num = parseFloat(_wkStg)
            // _asciiCode = _wkStg.charCodeAt(0)

            if (0 <= _num && _num <= 9) { // numeric
                _num = parseFloat(_wkStg)
            } else {
                _asciiCode = _wkStg.charCodeAt(0)
                // basic.showNumber(_asciiCode) // ***DEBUG***
                
                if (_asciiCode == 35) { // string # : 35 -> 14
                    _num = 14
                } else if (_asciiCode == 42) { // string * : 42 -> 15
                    _num = 15
                } else {
                    _num = _asciiCode - 55 // string A - D
                }
            }
            // basic.showNumber(_num) // ***DEBUG***
            // basic.clearScreen() // ***DEBUG***
            return _num

        } else {
            return 16
        }
    }
}